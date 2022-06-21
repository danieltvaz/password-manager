import {withHook} from 'app/hocs';
import Passwords from './vault.comp';
import usePasswords from './vault.hook';

export default withHook(Passwords, usePasswords);
