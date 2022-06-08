export default function useServiceLogo(props: any) {
  function serviceLogoGenerator(serviceName: string) {
    if (serviceName.includes(' ')) {
      return serviceName.split(' ').map(word => word[0].toUpperCase());
    }
    return serviceName[0].toUpperCase();
  }

  return {...props, serviceLogoGenerator};
}
