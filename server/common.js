/**
 * Created by Administrator on 2015/8/16.
 */
var uuid = require('node-uuid');

function no_uuid() {
    var _uuid = uuid.v1();
    var sp = _uuid.split('-');
    return sp.join('');
}

/**
 * 时间格式转换辅助方法
 * @param   {date}      date
 * @param   {String}    fmt格式
 * @return  {Array}     数组
 */

function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

exports.no_uuid = no_uuid;
exports.dateFormat = dateFormat;
