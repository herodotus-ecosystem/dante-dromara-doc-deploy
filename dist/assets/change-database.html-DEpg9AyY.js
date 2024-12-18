import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as s,a as i,e as a,d as n,f as l,r,o as p}from"./app-CMlKioQF.js";const c={};function h(k,e){const t=r("RouteLink");return p(),o("div",null,[e[15]||(e[15]=s('<h2 id="步骤一-判断是否需要添加数据库方言配置" tabindex="-1"><a class="header-anchor" href="#步骤一-判断是否需要添加数据库方言配置"><span>步骤一：判断是否需要添加数据库方言配置</span></a></h2><p><strong>Dante Cloud</strong> 使用数据库&quot;方言&quot;配置模式，以达到规范化数据库配置,减少参数修改,快速更换数据库的目的。</p><p>目前，<strong>Dante Cloud</strong> 默认提供<code>postgresql</code>、<code>mysql8</code>、<code>mysql57</code> 和 <code>opengauss5</code> 四种方言配置。在 Nacos 的配置中可以找到<code>dante-cloud-database-postgresql.yaml</code>和<code>dante-cloud-database-mysql8.yaml</code>,<code>dante-cloud-database-mysql57.yaml</code>与之对应。</p><p>如果你所使用的数据库，<code>postgresql</code>、<code>mysql8</code>、<code>mysql57</code> 和 <code>opengauss5</code> 四种方言配置并不能满足，那么请按照下面几步操作；如果能满足请跳过。</p><ol><li><p>在 Nacos 中新建一个按照格式 <code>dante-cloud-database-&lt;database.type&gt;.yaml</code> 命名的配置。</p></li><li><p>复制下面的配置内容到该配置中，注意不要改变格式以及具体配置名。</p></li></ol><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">herodotus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  database-information</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    platform</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">postgresql</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    driver-class-name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">org.postgresql.Driver</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dialect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">org.hibernate.dialect.PostgreSQL10Dialect</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">jdbc:postgresql://${herodotus.environment.database.host}:${herodotus.environment.database.port}/${herodotus.environment.database.name}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>根据自己使用的数据库，修改配置中对应的的信息。</li></ol><div class="hint-container info"><p class="hint-container-title">说明</p><p>dante-cloud-database-&lt;database.type&gt;.yaml 中，主要包含针对不同类型数据库，所使用的 JDBC Driver 等相关配置信息。</p><ul><li>platform：指定数据库类型。</li></ul><blockquote><p>注意：platform 具体值来源于枚举类<code>org.springframework.orm.jpa.vendor.Database</code>，请使用全部小写字母值进行配置。这个值不分版本，所以 mysql5 数据库和 mysql8 数据库均是使用<code>mysql</code>，目前支持的值如下：<br><code>db2</code>,<code>derby</code>,<code>h2</code>,<code>hana</code>,<code>hsql</code>,<code>informix</code>,<code>mysql</code>,<code>oracle</code>,<code>postgresql</code>,<code>sql_server</code>,<code>sybase</code></p></blockquote><ul><li>driver-class-name：数据库驱动类名。</li><li>dialect: 指定 Hibernate 针对不同的数据库的 Dialect，org.hibernate.dialect 包下可以找到具体数据库对应的 dialect。</li><li>url：数据库连接 URL。</li></ul><blockquote><p>注意：这里的的 URL 是通过配置<code>dante-cloud-environment.yaml</code>，中的 herodotus.environment.database.host,port,name 等三个值组装而成。如果新增方言配置，不管具体数据库 URL 内容是什么，一定确保数据库地址,端口,数据库名使用${herodotus.environment.database.host},${herodotus.environment.database.port},${<a href="http://herodotus.environment.database.name" target="_blank" rel="noopener noreferrer">herodotus.environment.database.name</a>}三个站位符替换，否则*-environment.yaml 中配置的值将不再生效。</p></blockquote></div><h2 id="步骤二-修改环境参数" tabindex="-1"><a class="header-anchor" href="#步骤二-修改环境参数"><span>步骤二：修改环境参数</span></a></h2>',9)),i("p",null,[e[1]||(e[1]=a("在根据你所使用的 ")),n(t,{to:"/guide/backend/profile-design.html"},{default:l(()=>e[0]||(e[0]=[a("Maven 多环境")])),_:1}),e[2]||(e[2]=s("，找到 <code>Nacos</code> 对应 <code>Group</code> 下的<code>dante-cloud-environment.yaml</code>配置，修改数据库相关的<code>host</code>,<code>port</code>,<code>name</code>,<code>username</code>,<code>password</code>等几个参数的值。",17))]),e[16]||(e[16]=s(`<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">herodotus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    logstash-server-addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">127.0.0.1:5044</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    gateway-server-addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">http://localhost:8847</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    database</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">127.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5432</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">herodotus</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">XXXXX</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">XXXXX</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤三-修改-pom-xml" tabindex="-1"><a class="header-anchor" href="#步骤三-修改-pom-xml"><span>步骤三：修改 pom.xml</span></a></h2>`,2)),i("p",null,[e[4]||(e[4]=a("找到工程根目录下的")),e[5]||(e[5]=i("code",null,"pom.xml",-1)),e[6]||(e[6]=a(", 根据你所使用的 ")),n(t,{to:"/guide/backend/profile-design.html"},{default:l(()=>e[3]||(e[3]=[a("Maven 多环境")])),_:1}),e[7]||(e[7]=a("找到对应的")),e[8]||(e[8]=i("code",null,"<profiles>",-1)),e[9]||(e[9]=a(", 修改")),e[10]||(e[10]=i("code",null,"<database.type>",-1)),e[11]||(e[11]=a("属性值。"))]),e[17]||(e[17]=s(`<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">database.type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;postgresql&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">database.type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该值与步骤一中，<code>dante-cloud-database-&lt;database.type&gt;.yaml</code>的值对应。</p><p>在 Maven 编译的过程中，<code>&lt;database.type&gt;</code>的值会作为参数传递到各个服务的<code>boostrap.yml</code>配置中，与<code>boostrap.yml</code>中已有的信息拼装成 Nacos 中对应的配置名。通过这种方式实现 Maven 多环境,Nacos 配置,不同数据库配置的联动</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">data-id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dante-cloud-database-@database.type@.yaml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">common</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="步骤四-添加数据库-jdbc-driver" tabindex="-1"><a class="header-anchor" href="#步骤四-添加数据库-jdbc-driver"><span>步骤四：添加数据库 JDBC Driver</span></a></h2><p>目前，系统代码已经包含 <code>PostgreSQL</code> , <code>MySQL</code> (支持 <code>MySQL5</code> 和 <code>MySQL8</code> )、<code>SQLite</code> 和 <code>OpenGauss</code> 四种数据库的<code>JDBC Driver</code>, 如果你使用数据库不在此范围内，那么就需要在代码包<code>eurynome-cloud-data</code>的<code>pom.xml</code>中添加对应数据库的<code>JDBC Driver</code>。</p><h2 id="步骤五-编译工程代码" tabindex="-1"><a class="header-anchor" href="#步骤五-编译工程代码"><span>步骤五：编译工程代码</span></a></h2><p>以上步骤完成之后，使用<code>mvn package</code>或<code>mvn install</code>命令，重新编译工程。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>这一步非常重要，因为<code>Maven</code>无法真正做到与<code>yml</code>配置文件的传参，只有通过编译，在编译过程中用<code>pom.xml</code>中<code>&lt;database.type&gt;</code>的值，替换 yml 配置文件中的<code>@database.type@</code>模拟一种参数传递。</p></div>`,7)),i("p",null,[e[13]||(e[13]=a("修改配置之后，参考")),n(t,{to:"/guide/backend/data-initialization.html"},{default:l(()=>e[12]||(e[12]=[a("数据初始化")])),_:1}),e[14]||(e[14]=a("章节进行数据库初始化工作。"))]),e[18]||(e[18]=s('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>目前仅提供 <code>PostgreSQL</code> 和 <code>MySQL</code> 两种数据库对应的数据初始化脚本，其它数据库需要自己额外处理。如需要使用<code>Spring Data JPA</code>初始化机制，需要手动修改<code>spring.sql.init.*</code>相关参数。</p></div><h2 id="步骤六-修改工作流服务数据库类型" tabindex="-1"><a class="header-anchor" href="#步骤六-修改工作流服务数据库类型"><span>步骤六：修改工作流服务数据库类型</span></a></h2><p>在 <code>eurynome-cloud-bpmn-ability</code> 模块中，找到<code>bootstrap.yml</code>。根据你所使用的数据库，修改配置<code>camunda.bpm.database.type</code>的值。</p><div class="hint-container info"><p class="hint-container-title">说明</p><p><code>camunda.bpm.database.type</code>支持的值有: <code>h2</code>, <code>mysql</code>, <code>mariadb</code>, <code>oracle</code>, <code>postgres</code>, <code>mssql</code>, <code>db2</code>.</p></div>',4))])}const u=d(c,[["render",h],["__file","change-database.html.vue"]]),y=JSON.parse('{"path":"/guide/backend/change-database.html","title":"更换数据库","lang":"zh-CN","frontmatter":{"icon":"caret-right","title":"更换数据库","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"步骤一：判断是否需要添加数据库方言配置 Dante Cloud 使用数据库\\"方言\\"配置模式，以达到规范化数据库配置,减少参数修改,快速更换数据库的目的。 目前，Dante Cloud 默认提供postgresql、mysql8、mysql57 和 opengauss5 四种方言配置。在 Nacos 的配置中可以找到dante-cloud-databas...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/guide/backend/change-database.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"更换数据库"}],["meta",{"property":"og:description","content":"步骤一：判断是否需要添加数据库方言配置 Dante Cloud 使用数据库\\"方言\\"配置模式，以达到规范化数据库配置,减少参数修改,快速更换数据库的目的。 目前，Dante Cloud 默认提供postgresql、mysql8、mysql57 和 opengauss5 四种方言配置。在 Nacos 的配置中可以找到dante-cloud-databas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T15:46:11.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-18T15:46:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更换数据库\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T15:46:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.vip\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"步骤一：判断是否需要添加数据库方言配置","slug":"步骤一-判断是否需要添加数据库方言配置","link":"#步骤一-判断是否需要添加数据库方言配置","children":[]},{"level":2,"title":"步骤二：修改环境参数","slug":"步骤二-修改环境参数","link":"#步骤二-修改环境参数","children":[]},{"level":2,"title":"步骤三：修改 pom.xml","slug":"步骤三-修改-pom-xml","link":"#步骤三-修改-pom-xml","children":[]},{"level":2,"title":"步骤四：添加数据库 JDBC Driver","slug":"步骤四-添加数据库-jdbc-driver","link":"#步骤四-添加数据库-jdbc-driver","children":[]},{"level":2,"title":"步骤五：编译工程代码","slug":"步骤五-编译工程代码","link":"#步骤五-编译工程代码","children":[]},{"level":2,"title":"步骤六：修改工作流服务数据库类型","slug":"步骤六-修改工作流服务数据库类型","link":"#步骤六-修改工作流服务数据库类型","children":[]}],"git":{"createdTime":1734536771000,"updatedTime":1734536771000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":3.58,"words":1075},"filePathRelative":"guide/backend/change-database.md","localizedDate":"2024年12月18日","autoDesc":true}');export{u as comp,y as data};