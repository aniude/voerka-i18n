
import messageIds from "./idMap.js"
import runtime from "./runtime.js"
const { translate,i18nScope  } = runtime

import formatters from "./formatters.js"
import defaultMessages from "./cn.js"  
const activeMessages = defaultMessages
 
 
// 语言配置文件
const scopeSettings = {
    "languages": [
        {
            "name": "cn",
            "title": "cn"
        },
        {
            "name": "en",
            "title": "en"
        }
    ],
    "defaultLanguage": "cn",
    "activeLanguage": "cn",
    "namespaces": {}
}

// 语言作用域
const scope = new i18nScope({
    ...scopeSettings,                           // languages,defaultLanguage,activeLanguage,namespaces,formatters
    id: "vueapp",                          // 当前作用域的id，自动取当前工程的package.json的name
    default:   defaultMessages,                 // 默认语言包
    messages : activeMessages,                  // 当前语言包
    idMap:messageIds,                           // 消息id映射列表
    formatters,                                  // 当前作用域的格式化函数列表
    loaders:{ 
        "en" : ()=>import("./en.js") 
    }
}) 
// 翻译函数
const t = translate.bind(scope) 

export { 
    t, 
    i18nScope as scope
}

