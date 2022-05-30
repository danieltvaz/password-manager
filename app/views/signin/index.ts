import {withHook} from 'app/hocs';
import Signin from './signin.comp';
import useSignin from './signin.hook';

export default withHook<any>(Signin, useSignin);
