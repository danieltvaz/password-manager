import React from 'react';

type Hook<HookProps, ComponentProps> = (params: HookProps) => ComponentProps;

type Component<ComponentProps> = (props: ComponentProps) => JSX.Element;

const withHook =
  <HookProps, ComponentProps>(
    Component: Component<ComponentProps>,
    hook: Hook<HookProps, ComponentProps>,
  ) =>
  (props: any) =>
    <Component {...hook(props)} />;

export default withHook;
