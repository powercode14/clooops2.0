import logoImg from 'assets/images/logo.png';
import useStore from 'auth/store';
import { useState, useEffect } from 'react';
import CloudSelect from './CloudSelect';
import { getAPI } from 'common/clooOpsApis';

const Top = () => {
  const {
    profile,
    custId,
    subsId,
    subsArr,
    selectCust,
    selectSubs,
    subs,
    setSubs,
  } = useStore();
  const { lastName, firstName } = profile;
  const customers = profile?.customers
    ?.map(({ id, companyProfile, cloudTypeCd }) => ({
      id,
      cloudTypeCd,
      companyName: companyProfile?.companyName,
    }))
    .sort((a, b) => (a.companyName > b.companyName ? 1 : -1));
  const [subsOpen, setSubsOpen] = useState(false);
  const [subsOptions, setSubsOptions] = useState([]);
  const loading = subsOpen && subsOptions.length === 0;

  const getSubsArr = async () => {
    await getAPI(`/customers/${custId}/subscriptions`).then((data) =>
      setSubs(
        subsArr && subsArr.length > 0
          ? data.subscriptions.filter(({ entitlementId }) =>
              subsArr.includes(entitlementId),
            )
          : data.subscriptions,
      ),
    );
  };

  useEffect(() => {
    if (custId) {
      getSubsArr();
    }
    /* let active = true;

    if (!loading) {
      return undefined;
    }
    (async () => {
      
      if (active) {
        setSubsOptions(
          subsArr && subsArr.length > 0
            ? subscriptions.filter(({ entitlementId }) =>
                subsArr.includes(entitlementId),
              )
            : subscriptions,
        );
      }
    })();

    return () => {
      active = false;
    }; */
  }, [custId]);

  const handleCustChanged = (e) => {
    const targetCust = customers.find(({ id }) => id === e.target.value);
    selectCust(targetCust);
    selectSubs();
  };

  const handleSubsChanged = (e) => {
    const targetSubs = subs.find(
      ({ entitlementId }) => entitlementId === e.target.value,
    );
    selectSubs(targetSubs);
  };

  return (
    <div id="gnb">
      <div className="left-gnb">
        <button className="logo">
          <img src={logoImg} alt="logo" />
        </button>
      </div>
      <div className="center-gnb">
        <p className="ft-darkgray">
          <span>{lastName + firstName}</span> 님 환영합니다.
        </p>
        <h5>
          이번달 청구일은 <span className="ft-primary">12</span>일 입니다.
        </h5>
      </div>
      <div className="right-gnb">
        <div className="gnb-search-wrap">
          <CloudSelect />
          <div className="item company">
            <select
              className="fm-control round"
              value={custId}
              onChange={handleCustChanged}
            >
              {customers &&
                custId &&
                customers.map((customer, i) => (
                  <option key={i} value={customer.id}>
                    {customer.companyName}
                  </option>
                ))}
            </select>
          </div>
          <div className="item subscription">
            <select
              className="fm-control round"
              value={subsId}
              onChange={handleSubsChanged}
            >
              <option selected value={''}>
                구독 전체
              </option>
              {subs &&
                Array.isArray(subs) &&
                subs.map((option, i) => (
                  <option key={i} value={option.entitlementId}>
                    {`${option?.friendlyName ?? option?.name}${
                      option?.offerId ? `[${option.offerId}]` : ''
                    }`}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="item">
          <button className="btn-gnb gnb-layer">
            <i className="icon-bookmark" />
          </button>
          <div className="gnb-container" id="gnbBookmark">
            <div className="inner">
              <div className="header-ly">
                <div className="left">
                  <h6 className="title">북마크 목록</h6>
                </div>
              </div>
              <div className="body-ly">
                <ul className="bookmark-list">
                  <li>
                    <a className="bookmark-name">
                      <span>Service Portal Home</span>
                    </a>
                    <a className="bookmark-close">
                      <i className="icon-close" />
                    </a>
                  </li>
                  <li>
                    <a className="bookmark-name">
                      <span>Monthly Report</span>
                      <em>
                        <i className="icon-arrow-right" />
                      </em>
                      <span>Asset status</span>
                    </a>
                    <a className="bookmark-close">
                      <i className="icon-close" />
                    </a>
                  </li>
                  <li>
                    <a className="bookmark-name">
                      <span>Monthly Report</span>
                      <em>
                        <i className="icon-arrow-right" />
                      </em>
                      <span>Asset status</span>
                    </a>
                    <a className="bookmark-close">
                      <i className="icon-close" />
                    </a>
                  </li>
                  <li>
                    <a className="bookmark-name">
                      <span>Monthly Report</span>
                      <em>
                        <i className="icon-arrow-right" />
                      </em>
                      <span>Asset status</span>
                    </a>
                    <a className="bookmark-close">
                      <i className="icon-close" />
                    </a>
                  </li>
                  <li>
                    <a className="bookmark-name">
                      <span>Monthly Report</span>
                      <em>
                        <i className="icon-arrow-right" />
                      </em>
                      <span>Asset status</span>
                    </a>
                    <a className="bookmark-close">
                      <i className="icon-close" />
                    </a>
                  </li>
                  <li>
                    <a className="bookmark-name">
                      <span>Monthly Report</span>
                      <em>
                        <i className="icon-arrow-right" />
                      </em>
                      <span>Asset status</span>
                    </a>
                    <a className="bookmark-close">
                      <i className="icon-close" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <button className="btn-gnb gnb-layer">
            <i className="icon-user" />
          </button>
          <div className="gnb-container" id="gnbMyProfile">
            <div className="inner">
              <div className="body-ly">
                <div className="user-profile">
                  <div className="image">
                    <span className="img-user">
                      <i className="icon-user" />
                    </span>
                  </div>
                  <div className="text">
                    <h6>김클루</h6>
                    <p className="ft-gray ft-small">kimcloo@cloocus.com</p>
                  </div>
                </div>
                <ul className="tree-view">
                  <li className="mn-item">
                    <a className="mn-link">
                      <span className="mn-name">사용자 관리</span>
                    </a>
                  </li>
                  <li className="mn-item">
                    <a className="mn-link">
                      <span className="mn-name">개인정보</span>
                    </a>
                  </li>
                  <li className="mn-item">
                    <a className="mn-link">
                      <span className="mn-name">비밀번호 변경</span>
                    </a>
                  </li>
                </ul>
                <ul className="tree-view">
                  <li className="mn-item">
                    <a className="mn-link">
                      <span className="mn-name">Azure Portal</span>
                    </a>
                  </li>
                  <li className="mn-item">
                    <a className="mn-link">
                      <span className="mn-name">알림 설정(Beta)</span>
                    </a>
                  </li>
                  <li className="mn-item">
                    <a className="mn-link">
                      <span className="mn-name">언어 선택</span>
                      <span className="mn-collapse">
                        <i className="icon-arrow-down" />
                      </span>
                    </a>
                    <ul className="nested">
                      <li className="mn-item">
                        <label className="radio mn-link">
                          <input type="radio" name="selectLanguage" checked />
                          <span className="checkmark" />
                          <span className="radio-link">한국어 (KR)</span>
                        </label>
                      </li>
                      <li className="mn-item">
                        <label className="radio mn-link">
                          <input type="radio" name="selectLanguage" />
                          <span className="checkmark" />
                          <span className="radio-link">영어 (EN)</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="tree-view">
                  <li className="mn-item">
                    <a className="mn-link">
                      <span className="mn-name">로그아웃</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
