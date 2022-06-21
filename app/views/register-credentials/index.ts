import {withHook} from 'app/hocs';
import CreatePassword from './register-credentials.comp';
import useCreatePassword from './register-credentials.hook';

export default withHook(CreatePassword, useCreatePassword);
