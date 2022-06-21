import React from 'react';
import PasswordItem from 'app/components/dumb/vault-item';
import {SectionList} from 'react-native';
import sectionListFactory from 'app/helpers/sectionListFactory';
import {SectionHeaderText, SectionHeaderWrapper} from './styles';
import EmptyList from 'app/components/dumb/empty-list/empty-list.comp';
import {useTheme} from 'styled-components/native';
import {PasswordProps} from './vault.hook';

export default function Passwords({passwords}: PasswordProps) {
  const theme = useTheme();
  return (
    <SectionList
      sections={sectionListFactory(passwords)}
      renderItem={({item}) => <PasswordItem item={item} />}
      renderSectionHeader={({section: {letter}}) => (
        <SectionHeaderWrapper>
          <SectionHeaderText>{letter}</SectionHeaderText>
        </SectionHeaderWrapper>
      )}
      ListEmptyComponent={() => <EmptyList />}
      style={{backgroundColor: theme.background.primary}}
    />
  );
}
