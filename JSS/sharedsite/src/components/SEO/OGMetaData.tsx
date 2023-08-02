import { useRouter } from 'next/router';
import Head from 'next/head';
import { ImageField, Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

type OGMetaDataProps = {
  OpenGraphTitle: Field<string>;
  OpenGraphDescription: Field<string>;
  OpenGraphType: Field<string>;
  OpenGraphImageUrl: ImageField;
  OpenGraphSiteName: Field<string>;
  MetaTitle: Field<string>;
  MetaDescription: Field<string>;
  OverrideImage: ImageField;
};

const OGMetaData = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const routeFields = sitecoreContext.route?.fields as unknown;
  const fields = routeFields as OGMetaDataProps;

  const publicUrlBasePath = process.env.NEXT_PUBLIC_PUBLIC_URL;

  const ogImageField = fields?.OpenGraphImageUrl as ImageField;
  const overrideImageField = fields?.OverrideImage as ImageField;

  //field values
  const ogSiteValue = fields?.OpenGraphSiteName?.value;
  const ogImageValue = ogImageField?.value?.src || overrideImageField?.value?.src;
  const ogDescriptionValue = fields?.OpenGraphDescription?.value || fields?.MetaDescription?.value;
  const ogTitleValue = fields?.OpenGraphTitle?.value || fields?.MetaTitle?.value;
  const ogTypeValue = fields?.OpenGraphType?.value;

  const { asPath } = useRouter();

  return (
    //render only if value is provided
    <Head>
      {ogSiteValue && <meta property="og:site" content={`${ogSiteValue}`} />}

      {ogImageValue && <meta property="og:image" content={`${ogImageValue}`} />}

      {ogDescriptionValue && <meta property="og:description" content={`${ogDescriptionValue}`} />}

      {ogTitleValue && <meta property="og:title" content={`${ogTitleValue}`} />}

      {ogTypeValue && <meta property="og:type" content={`${ogTypeValue}`} />}

      <meta property="og:url" content={`${publicUrlBasePath + asPath}`} />
    </Head>
  );
};

export default OGMetaData;
