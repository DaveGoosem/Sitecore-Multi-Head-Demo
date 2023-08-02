import {
  ComponentParams,
  ComponentRendering,
  //   Field,
  //   ImageField,
  //   LinkField,
  SitecoreContextValue,
} from '@sitecore-jss/sitecore-jss-nextjs';

/**
 * Base props
 */
export type BaseComponentProps = {
  rendering: ComponentRendering;
};

/**
 * Shared component props
 */
export type ComponentProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
};

/**
 * Component props with context
 * You can access `sitecoreContext` by withSitecoreContext/useSitecoreContext
 * @example withSitecoreContext()(ContentBlock)
 * @example const { sitecoreContext } = useSitecoreContext()
 */
export type ComponentWithContextProps = ComponentProps & {
  sitecoreContext: SitecoreContextValue;
};
