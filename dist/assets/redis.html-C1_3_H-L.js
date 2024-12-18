import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as s,o as a}from"./app-CMlKioQF.js";const n="/assets/image/redis/bind-ip.png",l={};function d(r,e){return a(),i("div",null,e[0]||(e[0]=[s(`<h2 id="_1-服务启动后-无法连接-redis-抛错" tabindex="-1"><a class="header-anchor" href="#_1-服务启动后-无法连接-redis-抛错"><span>[1]服务启动后，无法连接 Redis 抛错</span></a></h2><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><p>Dante Cloud 基础服务在启动时必须要连接 Redis，连接成功后才能正常运行。</p><p>目前涉及到 Redis 的内容，主要包括两部分：</p><ol><li>常规的数据缓存特别像 Session、验证码一类的临时缓存，这一类缓存根据场景以及实现要求的不同，有些会直接使用 Redis；</li><li>数据共享缓存，像权限数据、CRUD 数据等缓存，这一类缓存除了要实现数据缓存的目的之外，还要解决缓存数据在多服务、多实例环境下数据共享同步等问题。因此采用的是 JetCache 多级缓存组件。</li></ol><p>因本项目更倾向于贴近 Spring 生态，尽量使用 Spring 生态主打或推荐的相关组件。所以不管是直接访问 Redis 还是集成 JetCache，底层数据访问客户端组件均使用的是 lettuce。也正因为如此，Spring 生态相关组件自身的不足也会体现在 Dante Cloud 中。</p><h3 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因"><span>问题原因</span></a></h3><p>服务启动后无法连接 Redis，除了网络问题导致的无法连接以外，最主要的诱因就是：<strong>Redis 密码中包含特殊字符</strong>。</p><p>包含特殊字符的密码导致 Redis 无法连接，原因大概出自两方面:</p><ul><li>一方面是 Spring Boot 基本规范导致。Spring Boot Yaml 对特殊字符是有处理要求的，Yaml 配置信息中，如果包含以下特殊字符必须要进行转义</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> },</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">],</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #, ?, |, -, &lt;, &gt;, =, !, %, @, \`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>另一方面是基础组件自身处理机制导致。有些组件是采用 uri 的方式进行 Redis 连接配置，而有些组件使用 ip + 端口等方式处理。所以就可能存在，同样的密码，使用 Jedis、Redisson 等组件是正常的，换到 Dante Cloud 所使用的 lettuce 就不正常；甚至可能使用 lettuce 是正常的，换到 JetCache 又会有问题。</li></ul><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h3><h4 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h4><p>这个方法最直接最简单，就是修改 Redis 密码，去掉密码中的某个或者全部特殊字符。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>很多人都期望通过增加 Redis 密码复杂度来提升 Redis 的安全性。不可否认这确实能提升一定的安全性，但是毕竟 Redis 的密码安全机制太过简单，所以个人建议不要太过于依赖于此，网络层面或者物理层面保证 Redis 的相对隔离才能靠谱。(换句话说 Redis 密码复杂度更像是心理安慰，不能从本质上提升多大的安全性，所以就不要太纠结密码中要不要包含特殊字符的问题)</p></div><h4 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h4><p>对密码中的特殊字符进行转义，以保证可以正确被读取和使用。</p><ul><li>在 Spring Boot Yaml 方面，如果存在特殊字符就需要对密码字符串进行转义，例如下例中密码包含了特殊字符 “#”，这种写法是会出现运行错误问题的</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #data source connection</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">jdbc:mysql://localhost:3306/vaquarkhan</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rootadmin</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">root#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要对特殊字符进行转义：</p><p>可以用引号包裹字符串进行转义</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;root#&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者用反斜杠</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">root\\#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完整的例子</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  #data source connection</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">jdbc:mysql://localhost:3306/vaquarkhan</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rootadmin</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;root#&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于像 JetCache 一样使用 uri 进行 Redis 连接配置的，那么特殊字符的转义，就要参考 url.encode 的方式，例如：</li></ul><table><thead><tr><th style="text-align:center;">符号</th><th style="text-align:center;">-</th><th style="text-align:center;">转义结果</th><th style="text-align:center;">符号</th><th style="text-align:center;">-</th><th style="text-align:center;">转义结果</th></tr></thead><tbody><tr><td style="text-align:center;">空格</td><td style="text-align:center;">-</td><td style="text-align:center;">%20</td><td style="text-align:center;">/</td><td style="text-align:center;">-</td><td style="text-align:center;">%2F</td></tr><tr><td style="text-align:center;">&quot;</td><td style="text-align:center;">-</td><td style="text-align:center;">%22</td><td style="text-align:center;">:</td><td style="text-align:center;">-</td><td style="text-align:center;">%3A</td></tr><tr><td style="text-align:center;">#</td><td style="text-align:center;">-</td><td style="text-align:center;">%23</td><td style="text-align:center;">;</td><td style="text-align:center;">-</td><td style="text-align:center;">%3B</td></tr><tr><td style="text-align:center;">%</td><td style="text-align:center;">-</td><td style="text-align:center;">%25</td><td style="text-align:center;">&lt;</td><td style="text-align:center;">-</td><td style="text-align:center;">%3C</td></tr><tr><td style="text-align:center;">&amp;</td><td style="text-align:center;">-</td><td style="text-align:center;">%26</td><td style="text-align:center;">=</td><td style="text-align:center;">-</td><td style="text-align:center;">%3D</td></tr><tr><td style="text-align:center;">(</td><td style="text-align:center;">-</td><td style="text-align:center;">%28</td><td style="text-align:center;">&gt;</td><td style="text-align:center;">-</td><td style="text-align:center;">%3E</td></tr><tr><td style="text-align:center;">)</td><td style="text-align:center;">-</td><td style="text-align:center;">%29</td><td style="text-align:center;">?</td><td style="text-align:center;">-</td><td style="text-align:center;">%3F</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">%2B</td><td style="text-align:center;">@</td><td style="text-align:center;">-</td><td style="text-align:center;">%40</td></tr><tr><td style="text-align:center;">,</td><td style="text-align:center;">-</td><td style="text-align:center;">%2C</td><td style="text-align:center;">\\</td><td style="text-align:center;">-</td><td style="text-align:center;">%5C</td></tr></tbody></table><p>一个完成的参考示例，<strong>需要转义,spring Data redis 使用&#39;&#39;,而 jetcache 使用 URL 转义</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;123@!&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jetcache</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  remote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      uri</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">redis://123%40%21@\${spring.redis.host}:\${spring.redis.port}/\${spring.redis.database}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      poolConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        minIdle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        maxIdle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        maxTotal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-本地-redis-使用-127-0-0-1-可以访问-使用-ip-地址无法访问" tabindex="-1"><a class="header-anchor" href="#_2-本地-redis-使用-127-0-0-1-可以访问-使用-ip-地址无法访问"><span>[2]本地 Redis 使用 127.0.0.1 可以访问，使用 IP 地址无法访问</span></a></h2><p>Redis 默认只允许通过 127.0.0.1 访问，这是其自身的安全防护机制。如果想要使用 IP 地址进行访问，需要将其保护设置打开。</p><ul><li><strong>Windows 版</strong></li></ul><p>找到<code>redis.windows.conf</code>配置文件</p><ol><li><p>将<code>protected-mode</code> 参数改为 no。</p></li><li><p>注释掉<code>bind 127.0.0.1</code></p></li><li><p>重启 redis 服务</p></li></ol><figure><img src="`+n+'" alt="Redis 密码" tabindex="0" loading="lazy"><figcaption>Redis 密码</figcaption></figure><ul><li><strong>Linux</strong></li></ul><ol><li><p>linux 对应的是<code>redis.conf</code>文件</p></li><li><p>修改还是和 windows 一样</p></li><li><p>修改完成重启服务</p></li></ol><h2 id="_3-io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required" tabindex="-1"><a class="header-anchor" href="#_3-io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required"><span>[3]io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required</span></a></h2><p>出现该错误，是由于 Redis 中设置密码，而代码中未读到 Redis 密码或配置文件中没有配置密码导致的。</p><ul><li><strong>解决办法</strong>：</li></ul><ol><li>首先用<code>Redis</code>客户端，比如：<code>redis-desktop-manager</code>，进行<code>Redis</code>的连接测试。如果无法连接，那么请检查密码输入是否正确,本地网络等相关环境；如果可以正常连接，请进行下一步。</li><li>检查<code>Nacos</code>中，<code>Redis</code>相关配置是否配置了密码。一定要注意格式，检查格式缩进是否正确,<code>yaml</code>配置“：”后面是否空了一格。如果确定配置正确，请进行下一步。</li><li>检查服务是否可以正常访问到<code>Nacos</code>服务器，是否可以正确读取<code>Nacos</code>中配置。</li></ol><p>以上操作均确保无误应该就可以正常使用了，如果还有问题，那么就请尽可能的准备详尽的信息，在 Gitee 中提<a href="https://gitee.com/herodotus/issues" target="_blank" rel="noopener noreferrer">Issue</a></p><h2 id="_4-noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user" tabindex="-1"><a class="header-anchor" href="#_4-noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user"><span>[4]NOAUTH HELLO must be called with the client already authenticated, otherwise the HELLO AUTH ＜ user ＞</span></a></h2><p>使用<code>spring boot data redis</code> 链接<code>redis sentinel</code>集群，会报此错。</p><p>原因是因为<code>redis sentinel</code>集群的<code>sentinel</code>配置文件没有配置密码，<code>sentinel</code>配置密码的方式和 redis 的密码配置方式一样，配置文件中加上<code>requirepass &lt;密码&gt;</code> 就行。</p><p>另外，<code>sentinel</code>中的<code>sentinel auth-pass &lt;master&gt; &lt;pass&gt;</code> 不是给<code>sentinel</code>配置密码，而是<code>sentinel</code>链接<code>redis master</code>的密码</p>',48)]))}const c=t(l,[["render",d],["__file","redis.html.vue"]]),o=JSON.parse('{"path":"/others/question/redis.html","title":"Redis 常见问题","lang":"zh-CN","frontmatter":{"icon":"comment-dots","title":"Redis 常见问题","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"[1]服务启动后，无法连接 Redis 抛错 背景 Dante Cloud 基础服务在启动时必须要连接 Redis，连接成功后才能正常运行。 目前涉及到 Redis 的内容，主要包括两部分： 常规的数据缓存特别像 Session、验证码一类的临时缓存，这一类缓存根据场景以及实现要求的不同，有些会直接使用 Redis； 数据共享缓存，像权限数据、CRUD...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/others/question/redis.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"Redis 常见问题"}],["meta",{"property":"og:description","content":"[1]服务启动后，无法连接 Redis 抛错 背景 Dante Cloud 基础服务在启动时必须要连接 Redis，连接成功后才能正常运行。 目前涉及到 Redis 的内容，主要包括两部分： 常规的数据缓存特别像 Session、验证码一类的临时缓存，这一类缓存根据场景以及实现要求的不同，有些会直接使用 Redis； 数据共享缓存，像权限数据、CRUD..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dante-cloud.dromara.org/assets/image/redis/bind-ip.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T15:46:11.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-18T15:46:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 常见问题\\",\\"image\\":[\\"https://dante-cloud.dromara.org/assets/image/redis/bind-ip.png\\"],\\"dateModified\\":\\"2024-12-18T15:46:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.vip\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"[1]服务启动后，无法连接 Redis 抛错","slug":"_1-服务启动后-无法连接-redis-抛错","link":"#_1-服务启动后-无法连接-redis-抛错","children":[{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":3,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}]},{"level":2,"title":"[2]本地 Redis 使用 127.0.0.1 可以访问，使用 IP 地址无法访问","slug":"_2-本地-redis-使用-127-0-0-1-可以访问-使用-ip-地址无法访问","link":"#_2-本地-redis-使用-127-0-0-1-可以访问-使用-ip-地址无法访问","children":[]},{"level":2,"title":"[3]io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required","slug":"_3-io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required","link":"#_3-io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required","children":[]},{"level":2,"title":"[4]NOAUTH HELLO must be called with the client already authenticated, otherwise the HELLO AUTH ＜ user ＞","slug":"_4-noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user","link":"#_4-noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user","children":[]}],"git":{"createdTime":1734536771000,"updatedTime":1734536771000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":4.97,"words":1492},"filePathRelative":"others/question/redis.md","localizedDate":"2024年12月18日","autoDesc":true}');export{c as comp,o as data};
