import { Breadcrumbs } from '@mui/material';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { menuArr } from './Menu';

const Breadcrumb = () => {
  const convertMenu = menuArr
    .filter((menu) => menu.subMenu)
    .reduce(
      (pv, { url: parentPath, subMenu }) =>
        pv.concat(
          subMenu.map(({ title: breadcrumb, url: childPath }) => ({
            breadcrumb,
            path: parentPath + childPath,
          })),
        ),
      [],
    )
    .filter(({ path }) => Boolean(path));

  const breadcrumbs = useBreadcrumbs([...convertMenu], { excludePaths: ['/'] });

  console.log(breadcrumbs);

  return (
    <>
      <div className="breadcrumb">
        <Breadcrumbs
          separator={
            <span className="bc-divider">
              <i className="icon-arrow-right" />
            </span>
          }
        >
          {breadcrumbs.map(({ breadcrumb, key }) => (
            <button key={key} className="item">
              {breadcrumb}
            </button>
          ))}
        </Breadcrumbs>
      </div>
      <div className="title">
        <h3>{breadcrumbs[breadcrumbs.length - 1].breadcrumb}</h3>
      </div>
    </>
  );
};

export default Breadcrumb;
