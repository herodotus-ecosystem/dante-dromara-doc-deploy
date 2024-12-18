import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as a,o as r}from"./app-CMlKioQF.js";const i={};function n(c,t){return r(),o("div",null,t[0]||(t[0]=[a('<h2 id="_1-failover-switch-is-not-found-failover00-00-000-vipsrv-failover-switch-000-00-00" tabindex="-1"><a class="header-anchor" href="#_1-failover-switch-is-not-found-failover00-00-000-vipsrv-failover-switch-000-00-00"><span>[1]failover switch is not found, failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00</span></a></h2><p>将 Nacos 日志设置到 Debug 级别，在服务运行起来之后，就会发现控制台持续输出以上 Debug 信息。</p><div class="hint-container tip"><p class="hint-container-title">说明</p><p>这不是代码 Bug，而是 Nacos 自身机制，想要详细了解请阅读 Nacos 源代码或自行百度。</p></div><p>这是 Nacos Client 本地缓存及故障转移机制。在 Nacos 源代码中，ServiceInfoHolder 的构造方法中，会初始化一个 FailoverReactor 类。FailoverReactor 的作用便是用来处理故障转移的。</p><p>FailoverReactor 的构造方法会拼接故障根目录：${user.home}/nacos/naming/public/failover，其中 public 也有可能是其他的自定义命名空间；</p><p>主要逻辑就是：</p><ul><li><p>基本操作就是读取 failover 目录，查找故障转移【开关】文件为名为“failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00”。</p></li><li><p>如果故障转移文件不存在，则直接返回，不断输出 Debug 信息。</p></li><li><p>如果故障转移文件存在，比较文件修改时间，如果已经修改，则获取故障转移文件中的内容。</p></li><li><p>故障转移文件中存储了 0 和 1 标识。0 表示关闭，1 表示开启。</p></li><li><p>当为开启状态时，执行线程 FailoverFileReader。</p></li><li><p><strong>解决办法</strong></p></li></ul><ol><li>将 Nacos 日志级别调整为 INFO 级别以上。</li><li>手动在<code>${user.home}/nacos/naming/public</code>目录下，新建文件<code>failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00</code>。</li></ol>',8)]))}const s=e(i,[["render",n],["__file","nacos.html.vue"]]),m=JSON.parse('{"path":"/others/question/nacos.html","title":"Nacos 常见问题","lang":"zh-CN","frontmatter":{"icon":"comment-dots","title":"Nacos 常见问题","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"[1]failover switch is not found, failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00 将 Nacos 日志设置到 Debug 级别，在服务运行起来之后，就会发现控制台持续输出以上 Debug 信息。 说明 这不是代码 Bug，而是 Nacos 自身机制，想要详细了...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/others/question/nacos.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"Nacos 常见问题"}],["meta",{"property":"og:description","content":"[1]failover switch is not found, failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00 将 Nacos 日志设置到 Debug 级别，在服务运行起来之后，就会发现控制台持续输出以上 Debug 信息。 说明 这不是代码 Bug，而是 Nacos 自身机制，想要详细了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T15:46:11.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-18T15:46:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nacos 常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T15:46:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.vip\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"[1]failover switch is not found, failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00","slug":"_1-failover-switch-is-not-found-failover00-00-000-vipsrv-failover-switch-000-00-00","link":"#_1-failover-switch-is-not-found-failover00-00-000-vipsrv-failover-switch-000-00-00","children":[]}],"git":{"createdTime":1734536771000,"updatedTime":1734536771000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":1.27,"words":381},"filePathRelative":"others/question/nacos.md","localizedDate":"2024年12月18日","autoDesc":true}');export{s as comp,m as data};
