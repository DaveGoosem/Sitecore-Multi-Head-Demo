import Head from 'next/head';
import { ImageField, Field, Item, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

type TwitterMetaDataProps = {
  TwitterTitle: Field<string>;
  TwitterSite: Field<string>;
  TwitterDescription: Field<string>;
  TwitterImage: ImageField;
  TwitterCardType: Item;
  MetaTitle: Field<string>;
  MetaDescription: Field<string>;
  OverrideImage: ImageField;
};

type SEOTwitterCardTypeProps = {
  fields: {
    Value: Field<string>;
  };
};

const TwitterMetaData = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const routeFields = sitecoreContext.route?.fields as unknown;
  const fields = routeFields as TwitterMetaDataProps;

  //set up
  const twitterImageField = fields?.TwitterImage as ImageField;
  const twitterCardTypeRaw = fields?.TwitterCardType as unknown;
  const twitterCardTypeField = twitterCardTypeRaw as SEOTwitterCardTypeProps;
  const overrideImageField = fields?.OverrideImage as ImageField;

  //field values
  const twitterSiteValue = fields?.TwitterSite?.value;
  const twitterImageValue = twitterImageField?.value?.src || overrideImageField?.value?.src;
  const twitterDescriptionValue =
    fields?.TwitterDescription?.value || fields?.MetaDescription?.value;
  const twitterTitleValue = fields?.TwitterTitle?.value || fields?.MetaTitle?.value;
  const twitterCardValue = twitterCardTypeField?.fields?.Value?.value;

  return (
    //render only if value is provided
    <Head>
      {twitterSiteValue && <meta property="twitter:site" content={`${twitterSiteValue}`} />}

      {twitterImageValue && <meta property="twitter:image" content={`${twitterImageValue}`} />}

      {twitterDescriptionValue && (
        <meta property="twitter:description" content={`${twitterDescriptionValue}`} />
      )}

      {twitterTitleValue && <meta property="twitter:title" content={`${twitterTitleValue}`} />}

      {twitterCardValue && <meta property="twitter:card" content={`${twitterCardValue}`} />}
    </Head>
  );
};

export default TwitterMetaData;
