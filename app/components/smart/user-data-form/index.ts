import {withHook} from 'app/hocs';
import UserDataForm from './user-data-form.comp';
import useForm from './user-data-form.hook';

export default withHook(UserDataForm, useForm);
