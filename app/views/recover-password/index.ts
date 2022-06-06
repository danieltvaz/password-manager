import {withHook} from 'app/hocs';
import RecoverPassword from './recover-password.comp';
import useRecoverPassword from './recover-password.hook';

export default withHook(RecoverPassword, useRecoverPassword);
