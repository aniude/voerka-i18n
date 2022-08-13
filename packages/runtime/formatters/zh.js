/**
 *   简体中文格式化器
 * 
 */

 const { toChineseCurrency,toChineseNumber,CN_DATETIME_UNITS,CN_WEEK_DAYS,CN_SHORT_WEEK_DAYS, CN_MONTH_NAMES, CN_SHORT_MONTH_NAMES} = require("../cnutils") 
 const { toDate, toCurrency } = require("../utils")
 
module.exports = {
    // 配置参数: 格式化器函数的最后一个参数就是该配置参数
    $options:{
        datetime          : {
            units         : CN_DATETIME_UNITS,
            weekdays      : CN_WEEK_DAYS,
            shortWeekdays : CN_SHORT_WEEK_DAYS,
            monthNames    : CN_MONTH_NAMES,
            shorMonthNames: CN_SHORT_MONTH_NAMES
        },
        currency          : {
            unit          : "￥",
            prefix        : "",
            suffix        : "",
            division      : 3,
            precision     : 2
        },
        number            : {
            division      : 3,
            precision     : 2
        }
    },
    $types: {
        Date: value => {const d = toDate(value);return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours()}点${d.getMinutes()}分${d.getSeconds()}秒`}
    },
    // 日期  
    date         : value => { const d = toDate(value); return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日` },
    weekday      : value => CN_WEEK_DAYS[toDate(value).getDay()],
    shortWeekday : value => CN_SHORT_WEEK_DAYS[toDate(value).getDay()],
    monthName    : value => CN_MONTH_NAMES[toDate(value).getMonth()],
    shorMonthName: value => CN_SHORT_MONTH_NAMES[toDate(value).getMonth()], 
    // 时间
    time         : value =>{const d = toDate(value);return `${d.getHours()}点${d.getMinutes()}分${d.getSeconds()}秒`},
    // 货币
    currency     : (value,prefix = "￥",suffix="", division = 4, precision = 2) => toCurrency(value, { division, prefix, precision,suffix }),
    // 中文货币，big=true代表大写形式
    capitalizeCurrency:(value,big,unit="元",prefix,suffix)=>toChineseCurrency(value,{big,prefix,suffix,unit}),
    // 中文数字,如一千二百三十一
    number:(value,isBig)=>toChineseNumber(value,isBig)
} 