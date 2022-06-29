import PasswordItem from './password-item.comp';
import usePasswordItem from './password-item.hook';
import {withHook} from 'app/hocs';
import {memo} from 'react';

export default memo(withHook(PasswordItem, usePasswordItem));
