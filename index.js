const alfy = require('alfy');

(async () => {
  const data = await alfy.fetch('https://api.douban.com/v2/movie/search', {
    query: {
      q: encodeURI(alfy.input),
    },
  });

  if (!data.subjects) {
    alfy.error(new Error(`API request failed`));
    return;
  }

  if (data.subjects.length === 0) {
    alfy.output([
      {
        title: `No movie found ${alfy.input}`,
        subtitle: 'Click to see the result for yourself',
        arg: `https://www.douban.com/search?cat=1002&q=${alfy.input}`,
      },
    ]);
    return;
  }

  alfy.output(
    data.subjects.map(item => {
      return {
        title: item.title,
        subtitle: `评分：${item.rating.average} 年份：${item.year}`,
        arg: item.alt,
      };
    }),
  );
})();
