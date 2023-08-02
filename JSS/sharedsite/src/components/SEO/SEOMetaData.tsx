import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Field,
  getPublicUrl,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { getCanonicalUrl } from '@/shared/src/lib/AppCore/utils/util-string';

type SEOMetaDataProps = {
  MetaTitle: Field<string>;
  MetaDescription: Field<string>;
  MetaKeywords: Field<string>;
  CanonicalUrl: LinkField;
};

const SEOMetaData = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const routeFields = sitecoreContext.route?.fields as unknown;
  const fields = routeFields as SEOMetaDataProps;

  const { asPath } = useRouter();
  const metaTitleValue = fields?.MetaTitle?.value;
  const descriptionValue = fields?.MetaDescription?.value;
  const keywordsValue = fields?.MetaKeywords?.value;

  let canonicalUrlValue = getCanonicalUrl(fields?.CanonicalUrl?.value?.href || '', asPath);
  if (!canonicalUrlValue) {
    canonicalUrlValue = `${getPublicUrl() + asPath}`;
  }

  return (
    <Head>
      {metaTitleValue && <title>{`${metaTitleValue}`}</title>}
      {descriptionValue && <meta name="description" content={`${descriptionValue}`} />}
      {keywordsValue && <meta name="keywords" content={`${keywordsValue}`} />}

      <link rel="canonical" href={`${canonicalUrlValue}`} />
    </Head>
  );
};

export default SEOMetaData;
