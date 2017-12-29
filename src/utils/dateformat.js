var privateTimeFlies = function() {
  var SECOND_MILLI = 1000; //秒
  var MINUTE_MILLI = SECOND_MILLI * 60; //分
  var HOUR_MILLI = MINUTE_MILLI * 60; //小时
  var DAY_MILLI = HOUR_MILLI * 24; //天
  var MONTH_MILLI = DAY_MILLI * 30; //月
  var YEAD_MILLI = MONTH_MILLI * 12; //年

  return function (timeArg)  {
    var now = new Date();
    var time = new Date(timeArg);
    var delta = now - time;

    switch (true) {
      case delta < MINUTE_MILLI:
        return '刚刚';
      case delta >= MINUTE_MILLI && delta <= HOUR_MILLI:
        return `${Math.floor(delta / MINUTE_MILLI)} 分钟前`;
      case delta >= HOUR_MILLI && delta <= DAY_MILLI:
        return `${Math.floor(delta / HOUR_MILLI)} 小时前`;
      case delta >= DAY_MILLI && delta <= MONTH_MILLI:
        return `${Math.floor(delta / DAY_MILLI)} 天前`;
      case delta >= MONTH_MILLI && delta <= YEAD_MILLI:
        return `${Math.floor(delta / MONTH_MILLI)} 月前`;
      case delta >= YEAD_MILLI:
        return `${Math.floor(delta / YEAD_MILLI)} 年前`;
      default:
        return NaN;
    }
  };
};

export default privateTimeFlies();