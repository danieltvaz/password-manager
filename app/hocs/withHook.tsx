import React from 'react';

const withHook =
  <ComponentProps,>(
    Component: (props: ComponentProps) => JSX.Element,
    hook: (params: ComponentProps) => ComponentProps,
  ): ((props: ComponentProps) => JSX.Element) =>
  props =>
    <Component {...hook(props)} />;

export default withHook;
