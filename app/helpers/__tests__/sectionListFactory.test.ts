import {PasswordStorage} from 'app/hooks/useVault';
import sectionListFactory from '../sectionListFactory';

type SectionListFactory = {
  data: PasswordStorage[];
  letter: string;
}[];

describe('sectionListFactory', () => {
  it('should return 2 objects only containing letters A and B', () => {
    const result: SectionListFactory = sectionListFactory([
      {
        email: '1@email.com',
        id: 1,
        observations: '',
        password: '',
        securityAnswer: '',
        securityQuestion: '',
        site: '',
        title: 'a',
        username: '',
      },
      {
        email: '2@email.com',
        id: 2,
        observations: '',
        password: '',
        securityAnswer: '',
        securityQuestion: '',
        site: '',
        title: 'b',
        username: '',
      },
    ]);

    expect(result).toStrictEqual([
      {
        letter: 'A',
        data: [
          {
            email: '1@email.com',
            id: 1,
            observations: '',
            password: '',
            securityAnswer: '',
            securityQuestion: '',
            site: '',
            title: 'a',
            username: '',
          },
        ],
      },
      {
        letter: 'B',
        data: [
          {
            email: '2@email.com',
            id: 2,
            observations: '',
            password: '',
            securityAnswer: '',
            securityQuestion: '',
            site: '',
            title: 'b',
            username: '',
          },
        ],
      },
    ]);
  });

  it('should return [] if passed data is any invalid data', () => {
    const result: SectionListFactory = sectionListFactory(undefined as any);

    expect(result).toStrictEqual([]);
  });
});
