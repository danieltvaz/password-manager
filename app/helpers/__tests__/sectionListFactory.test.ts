import sectionListFactory from '../sectionListFactory';

describe('sectionListFactory', () => {
  it('should return 2 objects only containing letters A and B', () => {
    const result = sectionListFactory([
      {
        id: 1,
        password: '123',
        login: 'login',
        service: {name: 'ab', website: 'www.test.com'},
      },
      {
        id: 2,
        password: '123',
        login: 'login',
        service: {name: 'ba', website: 'www.test.com'},
      },
      {
        id: 3,
        password: '123',
        login: 'login',
        service: {name: 'aa', website: 'www.test.com'},
      },
    ]);

    expect(result).toStrictEqual([
      {
        letter: 'A',
        data: [
          {
            id: 1,
            password: '123',
            login: 'login',
            service: {name: 'ab', website: 'www.test.com'},
          },
          {
            id: 3,
            password: '123',
            login: 'login',
            service: {name: 'aa', website: 'www.test.com'},
          },
        ],
      },
      {
        letter: 'B',
        data: [
          {
            id: 2,
            password: '123',
            login: 'login',
            service: {name: 'ba', website: 'www.test.com'},
          },
        ],
      },
    ]);
  });
});
