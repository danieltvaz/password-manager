import {PasswordStorage} from 'app/hooks/useVault';

export default function sectionListFactory(data: PasswordStorage[]) {
  const availableLetters = Array.from(
    new Set(data.map(dataItem => dataItem.title[0].toLowerCase())),
  );
  const sections = availableLetters
    .map(letter => ({
      letter: letter.toUpperCase(),
      data: [],
    }))
    .map(sectionItem => ({
      ...sectionItem,
      data: [
        ...data.filter(
          dataItem =>
            dataItem.title[0].toUpperCase() ===
            sectionItem.letter.toUpperCase(),
        ),
      ],
    }));

  return sections;
}
