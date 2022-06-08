import React from 'react';
import PasswordItem from 'app/components/smart/password-item/password-item.comp';
import {SectionList, Text} from 'react-native';
import sectionListFactory from 'app/helpers/sectionListFactory';
import {SectionHeaderText, SectionHeaderWrapper} from './styles';
import EmptyList from 'app/components/dumb/empty-list/empty-list.comp';

export const dataMock = [
  {
    id: 1,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'ab', website: 'www.kotas.com.br'},
  },
  {
    id: 2,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'abb', website: 'www.kotas.com.br'},
  },
  {
    id: 3,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'cb', website: 'www.kotas.com.br'},
  },
  {
    id: 4,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'db', website: 'www.kotas.com.br'},
  },
  {
    id: 5,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'eb', website: 'www.kotas.com.br'},
  },
  {
    id: 6,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'fb', website: 'www.kotas.com.br'},
  },
  {
    id: 7,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'gb', website: 'www.kotas.com.br'},
  },
  {
    id: 8,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'hb', website: 'www.kotas.com.br'},
  },
  {
    id: 9,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'ib', website: 'www.kotas.com.br'},
  },
  {
    id: 10,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'jb', website: 'www.kotas.com.br'},
  },
  {
    id: 11,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'lb', website: 'www.kotas.com.br'},
  },
  {
    id: 12,
    password: 'aff123',
    login: 'danieltostes@live.com',
    service: {name: 'mb', website: 'www.kotas.com.br'},
  },
];

export default function Dashboard() {
  sectionListFactory(dataMock);
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
