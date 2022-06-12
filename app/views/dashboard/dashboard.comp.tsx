import React from 'react';
import PasswordItem from 'app/components/smart/password-item/password-item.comp';
import {SectionList, Text} from 'react-native';
import sectionListFactory from 'app/helpers/sectionListFactory';
import {SectionHeaderText, SectionHeaderWrapper} from './styles';
import EmptyList from 'app/components/dumb/empty-list/empty-list.comp';
import {DashboardProps} from './dashboard.hook';

export const dataMock = [
  {
    id: 1,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'ab', website: 'www.kotas.com.br'},
  },
];

export default function Dashboard({navigation}: DashboardProps) {
  return (
    <SectionList
      sections={sectionListFactory(dataMock)}
      renderItem={({item}) => <PasswordItem item={item} />}
      renderSectionHeader={({section: {letter}}) => (
        <SectionHeaderWrapper>
          <SectionHeaderText>{letter}</SectionHeaderText>
        </SectionHeaderWrapper>
      )}
      ListEmptyComponent={() => <EmptyList />}
    />
  );
}
