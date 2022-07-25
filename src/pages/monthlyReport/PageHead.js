import Breadcrumb from 'component/Breadcrumb';

const PageHead = (props) => {
  const { date, handleDateChanged } = props;

  return (
    <div className="page-heading">
      <div className="left">
        <Breadcrumb />
      </div>
      <div className="right">
        <div className="btn-wrap">
          <div className="select-month">
            <a
              href="#"
              className="btn icon round"
              onClick={() => handleDateChanged('-')}
            >
              <i className="icon-arrow-left" />
            </a>
            <span className="ft-500">{date.format('YYYY. MM')}</span>
            <a
              href="#"
              className="btn icon round"
              onClick={() => handleDateChanged('+')}
            >
              <i className="icon-arrow-right" />
            </a>
          </div>
          <a className="btn btn-ghost round">
            <i className="icon-download mr-5" />
            PDF
          </a>
          <a className="btn btn-ghost round icon">
            <i className="icon-bookmark-add" />
          </a>
          {/* 즐겨찾기 추가된 상태 */}
          {/* <a className="btn btn-ghost round icon selected"><i className="icon-bookmark-add"></i></a> */}
        </div>
      </div>
    </div>
  );
};

export default PageHead;
