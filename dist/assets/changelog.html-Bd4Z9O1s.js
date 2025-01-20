import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as t,o as a}from"./app-Bb0iWJPj.js";const r={};function n(o,i){return a(),e("div",null,i[0]||(i[0]=[t('<h2 id="v3-4-1-2" tabindex="-1"><a class="header-anchor" href="#v3-4-1-2"><span>v3.4.1.2</span></a></h2><ul><li>主要更新 <ul><li>[新增] 前端新增 VConsole 开发调试工具。可以像小程序一样调试前端页面。</li><li>[新增] 前端新增生产环境保护机制。生产环境前端会禁用 F12 以及右键菜单禁用。</li><li>[修复] 修复前端老旧代码引起工程生产环境编译出错问题</li><li>[修复] 修复前端生产环境编译配置没有适配新版本，导致编译后的代码在 Nginx 中运行出错问题。</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2025-01-18T00-31-37Z</li></ul></li><li>依赖更新 <ul><li>[升级] alipay-sdk-java 版本升级至 4.40.33.ALL</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.780</li><li>[升级] bcpkix-jdk18on 版本升级至 1.80</li><li>[升级] bcprov-jdk18on 版本升级至 1.80</li><li>[升级] central-publishing-maven-plugin 版本升级至 0.7.0</li><li>[升级] fastjson2 版本升级至 2.0.54</li><li>[升级] mybatis 版本升级至 3.5.19</li><li>[升级] mybatis-plus 版本升级至 3.5.10</li><li>[升级] redisson 版本升级至 3.43.0</li><li>[升级] minio 版本升级至 8.5.17</li><li>[升级] springdoc 版本升级至 2.8.3</li><li>[升级] sqlite-jdbc 版本升级至 3.48.0.0</li><li>[升级] json 版本升级至 20250107</li><li>[升级] okio 版本升级至 3.10.2</li><li>[升级] logback 版本升级至 1.5.16</li><li>[升级] weixin-java 版本升级至 4.7.1.B</li></ul></li></ul><h2 id="v3-4-1-1" tabindex="-1"><a class="header-anchor" href="#v3-4-1-1"><span>v3.4.1.1</span></a></h2><ul><li>主要更新 <ul><li>[修复] 修复权限表达式列表与最新版本 Spring Security 不一致问题。</li><li>[修复] 修复前端升级依赖版本后，编译组件库失败问题。</li><li>[修复] 修复 Postgresql 数据库初始化脚本错误</li><li>[重构] 适配 Hutool 6.X 最新版本</li><li>[重构] 重构前端 Typescript 定义，适配最新版后端功能定义</li></ul></li><li>依赖更新 <ul><li>[升级] hutool 版本升级至 6.0.0-M19</li><li>[升级] springdoc 版本升级至 2.8.0</li><li>[升级] sqlite-jdbc 版本升级至 3.47.2.0</li><li>[升级] hutool 5.X 版本升级至 5.8.35</li><li>[升级] weixin java 版本升级至 4.7.0</li><li>[升级] checker-qual 版本升级至 3.48.4</li><li>[升级] json 版本升级至 20241224</li><li>[升级] sweetalert2 webjars 版本升级至 11.15.10</li><li>[升级] quasar webjars 版本升级至 2.17.6</li></ul></li></ul><h2 id="v3-4-1-0" tabindex="-1"><a class="header-anchor" href="#v3-4-1-0"><span>v3.4.1.0</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.4.1</li><li>[升级] Spring Authorization Server 版本升级至 1.4.1</li></ul></li><li>主要更新 <ul><li>[修复] 修复 Spring Authorization Server 核心数据 AccessTokenType 未保存问题。</li><li>[修复] 修复缺失 Spring Authorization Server TLS 相关控制属性问题</li><li>[修复] 修复前端工程升级至 Vite6 后编译出错问题</li><li>[修复] 修复前端使用新版 Vite 编译后样式引入错误，提示需要安装模块问题。</li><li>[修复] 修复单体版本 Swagger 配置错误导致启动异常问题</li><li>[修复] 修复数据库初始化脚本错误</li><li>[优化] 采用 JDK 17 新语法优化 Spring Authorization Server 核心服务代码</li><li>[安全] 修复安全漏洞 CVE-2024-47535</li><li>[安全] 修复安全漏洞 CVE-2024-12798</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-12-18T13-15-44Z</li></ul></li><li>其它更新 <ul><li>[升级] alipay-sdk-java 版本升级至 4.40.21.ALL</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.780</li><li>[升级] quasar webjars 版本升级至 2.17.5</li><li>[升级] redisson 版本升级至 3.41.0</li><li>[升级] sweetalert2 webjars 版本升级至 11.15.3</li><li>[升级] lettuce 版本升级至 6.5.1.RELEASE</li><li>[升级] logback 版本升级至 1.5.15</li></ul></li></ul><h2 id="v3-4-0-1" tabindex="-1"><a class="header-anchor" href="#v3-4-0-1"><span>v3.4.0.1</span></a></h2><ul><li>主要更新 <ul><li>[修复] 修复单体版开启和关闭 Swagger 不生效问题。</li><li>[修复] 修复使用 Jackson @JsonFormat 注解序列化时间差8小时问题。</li><li>[优化] 改用 Spring Authorization Server 新版本标准方式优化自定义扩展授权码模式 Provider</li><li>[重构] 重构数据库审计核心代码逻辑，去除原有多重判断繁琐实现。</li></ul></li><li>依赖更新 <ul><li>[升级] aliyun-java-sdk-core 版本升级至 4.7.3</li><li>[升级] alipay-sdk-java 版本升级至 4.40.13.ALL</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.779</li><li>[升级] commons-text 版本升级至 1.13.0</li><li>[升级] justauth 版本升级至 1.16.7</li><li>[升级] redisson 版本升级至 3.40.2</li><li>[升级] weixin-java 版本升级至 4.6.9.B</li></ul></li></ul><h2 id="v3-4-0-0" tabindex="-1"><a class="header-anchor" href="#v3-4-0-0"><span>v3.4.0.0</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.4.0</li><li>[升级] Spring Boot Admin 版本升级至 3.4.1</li><li>[升级] Spring Cloud 版本升级至 2024.0.0</li><li>[升级] Spring Authorization Server 版本升级至 1.4.0</li><li>[回滚] Spring Cloud Alibaba 版本回滚至 2023.0.1.2</li></ul></li><li>其它更新 <ul><li>[新增] 新增 RestClient 配置并与 RestTemplate 融合，以RestTemplate 作为 RestClient 基础引擎。</li><li>[修复] 修复 Hibernate 6.6 对于指定主键的实体无法保存，抛出 <code>Row was updated or deleted by another transaction (or unsaved-value mapping was incorrect)</code> 异常错误。</li><li>[修复] 修复 Spring Cloud Bus 原始服务信息定义错误导致消息无法发送问题。</li><li>[修复] 修复以 import 方式导入 springdoc 依赖，会出现 ui 包与 api 包版本不同，从而导致服务启动错误问题。</li><li>[修复] 修复 Gateway 服务不兼容新版 Springdoc 引起的启动异常问题。</li><li>[重构] 添加 webjars-locator-lite 依赖，改用 webjars lite 方式替换原有 webjars 资源加载方式</li><li>[重构] 改用最新的 DelegatingAuthenticationConverter 类替换被标记为过时的 DelegatingAuthenticationConverter 类。</li><li>[重构] 适配最新的 KeyStoreKeyFactory 包路径</li><li>[重构] 重构 WebClient 配置，去除无用的配置内容</li><li>[重构] 变更 HttpClient 与 Openfeign 使用相同配置方式，改用各自独立的方式进行配置。</li><li>[重构] 改用 Openfeign SpringMvcContract 新接口定义重写原有配置和方法。</li><li>[重构] 重构 Snowflake 主键生成器代码及命名</li><li>[重构] 重构所有 IdGenerator 命名，去除无用的 Exception 抛出代码。</li><li>[重构] 调整数据相关模块中重复的代码位置，减少不必要的重复定义类</li></ul></li><li>依赖更新 <ul><li>[升级] alipay-sdk-java 版本升级至 4.40.8.ALL</li><li>[升级] mybatis 版本升级至 3.5.17</li><li>[升级] redisson 版本升级至 3.40.0</li><li>[升级] software.amazon.awssdk 版本升级至 2.29.29</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.33.5</li><li>[升级] weixin-java 版本升级至 4.6.8.B</li><li>[升级] checker-qual 版本升级至 3.48.3</li><li>[升级] springdoc 版本升级至 2.7.0</li></ul></li></ul>',10)]))}const p=l(r,[["render",n],["__file","changelog.html.vue"]]),d=JSON.parse('{"path":"/others/log/changelog.html","title":"v3.4.X","lang":"zh-CN","frontmatter":{"icon":"bars-staggered","title":"v3.4.X","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"v3.4.1.2 主要更新 [新增] 前端新增 VConsole 开发调试工具。可以像小程序一样调试前端页面。 [新增] 前端新增生产环境保护机制。生产环境前端会禁用 F12 以及右键菜单禁用。 [修复] 修复前端老旧代码引起工程生产环境编译出错问题 [修复] 修复前端生产环境编译配置没有适配新版本，导致编译后的代码在 Nginx 中运行出错问题。 [...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/others/log/changelog.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”基于Apache2.0开源协议的企业级微服务"}],["meta",{"property":"og:title","content":"v3.4.X"}],["meta",{"property":"og:description","content":"v3.4.1.2 主要更新 [新增] 前端新增 VConsole 开发调试工具。可以像小程序一样调试前端页面。 [新增] 前端新增生产环境保护机制。生产环境前端会禁用 F12 以及右键菜单禁用。 [修复] 修复前端老旧代码引起工程生产环境编译出错问题 [修复] 修复前端生产环境编译配置没有适配新版本，导致编译后的代码在 Nginx 中运行出错问题。 [..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-20T09:02:24.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2025-01-20T09:02:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"v3.4.X\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-20T09:02:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://gitee.com/dromara/dante-cloud\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"v3.4.1.2","slug":"v3-4-1-2","link":"#v3-4-1-2","children":[]},{"level":2,"title":"v3.4.1.1","slug":"v3-4-1-1","link":"#v3-4-1-1","children":[]},{"level":2,"title":"v3.4.1.0","slug":"v3-4-1-0","link":"#v3-4-1-0","children":[]},{"level":2,"title":"v3.4.0.1","slug":"v3-4-0-1","link":"#v3-4-0-1","children":[]},{"level":2,"title":"v3.4.0.0","slug":"v3-4-0-0","link":"#v3-4-0-0","children":[]}],"git":{"createdTime":1737363744000,"updatedTime":1737363744000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":4.85,"words":1455},"filePathRelative":"others/log/changelog.md","localizedDate":"2025年1月20日","autoDesc":true}');export{p as comp,d as data};
