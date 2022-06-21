import PasswordItem from './password-item.comp';
import usePasswordItem from './password-item.hook';
import {withHook} from 'app/hocs';

export default withHook(PasswordItem, usePasswordItem);
