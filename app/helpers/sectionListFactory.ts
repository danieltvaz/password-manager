import {dataMock} from 'app/views/passwords/passwords.comp';

type Data = typeof dataMock;

export default function sectionListFactory(data: Data) {
  const availableLetters = Array.from(
    new Set(data.map(dataItem => dataItem.service.name[0].toLowerCase())),
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
            dataItem.service.name[0].toUpperCase() ===
            sectionItem.letter.toUpperCase(),
        ),
      ],
    }));

  return sections;
}
