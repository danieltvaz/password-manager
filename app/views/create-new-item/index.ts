import {withHook} from 'app/hocs';
import CreateNewItem from './create-new-item.comp';
import useCreateNewItem from './create-new-item.hook';

export default withHook(CreateNewItem, useCreateNewItem);
