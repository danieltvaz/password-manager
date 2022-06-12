import {withHook} from 'app/hocs';
import Passwords from './passwords.comp';
import usePasswords from './passwords.hook';

export default withHook(Passwords, usePasswords);
