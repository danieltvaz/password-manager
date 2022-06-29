import React, {useLayoutEffect} from 'react';
import PasswordItem from 'app/components/dumb/vault-item';
import {SectionList} from 'react-native';
import sectionListFactory from 'app/helpers/sectionListFactory';
import * as Styled from './styles';
import EmptyList from 'app/components/dumb/empty-list/empty-list.comp';
import {useTheme} from 'styled-components/native';
import {PasswordProps} from './vault.hook';
import SButton from 'app/components/dumb/button';

export default function Passwords({passwords, navigation}: PasswordProps) {
  const theme = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SButton
          title="Novo item"
          buttonRole="primary"
          onPress={() => navigation.navigate('CreateNewItem', {role: 'new'})}
        />
      ),
    });
  }, []);

  return (
    <Styled.Wrapper>
      <SectionList
        sections={sectionListFactory(passwords)}
        renderItem={({item}) => (
          <PasswordItem
            item={item}
            onPress={() => navigation.navigate('CreateNewItem', {item: {...item}, role: 'edit'})}
          />
        )}
        renderSectionHeader={({section: {letter}}) => (
          <Styled.SectionHeaderWrapper>
            <Styled.SectionHeaderText>{letter}</Styled.SectionHeaderText>
          </Styled.SectionHeaderWrapper>
        )}
        ListEmptyComponent={() => <EmptyList />}
        style={{backgroundColor: theme.background.primary}}
      />
    </Styled.Wrapper>
  );
}
