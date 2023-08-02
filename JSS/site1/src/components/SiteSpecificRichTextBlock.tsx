import { RichTextField } from '@sitecore-jss/sitecore-jss-react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@/shared/src/lib/AppCore/props/component-props';
import RichTextComponent from '@/componentLibrary/RichTextComponent';

type RichTextBlockProps = ComponentProps & {
  fields: {
    RichText: RichTextField;
  };
};

const SiteSpecificRichTextBlock = ({ fields }: RichTextBlockProps): JSX.Element => (
  <>
    <h1>Site1 Rich Text Block Comp!</h1>
    <RichTextComponent field={fields?.RichText} />
  </>
);

export default withDatasourceCheck()<RichTextBlockProps>(SiteSpecificRichTextBlock);
