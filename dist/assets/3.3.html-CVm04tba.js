import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as t}from"./app-CMlKioQF.js";const r={};function s(n,l){return t(),a("div",null,l[0]||(l[0]=[e('<h2 id="v3-3-6-1" tabindex="-1"><a class="header-anchor" href="#v3-3-6-1"><span>v3.3.6.1</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Cloud 版本升级至 2023.0.4</li></ul></li><li>其它更新 <ul><li>[优化] 删除服务中多余的配置文件，以避免产生不必要的误解。</li><li>[安全] 修复安全漏洞 CVE-2024-47072</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-11-07T00-52-20Z</li><li>[升级] kafka docker 镜像版本升级至 3.9.0</li></ul></li><li>依赖更新 <ul><li>[升级] alipay-sdk-java 版本升级至 4.39.282.ALL</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.779</li><li>[升级] minio 版本升级至 8.5.14</li><li>[升级] sqlite-jdbc 版本升级至 3.47.1.0</li><li>[升级] hutool5 版本升级至 5.8.34</li></ul></li></ul><h2 id="v3-3-6-0" tabindex="-1"><a class="header-anchor" href="#v3-3-6-0"><span>v3.3.6.0</span></a></h2><ul><li>重要声明 <ul><li>[声明] 自 <strong>v3.3.6.0</strong> 版本起，Dante Cloud 以及 Dante OSS 和 Dante Engine 子项目开源协议 <strong>【永久】</strong> 变更为 Apache License Version 2.0。</li></ul></li><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.3.6</li><li>[升级] Spring Boot Admin 版本升级至 3.3.6</li><li>[升级] Spring Cloud Alibaba 版本升级至 2023.0.1.3</li></ul></li><li>其它更新 <ul><li>[重构] 修改配置中新配置读取方式，适配最新版本 Spring Cloud Alibaba。</li><li>[优化] 优化 dependencies 版本定义顺序，方便按照英文字母顺序查找定义</li><li>[升级] 升级 Antisamy XSS 防护配置</li></ul></li><li>依赖更新 <ul><li>[升级] antisamy 版本升级至 1.7.7</li><li>[升级] alipay-sdk-java 版本升级至 4.39.271.ALL</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.778</li><li>[升级] bcpkix-jdk18on 版本升级至 1.79</li><li>[升级] bcprov-jdk18on 版本升级至 1.79</li><li>[升级] blaze-persistence 版本升级至 1.6.14</li><li>[升级] commons-io 版本升级至 2.18.0</li><li>[升级] mapstruct-processor 版本升级至 1.6.3</li><li>[升级] quasar 版本升级至 2.17.4</li><li>[升级] vue 版本升级至 3.5.13</li><li>[升级] weixin-java 版本升级至 4.6.7.B</li></ul></li></ul><h2 id="v3-3-5-1" tabindex="-1"><a class="header-anchor" href="#v3-3-5-1"><span>v3.3.5.1</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot Admin 版本升级至 3.3.5</li><li>[修复] 修复基于 Postgresql 封装的 Nacos 镜像，历史版本数据查询失败问题。fix: #IB0BBE</li></ul></li><li>其它更新 <ul><li>[修复] 修复 Mybatis Plus 依赖版本错误，导致 Mybatis Plus 使用异常错误</li><li>[优化] 优化 Message Core 模块依赖的合理性，去除不必要的 optional 设置</li><li>[优化] 优化 Nacos 镜像挂载映射，增加 logs 目录映射，方便查阅 Nacos 使用中是否存在问题</li><li>[优化] 适配 Hutool 6.0.0-M18</li><li>[安全] 修复 CVE-2024-31573 安全漏洞</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-10-29T16-01-48Z</li></ul></li><li>依赖更新 <ul><li>[升级] archetype-packaging 版本升级至 3.3.1</li><li>[升级] maven-archetype-plugin 版本升级至 3.3.1</li><li>[升级] minio 版本升级至 8.5.13</li><li>[升级] quasar webjars 版本升级至 2.17.1</li><li>[升级] xmlunit2 版本升级至 2.10.0</li><li>[升级] alipay-sdk-java 版本升级至 4.39.246.All</li><li>[升级] checker-qual 版本升级至 3.48.2</li><li>[升级] sweetalert2 webjars 版本升级至 11.14.4</li></ul></li></ul><h2 id="v3-3-5-0" tabindex="-1"><a class="header-anchor" href="#v3-3-5-0"><span>v3.3.5.0</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.3.5</li><li>[升级] Spring Authorization Server 版本升级至 1.3.3</li><li>[重构] 开源版本工程代码包名由 cn.herodotus 修改为 org.dromara，与社区项目保持一致</li><li>[新增] 新增服务间文件上传和下载传输机制，支持 OpenFeign 和 Grpc 两种模式，通过热插拔模式切换。</li><li>[新增] 新增 OSS 文件操作 GRPC 定义模块</li></ul></li><li>其它更新 <ul><li>[重构] 重构 AWS SDK V2 高阶 OSS 操作代码，增加高阶操作单元测试。</li><li>[重构] 服务内文件基本操作变更为使用 NIO 操作</li><li>[重构] Mybatis Plus 修改为 Bom 引入，同时适配最新版本 Mybatis Plus</li><li>[修复] 修复 Kafka Docker Compose 配置错误，导致 Kafka 镜像启动抛错问题</li><li>[修复] 修复前端 Vite CSS 样式配置不兼容，导致页面启动抛错问题。</li><li>[修复] 修复微服务环境下，分布式事件使用错误导致字典聚合数据汇总异常问题</li><li>[修复] 修复使用 AWS SDK V2 创建的预签名地址中，仍旧使用 AWS 默认服务地址不会定位至自定义主机问题</li><li>[优化] 优化 OSS 模型基础操作类命名，以便更容易的区分代码用途。</li><li>[优化] 优化 OSS 模块代码，池化 S3Presigner 对象管理提升效能。</li><li>[优化] 优化 OSS 模块代码，提取独立的预签名操作 Service</li><li>[升级] Liberica JDK 基础镜像版本分别升级至 17.0.13-12 和 21.0.5-11</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-10-13T13-34-11Z</li></ul></li><li>依赖更新 <ul><li>[升级] aws-java-sdk-s3 版本升级至 1.12.777</li><li>[升级] software.amazon.awssdk 版本升级至 2.28.29</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.31.3</li><li>[升级] alipay-sdk-java 版本升级至 4.39.234.ALL</li><li>[升级] mysql 版本升级至 9.1.0</li><li>[升级] mybatis plus 版本升级至 3.5.9</li><li>[升级] sqlite-jdbc 版本升级至 3.47.0.0</li><li>[升级] quasar webjars 版本升级至 2.17.1</li><li>[升级] sweetalert2 webjars 版本升级至 11.14.4</li></ul></li></ul><h2 id="v3-3-4-3" tabindex="-1"><a class="header-anchor" href="#v3-3-4-3"><span>v3.3.4.3</span></a></h2><ul><li>主要更新 <ul><li>[新增] 新增客户端动态注册业务信息同步创建功能</li><li>[新增] Mqtt 用户账号管理功能</li><li>[新增] 新增 NoSQL 相关组件自动配置 Starter。</li><li>[新增] 新增 Influxdb 列式存储和行式存储两种存储设备上报数据支持。</li><li>[修复] 修复自动配置类引入日志标识 Class 错误问题。</li><li>[修复] grpc 编译出现 error: emptyList() is not public in LazyStringArrayList; cannot be accessed from outside package com.google.protobuf.LazyStringArrayList.emptyList() 问题。fix: #IAWQ4C</li><li>[修复] 修复 Docker Compose 镜像地址配置错误问题。fix: #IAXUFB</li><li>[修复] 修复 Influxdb2 默认配置与系统提供 Docker Compose 默认配置不一致，导致 Influxdb 测试代码部分通过问题。</li><li>[修复] 修复前端 <code>Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0</code> 告警错误</li><li>[重构] 重构服务本地文件管理定义以及证书生成逻辑代码</li><li>[优化] 对照阿里云物联网的使用完善产品和设备管理的接口实现逻辑。</li><li>[优化] 优化 OIDC 客户端动态注册逻辑，更好的兼容物联网设备管理需求。</li><li>[优化] 去除重复定义的 ApplicationEvent 消息通道定义，改用统一定义消息通道</li><li>[优化] 优化 Emqx 客户端状态检测策略化配置方式</li></ul></li><li>其它更新 <ul><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-10-13T13-34-11Z</li><li>[升级] emqx 镜像版本升级至 5.8.0</li></ul></li><li>依赖更新 <ul><li>[升级] grpc 版本升级至 1.68.0</li><li>[升级] protobuf 版本升级至 3.25.5</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.775</li><li>[升级] software.amazon.awssdk 版本升级至 2.28.25</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.31.3</li><li>[升级] alipay-sdk-java 版本升级至 4.39.234.ALL</li><li>[升级] sweetalert2 webjars 版本升级至 11.14.3</li></ul></li></ul><h2 id="v3-3-4-2" tabindex="-1"><a class="header-anchor" href="#v3-3-4-2"><span>v3.3.4.2</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot Admin 版本升级至 3.3.4</li><li>[升级] Debezium 版本升级至 3.0</li><li>[升级] Camunda 版本升级至 7.22.0</li><li>[升级] Nacos 版本升级至 2.4.3</li><li>[重构] 单体版系统合并至微服务版本工程中。可以在同一工程启动单体版本或者微服务版。解决原有模式下，需要单独编译微服务版，再在另一个工程中启动单体版。提升开发和使用的便捷性。</li></ul></li><li>其它更新 <ul><li>[新增] 新增服务本地常用文件管理机制</li><li>[新增] 新增跨模块跨服务认证开启或关闭控制单元</li><li>[修复] 重新构建支持 Postgresql 的 Nacos Server 镜像。修复创建命名空间失败问题。</li><li>[修复] 修复数据加密策略配置未生效问题</li><li>[重构] 重构部分 OAuth2 核心代码，提升代码模块的内聚性降低代码耦合</li><li>[重构] 重构物联网设备动态开启和关闭认证逻辑，简化和去除原有采用的多重事件跳转方式。</li><li>[优化] 合并部分系统配置参数类定义，增强配置参数划分和归类的合理性</li><li>[优化] 删除无用重复的常量定义</li><li>[优化] 提取通用 Spring ParameterizedTypeReference 定义</li><li>[优化] 自定义函数式接口 ListConverter 代码逻辑，去除 IDE 空值警告</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-10-02T17-50-41Z</li><li>[升级] loki docker 镜像版本升级至 3.2.0</li><li>[升级] promtail docker 镜像版本升级至 3.2.0</li><li>[升级] grafana docker 镜像版本升级至 11.2.2</li><li>[升级] zipkin docker 镜像版本升级至 3.4.2</li></ul></li><li>依赖更新 <ul><li>[升级] redisson 版本升级至 3.37.0</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.773</li><li>[升级] software.amazon.awssdk 版本升级至 2.28.21</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.31.3</li><li>[升级] hutool 版本升级至 6.0.0-M17</li><li>[升级] alipay-sdk-java 版本升级至 4.39.218.ALL</li><li>[升级] checker-qual 版本升级至 3.48.1</li><li>[升级] nacos-client 版本升级至 2.4.3</li><li>[升级] opengauss-jdbc 版本升级至 6.0.0-og</li><li>[升级] sweetalert2 版本升级至 11.14.2</li><li>[升级] vue webjars 版本升级至 3.5.12</li><li>[升级] alipay-sdk-java 版本升级至 4.39.223.ALL</li></ul></li></ul><h2 id="v3-3-4-1" tabindex="-1"><a class="header-anchor" href="#v3-3-4-1"><span>v3.3.4.1</span></a></h2><ul><li>主要更新 <ul><li>[修复] 修复分布式聚合数据字典前端代码在数据类型为字符串时取值错误问题。</li><li>[新增] 新增多种 NoSQL 数据源配置开启条件及注解</li><li>[重构] 重构核心消息模块，将物模型Mqtt 与系统默认 Mqtt 代码剥离，提升核心消息模块的独立性与适用性，减少代码间耦合。</li><li>[重构] 迁移 influxdb 相关模块至 stirrup-nosql 模块下</li></ul></li><li>其它更新 <ul><li>[优化] 中央库发布插件修改为使用新版 sonatype central 专用 central-publishing-maven-plugin。同步修改 github action 脚本。fix: #IAUTB7</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-09-22T00-33-43Z</li></ul></li><li>依赖更新 <ul><li>[升级] archetype-packaging 版本升级至 3.3.0</li><li>[升级] maven-archetype-plugin 版本升级至 3.3.0</li><li>[升级] maven-gpg-plugin 版本升级至 3.2.7</li><li>[升级] guava 版本升级至 33.3.1</li><li>[升级] json-schema-validator 版本升级至 1.5.2</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.772</li><li>[升级] software.amazon.awssdk 版本升级至 2.28.11</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.31.3</li><li>[升级] alipay-sdk-java 版本升级至 4.39.218.ALL</li><li>[升级] aliyun-java-sdk-core 版本升级至 4.7.2</li><li>[升级] sweetalert2 webjars 版本升级至 11.14.1</li><li>[升级] vue webjars 版本升级至 3.5.10</li><li>[升级] camunda 版本升级至 7.22.0-alpha6</li><li>[升级] sqlite-jdbc 版本升级至 3.46.1.3</li><li>[升级] aliyun-java-sdk-core 版本升级至 4.7.2</li></ul></li></ul><h2 id="v3-3-4-0" tabindex="-1"><a class="header-anchor" href="#v3-3-4-0"><span>v3.3.4.0</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.3.4</li><li>[新增] 新增数据字典批量获取接口以及前端调用方式。</li><li>[新增] 新增前端数据字典批量去重功能及字典已获取判断功能，解决字典数据频繁或重复获取问题</li></ul></li><li>其它更新 <ul><li>[新增] 新增物模型数据属性单位列表</li><li>[新增] 新增表单国内用法 label 组件</li><li>[修复] 优化前端数据字典数据加载机制，解决数据字典随用随取因读取时机错误导致的数据加载异常以及控制台抛错问题。</li><li>[修复] 修复前端批量获取字典去重校验错误问题</li><li>[修复] 修复前端树形输入组件初始值设置错误导致异常触发不必要的查询请求问题</li><li>[修复] 前端组件编译出现：Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0 问题，fix: #IAS8HE</li><li>[优化] 重命名前端自定义数据字典类型定义</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-09-13T20-26-02Z</li></ul></li><li>依赖更新 <ul><li>[升级] mapstruct-processor 版本升级至 1.6.2</li><li>[升级] maven-gpg-plugin 版本升级至 3.2.6</li><li>[升级] commons-io 版本升级至 2.17.0</li><li>[升级] redisson 版本升级至 3.36.0</li><li>[升级] jetcache 版本升级至 2.7.7</li><li>[升级] fastjson2 版本升级至 2.0.53</li><li>[升级] mybatis-plus-boot-starter 版本升级至 3.5.8</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.772</li><li>[升级] software.amazon.awssdk 版本升级至 2.28.3</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.31.1</li><li>[升级] alipay-sdk-java 版本升级至 4.39.208.ALL</li><li>[升级] weixin-java 版本升级至 4.6.5.B</li><li>[升级] camunda 版本升级至 7.22.0-alpha5</li><li>[升级] sweetalert2 webjars 版本升级至 11.14.0</li><li>[升级] vue webjars 版本升级至 3.5.6</li><li>[升级] quasar 版本升级至 2.17.0</li><li>[升级] okio 版本升级至 3.9.1</li><li>[升级] snappy-java 版本升级至 1.1.10.7</li></ul></li></ul><h2 id="v3-3-3-2" tabindex="-1"><a class="header-anchor" href="#v3-3-3-2"><span>v3.3.3.2</span></a></h2><ul><li>主要更新 <ul><li>[升级] Nacos 版本升级至 2.4.2</li><li>[升级] 基于 Postgresql 作为存储的自主封装 Nacos 镜像升级至 2.4.2 并发布至 Docker Hub 和 Quay IO</li></ul></li><li>其它更新 <ul><li>[优化] 前端优化自定义属性组件数据显示方法，解决指定数据节点时，输入框显示信息需要额外查询问题。</li><li>[优化] 去除前端无用的代码以及菜单信息，避免不要信息对使用和开发的干扰</li><li>[优化] 优化 ResourceResolver 资源定位器，增强更多环境的适应性。</li><li>[优化] 清理数据库初始化脚本中无用的菜单及菜单角色数据。</li><li>[新增] 新增物模型反序列化测试用例</li><li>[修复] 修复数据字典列表以及调用代码，在使用 hooks 方式时，控制台抛出错误问题。</li><li>[修复] 修复加密策略自动配置使用注解错误</li><li>[修复] 修复 Servlet 环境 OpenFeign 注入条件错误</li><li>[修复] 修复主工程 groupid 与实际包名不一致问题</li><li>[修复] 修复 Jackson2Utils 在非 Spring Boot 环境下使用，会抛出异常问题</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-08-29T01-40-52Z</li><li>[升级] loki 镜像版本升级至 3.1.1</li><li>[升级] promtail 镜像版本升级至 3.1.1</li><li>[升级] tempo 镜像版本升级至 2.6.0</li></ul></li><li>依赖更新 <ul><li>[升级] aws-java-sdk-s3 版本升级至 1.12.771</li><li>[升级] software.amazon.awssdk 版本升级至 2.27.21</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.30.11</li><li>[升级] alipay-sdk-java 版本升级至 4.39.200.ALL</li><li>[升级] Hutool 6.X 版本升级至 6.0.0-M16</li><li>[升级] Hutool 5.X 版本升级至 5.8.32</li><li>[升级] okhttps 版本升级至 4.0.3</li><li>[升级] weixin-java 版本升级至 4.6.4.B</li><li>[升级] sms4j 版本升级至 3.3.3</li><li>[升级] quasar 版本升级至 2.16.11</li><li>[升级] sweetalert2 版本升级至 11.13.3</li><li>[升级] vue 版本升级至 3.5.3</li><li>[升级] checker-qual 版本升级至 3.47.0</li><li>[升级] aliyun-sdk-oss 版本升级至 3.18.1</li></ul></li></ul><h2 id="v3-3-3-1" tabindex="-1"><a class="header-anchor" href="#v3-3-3-1"><span>v3.3.3.1</span></a></h2><ul><li>主要更新 <ul><li>[新增] 新增分布式枚举数据字典聚合功能，基于 Spring Customizer 模式设计支持跨模块定义。微服务架构和单体架构均支持。</li><li>[新增] 新增数据字典“随用随取”模式，去除原有登录时全部加载至前端模式</li></ul></li><li>其它更新 <ul><li>[重构] 从主工程迁移部分代码至核心代码库，提升代码的内聚性。</li><li>[重构] 重构核心类 ServiceContextHolder，调用时不再必须使用 getInstance() 方法</li><li>[重构] 前端工程主要组件不再采用 AutoImport 方式，改为传统手工导入，代码逻辑更清晰。</li><li>[重构] 重构前端数据字典以及后端枚举值显示方式，去除之前使用的重复代码。</li><li>[修复] 修复主工程部分模块包名不统一错误</li><li>[修复] 修复手动关闭动态认证监听逻辑错误</li><li>[修复] 修复数据字典前端支持顺序错误问题</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-08-29T01-40-52Z</li></ul></li><li>依赖更新 <ul><li>[升级] software.amazon.awssdk 版本升级至 2.27.15</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.30.9</li><li>[升级] alipay-sdk-java 版本升级至 4.39.190.ALL</li></ul></li></ul><h2 id="v3-3-3-0" tabindex="-1"><a class="header-anchor" href="#v3-3-3-0"><span>v3.3.3.0</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.3.3</li><li>[升级] Spring Authorization Server 版本升级至 1.3.2</li><li>[升级] Nacos 版本升级至 2.4.1</li><li>[升级] 基于 Postgresql 作为存储的自主封装 Nacos 镜像升级至 2.4.1 并发布至 Docker Hub 和 Quay IO</li></ul></li><li>其它更新 <ul><li>[新增] 新增物联网相关页面初始化数据</li><li>[修复] 修复前端因升级 Sass 版本，运行时出现 Sass’s behavior for declarations that appear after nested rules will be changing to match the behavior specified by CSS in an upcoming version. 告警问题 fix: #IAKN93</li><li>[修复] 修复包含占位符 {} 的接口，例如：/iot/product/{id}，在线动态修改权限始终不会生效，一直报没有权限错误。</li><li>[修复] 修复涉及分页的 REST 接口，数字类型参数使用的 validation 校验注解错误。</li><li>[修复] 修复仅分布式环境使用的 Bus 消息代码，在单体式环境仍旧会配置问题</li><li>[重构] 重构前端组件代码放置目录和位置，提升代码放置合理性以及可快速定位性</li><li>[重构] 将 message-module-ability 模块合并至 message-core 模块。</li><li>[重构] 将基础消息 Starter 从核心库组件依赖迁移至主工程，方便用户根据实际切换消息队列以及相关组件。</li><li>[重构] 提取 OAuth2 相关公共消息组件 oauth2-module-message，提升消息相关代码在更多场景的适应性和使用便捷性。</li><li>[重构] 提取物联网相关代码和模块至独立工程，减少代码间相互干扰，保持主工程及核心代码库的独立性</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-08-17T01-24-54Z</li></ul></li><li>依赖更新 <ul><li>[升级] guava 版本升级至 33.3.0</li><li>[升级] software.amazon.awssdk 版本升级至 2.27.10</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.30.8</li><li>[升级] sqlite-jdbc 版本升级至 3.46.1.0</li><li>[升级] vue webjars 版本升级至 3.4.38</li><li>[升级] quasar webjars 版本升级至 2.16.9</li><li>[升级] minio 版本升级至 8.5.12</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.770</li><li>[升级] alipay-sdk-java 版本升级至 4.39.183.ALL</li></ul></li></ul><h2 id="v3-3-2-2" tabindex="-1"><a class="header-anchor" href="#v3-3-2-2"><span>v3.3.2.2</span></a></h2><ul><li>主要更新 <ul><li>[新增] 新增物模型 TSL 核心实体及 JSON 解析</li><li>[新增] 新增物模型数据接收并转换为 ApplicationEvent 机制。</li><li>[新增] 新增物联网业务逻辑模块</li></ul></li><li>其它更新 <ul><li>[修复] 修复 Emqx 自动配置错误，导致代码中 ClientManager Bean 飘红问题</li><li>[修复] 修复 Emqx Webhook 转成 ApplicationEvent 配置错误</li><li>[优化] 优化消息系统消息发送事件命名，清晰事件用途和定位。</li><li>[优化] 优化Event Integration 配置，定义统一使用的 ApplicationEvent消息发送配置，减少重复定义。</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-08-03T04-33-23Z</li><li>[升级] kafka docker 镜像版本升级至 3.8.0</li></ul></li><li>依赖更新 <ul><li>[升级] mapstruct-processor 版本升级至 1.6.0</li><li>[升级] maven-gpg-plugin 版本升级至 3.2.5</li><li>[升级] influxdb-client 版本升级至 7.2.0</li><li>[升级] skywalking 相关 Agent 版本升级至 9.3.0</li><li>[升级] software.amazon.awssdk 版本升级至 2.27.5</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.30.8</li><li>[升级] hutool 6.x 版本升级至 6.0.0-M15</li><li>[升级] hutool 5.x 版本升级至 5.8.31</li><li>[升级] camunda 版本升级至 7.22.0-alpha4</li><li>[升级] sms4j 版本升级至 3.3.2</li><li>[升级] blaze-persistence 版本升级至 1.16.12</li><li>[升级] quasar webjars 版本升级至 2.16.8</li><li>[升级] sweetalert2 版本升级至 11.12.4</li><li>[升级] vue 版本升级至 3.4.37</li><li>[升级] checker-qual 版本升级至 3.46.0</li><li>[升级] snappy-java 版本升级至 1.1.10.6</li></ul></li></ul><h2 id="v3-3-2-1" tabindex="-1"><a class="header-anchor" href="#v3-3-2-1"><span>v3.3.2.1</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot Admin 版本升级至 3.3.3</li><li>[升级] 系统代码完成在最新版 Redis 7.4.0 环境运行验证。</li><li>[重构] 对象存储代码全部变更为使用 AWS S3 V2。</li><li>[重构] 不再使用单独的 OSS 工程，核心对象存储模块合并至核心组件库工程</li></ul></li><li>其它更新 <ul><li>[重构] 因API变化和差异较大，不再使用原有适配多厂商模式。</li><li>[重构] 重新封装对象存储操作 API，同时支持响应式和阻塞式环境，可根据依赖动态切换。</li><li>[修复] 修复单体版本对象存储与响应式环境对象存储不兼容问题，导致无法使用同一界面进行操作问题。</li><li>[修复] 修复 Docker 环境变量错误，导致服务镜像打包失败问题</li><li>[重构] 删除无用的对象存储依赖。</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-07-29T22-14-52Z</li><li>[升级] kafka docker 镜像版本升级至 3.8.0</li></ul></li><li>依赖更新 <ul><li>[升级] sms4j 版本升级至 3.3.0</li><li>[升级] redisson 版本升级至 3.34.1</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.767</li><li>[升级] logstash-logback-encoder 版本升级至 8.0</li><li>[升级] software.amazon.awssdk 版本升级至 2.26.27</li><li>[升级] software.amazon.awssdk.crt 版本升级至 0.30.5</li><li>[升级] sqlite-jdbc 版本升级至 3.46.0.1</li><li>[升级] aliyun-java-sdk-core 版本升级至 4.7.1</li><li>[升级] alipay-sdk-java 版本升级至 4.39.158.ALL</li><li>[升级] sweetalert2 版本升级至 11.12.3</li><li>[升级] vue 版本升级至 3.4.34</li></ul></li></ul><h2 id="v3-3-2-0" tabindex="-1"><a class="header-anchor" href="#v3-3-2-0"><span>v3.3.2.0</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.3.2</li><li>[升级] Spring Cloud Alibaba 版本升级至 2023.0.1.2</li><li>[升级] Nacos 版本升级至 2.4.0</li><li>[升级] Debezium 相关组件版本升级至 2.7</li></ul></li><li>其它更新 <ul><li>[发布] 基于 Postgresql 的、重新打包的 Nacos Server 2.4.0 已上传。</li><li>[重构] 恢复 Sentinel Dashboard 控制台懒加载配置</li><li>[修复] 修复升级至 Nacos 2.4.0 运行抛出 <code>java.lang.IllegalStateException: Could not initialize Logback Nacos logging from classpath:nacos-logback14.xml</code> 问题。fix: #IAECYY</li><li>[修复] 修复升级至 Nacos 2.4.0 运行抛出 <code>[*][variable] already has an associated action supplierl</code> 问题。fix: #IAECZ5</li><li>[修复] Sentinel 适配新版 sentinel-spring-webmvc-v6x-adapter</li><li>[升级] liberica 基础镜像版本升级至 17.0.12-10</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-07-16T23-46-41Z</li></ul></li><li>依赖升级 <ul><li>[升级] aws-java-sdk-s3 版本升级至 1.12.762</li><li>[升级] redisson 版本升级至 3.33.0</li><li>[升级] fastjson2 版升级至 2.0.52</li><li>[升级] weixin-java 版本升级至 4.6.3.B</li><li>[升级] alipay-sdk-java 版本升级至 4.39.134.ALL</li></ul></li><li>注意事项 <ul><li>Nacos 2.4.0 版本做了很多的改进和提升。但是当前版本还存在较多问题，已知问题已提交至：<a href="https://github.com/alibaba/nacos/issues/12387" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/nacos/issues/12387</a>。所以，还请谨慎使用。</li></ul></li></ul><h2 id="v3-3-1-3" tabindex="-1"><a class="header-anchor" href="#v3-3-1-3"><span>v3.3.1.3</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Cloud 版本升级至 2023.0.3</li><li>[升级] Spring Cloud Tencent 版本升级至 1.13.2-2023.0.0</li><li>[新增] 新增 QueryDsl 和 Blaze Persistence 支持，提升 JPA 查询语句编写便捷性</li></ul></li><li>其它更新 <ul><li>[修复] 修复图形验证码字体类型后缀编写错误</li><li>[重构] 合并社交登录模块和代码相关模块合并至 assistant-module-access，减少不必要的代码模块拆分。重构相关代码修改为采用更符合 Spring 规范的用法。</li><li>[升级] 更新 Antisamy XSS 防护配置</li><li>[升级] 加强 Docker Compose 服务启动顺序控制检查的准确性，以保证服务按照正确顺序启动</li><li>[升级] Kafka 镜像版本升级至 3.7.1</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-07-10T18-41-49Z</li></ul></li><li>依赖更新 <ul><li>[升级] antisamy 版本升级至 1.7.6</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.760</li><li>[升级] hutool 版本升级至 6.0.0-M14</li><li>[升级] hutool 5.x 版本升级至 5.8.29</li><li>[升级] aliyun-java-sdk-core 版本升级至 4.7.0</li><li>[升级] alipay-sdk-java 版本升级至 4.39.134.ALL</li><li>[升级] quasar webjars 版本升级至 2.16.6</li><li>[升级] sweetalert2 webjars 版本升级至 11.12.2</li><li>[升级] checker-qual 版本升级至 3.45.0</li><li>[升级] mysql 版本升级至 9.0.0</li></ul></li></ul><h2 id="v3-3-1-2" tabindex="-1"><a class="header-anchor" href="#v3-3-1-2"><span>v3.3.1.2</span></a></h2><ul><li>主要更新 <ul><li>[升级] Nacos Client 版本升级至 2.3.3</li><li>[升级] Maven 适配至 3.9.8</li></ul></li><li>其它更新 <ul><li>[重构] 微信小程序相关代码适配最新 Wxjava。获取手机号码API修改为使用 code 方式。</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-06-29T01-20-47Z</li></ul></li><li>依赖更新 <ul><li>[升级] springdoc 版本升级至 2.6.0</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.754</li><li>[升级] wxjava 版本升级至 4.6.2.B</li><li>[升级] aliyun-sdk-oss 版本升级至 3.18.0</li><li>[升级] sweetalert2 webjars 版本升级至 11.12.1</li><li>[升级] vue webjars 版本升级至 3.4.31</li></ul></li></ul><h2 id="v3-3-1-1" tabindex="-1"><a class="header-anchor" href="#v3-3-1-1"><span>v3.3.1.1</span></a></h2><ul><li>主要更新 <ul><li>[新增] 新增使用 Docker Compose 启动服务顺序控制</li><li>[新增] 新增使用 Docker Compose 打包镜像多系统环境支持</li></ul></li><li>其它更新 <ul><li>[修复] 修复使用 Docker Compose 打包镜像启动出错问题</li><li>[修复] 修复 Spring Boot Admin 数据不会上报错误</li><li>[优化] 系统使用关键镜像同步至 <a href="http://Quay.IO" target="_blank" rel="noopener noreferrer">Quay.IO</a> 方便使用。</li><li>[优化] Spring Boot Admin 相关依赖修改为 pom import 方式</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-06-22T05-26-45Z</li></ul></li><li>依赖更新 <ul><li>[升级] aws-java-sdk-s3 版本升级至 1.12.748</li><li>[升级] minio 版本升级至 8.5.11</li><li>[升级] redisson 版本升级至 3.32.0</li><li>[升级] alipay-sdk-java 版本升级至 4.39.113.ALL</li></ul></li></ul><h2 id="v3-3-1-0" tabindex="-1"><a class="header-anchor" href="#v3-3-1-0"><span>v3.3.1.0</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.3.1</li><li>[升级] Spring Authorization Server 版本升级至 1.3.1</li></ul></li><li>其它更新 <ul><li>[修复] 修复 herodotus/sentinel-dashboard 运行报错 no main manifest attribute, in sentinel-dashboard.jar fix: #IA6J53</li></ul></li><li>依赖更新 <ul><li>[升级] aws-java-sdk-s3 版本升级至 1.12.747</li><li>[升级] alipay-sdk-java 版本升级至 4.39.110.ALL</li></ul></li></ul><h2 id="v3-3-0-6" tabindex="-1"><a class="header-anchor" href="#v3-3-0-6"><span>v3.3.0.6</span></a></h2><ul><li>主要更新 <ul><li>[优化] 自主封装镜像变更为 <a href="http://Quay.Io" target="_blank" rel="noopener noreferrer">Quay.Io</a>，解决 Docker Hub 无法访问问题。</li><li>[优化] 变更 Maven Central 认证方式，解决 Maven Central Deploy 401 （Maven Central account migration）问题。</li><li>[优化] 增加基于 Github Action 的自动发布配置</li></ul></li><li>其它更新 <ul><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-06-13T22-53-53Z</li></ul></li><li>依赖更新 <ul><li>[升级] aws-java-sdk-s3 版本升级至 1.12.744</li><li>[升级] alipay-sdk-java 版本升级至 4.39.104.ALL</li><li>[升级] xnio 版本升级至 3.8.16.Final</li></ul></li></ul><h2 id="v3-3-0-5" tabindex="-1"><a class="header-anchor" href="#v3-3-0-5"><span>v3.3.0.5</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot Admin 版本升级至 3.3.2</li></ul></li><li>其它更新 <ul><li>[新增] 全新设计内置授权码模登录页面。</li><li>[新增] 实现授权码模式登录页面数据加密传输体系与“一人一码”加密体系的统一。</li><li>[新增] 新增忘记密码、用户注册页面的可定制化。配置了自定义忘记密码、用户注册页面，授权码模式页面会自动显示相关连接</li><li>[新增] 新增 NO_RESOURCE_FOUND_EXCEPTION 类型错误转换</li><li>[优化] 优化自定义 Spring Authorization Server 授权确认页面。选择了对应的 Scope 后，确认按钮才显示为可用状态。</li><li>[优化] 去除无用的 Webjars 依赖</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-06-11T03-13-30Z</li><li>[升级] 封装的 Sentinel Dashboard 镜像版本升级至 1.8.8</li></ul></li><li>依赖更新 <ul><li>[升级] aws-java-sdk-s3 版本升级至 1.12.741</li><li>[升级] mybatis-plus-boot-starter 版本升级至 3.5.7</li><li>[升级] mybatis-plus-generator 版本升级至 3.5.7</li><li>[升级] alipay-sdk-java 版本升级至 4.39.99.ALL</li><li>[升级] sweetalert2 版本升级至 11.11.1</li></ul></li></ul><h2 id="v3-3-0-4" tabindex="-1"><a class="header-anchor" href="#v3-3-0-4"><span>v3.3.0.4</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot Admin 版本升级至 3.3.1</li></ul></li><li>其它更新 <ul><li>[优化] 优化 JetCache 改为 Bom Import 模式</li><li>[优化] 优化 Hutool 改为 Bom Import 模式</li><li>[优化] 补充 Spring Authorization Server 新增认证模式以及客户端授权方法</li><li>[修复] 修复在新版本环境下，自定义数组转字符串反序列化错误，导致 OAuth2Application 管理操作失败。</li></ul></li><li>依赖更新 <ul><li>[升级] guava 版本升级至 33.2.1-jre</li><li>[升级] jetcache 版本升级至 2.7.6</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.735</li><li>[升级] fastjson2 版本升级至 2.0.51</li><li>[升级] alipay-sdk-java 版本升级至 4.39.95.ALL</li><li>[升级] checker-qual 版本升级至 3.44.0</li></ul></li></ul><h2 id="v3-3-0-3" tabindex="-1"><a class="header-anchor" href="#v3-3-0-3"><span>v3.3.0.3</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Cloud 版本升级至 2023.0.2</li><li>[新增] 新增 Kafka 3 Docker Compose 配置，无需再额外 Zookeeper（如果要使用 Debezium，建议使用 Debezium 套件，这种情况下还需要启动 Zookeeper。目前还没有找到 Debezium Kafka 单点环境脱离 Zookeeper 的方案）</li><li>[新增] 新增 opengauss 数据库支持</li><li>[新增] 新增 Nacos 鉴权配置。系统默认在 Nacos 鉴权环境运行。</li></ul></li><li>其它更新 <ul><li>[优化] 优化 Spring Data 相关配置，采用最新配置替换已过时配置</li><li>[升级] minio docker 镜像版本升级至 RELEASE.2024-05-28T17-19-04Z</li></ul></li><li>依赖更新 <ul><li>[升级] redisson 版本升级至 3.31.0</li><li>[升级] aws-java-sdk-s3 版本升级至 1.12.733</li><li>[升级] hutool 5.X 版本升级至 5.8.28</li><li>[升级] hutool 版本升级至 6.0.0-M13</li><li>[升级] alipay-sdk-java 版本升级至 4.39.86.ALL</li><li>[升级] com.baidu.aip 版本升级至 4.16.19</li><li>[升级] sqlite-jdbc 版本升级至 3.46.0.0</li><li>[升级] vue webjars 版本升级至 3.4.27</li></ul></li></ul><h2 id="v3-3-0-2" tabindex="-1"><a class="header-anchor" href="#v3-3-0-2"><span>v3.3.0.2</span></a></h2><ul><li>主要更新 <ul><li>[变更] 变更开源协议</li></ul></li><li>其它更新 <ul><li>[修复] 修改POM 文件中插入异常字符导致结构错误问题</li></ul></li><li>依赖更新 <ul><li>[升级] aws-java-sdk-s3 版本升级至 1.12.730</li><li>[升级] xnio 版本升级至 3.8.15.Final</li></ul></li></ul><h2 id="v3-3-0-1" tabindex="-1"><a class="header-anchor" href="#v3-3-0-1"><span>v3.3.0.1</span></a></h2><ul><li>变更开源协议</li></ul><h2 id="v3-3-0-0" tabindex="-1"><a class="header-anchor" href="#v3-3-0-0"><span>v3.3.0.0</span></a></h2><ul><li>主要更新 <ul><li>[升级] Spring Boot 版本升级至 3.3.0</li></ul></li></ul>',50)]))}const c=i(r,[["render",s],["__file","3.3.html.vue"]]),d=JSON.parse('{"path":"/others/log/3.3.html","title":"v3.3.X","lang":"zh-CN","frontmatter":{"icon":"bars-staggered","title":"v3.3.X","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"v3.3.6.1 主要更新 [升级] Spring Cloud 版本升级至 2023.0.4 其它更新 [优化] 删除服务中多余的配置文件，以避免产生不必要的误解。 [安全] 修复安全漏洞 CVE-2024-47072 [升级] minio docker 镜像版本升级至 RELEASE.2024-11-07T00-52-20Z [升级] kafka d...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/others/log/3.3.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"v3.3.X"}],["meta",{"property":"og:description","content":"v3.3.6.1 主要更新 [升级] Spring Cloud 版本升级至 2023.0.4 其它更新 [优化] 删除服务中多余的配置文件，以避免产生不必要的误解。 [安全] 修复安全漏洞 CVE-2024-47072 [升级] minio docker 镜像版本升级至 RELEASE.2024-11-07T00-52-20Z [升级] kafka d..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T15:46:11.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-18T15:46:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"v3.3.X\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T15:46:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.vip\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"v3.3.6.1","slug":"v3-3-6-1","link":"#v3-3-6-1","children":[]},{"level":2,"title":"v3.3.6.0","slug":"v3-3-6-0","link":"#v3-3-6-0","children":[]},{"level":2,"title":"v3.3.5.1","slug":"v3-3-5-1","link":"#v3-3-5-1","children":[]},{"level":2,"title":"v3.3.5.0","slug":"v3-3-5-0","link":"#v3-3-5-0","children":[]},{"level":2,"title":"v3.3.4.3","slug":"v3-3-4-3","link":"#v3-3-4-3","children":[]},{"level":2,"title":"v3.3.4.2","slug":"v3-3-4-2","link":"#v3-3-4-2","children":[]},{"level":2,"title":"v3.3.4.1","slug":"v3-3-4-1","link":"#v3-3-4-1","children":[]},{"level":2,"title":"v3.3.4.0","slug":"v3-3-4-0","link":"#v3-3-4-0","children":[]},{"level":2,"title":"v3.3.3.2","slug":"v3-3-3-2","link":"#v3-3-3-2","children":[]},{"level":2,"title":"v3.3.3.1","slug":"v3-3-3-1","link":"#v3-3-3-1","children":[]},{"level":2,"title":"v3.3.3.0","slug":"v3-3-3-0","link":"#v3-3-3-0","children":[]},{"level":2,"title":"v3.3.2.2","slug":"v3-3-2-2","link":"#v3-3-2-2","children":[]},{"level":2,"title":"v3.3.2.1","slug":"v3-3-2-1","link":"#v3-3-2-1","children":[]},{"level":2,"title":"v3.3.2.0","slug":"v3-3-2-0","link":"#v3-3-2-0","children":[]},{"level":2,"title":"v3.3.1.3","slug":"v3-3-1-3","link":"#v3-3-1-3","children":[]},{"level":2,"title":"v3.3.1.2","slug":"v3-3-1-2","link":"#v3-3-1-2","children":[]},{"level":2,"title":"v3.3.1.1","slug":"v3-3-1-1","link":"#v3-3-1-1","children":[]},{"level":2,"title":"v3.3.1.0","slug":"v3-3-1-0","link":"#v3-3-1-0","children":[]},{"level":2,"title":"v3.3.0.6","slug":"v3-3-0-6","link":"#v3-3-0-6","children":[]},{"level":2,"title":"v3.3.0.5","slug":"v3-3-0-5","link":"#v3-3-0-5","children":[]},{"level":2,"title":"v3.3.0.4","slug":"v3-3-0-4","link":"#v3-3-0-4","children":[]},{"level":2,"title":"v3.3.0.3","slug":"v3-3-0-3","link":"#v3-3-0-3","children":[]},{"level":2,"title":"v3.3.0.2","slug":"v3-3-0-2","link":"#v3-3-0-2","children":[]},{"level":2,"title":"v3.3.0.1","slug":"v3-3-0-1","link":"#v3-3-0-1","children":[]},{"level":2,"title":"v3.3.0.0","slug":"v3-3-0-0","link":"#v3-3-0-0","children":[]}],"git":{"createdTime":1734536771000,"updatedTime":1734536771000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":22.48,"words":6743},"filePathRelative":"others/log/3.3.md","localizedDate":"2024年12月18日","autoDesc":true}');export{c as comp,d as data};
