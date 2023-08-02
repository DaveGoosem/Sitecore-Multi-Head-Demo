import { RichTextField } from '@sitecore-jss/sitecore-jss-react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@/shared/src/lib/AppCore/props/component-props';
import RichTextComponent from '@/componentLibrary/RichTextComponent';

type RichTextBlockProps = ComponentProps & {
  fields: {
    RichText: RichTextField;
  };
};

const RichTextBlock = ({ fields }: RichTextBlockProps): JSX.Element => (
  <>
    <h1>SharedSite Rich Text Comp</h1>
    <RichTextComponent field={fields?.RichText} />
  </>
);

export default withDatasourceCheck()<RichTextBlockProps>(RichTextBlock);
