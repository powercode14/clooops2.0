import icoCalendarMonthImg from 'assets/images/ico_calendar_month.png';
import icoCalendarMonthBlueImg from 'assets/images/ico_calendar_month_blue.png';
import notFoundImg from 'assets/images/not_found.png';
import useStore from 'auth/store';
import { getAPI, multiAPI } from 'common/clooOpsApis';
import NivoBarChart from 'component/nivoCharts/NivoBarChart';
import NumberFormatter from 'component/NumberFormatter';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import PageHead from '../PageHead';
import ReactGoogleChart from 'react-google-charts';
import axios from 'axios';
import NivoPieChart from 'component/nivoCharts/NivoPieChart';

const MonthlyReportDashboard = () => {
  const { subs, custId } = useStore();
  const [costData, setCostData] = useState([]);
  const [resData, setResData] = useState([]);
  const [regionData, setRegionData] = useState({
    regiList: [],
    subscost: [],
    subsasset: [],
  });
  const [currentDate, setCurrentDate] = useState(moment().subtract(1, 'M'));
  const beforeDate = currentDate.clone().subtract(1, 'M');
  const [beforeCostData, currentCostData] = costData;
  const themeColor = '#682A7D';
  const subsChartData =
    costData.length > 1 &&
    costData[costData.length - 1].subscriptions.map((subscription) => {
      const target = subs.find(
        (s) => s.id.toLowerCase() === subscription.subscriptionId.toLowerCase(),
      );
      return {
        subsName: target.friendlyName,
        showSum: subscription.showSum,
        showSumColor: themeColor,
      };
    });

  const handleDateChanged = (param) => {
    if (param === '+') {
      setCurrentDate((prev) => prev.clone().add(1, 'M'));
    }
    if (param === '-') {
      setCurrentDate((prev) => prev.clone().subtract(1, 'M'));
    }
  };

  const getCostData = () => {
    getAPI(`/csp-billing/${custId}/monthly-costs`, {
      periods: [beforeDate.format('YYYYMM'), currentDate.format('YYYYMM')],
    }).then((data) => {
      setCostData(data.costs);
    });
  };

  const getResData = () => {
    getAPI(`/customers/${custId}/resources`, {
      period: currentDate.format('YYYYMM'),
    }).then((data) => {
      setResData(data.resources);
    });
  };

  const getRegionData = async () => {
    const date = currentDate.format('YYYYMM');
    await multiAPI([
      {
        path: `/csp-billing/${custId}/monthly-costs`,
        params: { periods: [date] },
      },
      {
        path: `/customers/${custId}/virtual-machines`,
        params: { period: date },
      },
      { path: `/customers/${custId}/app-services`, params: { period: date } },
      { path: `/customers/${custId}/disks`, params: { period: date } },
      {
        path: `/customers/${custId}/storage-accounts`,
        params: { period: date },
      },
      { path: `/customers/${custId}/vpns`, params: { period: date } },
      { path: `/customers/${custId}/load-balancers`, params: { period: date } },
      {
        path: `/customers/${custId}/express-router-circuits`,
        params: { period: date },
      },
      { path: `/customers/${custId}/gateways`, params: { period: date } },
      { path: `/customers/${custId}/databases`, params: { period: date } },
      { path: `/regions/azure` },
      { path: `/customers/${custId}/subscriptions` },
    ]).then(
      axios.spread((...res) => {
        const regionList = [];
        const subList = [];
        res[1].data.virtualMachines.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        res[2].data.apps.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        res[3].data.disks.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        res[4].data.storageAccounts.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        res[5].data.vpns.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        res[6].data.loadBalancers.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        res[7].data.expressRouterCircuits.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        res[8].data.gateways.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        res[9].data.databases.filter((c) => {
          regionList.push(c.location);
          subList.push(c.subscriptionId);
        });
        const regionLists = Array.from(new Set(regionList));
        const subLists = Array.from(new Set(subList));
        const result = {};
        const resultSubs = {};

        if (regionList.length > 0) {
          regionList.forEach((x) => {
            result[x] = (result[x] || 0) + 1;
          });
        }
        if (subList.length > 0) {
          subList.forEach((x) => {
            resultSubs[x] = (resultSubs[x] || 0) + 1;
          });
        }

        const geoData = regionLists.map((p) => {
          const azRegion = res[10].data.regions.filter((reg) => reg.name === p);
          var regCnt = 0;
          Object.keys(result).map((k, i) => {
            if (k === azRegion[0]?.name) {
              regCnt = result[k];
            }
          });
          return {
            key: p,
            name: p,
            total: regCnt,
            regionDetail: azRegion[0],
          };
        });
        const subsData = subLists.map((p) => {
          let astSubs = res[11].data.subscriptions.filter(
            (reg) => reg.id?.toUpperCase() === p.toUpperCase(),
          );
          var subCnt = 0;
          Object.keys(resultSubs).map((k, i) => {
            if (k === astSubs[0]?.id?.toUpperCase()) {
              subCnt = resultSubs[k];
            }
          });
          if (astSubs.length == 0) {
            var enrolSubs = res[11].data.subscriptions.filter(
              (reg) => reg?.entitlementId?.toUpperCase() === p.toUpperCase(),
            );
            Object.keys(resultSubs).map((k, i) => {
              if (k === enrolSubs[0]?.entitlementId?.toUpperCase()) {
                subCnt = resultSubs[k];
              }
            });
            return {
              key: p,
              name: p,
              total: subCnt,
              subsDetail: enrolSubs[0],
            };
          } else {
            return {
              key: p,
              name: p,
              total: subCnt,
              subsDetail: astSubs[0],
            };
          }
        });
        const regdata = geoData.map((c) => [
          parseFloat(c.regionDetail?.metadata.latitude),
          parseFloat(c.regionDetail?.metadata.longitude),
          c.name,
          c.total,
        ]);
        const subsasset = subsData.map(({ subsDetail, total }) => ({
          id: subsDetail.friendlyName,
          label: subsDetail.friendlyName,
          value: total,
        }));

        const regiList = [['Lat', 'Lon', 'Country', 'value']];

        if (regdata.length > 0) {
          regdata.map((data) => {
            regiList.push(data);
          });
        } else {
          regiList.push([0, 0, '', 0]);
        }
        const subscost = [['subs', 'cost']];

        const costByMonth = {};
        const newArr = [];
        res[0].data.costs.forEach((c) => {
          c.subscriptions.forEach((subCost, i) => {
            if (costByMonth[subCost.subscriptionId] == undefined) {
              costByMonth[subCost.subscriptionId] = {};
              const { subscriptions = [] } = res[11].data;
              costByMonth[subCost.subscriptionId]['subscriptionId'] =
                subscriptions.find(
                  (subs) =>
                    subs.entitlementId === subCost.subscriptionId.toUpperCase(),
                )?.entitlementId;
            }
            if (
              costByMonth[subCost.subscriptionId][
                subCost.subscriptionId.toUpperCase()
              ] != undefined
            ) {
              costByMonth[subCost.subscriptionId][
                subCost.subscriptionId.toUpperCase()
              ] =
                costByMonth[subCost.subscriptionId][
                  subCost.subscriptionId.toUpperCase()
                ] + subCost.showSum;
            } else {
              costByMonth[subCost.subscriptionId][
                subCost.subscriptionId.toUpperCase()
              ] = subCost.showSum;
            }
          });
        });
        Object.keys(costByMonth).map((p, i) => {
          const subsValue = Object.values(costByMonth);
          const azSubs = res[11].data.subscriptions.find(
            (reg) => reg.id?.toUpperCase() === p?.toUpperCase(),
          );
          if (azSubs == undefined) {
            const enrolSubsNm = res[11].data.subscriptions.filter(
              (reg) => reg?.entitlementId?.toUpperCase() === p?.toUpperCase(),
            );
            subscost.push([
              enrolSubsNm?.friendlyName,
              subsValue[i][enrolSubsNm[i]?.entitlementId],
            ]);
          } else {
            subscost.push([azSubs?.friendlyName, subsValue[i][azSubs.id]]);
          }
        });
        setRegionData({ regiList, subscost, subsasset });
      }),
    );
  };

  useEffect(() => {
    getCostData();
    getResData();
    getRegionData();
  }, [custId, currentDate]);

  return (
    <Fragment>
      <PageHead date={currentDate} handleDateChanged={handleDateChanged} />
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <div className="card small">
                <div className="card-body">
                  <div className="count-wrap">
                    <div className="left">
                      <img src={icoCalendarMonthImg} />
                    </div>
                    <div className="right">
                      <label className="h6 ft-primary">
                        {currentDate.format('M')}월
                      </label>
                      <h3 className="ft-600">
                        <NumberFormatter
                          value={currentCostData?.showSum ?? 0}
                          suffix="원"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card tiny">
                <div className="card-body">
                  <div className="count-wrap">
                    <div className="left">
                      <h4>총 리소스 개수</h4>
                    </div>
                    <div className="right">
                      <h4 className="ft-600 ft-primary">{resData.length}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card large">
                <div className="card-head">
                  <h4>구독 리스트</h4>
                </div>
                <div className="card-body" data-simplebar>
                  <div className="list-wrap">
                    <ul>
                      {subs &&
                        Array.isArray(subs) &&
                        subs.map(({ friendlyName, name, offerId, id }) => {
                          const data = `${friendlyName ?? name}${
                            offerId ? `[${offerId}]` : ''
                          }(${id})`;
                          return (
                            <li key={id} className="ellipsis" title={data}>
                              {data}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card big">
                <div className="card-head">
                  <h4>지역별 자산</h4>
                </div>
                <div className="card-body">
                  {regionData.regiList.length > 0 ? (
                    <div className="chart-widget-wrap">
                      <ReactGoogleChart
                        width={'680px'}
                        height={'335px'}
                        chartType="GeoChart"
                        data={
                          regionData.regiList.length > 0
                            ? regionData.regiList
                            : [0, 0, '', 0]
                        }
                        options={{
                          // backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 },
                          colorAxis: { colors: ['#682A7D', '#682A7D'] },
                          legend: 'none',
                          datalessRegionColor: '#F5F0E7',
                          displayMode: 'markers',
                          // resolution: 'countries',
                          // width:600,
                          // height:400,
                          // mapsApiKey:"AIzaSyB8UCrHn2OUuplQMbnMcnc93AKBG51ImQk",
                          // tooltip: {textStyle: {color: '#444444'}, trigger:'focus'}
                        }}
                        mapsApiKey="AIzaSyB8UCrHn2OUuplQMbnMcnc93AKBG51ImQk"
                      />
                    </div>
                  ) : (
                    <div className="not-found" style={{ display: 'none' }}>
                      <img src={notFoundImg} />
                      <h3>No data found</h3>
                      <h6>This report has no data.</h6>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <div className="card small">
                <div className="card-body">
                  <div className="count-wrap">
                    <div className="left">
                      <img src={icoCalendarMonthBlueImg} />
                    </div>
                    <div className="right">
                      <label className="h6 ft-blue">
                        {beforeDate.format('M')}월
                      </label>
                      <h3 className="ft-600">
                        <NumberFormatter
                          value={beforeCostData?.showSum ?? 0}
                          suffix="원"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card big">
                <div className="card-head">
                  <h4>구독별 비용</h4>
                </div>
                <div className="card-body">
                  {currentCostData ? (
                    <div className="chart-widget-wrap">
                      <NivoBarChart
                        data={subsChartData}
                        keys={['showSum']}
                        indexBy="subsName"
                      />
                    </div>
                  ) : (
                    <div className="not-found">
                      <img src={notFoundImg} />
                      <h3>No data found</h3>
                      <h6>This report has no data.</h6>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card big">
                <div className="card-head">
                  <h4>구독별 자산</h4>
                </div>
                {regionData.subsasset.length > 0 ? (
                  <div className="card-body">
                    <NivoPieChart data={regionData.subsasset} />
                  </div>
                ) : (
                  <div className="not-found" style={{ display: 'none' }}>
                    <img src={notFoundImg} />
                    <h3>No data found</h3>
                    <h6>This report has no data.</h6>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MonthlyReportDashboard;
