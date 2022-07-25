import { Fragment, useState } from 'react';
import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [open, setOpen] = useState([]);

  const handleMeunOpenChanged = (key) => {
    setOpen((prev) =>
      prev.includes(key) ? prev.filter((p) => p !== key) : [...prev, key],
    );
  };

  const pageMove = (url) => navigate(url);

  const isSelected = (mainUrl, subUrl) =>
    (subUrl && pathname.includes(subUrl)) || (!subUrl && pathname === mainUrl);

  return (
    <div id="leftmenu">
      <div className="leftmenu-inner" data-simplebar>
        <div className="static-area">
          <ul className="tree-view">
            {menuArr.map((menuItem) => {
              return (
                <Fragment key={menuItem.url}>
                  <li className="mn-item">
                    <a
                      className={clsx('mn-link', {
                        selected: pathname.includes(menuItem.url),
                        open: open.includes(menuItem.url),
                      })}
                      onClick={() => handleMeunOpenChanged(menuItem.url)}
                    >
                      <span className="mn-icon">
                        <i className={menuItem.icon} />
                      </span>
                      <span className="mn-name">{menuItem.title}</span>
                      {Array.isArray(menuItem.subMenu) && (
                        <span className="mn-collapse">
                          <i className="icon-arrow-down" />
                        </span>
                      )}
                    </a>
                  </li>
                  {Array.isArray(menuItem.subMenu) && (
                    <ul
                      className={clsx('nested', {
                        active: open.includes(menuItem.url),
                      })}
                    >
                      {menuItem.subMenu.map((subItem) => {
                        return (
                          <li key={subItem.url} className="mn-item">
                            <a
                              href="#"
                              className={clsx('mn-link', {
                                selected: isSelected(menuItem.url, subItem.url),
                              })}
                              onClick={() =>
                                pageMove(`/${menuItem.url}/${subItem.url}`)
                              }
                            >
                              <span className="mn-name">{subItem.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer">
        <p className="ft-600 ft-small">Copyright ⓒ 2022</p>
        <p className="ft-tiny ft-gray">Cloocus Co. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export const menuArr = [
  {
    title: 'Service Portal Home',
    url: 'home',
    icon: 'icon-home',
    move: true,
  },
  {
    title: 'Monthly Report',
    url: 'monthlyreport',
    icon: 'icon-monthly',
    subMenu: [
      { title: 'Dashboard', url: 'dashboard' },
      // { title: 'Asset status', url: 'assetstatus' },
      // { title: 'Cost by asset', url: 'costbyasset' },
      // { title: 'VM', url: '/vm' },
      // { title: 'App Service', url: 'appservice' },
      {
        title: 'Storage Account',
        url: 'storageaccount',
      },
      // { title: 'Network', url: 'network' },
      // { title: 'Database', url: 'database' },
      // { title: 'Virtual WAN', url: 'virtualwan' },
      // { title: 'Automation Check', url: 'automation' },
    ],
  },
  /* {
    title: "SR Management",
    icon: <SupportAgentIcon />,
    url: "/servicerequest",
    move: false,
    subMenu: [
      { title: "Service Request 추가", url: "/srupdate" },
      { title: "Service Request 목록", url: "/srlist" },
      { title: "변경이력", url: "/changehistory" },
      { title: "Problem 목록", url: "/problemlist" },
    ],
  },
  {
    title: "Billing Management",
    icon: <PriceChangeIcon />,
    url: "/billingmanagement",
    move: false,
    subMenu: [
      { title: "Dashboard", url: "" },
      { title: "최근 예상 비용", url: "/recentbill" },
      { title: "청구 내역", url: "/bill", ncp: true },
      { title: "일별 비용 현황", url: "/dailycost" },
      { title: "월별 비용 현황", url: "/monthlycost", ncp: true },
      { title: "미터별 월간 비용", url: "/monthlymetercost" },
      { title: "리소스별 월간 비용", url: "/monthlyresourcecost", ncp: true },
      { title: "제품별 월간 비용", url: "/monthlyproductcost" },
      { title: "지역별 월간 비용", url: "/monthlyregioncost", ncp: true },
      {
        title: "서비스별 월간 비용",
        url: "/monthlyservicecost",
      },
      {
        title: "서비스별 일간 비용",
        url: "/dailyservicecost",
      },
      {
        title: "서비스별 월간 사용량",
        url: "/monthlyserviceusage",
      },
      {
        title: "리소스 그룹별 비용",
        url: "/resourcegroupcost",
      },
      {
        title: "Reserved compute 현황",
        url: "/reservedinstance",
      },
      {
        title: "Managed Service 현황",
        url: "/managedservice",
      },
    ],
  }, */
];

export default Menu;
