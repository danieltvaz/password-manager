import {withHook} from 'app/hocs';
import CreatePassword from './create-password.comp';
import useCreatePassword from './create-password.hook';

export default withHook(CreatePassword, useCreatePassword);
