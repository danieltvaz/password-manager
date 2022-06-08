import ServiceLogo from './service-logo.comp';
import useServiceLogo from './service-logo.hook';
import {withHook} from 'app/hocs';

export default withHook(ServiceLogo, useServiceLogo);
