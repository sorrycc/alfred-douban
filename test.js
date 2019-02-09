import alfyTest from 'alfy-test';

describe('alfred-douban', () => {
  it('normal', async () => {
    const alfy = alfyTest();
    const result = await alfy('叶问外传：张天志');
    const { title, arg } = result[0];
    expect(title).toEqual(`叶问外传：张天志`);
    expect(arg).toEqual(`https://movie.douban.com/subject/26796664/`);
  });
});
