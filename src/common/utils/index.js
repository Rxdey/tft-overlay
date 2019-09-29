// url解析
export const urlReg = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i;

/**
 * 生产随机字符串
 * @param length 长度
 */
export const random = (length = 5) => {
  let str = Math.random().toString(36).substr(2);
  if (str.length >= length) return str.substr(0, length);
  str += random(length - str.length);
  return str;
};
/**
 * 是否为pc设备
 */
export const deviceIsPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  return !Agents.some(item => userAgentInfo.includes(item));
};
/**
 * localStorage 同域名增加pathname前缀
 */
export const rxLocalStorage = {
  removeItemAll (array = []) {
    const tag = `${window.location.pathname}__VASS__`;
    array.map(item => {
      localStorage.removeItem(tag + item);
    });
  },
  getItem (name) {
    const tag = `${window.location.pathname}__VASS__`;
    return localStorage.getItem(tag + name);
  },
  setItem (name, data) {
    const tag = `${window.location.pathname}__VASS__`;
    localStorage.setItem(tag + name, data);
  },
  removeItem (name) {
    const tag = `${window.location.pathname}__VASS__`;
    localStorage.removeItem(tag + name);
  }
};

// 手机号正则宽松
export const mobileReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

export const dateFormat = (date, fmt = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) return '';
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'));
  }
  if (typeof date === 'number') {
    date = new Date(date);
  }
  const o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  const week = {
    0: '\u65e5',
    1: '\u4e00',
    2: '\u4e8c',
    3: '\u4e09',
    4: '\u56db',
    5: '\u4e94',
    6: '\u516d'
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '')
      + week[`${date.getDay()}`]
    );
  }
  Object.keys(o).map((k) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
    }
  });
  return fmt;
};
