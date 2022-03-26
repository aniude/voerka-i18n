
/**
 * 初始化指定项目的语言包
 */


const { findModuleType,createPackageJsonFile,t,getCurrentProjectRootFolder } = require("./utils")
const path = require("path")
const fs = require("fs")
const shelljs = require("shelljs")
const createLogger = require("logsets")
const logger = createLogger()

/**
 * 在当前工程自动安装@voerkai18n/runtime
 * @param {*} langFolder 
 * @param {*} opts 
 */
 function installVoerkai18nRuntim(srcPath){
    const projectFolder =  getCurrentProjectRootFolder(srcPath || process.cwd())
    if(fs.existsSync("pnpm-lock.yaml")){
        shelljs.exec("pnpm add @voerkai18n/runtime")
    }else if(fs.existsSync("yarn.lock")){
        shelljs.exec("yarn add @voerkai18n/runtime")
    }else{
        shelljs.exec("npm install @voerkai18n/runtime")
    }
}   


module.exports = function(srcPath,{debug = true,languages=["cn","en"],defaultLanguage="cn",activeLanguage="cn",reset=false,installRuntime=true}={}){
    // 语言文件夹名称
    const  langPath = "languages"
    // 查找当前项目的语言包类型路径
    const lngPath = path.join(srcPath,langPath)
    if(!fs.existsSync(lngPath)){
        fs.mkdirSync(lngPath)
        if(debug) logger.log(t("创建语言包文件夹: {}"),lngPath)
    }


    // 创建settings.json文件
    const settingsFile = path.join(lngPath,"settings.json")
    if(fs.existsSync(settingsFile) && !reset){
        if(debug) logger.log(t("语言配置文件{}文件已存在，跳过创建。\n使用{}可以重新覆盖创建"),settingsFile,"-r")
        return 
    }
    const settings = {
        languages:languages.map(lng=>({name:lng,title:lng})),
        defaultLanguage,
        activeLanguage,
        namespaces:{}
    }

    // 写入配置文件
    fs.writeFileSync(settingsFile,JSON.stringify(settings,null,4))
    
    // 自动安装运行时@voerkai18n/runtime
    // if(installRuntime){
    //     logger.log(t("正在安装多语言运行时：{}"),"@voerkai18n/runtime")
    //     installVoerkai18nRuntim(srcPath)
    // }
        
    if(debug) {
        logger.log(t("生成语言配置文件:{}"),"./languages/settings.json")
        logger.log(t("拟支持的语言：{}"),settings.languages.map(l=>l.name).join(","))
        logger.log(t("初始化成功,下一步："))
        logger.log(t(" - 编辑{}确定拟支持的语言种类等参数"),"languages/settings.json")
        logger.log(t(" - 运行<{}>扫描提取要翻译的文本"),"voerkai18n extract")
        logger.log(t(" - 运行<{}>编译语言包"),"voerkai18n compile")
    } 
} 