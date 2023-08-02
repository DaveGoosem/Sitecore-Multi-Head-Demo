import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  getPublicUrl,
  Placeholder,
  RouteData,
  VisitorIdentification,
} from '@sitecore-jss/sitecore-jss-nextjs';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface SharedMetaLayoutProps {
  route: RouteData | null;
  themeClass?: string;
}

const SharedMetaLayout = ({ route, themeClass }: SharedMetaLayoutProps): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      {/*
                VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
                If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
                For XM (CMS-only) apps, this should be removed.

                VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
            */}
      <VisitorIdentification />

      {/* route theme */}
      {useEffect(() => {
        const pageThemeClass = themeClass as string;
        if (pageThemeClass) {
          document.body.classList.add([pageThemeClass].join(' '));
        }

        return () => document.body.classList.remove(pageThemeClass);
      }, [asPath, themeClass])}

      <>
        {route && (
          <Placeholder key="multi-head-demo-meta" name="multi-head-demo-meta" rendering={route} />
        )}
      </>
    </>
  );
};

export default SharedMetaLayout;
