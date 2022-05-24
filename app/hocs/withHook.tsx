import React from 'react';

const withHook =
  <ComponentProps, HookParams = unknown>(
    Component: (props: ComponentProps) => JSX.Element,
    hook: (params: HookParams) => ComponentProps,
  ): ((props: HookParams) => JSX.Element) =>
  props =>
    <Component {...hook(props)} />;

export default withHook;
