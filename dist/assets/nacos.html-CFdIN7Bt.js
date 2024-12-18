import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as a,o as t}from"./app-CMlKioQF.js";const n={};function r(l,s){return t(),i("div",null,s[0]||(s[0]=[a(`<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p>Dante Cloud 自开源以来一直支持多数据的切换。对于使用 MySQL 的朋友来说，不存在部署多个数据库的问题。但是，对于使用其它数据库（比如：Postgresql）的朋友来说，部署 Dante Cloud 就需要部署两种数据库，因为 Nacos 默认只支持 MySQL。虽然，自 Nacos 2.2.0 版本开始，Nacos 已经支持以插件的方式扩展数据库存储类型，但是官方 Nacos 的 Docker 还是只支持 MySQL。</p><p>所以，为了方便用户的使用，Dante Cloud 基于 Nacos 官方 Postgresql 数据库插件和官方代码，重新构建打包了支持 Postgresql 数据库的 Nacos Docker 镜像 <code>herodotus/nacos-server</code>，并已经上传至 Docker Hub。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>该版本 Nacos Docker 镜像仅支持 Postgresql，不支持的多数据库的切换。如需使用 MySQL 版本，直接使用官方镜像即可。</p></div><p>想要使用 <code>herodotus/nacos-server</code> 也非常简单，对现有 Docker Compose 进行简单修改即可</p><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>Docker Compose</span></a></h2><p>使用 Docker Compose 运行，示例脚本参见：</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  nacos-postgresql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">herodotus/nacos-server:v2.3.2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos-postgresql</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      MODE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">standalone</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      SPRING_DATASOURCE_PLATFORM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">postgresql</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      POSTGRESQL_SERVICE_HOST</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">192.168.101.10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      POSTGRESQL_SERVICE_PORT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">15432</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      POSTGRESQL_SERVICE_USER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      POSTGRESQL_SERVICE_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      POSTGRESQL_SERVICE_DB_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      NACOS_AUTH_IDENTITY_KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">serverIdentity</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      NACOS_AUTH_IDENTITY_VALUE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">security</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      NACOS_AUTH_TOKEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SecretKey012345678901234567890123456789012345678901234567890123456789</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #      NACOS_AUTH_ENABLE: true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">D:\\\\local-cached\\\\docker-volumes\\\\nacos\\\\datas:/home/nacos/data</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;8848:8848&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;9848:9848&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;9849:9849&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>因近期屏蔽了 Docker Hub 的访问，Dante Cloud 在 <a href="http://Quay.IO" target="_blank" rel="noopener noreferrer">Quay.IO</a> 提供了备份镜像，国内可直接访问。将 image 名称从 <code>herodotus/nacos-server</code> 更换为 <code>quay.io/herodotus-cloud/nacos-server</code> 即可</p></div><h2 id="变量说明" tabindex="-1"><a class="header-anchor" href="#变量说明"><span>变量说明</span></a></h2><p>参考 Nacos MySQL 相关 Docker 环境变量，增加了用于支持 Postgresql 的环境变量</p><table><thead><tr><th>变量</th><th>默认值</th><th>用途</th></tr></thead><tbody><tr><td>POSTGRESQL_SERVICE_HOST</td><td>-</td><td>Postgresql 数据库 IP 地址</td></tr><tr><td>POSTGRESQL_SERVICE_PORT</td><td>5432</td><td>Postgresql 数据库端口</td></tr><tr><td>POSTGRESQL_SERVICE_DB_NAME</td><td>-</td><td>Nacos postgresql 数据库名称</td></tr><tr><td>POSTGRESQL_SERVICE_USER</td><td>-</td><td>Nacos postgresql 数据库用户名</td></tr><tr><td>POSTGRESQL_SERVICE_PASSWORD</td><td>-</td><td>Nacos postgresql 数据库密码</td></tr><tr><td>POSTGRESQL_SERVICE_DB_PARAM</td><td>tcpKeepAlive=true<br>&amp;reWriteBatchedInserts=true<br>&amp;ApplicationName=nacos</td><td>Nacos postgresql 数据库连接参数</td></tr></tbody></table><h2 id="数据库脚本" tabindex="-1"><a class="header-anchor" href="#数据库脚本"><span>数据库脚本</span></a></h2><p>Nacos Postgresql 数据库脚本可以从 <a href="https://github.com/nacos-group/nacos-plugin/tree/develop/nacos-datasource-plugin-ext/nacos-postgresql-datasource-plugin-ext/src/main/resources/schema" target="_blank" rel="noopener noreferrer">【Nacos Plugin 官网】</a> 获取。</p><p>或者关注 <strong>Dante Cloud</strong></p><ul><li><a href="https://gitee.com/dromara/dante-cloud" target="_blank" rel="noopener noreferrer">Gitee</a></li><li><a href="https://github.com/dromara/dante-cloud" target="_blank" rel="noopener noreferrer">Github</a></li></ul>`,16)]))}const h=e(n,[["render",r],["__file","nacos.html.vue"]]),d=JSON.parse('{"path":"/ecosphere/nacos.html","title":"Dante Nacos Server","lang":"zh-CN","frontmatter":{"icon":"cube","title":"Dante Nacos Server","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"说明 Dante Cloud 自开源以来一直支持多数据的切换。对于使用 MySQL 的朋友来说，不存在部署多个数据库的问题。但是，对于使用其它数据库（比如：Postgresql）的朋友来说，部署 Dante Cloud 就需要部署两种数据库，因为 Nacos 默认只支持 MySQL。虽然，自 Nacos 2.2.0 版本开始，Nacos 已经支持以插件...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/ecosphere/nacos.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"Dante Nacos Server"}],["meta",{"property":"og:description","content":"说明 Dante Cloud 自开源以来一直支持多数据的切换。对于使用 MySQL 的朋友来说，不存在部署多个数据库的问题。但是，对于使用其它数据库（比如：Postgresql）的朋友来说，部署 Dante Cloud 就需要部署两种数据库，因为 Nacos 默认只支持 MySQL。虽然，自 Nacos 2.2.0 版本开始，Nacos 已经支持以插件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T15:46:11.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-18T15:46:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dante Nacos Server\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T15:46:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.vip\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"Docker Compose","slug":"docker-compose","link":"#docker-compose","children":[]},{"level":2,"title":"变量说明","slug":"变量说明","link":"#变量说明","children":[]},{"level":2,"title":"数据库脚本","slug":"数据库脚本","link":"#数据库脚本","children":[]}],"git":{"createdTime":1734536771000,"updatedTime":1734536771000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":1.78,"words":534},"filePathRelative":"ecosphere/nacos.md","localizedDate":"2024年12月18日","autoDesc":true}');export{h as comp,d as data};
