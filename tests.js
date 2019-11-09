const fs = require('fs');
const professionList = require('./src/data/elementList');

const getDesc = a => {
  const arr = a.map(item => item.desc.match(/\d+%?/g));
  if (!arr || !arr[0]) return null;
  const b = arr[0].map((item, index) => {
    let str = '';
    arr.map(v => {
      if (v[index] === str.replace('/', '')) {
        str = `${v[index]}/`;
        return;
      }
      str += `${v[index]}/`;
    });
    return str.substring(0, str.length - 1);
  });
  return b;
};

const res = professionList.map(item => getDesc(item.requiredCount));
const map = {
  0: '$q',
  1: '$w',
  2: '$e',
  3: '$r',
  4: '$t',
  5: '$y'
};
const strArray = res.map((item, index) => {
  if (!item) return professionList[index].requiredCount[0].desc;
  const str = professionList[index].requiredCount[0].desc;
  let temp = str;
  item.map((v, i) => {
    if (/\d+%?/g.test(str)) {
      temp = temp.replace(/\d+%?/, `${map[i]}`);
    }
  });
  return temp;
});

const result = res.map((item, index) => {
  if (!item) return strArray[index];
  const str = strArray[index];
  let temp = str;
  item.map((v, i) => {
    temp = temp.replace(map[i], v);
  });
  return temp;
});

const aaa = professionList.map((item, index) => ({
  ...item,
  effect: result[index],
  level: item.requiredCount.reduce((prve, next) => { prve += `${next.count}/`; return prve; }, '').substring(0, item.requiredCount.reduce((prve, next) => { prve += `${next.count}/`; return prve; }, '').length - 1)
}));
console.log(aaa);

fs.writeFileSync('./test.json', JSON.stringify(aaa));
