import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {renderHook} from '@testing-library/react-hooks';
import {PasswordStorage} from 'app/hooks/useVault';
import {LoggedInStackParamList, RootStackParamList} from 'app/types/navigation';
import {act} from 'react-test-renderer';
import useCreateNewItem from '../create-new-item.hook';

const navigation = {
  navigate: jest.fn(),
} as unknown as NativeStackScreenProps<LoggedInStackParamList, 'CreateNewItem'>['navigation'];

describe('<CreateNewItem/>', () => {
  it('should render inputs with item values if in edit mode', () => {
    const {result} = renderHook(() =>
      useCreateNewItem({
        navigation,
        route: {params: {role: 'edit', item: {title: 'test'} as PasswordStorage}},
      } as any),
    );

    expect(result.current.state.title).toBe('test');
  });

  it('should not render inputs with item values if in new mode', () => {
    const {result} = renderHook(() =>
      useCreateNewItem({
        navigation,
        route: {params: {role: 'new', item: {title: 'test'} as PasswordStorage}},
      } as any),
    );

    expect(result.current.state.title).toBe('');
  });

  describe('handleSubmit', () => {
    // it('should call handleAdd if edit is false', () => {
    //   const {result} = renderHook(() =>
    //     useCreateNewItem({
    //       navigation,
    //       route: {params: {role: 'new', item: {title: 'test'} as PasswordStorage}},
    //     } as any),
    //   );
    //   act(() => {
    //     result.current.handleSubmit();
    //   });
    //   expect(result.current.handleAdd).toBeCalled();
    // });
  });
});
