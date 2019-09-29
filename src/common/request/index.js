import axios from 'axios';
import _ from 'lodash';
import { Toast } from 'vant';
import qs from 'qs';
import loading from '@/components/vue-loading/loading';

const conf = {
  method: 'get',
  url: '/',
  baseURL: '',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    systemCode: 'WXMD'
  },
  timeout: 100000,
  isQs: true
};
const defaultInstance = (config) => {
  const instance = axios.create(config);
  instance.interceptors.request.use(res => res);
  instance.interceptors.response.use(response => {
    const { code, state, message } = response.data;
    if (state === '0') {
      Toast({ className: 'error-msg', message, duration: 3000 });
      return response;
    }
    switch (code) {
      case '0000':
      case '9997':
        return response;
      case '9998':
        Toast({ className: 'error-msg', message: '哎呀，系统好像出现了一个小问题，要不刷新试试', duration: 3000 });
        return response;
      case '9999':
        Toast({ className: 'error-msg', message: '您的身份验证失败啦，请重新登录试试', duration: 3000 });
        return response;
      default:
        Toast({ className: 'error-msg', message: '未知错误', duration: 3000 });
        return response;
    }
  }, error => {
    const status = error.request ? error.request.status : 0;
    const action = {
      404: '找不到请求地址',
      500: '系统异常'
    };
    Toast({
      className: 'error-msg',
      message: `ERROR: ${status} - ${action[status] || '系统异常'} >_<`,
      duration: 3500
    });
    console.error(`接口:${error.config.url}  异常 --- ${error.message}`);
    if (!error.response) return false;
    console.error(error);
    return false;
  });
  return instance;
};
/**
 * 请求封装
 * @param {Object} config 请求配置
 * @param {Object} data 参数
 * @param {Object} instance axios实例
 */
export const http = async (config, data, instance = defaultInstance()) => {
  const setting = _.merge(conf, config);
  const { method } = setting;
  if (method.toUpperCase() === 'GET') {
    setting.params = data;
  } else {
    setting.data = setting.isQs ? qs.stringify(data) : data;
  }
  loading(true);
  try {
    const res = await instance(setting);
    loading(false);
    return res.data;
  } catch (error) {
    console.error(error);
    loading(false);
    return false;
  }
};

export default http;
