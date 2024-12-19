import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as o,o as r}from"./app-JkaJT8AB.js";const n={};function c(i,e){return r(),a("div",null,e[0]||(e[0]=[o('<h2 id="_1-java-sql-sqlsyntaxerrorexception-duplicate-key-name-xxx-idx" tabindex="-1"><a class="header-anchor" href="#_1-java-sql-sqlsyntaxerrorexception-duplicate-key-name-xxx-idx"><span>[1]java.sql.SQLSyntaxErrorException: Duplicate key name &#39;xxx_idx&#39;</span></a></h2><p><code>Dante Cloud</code> 默认使用<code>Spring Data JPA</code>进行基础功能的编写, 采用 <code>Hibernate</code> （<code>JPA</code>的一种实现）提供的 <code>ddl-auto</code>进行基础表的创建和更新。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>ddl-auto 怎么用，参见：更换数据库章节，<a href="https://www.herodotus.vip/guide/develop/switch-database.html" target="_blank" rel="noopener noreferrer">spring-boot-starter-data-jpa 更换数据库方式</a></p></div><h3 id="hibernate-方言" tabindex="-1"><a class="header-anchor" href="#hibernate-方言"><span>Hibernate 方言</span></a></h3><p>在 <code>Hibernate</code> 底层依然使用<code>SQL</code>语句来执行数据库操作，虽然所有关系型数据库都支持使用标准 <code>SQL</code> 语句，但所有数据库都对标准 <code>SQL</code> 进行了一些扩展，所以在语法细节上存在一些差异，因此 <code>Hibernate</code> 需要根据数据库来识别这些差异。假如系统需要数据库的变换时，那么用 <code>hibernate</code> 的话就只需要改一改配置文件（修改连接字符串,驱动类,方言等），而用传统的<code>jdbc</code>时，那么<code>SQL</code>语言可能就要有很多改动。（略微重复了）</p><p>Hibernate 方言为实现<code>HQL</code>语句向不同数据库的 <code>SQL</code> 语句转换时，解决不同数据库之间的差异而制定的一套”规范”。</p><p>举例来说，我们在<code>MySQL</code>数据库里进行分页查询，只需使用<code>limit</code>关键字就可以了；而标准 SQL 并不支持<code>limit</code>关键字，例如 Oracle 则需要使用行内视图的方式来进行分页。同样的应用程序，当我们在不同数据库之间迁移时，底层数据库的访问细节会发生改变，而 <code>Hibernate</code> 也为这种改变做好了准备，现在我们需要做的是：告诉 Hibernate 应用程序的底层即将使用哪种数据库——这就是 Hibernate 方言。</p><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h3><p>因为不同数据库自身的特殊性，那么不同数据库方言的实现逻辑也不能完全相同。出现这个问题是因为 MySQL 方言自身所导致，如果已经存在外键，那么就会抛出错误，但是不会影响实际使用。PostgreSQL 方案就不会出现问题。</p><p><strong>解决的办法是：</strong></p><p>在使用 MySQL 数据库时，在首次进行数据库表创建时，需要将<code>dante-cloud-environment.yaml</code>配置中的<code>herodotus.switch.database.ddl-auto</code>修改为<code>create</code>。当所有的表创建成功后，将<code>herodotus.switch.database.ddl-auto</code>值修改为<code>none</code>。那么在次启动就不会出现这个问题。</p>',11)]))}const l=t(n,[["render",c],["__file","mysql.html.vue"]]),s=JSON.parse(`{"path":"/others/question/mysql.html","title":"MySQL 常见问题","lang":"zh-CN","frontmatter":{"icon":"comment-dots","title":"MySQL 常见问题","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"[1]java.sql.SQLSyntaxErrorException: Duplicate key name 'xxx_idx' Dante Cloud 默认使用Spring Data JPA进行基础功能的编写, 采用 Hibernate （JPA的一种实现）提供的 ddl-auto进行基础表的创建和更新。 提示 ddl-auto 怎么用，参见：更换...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/others/question/mysql.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"MySQL 常见问题"}],["meta",{"property":"og:description","content":"[1]java.sql.SQLSyntaxErrorException: Duplicate key name 'xxx_idx' Dante Cloud 默认使用Spring Data JPA进行基础功能的编写, 采用 Hibernate （JPA的一种实现）提供的 ddl-auto进行基础表的创建和更新。 提示 ddl-auto 怎么用，参见：更换..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-19T09:39:57.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-19T09:39:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-19T09:39:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.cn\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"[1]java.sql.SQLSyntaxErrorException: Duplicate key name 'xxx_idx'","slug":"_1-java-sql-sqlsyntaxerrorexception-duplicate-key-name-xxx-idx","link":"#_1-java-sql-sqlsyntaxerrorexception-duplicate-key-name-xxx-idx","children":[{"level":3,"title":"Hibernate 方言","slug":"hibernate-方言","link":"#hibernate-方言","children":[]},{"level":3,"title":"说明","slug":"说明","link":"#说明","children":[]}]}],"git":{"createdTime":1734601197000,"updatedTime":1734601197000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":2.11,"words":633},"filePathRelative":"others/question/mysql.md","localizedDate":"2024年12月19日","autoDesc":true}`);export{l as comp,s as data};