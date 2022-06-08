export type ServiceLogoProps = {
  serviceName: string;
  serviceLogoGenerator: (param: string) => string;
};
