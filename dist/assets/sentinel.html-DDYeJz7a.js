import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as i,o as a}from"./app-CMlKioQF.js";const n={};function l(d,t){return a(),s("div",null,t[0]||(t[0]=[i(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>基于最新版 <code>Spring Cloud Alibaba Sentinel Dashboard</code> 扩展 改造，支持微服务流量监控数据持久化存储到 <code>Influxdb</code> 时序数据库，支持通过 <code>Sentinel Dashboard</code> 界面存储流量控制配置至至 <code>Nacos</code> 中。</p><p>时序数据存储基于 Influxdb v1.X 版本实现，Nacos 支持 v1.X 和 v2.X 版本。默认使用 <code>Sentinel Dashboard</code> 原有内存方式存储，可通过配置参数动态开启或关闭 <code>Influxdb</code> 和 <code>Nacos</code> 存储机制。</p><h2 id="下载方法" tabindex="-1"><a class="header-anchor" href="#下载方法"><span>下载方法</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quay.io/herodotus-cloud/sentinel-dashboard:tagname</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="启动方法" tabindex="-1"><a class="header-anchor" href="#启动方法"><span>启动方法</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sentinel</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 8858:8858</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  quay.io/herodotus-cloud/sentinel-dashboard:tagname</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="环境变量参数" tabindex="-1"><a class="header-anchor" href="#环境变量参数"><span>环境变量参数</span></a></h2><h3 id="sentinel-相关参数" tabindex="-1"><a class="header-anchor" href="#sentinel-相关参数"><span>Sentinel 相关参数</span></a></h3><table><thead><tr><th>变量</th><th>默认值</th><th>是否必需</th><th>说明</th></tr></thead><tbody><tr><td>JAVA_OPTS</td><td></td><td>false</td><td>JVM相关运行参数</td></tr><tr><td>SENTINEL_ADMIN_USERNAME</td><td>sentinel</td><td>false</td><td>Sentinel Dashboard 管理员用户名</td></tr><tr><td>SENTINEL_ADMIN_PASSWORD</td><td>sentinel</td><td>false</td><td>Sentinel Dashboard 管理员密码</td></tr></tbody></table><h3 id="influxdb-相关参数" tabindex="-1"><a class="header-anchor" href="#influxdb-相关参数"><span>InfluxDB 相关参数</span></a></h3><table><thead><tr><th>变量</th><th>默认值</th><th>是否必需</th><th>说明</th></tr></thead><tbody><tr><td>INFLUXDB_URL</td><td></td><td>false</td><td>InfluxDB 连接地址，格式：http(s)😕/ip:port</td></tr><tr><td>INFLUXDB_USERNAME</td><td></td><td>false</td><td>InfluxDB 用户名</td></tr><tr><td>INFLUXDB_PASSWORD</td><td></td><td>false</td><td>InfluxDB 密码</td></tr><tr><td>INFLUXDB_DATABASE</td><td></td><td>false</td><td>IInfluxDB 数据库</td></tr></tbody></table><p><strong>注意：</strong> 需要同时设置 <code>INFLUXDB_URL</code>、<code>INFLUXDB_USERNAME</code> 、<code>INFLUXDB_PASSWORD</code> 、<code>INFLUXDB_DATABASE</code> 这四个参数，才会开启 InfluxDB 存储方式，否则还是使用默认的内存存储方式。</p><h3 id="nacos-相关参数" tabindex="-1"><a class="header-anchor" href="#nacos-相关参数"><span>Nacos 相关参数</span></a></h3><table><thead><tr><th>变量</th><th>默认值</th><th>是否必需</th><th>说明</th></tr></thead><tbody><tr><td>NACOS_SERVER_ADDRESS</td><td></td><td>false</td><td>Nacos Server 地址，格式：<a href="http://ip:port" target="_blank" rel="noopener noreferrer">http://ip:port</a></td></tr><tr><td>NACOS_CONFIG_DATA_ID_SUFFIX</td><td>-flow-rules</td><td>false</td><td>Nacos 存储配置Data ID后缀名，用于区分配置的用途。例如：xxx-service-flow-rules</td></tr><tr><td>NACOS_CONFIG_NAMESPACE</td><td></td><td>false</td><td>Nacos 命名空间设置，对应 Nacos 的命名空间的ID，而不是命名空间的名称</td></tr><tr><td>NACOS_CONFIG_GROUP</td><td>sentinel</td><td>false</td><td>Nacos 配置 Group</td></tr><tr><td>NACOS_CONFIG_TYPE</td><td>json</td><td>false</td><td>Nacos 配置类型，具体参见：com.alibaba.nacos.api.config.ConfigType</td></tr><tr><td>NACOS_ADMIN_USERNAME</td><td>nacos</td><td>false</td><td>Nacos 用户名（开启认证后才需要配置）</td></tr><tr><td>NACOS_ADMIN_PASSWORD</td><td>nacos</td><td>false</td><td>Nacos 密码（开启认证后才需要配置）</td></tr><tr><td>NACOS_AUTH_ENABLED</td><td>false</td><td>false</td><td>Nacos 是否开启认证</td></tr><tr><td>NACOS_TOKEN_TTL</td><td>18000</td><td>false</td><td>Nacos Token 有效时间（开启认证后才需要配置）</td></tr></tbody></table><p><strong>注意：</strong> 设置 <code>NACOS_SERVER_ADDRESS</code>参数，才会开启 Nacos 存储方式，否则还是使用默认的内存存储方式。</p><h2 id="docker-compose-示例" tabindex="-1"><a class="header-anchor" href="#docker-compose-示例"><span>Docker-compose 示例</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  sentinel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">quay.io/herodotus-cloud/sentinel-dashboard:latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sentinel-dashboard</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      SENTINEL_ADMIN_USERNAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">herodotus</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      SENTINEL_ADMIN_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">herodotus</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      INFLUXDB_URL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">http://127.0.0.1:8086</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      INFLUXDB_USERNAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">herodotus</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      INFLUXDB_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">herodotus</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      INFLUXDB_DATABASE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sentinel</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      NACOS_SERVER_ADDRESS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">http://127.0.0.1:8848</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      NACOS_CONFIG_DATA_ID_SUFFIX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-flow-rules</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;8858:8858&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const o=e(n,[["render",l],["__file","sentinel.html.vue"]]),p=JSON.parse('{"path":"/ecosphere/sentinel.html","title":"Dante Sentinel Dashboard","lang":"zh-CN","frontmatter":{"icon":"cube","title":"Dante Sentinel Dashboard","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"介绍 基于最新版 Spring Cloud Alibaba Sentinel Dashboard 扩展 改造，支持微服务流量监控数据持久化存储到 Influxdb 时序数据库，支持通过 Sentinel Dashboard 界面存储流量控制配置至至 Nacos 中。 时序数据存储基于 Influxdb v1.X 版本实现，Nacos 支持 v1.X 和...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/ecosphere/sentinel.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"Dante Sentinel Dashboard"}],["meta",{"property":"og:description","content":"介绍 基于最新版 Spring Cloud Alibaba Sentinel Dashboard 扩展 改造，支持微服务流量监控数据持久化存储到 Influxdb 时序数据库，支持通过 Sentinel Dashboard 界面存储流量控制配置至至 Nacos 中。 时序数据存储基于 Influxdb v1.X 版本实现，Nacos 支持 v1.X 和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T15:46:11.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-18T15:46:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dante Sentinel Dashboard\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T15:46:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.vip\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"下载方法","slug":"下载方法","link":"#下载方法","children":[]},{"level":2,"title":"启动方法","slug":"启动方法","link":"#启动方法","children":[]},{"level":2,"title":"环境变量参数","slug":"环境变量参数","link":"#环境变量参数","children":[{"level":3,"title":"Sentinel 相关参数","slug":"sentinel-相关参数","link":"#sentinel-相关参数","children":[]},{"level":3,"title":"InfluxDB 相关参数","slug":"influxdb-相关参数","link":"#influxdb-相关参数","children":[]},{"level":3,"title":"Nacos 相关参数","slug":"nacos-相关参数","link":"#nacos-相关参数","children":[]}]},{"level":2,"title":"Docker-compose 示例","slug":"docker-compose-示例","link":"#docker-compose-示例","children":[]}],"git":{"createdTime":1734536771000,"updatedTime":1734536771000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":1.87,"words":562},"filePathRelative":"ecosphere/sentinel.md","localizedDate":"2024年12月18日","autoDesc":true}');export{o as comp,p as data};