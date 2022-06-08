import {withHook} from 'app/hocs';
import Dashboard from './dashboard.comp';
import useDashboard from './dashboard.hook';

export default withHook(Dashboard, useDashboard);
