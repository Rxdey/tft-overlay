// 获取定位
export default () => {
  const option = {
    enableHighAccuracy: true, // 设置提升定位的精准度
    maximumAge: 0, // 禁用缓存
    timeout: 10000 // 开始获取定位信息30秒后超时
  };
  const showPosition = position => {
    window.sessionStorage.setItem('VASS_USER_LAT', position.coords.latitude);
    window.sessionStorage.setItem('VASS_USER_LON', position.coords.longitude);
    // console.log(`您的纬度是:${lat}，经度是：${lon}`);
  };
  const showError = error => {
    const errorMsg = {
      1: '位置服务被拒绝',
      2: '获取定位失败',
      3: '获取超时'
    };
    console.warn(`获取定位: ${errorMsg[error.code]}`);
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError, option);
  } else {
    console.log('不支持定位');
  }
};
