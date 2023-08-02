import React from 'react';
import { Placeholder, LayoutServiceData } from '@sitecore-jss/sitecore-jss-nextjs';
import SharedMetaLayout from '@/shared/src/SharedMetaLayout';

interface LayoutProps {
  layoutData: LayoutServiceData;
}

const Site2Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  return (
    <>
      <SharedMetaLayout route={route} />

      <>
        {route && (
          <Placeholder
            key="multi-head-demo-header"
            name="multi-head-demo-header"
            rendering={route}
          />
        )}
      </>
      <>
        <h1>Site2 Layout</h1>
        {route && (
          <Placeholder
            key="multi-head-demo-main-site2"
            name="multi-head-demo-main-site2"
            rendering={route}
          />
        )}
      </>
      <>
        {route && (
          <Placeholder
            key="multi-head-demo-footer"
            name="multi-head-demo-footer"
            rendering={route}
          />
        )}
      </>
    </>
  );
};

export default Site2Layout;
