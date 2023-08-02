import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichTextField } from '@sitecore-jss/sitecore-jss-react';

export interface RichTextComponentProps {
  field?: RichTextField;
  Class?: string;
  tag?: string;
}

const RichTextComponent = ({ field, Class, tag = 'div' }: RichTextComponentProps): JSX.Element => {
  return (
    <RichText
      className={`custom-rte-editor rich-text${Class ? ' '.concat(Class) : ''}`}
      field={field}
      tag={tag}
      editable={true}
    />
  );
};

export default RichTextComponent;
