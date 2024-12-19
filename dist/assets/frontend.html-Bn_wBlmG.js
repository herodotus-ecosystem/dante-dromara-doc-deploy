import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as i,e as s,d as l,f as r,b as o,r as d,o as c}from"./app-JkaJT8AB.js";const p="/assets/image/vue/access-denied.png",h="/assets/image/vue/login-error.jpg",g="/assets/image/vue/complie-problem-01.png",k="/assets/image/vue/complie-problem-02.png",u={};function m(f,e){const a=d("RouteLink");return c(),n("div",null,[e[3]||(e[3]=i("h2",{id:"_1-登录系统提示-您没有权限拒绝访问",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_1-登录系统提示-您没有权限拒绝访问"},[i("span",null,"[1]登录系统提示“您没有权限拒绝访问”")])],-1)),e[4]||(e[4]=i("p",null,"前端工程正常启动后，弹出错误提示“您没有权限，拒绝访问”，如下图所示：",-1)),e[5]||(e[5]=i("figure",null,[i("img",{src:p,alt:"您没有权限拒绝访问",tabindex:"0",loading:"lazy"}),i("figcaption",null,"您没有权限拒绝访问")],-1)),i("p",null,[e[1]||(e[1]=s("出现该问题，请首先检查是否严格按照文档描述的内容和步骤进行的后端部署，特别是有没有执行 ")),l(a,{to:"/guide/get-start/deployment.html#_9-%E9%87%8D%E7%BD%AE%E7%BC%93%E5%AD%98"},{default:r(()=>e[0]||(e[0]=[s("【重置缓存】")])),_:1}),e[2]||(e[2]=s(" 这一步。"))]),e[6]||(e[6]=o('<p>具体问题的原理，和<code>重置缓存</code>章节描述的基础原理一致。初次搭建环境，需要初始化数据库，这里就包括用户、角色、权限以及相关的关联关系。不管是以手动方式还是自动方式进行的数据库初始化，本质都是直接执行 sql 脚本。而使用 <code>Spring Authorization Server</code> 和 <code>Spring Security</code> 做微服务，标准合理的方式是在各个服务中进行接口的鉴权。各服务的鉴权数据是以缓存的形式存储在各个服务中。因为使用了多级缓存，在数据库中执行 sql 脚本，是无法触发缓存数据生成的，这就导致即前后端成功运行之后，登录前端会出现没有权限的提示，因为缓存中没有权限数据。</p><div class="hint-container info"><p class="hint-container-title">解决办法</p><ol><li>停止所有服务</li><li>清空 Redis 缓存数据</li><li>再次运行所有服务</li></ol><blockquote><p>单体版也是如此</p></blockquote></div><h2 id="_2-客户端身份验证失败" tabindex="-1"><a class="header-anchor" href="#_2-客户端身份验证失败"><span>[2]客户端身份验证失败</span></a></h2><p>前端工程正常启动后，弹出错误提示“客户端身份验证失败”，如下图所示：</p><figure><img src="'+h+'" alt="客户端身份验证失败" tabindex="0" loading="lazy"><figcaption>客户端身份验证失败</figcaption></figure><p>具体问题的原理，与下面问题的原理一致。想要了解原理，可以看下面问题中的&quot;系统设计逻辑&quot;，不关心可以跳过。</p><div class="hint-container caution"><p class="hint-container-title">问题原因</p><p>这个问题原因就是：没有<code>初始化数据库</code>。</p><blockquote><p>第一次搭建本系统，还是建议耐心、细致的看文档，相关的内容都有说。</p></blockquote></div><h2 id="_3-登录框无法输入用户名和密码" tabindex="-1"><a class="header-anchor" href="#_3-登录框无法输入用户名和密码"><span>[3]登录框无法输入用户名和密码</span></a></h2><p>前端工程正常启动后，出现登录框无法输入用户名和密码的情况。通过浏览器控制台查看，控制台中会出现 <code>412</code> 错误，如下所示：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">POST</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://localhost:8847/dante-cloud-uaa/open/identity/session</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 412</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Precondition </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Failed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="系统设计逻辑" tabindex="-1"><a class="header-anchor" href="#系统设计逻辑"><span>系统设计逻辑</span></a></h3><ol><li>为了提高系统的安全性，本系统混合 SM2(非对称) 和 SM4(对称加密) 算法，基于自定义注解和数字信封技术，设计接口数据前后端加密传输逻辑。实现 Sm4 KEY 动态生成、前后端数据加密传输、一人一钥的安全机制。</li></ol><blockquote><p>2.7.X 版本之前，默认使用的是 RSA + AES 算法实现，2.7.X 版本之后改为使用 SM2 + SM4，仍旧支持 RSA + AES 可以通过修改配置进行变更</p></blockquote><ol><li>由于 Vue 的 Session 存在变化的问题，导致使用 Vue Session 无法确认唯一性，因此系统中增加了自定义 Session 机制。本系统的安全机制，就是基于自定义 Session 机制实现。每次使用系统时，根据自定义 Session，后端动态生成秘钥实现数据的加密传输。</li><li>因为，自定义 Session 的创建和秘钥的传输，使用的是<code>开放</code>接口，即无须认证既可以使用的接口。所以为了进一步提升安全性，<code>open/identity/session</code>接口，增加了对客户端的认证逻辑，如果是非法客户端或者客户端未验证通过，<code>open/identity/session</code>的接口是无法返回正确信息，输入用户名和密码也无法正确解密，所以输入框被禁用。</li></ol><h3 id="出现问题的原因" tabindex="-1"><a class="header-anchor" href="#出现问题的原因"><span>出现问题的原因</span></a></h3><p><code>open/identity/session</code> 接口要验证客户端的合法性，使用的是 <code>clientId</code> 和 <code>clientSecret</code> 信息，在系统后端进行验证。客户端信息验证失败，通常是以下几方面原因：</p><ul><li>后端 IP 地址错误，前端无法正常连接。</li><li>数据库中有数据，<code>clientId</code> 和 <code>clientSecret</code> 信息不匹配。</li><li>数据库未正确初始化数据，<code>oauth2_registered_client</code> 表中没有数据，所以 <code>clientId</code> 和 <code>clientSecret</code> 信息始终是不匹配的。</li></ul><h3 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决"><span>如何解决</span></a></h3><ol><li>检查前端工程中，<code>.env.development</code> 或 <code>.env.production</code> 文件中配置的后端 IP 地址是否正确。</li><li>初次搭建本项目的过程中，在工程尚未正确运行时，除了在前端修改后端访问 IP 外，不要擅自修改其它已经配置好的参数。</li><li>检查数据库是否正确进行了数据初始化操作（检查数据表里是否有数据，特别是 <code>oauth_client_details</code>）。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>大多数情况，要么是没有耐心和认真的看文档，不按照文档操作；要么是在系统还没有运行成功，搭建的过程中，就按照自己的想法和理解进行修改和参数调整，导致运行失败。</p></div><h3 id="为什么控制台中看到返回的是412错误" tabindex="-1"><a class="header-anchor" href="#为什么控制台中看到返回的是412错误"><span>为什么控制台中看到返回的是<code>412</code>错误</span></a></h3><p><code>412</code> 错误是源于本项目中的自定义错误体系。为了更快捷更准确的定位错误，本系统自定义错误体系与 Http 协议中的状态进行了有机结合，并尽可能借鉴 Http 状态的含义。</p><p>本系统自定义错误体系借鉴了 Http <code>412</code> (Precondition Failed) 状态的含义： <strong>未满足前提条件</strong>。看到这一类错误，通常代表是因为前序的条件或者参数为准备充足，导致无法正确运行。</p><h2 id="_4-老版本-前端工程编译失败无法启动" tabindex="-1"><a class="header-anchor" href="#_4-老版本-前端工程编译失败无法启动"><span>[4]（老版本）前端工程编译失败无法启动</span></a></h2><p>编译失败或无法启动问题，主要体现在，在使用命令 <code>yarn e:ui dev</code> 启动前端工程时，会出现较多编译错误，导致前端工程无法启动。常见的错误如下图所示：</p><figure><img src="'+g+'" alt="常见错误1" tabindex="0" loading="lazy"><figcaption>常见错误1</figcaption></figure><figure><img src="'+k+`" alt="常见错误2" tabindex="0" loading="lazy"><figcaption>常见错误2</figcaption></figure><h3 id="为什么出现编译错误问题" tabindex="-1"><a class="header-anchor" href="#为什么出现编译错误问题"><span>为什么出现编译错误问题</span></a></h3><p>出现编译问题主要原因是：Vue 工程使用的第三方依赖包越来越多，第三方依赖包升级维护的速度以及自身的兼容性也有较大差异。由于目前使用的是 Vue2 + Typescript + Vuetify2, 所以部分依赖包版本还不能使用最新版本，这些依赖包版本太高就会导致编译错误。</p><h3 id="编译错误解决办法" tabindex="-1"><a class="header-anchor" href="#编译错误解决办法"><span>编译错误解决办法</span></a></h3><p><code>Dante Cloud UI</code> 工程，在每次发布时，都会对依赖包版本进行升级测试，如果可以升级，那么在版本发布时就会同步进行升级。</p><ol><li>因此，通常情况下，你所使用的工程代码，其依赖包在允许范围内均已经是最新的，除非有十足把握，否则请不要自己升级依赖包版本。</li><li>本工程默认使用的 <code>yarn</code> 包管理工具，工程中的 <code>yarn.lock</code> 文件就是对工程依赖包版本的锁定文件，不要删除或者修改此文件。</li></ol><h2 id="_5-老版本-integrity-check-failed-for-graceful-fs-computed-integrity-doesn-t-match-our-records" tabindex="-1"><a class="header-anchor" href="#_5-老版本-integrity-check-failed-for-graceful-fs-computed-integrity-doesn-t-match-our-records"><span>[5]（老版本）Integrity check failed for &quot;graceful-fs&quot; (computed integrity doesn&#39;t match our records</span></a></h2><h3 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因"><span>问题原因</span></a></h3><p><code>Yarn</code> 在执行 <code>Install</code> 命令的过程中，会同时验证项目中软件包内容的版本和哈希值 <code>package.json</code> 与 <code>Yarn</code> 锁定文件的值匹配。 这有助于验证软件包依赖关系未被更改。</p><p>查阅资料，靠谱的一些文章说明的主要原因是：Node.js 默认源是包含「完整性」（<code>integrity</code>）这一字段的。因为淘宝 npm 源没有提供「完整性」（<code>integrity</code>）这一字段，当你更换为淘宝的源[<a href="http://registry.npm.taobao.org" target="_blank" rel="noopener noreferrer">http://registry.npm.taobao.org</a>]之后，下载包缺失「完整性」信息就会导致校验失败。</p><ul><li><a href="https://www.eliseos.org/en/water/post/172" target="_blank" rel="noopener noreferrer">我终于找到 CI fail 的原因了</a></li><li><a href="https://penueling.com/%e6%8a%80%e8%a1%93%e7%ad%86%e8%a8%98/yarn-%e5%ae%89%e8%a3%9d%e5%a5%97%e4%bb%b6%e5%87%ba%e7%8f%be%e9%8c%af%e8%aa%a4-integrity-check-failed-for-graceful-fs-computed-integrity-doesnt-match-our-records/" target="_blank" rel="noopener noreferrer">yarn 安裝套件出現錯誤 Integrity check failed for “graceful-fs” (computed integrity doesn’t match our records…</a></li></ul><p>可能是文章出来的时间有点早，现在淘宝源已经包含了「完整性」（<code>integrity</code>）校验字段，通过查验 <code>yarn.lock</code> 文件就可以证实。但文章本身还是有一定借鉴作用。</p><h3 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h3><h4 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h4><p>如果没有在现有前端工程中进行开发，仅是下载后运行。那么可以将工程删除，重新 git clone 前端工程，再次运行即可。或者重新下载代码包，重新解压运行。</p><h4 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h4><p>如果已经在现有前端工程中进行开发，按照以下步骤尝试解决：</p><ol><li>在工程根目录下，找到 <code>package.json</code> 文件。在该文件的 <code>devDependencies</code> 部分，手动添加依赖 <code>&quot;graceful-fs&quot;: &quot;4.2.9&quot;,</code> (注意以逗号结尾)</li><li>为了规避不可预知的问题，先清除工程以及开发环境中已有的依赖缓存</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 清除各个包中的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node_modules</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 文件夹。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lerna</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 如果提示lerna命令找不到，请先全局安装</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lerna</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lerna</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 清除</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 环境中已有的缓存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>更新工程中，已有 <code>yarn.lock</code> 锁定各个依赖包的签名信息。</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --update-checksums</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上面命令执行完成之后，如果 <code>yarn.lock</code> 文件中，可以搜索到以下类似信息，说明操作成功。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">graceful-fs@4.2.9:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;4.2.9&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  resolved</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://registry.npmmirror.com/graceful-fs/download/graceful-fs-4.2.9.tgz#041b05df45755e587a24942279b9d113146e1c96&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  integrity</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;sha1-BBsF30V1Xlh6JJQiebnRExRuHJY= sha512-NtNxqUcXgpW2iMrfqSfR73Glt39K+BLwWsPs94yR63v45T0Wbej7eRmL5cWfwEgqXnmjQp3zaJTshdRW/qC2ZQ==&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container info"><p class="hint-container-title">补充说明</p><p>出现 <code>Integrity check failed for “graceful-fs”</code> 错误，原因就是下载下来的依赖包的签名验证不匹配导致。而 <code>yarn.lock</code> 文件，已经将签名错误的 <code>graceful-fs</code> 包文件锁定, 不管是更新还是运行，都会去校验，所以错误一直无法解决。查看之前版本的 <code>yarn.lock</code> 文件，找到以下内容就是导致错误的原因：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">graceful-fs@^4.1.11,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.1.15,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.1.2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.1.6,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.2.0,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.2.2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.2.3:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;4.2.5&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  resolved</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://registry.npm.taobao.org/graceful-fs/download/graceful-fs-4.2.5.tgz?cache=0&amp;other_urls=https%3A%2F%2Fregistry.npm.taobao.org%2Fgraceful-fs%2Fdownload%2Fgraceful-fs-4.2.5.tgz#bc18864a6c9fc7b303f2e2abdb9155ad178fbe29&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  integrity</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sha1-vBiGSmyfx7MD8uKr25FVrRePvik=</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该问题是最近一周才出现，之前一直没有遇到过，猜测是可能是淘宝源最近更新了“graceful-fs”包，不知道是哪方面的原因，导致签名不正确导致。所以解决办法本质就是尝试升级 <code>graceful-fs</code> 版本解决。<code>graceful-fs</code> 版本升级之后，<code>yarn.lock</code> 文件中，锁定信息以及签名就已经更新， 如下所示：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">graceful-fs@^4.1.11,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.1.15,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.1.2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.1.6,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.2.0,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.2.2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graceful-fs@^4.2.3:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;4.2.5&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  resolved</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://registry.npm.taobao.org/graceful-fs/download/graceful-fs-4.2.5.tgz?cache=0&amp;other_urls=https%3A%2F%2Fregistry.npm.taobao.org%2Fgraceful-fs%2Fdownload%2Fgraceful-fs-4.2.5.tgz#bc18864a6c9fc7b303f2e2abdb9155ad178fbe29&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  integrity</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sha1-vBiGSmyfx7MD8uKr25FVrRePvik=</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>原因已经说清楚了，那么也可以通过其他方式，比如手动更新 <code>package.json</code> 和 <code>yarn.lock</code> 文件，确保 <code>graceful-fs</code> 版本不是出错的 4.2.5，应该就可以解决。</p></blockquote></div>`,49))])}const v=t(u,[["render",m],["__file","frontend.html.vue"]]),F=JSON.parse(`{"path":"/others/question/frontend.html","title":"前端常见问题","lang":"zh-CN","frontmatter":{"icon":"comment-dots","title":"前端常见问题","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"[1]登录系统提示“您没有权限拒绝访问” 前端工程正常启动后，弹出错误提示“您没有权限，拒绝访问”，如下图所示： 您没有权限拒绝访问您没有权限拒绝访问 出现该问题，请首先检查是否严格按照文档描述的内容和步骤进行的后端部署，特别是有没有执行 这一步。 具体问题的原理，和重置缓存章节描述的基础原理一致。初次搭建环境，需要初始化数据库，这里就包括用户、角色、...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/others/question/frontend.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"前端常见问题"}],["meta",{"property":"og:description","content":"[1]登录系统提示“您没有权限拒绝访问” 前端工程正常启动后，弹出错误提示“您没有权限，拒绝访问”，如下图所示： 您没有权限拒绝访问您没有权限拒绝访问 出现该问题，请首先检查是否严格按照文档描述的内容和步骤进行的后端部署，特别是有没有执行 这一步。 具体问题的原理，和重置缓存章节描述的基础原理一致。初次搭建环境，需要初始化数据库，这里就包括用户、角色、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dante-cloud.dromara.org/assets/image/vue/access-denied.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-19T09:39:57.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-19T09:39:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端常见问题\\",\\"image\\":[\\"https://dante-cloud.dromara.org/assets/image/vue/access-denied.png\\",\\"https://dante-cloud.dromara.org/assets/image/vue/login-error.jpg\\",\\"https://dante-cloud.dromara.org/assets/image/vue/complie-problem-01.png\\",\\"https://dante-cloud.dromara.org/assets/image/vue/complie-problem-02.png\\"],\\"dateModified\\":\\"2024-12-19T09:39:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.cn\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"[1]登录系统提示“您没有权限拒绝访问”","slug":"_1-登录系统提示-您没有权限拒绝访问","link":"#_1-登录系统提示-您没有权限拒绝访问","children":[]},{"level":2,"title":"[2]客户端身份验证失败","slug":"_2-客户端身份验证失败","link":"#_2-客户端身份验证失败","children":[]},{"level":2,"title":"[3]登录框无法输入用户名和密码","slug":"_3-登录框无法输入用户名和密码","link":"#_3-登录框无法输入用户名和密码","children":[{"level":3,"title":"系统设计逻辑","slug":"系统设计逻辑","link":"#系统设计逻辑","children":[]},{"level":3,"title":"出现问题的原因","slug":"出现问题的原因","link":"#出现问题的原因","children":[]},{"level":3,"title":"如何解决","slug":"如何解决","link":"#如何解决","children":[]},{"level":3,"title":"为什么控制台中看到返回的是412错误","slug":"为什么控制台中看到返回的是412错误","link":"#为什么控制台中看到返回的是412错误","children":[]}]},{"level":2,"title":"[4]（老版本）前端工程编译失败无法启动","slug":"_4-老版本-前端工程编译失败无法启动","link":"#_4-老版本-前端工程编译失败无法启动","children":[{"level":3,"title":"为什么出现编译错误问题","slug":"为什么出现编译错误问题","link":"#为什么出现编译错误问题","children":[]},{"level":3,"title":"编译错误解决办法","slug":"编译错误解决办法","link":"#编译错误解决办法","children":[]}]},{"level":2,"title":"[5]（老版本）Integrity check failed for \\"graceful-fs\\" (computed integrity doesn't match our records","slug":"_5-老版本-integrity-check-failed-for-graceful-fs-computed-integrity-doesn-t-match-our-records","link":"#_5-老版本-integrity-check-failed-for-graceful-fs-computed-integrity-doesn-t-match-our-records","children":[{"level":3,"title":"问题原因","slug":"问题原因","link":"#问题原因","children":[]},{"level":3,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[]}]}],"git":{"createdTime":1734601197000,"updatedTime":1734601197000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":9.14,"words":2743},"filePathRelative":"others/question/frontend.md","localizedDate":"2024年12月19日","autoDesc":true}`);export{v as comp,F as data};