import {withHook} from 'app/hocs';
import VaultItemVisualization from './vault-item-visualization.comp';
import useVaultItemVisualization from './vault-item-visualization.hook';

export default withHook(VaultItemVisualization, useVaultItemVisualization);
