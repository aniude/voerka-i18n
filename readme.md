
适用于`Javascript/Vue/React/ReactNative`的国际化解决方案


[官方网站](https://zhangfisher.github.io/voerka-i18n/)


基于`javascript`的国际化方案很多，比较有名的有`fbt`、`i18next`、`react-i18next`、`vue-i18n`、`react-intl`等等，每一种解决方案均有大量的用户。为什么还要再造一个轮子？好吧，再造轮子的理由不外乎不满足于现有方案，总想着现有方案的种种不足之处，然后就撸起袖子想造一个轮子。

那么到底是对现有解决方案有什么不满？最主要有三点：

- 大部份均为要翻译的文本信息指定一个`key`，然后在源码文件中使用形如`$t("message.login")`之类的方式，然后在翻译时将之转换成最终的文本信息。此方式最大的问题是，在源码中必须人为地指定每一个`key`，在中文语境中，想为每一句中文均配套想一句符合语义的`英文key`是比较麻烦的，也很不直观不符合直觉。我希望在源文件中就直接使用中文，如`t("中华人民共和国万岁")`，然后国际化框架应该能自动处理后续的一系列麻烦。

- 要能够比较友好地支持多库多包`monorepo`场景下的国际化协作，当主程序切换语言时，其他包或库也可以自动切换，并且在开发上每个包或库均可以独立地进行开发，集成到主程序时能无缝集成。这点在现有方案上没有找到比较理想的解决方案。

- 大部份国际化框架均将中文视为二等公民，大部份情况下您应该采用英文作为第一语言，虽然这不是太大的问题，但是既然要再造一个轮子，为什么不将中文提升到一等公民呢。
  

**基于此就开始打造`VoerkaI18n`国际化多语言解决方案，主要特性包括：**
 

- 全面工程化解决方案，提供初始化、提取文本、自动翻译、编译等工具链支持。
- 符合直觉，不需要手动定义文本`Key`映射。
- 强大的插值变量`格式化器`机制，可以扩展出强大的多语言特性。
- 支持`babel`插件自动导入`t`翻译函数。
- 支持`nodejs`、浏览器(`vue`/`react`/`solid`)等、`React Native`等任意JS场景
- 采用`工具链`与`运行时`分开设计，发布时只需要集成很小的运行时。
- 高度可扩展的`复数`、`货币`、`数字`等常用的多语言处理机制。
- 翻译过程内，提取文本可以自动进行同步，并保留已翻译的内容。
- 可以动态在线添加支持的语言
- 支持发布后的在线打语言包补丁，修复翻译错误
- 支持调用在线自动翻译对提取文本进行翻译。
- 核心运行时`@voerkai18n/runtime`超过90%的测试覆盖率
- 支持`TypeScript`开发


  

# **开源推荐：** 

- **`VoerkaI18n`**: [基于Nodejs/React/Vue的一键国际化解决方案](https://zhangfisher.github.io/voerka-i18n/)
- **`Logsets`**: [命令行应用增强输出库](https://zhangfisher.github.io/logsets/)
- **`AutoPub`**:  [基于pnpm/monorepo的自动发包工具](https://zhangfisher.github.io/autopub/)
- **`FlexDecorators`**:  [JavaScript/TypeScript装饰器开发](https://zhangfisher.github.io/flex-decorators/)
- **`FlexState`**:  [有限状态机实现](https://zhangfisher.github.io/flexstate/)
- **`FlexTools`**:  [实用工具函数库](https://zhangfisher.github.io/flex-tools/)
