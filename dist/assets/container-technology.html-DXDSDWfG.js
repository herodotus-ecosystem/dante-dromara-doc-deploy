import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as a,o as r}from"./app-CMlKioQF.js";const o="/assets/image/docker/logo-01.png",n="/assets/image/docker/applications.jpg",c="/assets/image/docker/good-container.png",l="/assets/image/docker/app-container.png",s="/assets/image/docker/vm.png",p="/assets/image/docker/container.png",d="/assets/image/docker/history.png",g="/assets/image/docker/what-is-docker.png",h="/assets/image/docker/docker-architecture.png",m="/assets/image/docker/docker-architecture2.png",u="/assets/image/docker/docker-tech.png",k="/assets/image/docker/core-tech.png",f="/assets/image/docker/union-fs.png",y="/assets/image/docker/docker-vs-vm.png",v={};function D(b,e){return r(),i("div",null,e[0]||(e[0]=[a('<h2 id="docker-能解决什么问题" tabindex="-1"><a class="header-anchor" href="#docker-能解决什么问题"><span>Docker 能解决什么问题?</span></a></h2><figure><img src="'+o+'" alt="Docker Logo" tabindex="0" loading="lazy"><figcaption>Docker Logo</figcaption></figure><p>Docker 是一个容器化工具，那么什么是容器呢，Docker 和容器有什么关系，Docker 又能解决什么问题呢？</p><h3 id="麻烦的环境配置" tabindex="-1"><a class="header-anchor" href="#麻烦的环境配置"><span>麻烦的环境配置</span></a></h3><p>软件开发最大的麻烦事之一就是环境配置，在开发之前我们需要准备各种运行环境,IDE,辅助工具。就像我们要使用电脑前，先要安装操作系统一样。</p><p>而一个可用软件的交付过程通常包含两个部分 - 开发和维护。不幸的是，我们很难保证软件开发测试和运行维护阶段的软件能运行在一模一样的环境下。开发常说：&quot;It works on my machine&quot;，很多时候我们都要花大量的时间去配置环境和教别人配置环境。</p><h3 id="现在的应用程序" tabindex="-1"><a class="header-anchor" href="#现在的应用程序"><span>现在的应用程序</span></a></h3><figure><img src="'+n+'" alt="applications.jpg" tabindex="0" loading="lazy"><figcaption>applications.jpg</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">以前的应用程序:</p><ul><li>几乎都是单块应用: 大系统, 多模块</li><li>紧耦合: 内部调用</li><li>不常变更: 需求稳定(改动成本高)</li></ul></div><div class="hint-container tip"><p class="hint-container-title">如今的应用程序:</p><ul><li>解耦: 微服务/异步</li><li>经常变更: 快速迭代</li><li>动态创建和部署: 服务化</li></ul></div><h3 id="新架构的挑战" tabindex="-1"><a class="header-anchor" href="#新架构的挑战"><span>新架构的挑战</span></a></h3><ul><li>多样化的技术栈</li><li>需要动态创建机器</li><li>很多活动组件</li><li>运维人员需要管理复杂的架构</li></ul><div class="hint-container caution"><p class="hint-container-title">复杂的架构</p><p>在新的应用程序架构下，我们部署应用的成本大大增加。不但要搭建不同语言,不同技术栈适配的运行环境，还要部署到多个服务器主机上；并且这些主机还可能来自不同地方(公/私有云主机,物理主机)。</p></div><h3 id="统一的管理" tabindex="-1"><a class="header-anchor" href="#统一的管理"><span>统一的管理</span></a></h3><p>其实在软件开发的过程中我们就思考过类似的问题 - 如何统一的管理我们的代码包。例如，Maven,Gradle,NPM，我们使用一个相同的格式(规范)将我们的代码划分成模块，并使用一套工具去管理他们。在此之后我们不需要重复的 copy 代码,复制文件，只需要声明式的引入我们需要的代码包就可以了。</p><p>当然，我们希望我们的应用部署也能如此简单。</p><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器"><span>“容器”</span></a></h2><figure><img src="'+c+'" alt="good-container.png" tabindex="0" loading="lazy"><figcaption>good-container.png</figcaption></figure><figure><img src="'+l+'" alt="app-container.png" tabindex="0" loading="lazy"><figcaption>app-container.png</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">“容器”是一个黑盒，对于它的使用者来说：</p><ul><li>无需关心里面有什么：只关注“容器”能做什么</li><li>有一套工具来管理黑盒：打包,运输,运行</li><li>减少了部署单元的数量，从而减少了花销：多个工具聚集在一个“容器”内</li><li>更容易管理多个环境：以“容器”为单位进行部署和管理</li></ul></div><h3 id="虚拟化技术" tabindex="-1"><a class="header-anchor" href="#虚拟化技术"><span>虚拟化技术</span></a></h3><p><strong>(1) 虚拟机</strong>：精心配置的虚拟机也是满足我们(基本)要求的容器，我们能够通过虚拟机镜像来打包我们的应用。但是，庞大的操作系统占用了大量的系统资源，使运行成本大大上升。</p><figure><img src="'+s+'" alt="vm.png" tabindex="0" loading="lazy"><figcaption>vm.png</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">虚拟机</p><ul><li>应用 <ul><li>运行环境(Java/数据库/libs...)</li><li>客户机操作系统(Guest Operating System)</li><li>虚拟机管理系统(Hypervisor)</li><li>操作系统级：MacOS(HyperKit)，Windows 的 Hyper-V</li><li>应用软件级：VirtualBox，VMWare Workstation</li></ul></li><li>主操作系统(Host Operating System)</li><li>硬件(Infrastructure)/云主机</li></ul></div><p><strong>(2) 容器</strong>：(作为进程)共用内核并提供额外的隔离手段，避免虚拟的操作系统占用。</p><figure><img src="'+p+'" alt="container.png" tabindex="0" loading="lazy"><figcaption>container.png</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">容器</p><ul><li>应用</li><li>运行环境(Java/数据库/libs...)</li><li>Docker 守护进程(Docker Daemon): 类似虚拟机管理系统</li><li>主操作系统(Host Operating System)</li><li>硬件(Infrastructure)/云主机</li></ul></div><h3 id="容器技术" tabindex="-1"><a class="header-anchor" href="#容器技术"><span>容器技术</span></a></h3><p>容器技术已经发展了一段时间了, 例如, LXC, BSD Jails, Solaris Zones...</p><figure><img src="'+d+'" alt="history.png" tabindex="0" loading="lazy"><figcaption>history.png</figcaption></figure><h4 id="容器技术特点" tabindex="-1"><a class="header-anchor" href="#容器技术特点"><span>容器技术特点</span></a></h4><ul><li>看起来像虚拟机 <ul><li>可以 SSH 到容器</li><li>具有 root 的访问权限</li><li>可以安装包</li><li>可以 mount 文件系统</li><li>拥有自己的 eth0 接口</li><li>可以修改 iptables 规则和 routing table</li></ul></li><li>共享宿主机的内核</li><li>隔离 cgroups (memory, cpu, blkio)</li><li>拥有进程空间 (pid, mnt, net, ipc, uts) <ul><li>pid - 隔离进程 PID</li><li>mnt - 允许创建不同的文件系统层级</li><li>net - 隔离网络控制,iptables,防火墙,路由</li><li>ipc - 定义内部进程交流的范围</li><li>uts - 允许修改 hostname<br> :::</li></ul></li></ul><h4 id="容器技术的局限" tabindex="-1"><a class="header-anchor" href="#容器技术的局限"><span>容器技术的局限</span></a></h4><ul><li>容器没有标准的格式</li><li>所以容器是不可移植的</li><li>没有标准的工具,所以比如要自己管理网络</li><li>没有可重用的模块和 API</li></ul><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><figure><img src="'+g+'" alt="what-is-docker.png" tabindex="0" loading="lazy"><figcaption>what-is-docker.png</figcaption></figure><ul><li>使容器变得更容易使用</li><li>容器镜像的商品化</li><li>可插拔的模块易于吸引供应商加入</li><li>适当的 API 可用来创建高层次抽象的工具</li><li>和微服务诞生在同一个时代</li></ul><h3 id="docker-架构" tabindex="-1"><a class="header-anchor" href="#docker-架构"><span>Docker 架构</span></a></h3><figure><img src="'+h+'" alt="docker-architecture.png" tabindex="0" loading="lazy"><figcaption>docker-architecture.png</figcaption></figure><ul><li>Docker Client：接收命令和 Docker Host 进行交互的客户端</li><li>Docker Host：运行 Docker 服务的主机 <ul><li>Docker Daemon：守护进程，用于管理所有镜像和容器</li><li>Docker Images/Containers：镜像和容器实例</li></ul></li><li>Registry(Hub)：镜像仓库</li></ul><figure><img src="'+m+'" alt="docker-architecture2.png" tabindex="0" loading="lazy"><figcaption>docker-architecture2.png</figcaption></figure><h3 id="docker-底层实现" tabindex="-1"><a class="header-anchor" href="#docker-底层实现"><span>Docker 底层实现</span></a></h3><figure><img src="'+u+'" alt="docker-tech.png" tabindex="0" loading="lazy"><figcaption>docker-tech.png</figcaption></figure><p><a href="https://draveness.me/docker" target="_blank" rel="noopener noreferrer">底层实现原理详解见</a></p><h3 id="docker-核心技术" tabindex="-1"><a class="header-anchor" href="#docker-核心技术"><span>Docker 核心技术</span></a></h3><figure><img src="'+k+'" alt="core-tech.png" tabindex="0" loading="lazy"><figcaption>core-tech.png</figcaption></figure><ul><li>Namespace 命名空间<br> Linux 的命名空间机制提供了以下七种不同的命名空间，包括 <code>CLONE_NEWCGROUP,CLONE_NEWIPC,CLONE_NEWNET,CLONE_NEWNS,CLONE_NEWPID,CLONE_NEWUSER,CLONE_NEWUTS</code>，通过这七个选项我们能在创建新的进程时设置新进程应该在哪些资源上与宿主机器进行隔离。因此容器只能感知内部的进程，而对宿主机和其他容器一无所知。</li><li>CGroups (Control Groups)<br> Linux 的 CGroup 能够为一组进程分配资源，也就是我们在上面提到的 CPU,内存,网络带宽等资源.</li><li>UnionFS<br><img src="'+f+'" alt="union-fs.png" loading="lazy"></li></ul><p>Docker 中的每一个镜像都是由一系列的只读层组成的，Dockerfile 中的每一个命令都会在已有的只读层上创建一个新的层。通过 docker run 命令可以在镜像的最上层添加一个可写的层 - 容器层，所有对于运行时容器的修改其实都是对这个容器读写层的修改。</p><p>容器和镜像的区别就在于，所有的镜像都是只读的，而每一个容器其实等于镜像加上一个可读写的层，也就是同一个镜像可以对应多个容器。同时已构建的每一层镜像也可以作为其他镜像的基础层进行共用。</p><h3 id="docker-vs-vm" tabindex="-1"><a class="header-anchor" href="#docker-vs-vm"><span>Docker VS VM</span></a></h3><figure><img src="'+y+'" alt="docker-vs-vm.png" tabindex="0" loading="lazy"><figcaption>docker-vs-vm.png</figcaption></figure>',51)]))}const x=t(v,[["render",D],["__file","container-technology.html.vue"]]),C=JSON.parse('{"path":"/microservices/container-technology.html","title":"容器化技术","lang":"zh-CN","frontmatter":{"icon":"bars-staggered","title":"容器化技术","tag":["SAS","Spring Authorization Server","Dante Cloud","微服务","领域驱动","DDD","Spring Boot","Spring Cloud","Spring Security","Spring Cloud Alibaba","Spring Cloud Tencent","OAuth2.1","Nacos","Skywalking","Sentinel","Seata"],"description":"Docker 能解决什么问题? Docker LogoDocker Logo Docker 是一个容器化工具，那么什么是容器呢，Docker 和容器有什么关系，Docker 又能解决什么问题呢？ 麻烦的环境配置 软件开发最大的麻烦事之一就是环境配置，在开发之前我们需要准备各种运行环境,IDE,辅助工具。就像我们要使用电脑前，先要安装操作系统一样。 而一...","head":[["meta",{"property":"og:url","content":"https://dante-cloud.dromara.org/microservices/container-technology.html"}],["meta",{"property":"og:site_name","content":"“一套代码、两种架构”的企业级应用系统"}],["meta",{"property":"og:title","content":"容器化技术"}],["meta",{"property":"og:description","content":"Docker 能解决什么问题? Docker LogoDocker Logo Docker 是一个容器化工具，那么什么是容器呢，Docker 和容器有什么关系，Docker 又能解决什么问题呢？ 麻烦的环境配置 软件开发最大的麻烦事之一就是环境配置，在开发之前我们需要准备各种运行环境,IDE,辅助工具。就像我们要使用电脑前，先要安装操作系统一样。 而一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dante-cloud.dromara.org/assets/image/docker/logo-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T15:46:11.000Z"}],["meta",{"property":"article:tag","content":"SAS"}],["meta",{"property":"article:tag","content":"Spring Authorization Server"}],["meta",{"property":"article:tag","content":"Dante Cloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"领域驱动"}],["meta",{"property":"article:tag","content":"DDD"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:tag","content":"Spring Cloud"}],["meta",{"property":"article:tag","content":"Spring Security"}],["meta",{"property":"article:tag","content":"Spring Cloud Alibaba"}],["meta",{"property":"article:tag","content":"Spring Cloud Tencent"}],["meta",{"property":"article:tag","content":"OAuth2.1"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Skywalking"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Seata"}],["meta",{"property":"article:modified_time","content":"2024-12-18T15:46:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"容器化技术\\",\\"image\\":[\\"https://dante-cloud.dromara.org/assets/image/docker/logo-01.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/applications.jpg\\",\\"https://dante-cloud.dromara.org/assets/image/docker/good-container.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/app-container.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/vm.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/container.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/history.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/what-is-docker.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/docker-architecture.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/docker-architecture2.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/docker-tech.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/core-tech.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/union-fs.png\\",\\"https://dante-cloud.dromara.org/assets/image/docker/docker-vs-vm.png\\"],\\"dateModified\\":\\"2024-12-18T15:46:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"码匠君\\",\\"url\\":\\"https://www.herodotus.vip\\"}]}"],["meta",{"name":"keywords","content":"SAS,Spring Authorization Server,Dante Cloud,微服务,DDD,Spring Boot,Spring Cloud,Spring Cloud Alibaba,Spring Cloud Tencent,Nacos,WebFlux,RSocket,GPRC,Minio"}],["script",{},"var _hmt = _hmt || [];\\n            (function() {\\n              var hm = document.createElement(\\"script\\");\\n              hm.src = \\"https://hm.baidu.com/hm.js?9d06530da5dbac9ce977a65ddf8e1cc0\\";\\n              var s = document.getElementsByTagName(\\"script\\")[0]; \\n              s.parentNode.insertBefore(hm, s);\\n            })();"]]},"headers":[{"level":2,"title":"Docker 能解决什么问题?","slug":"docker-能解决什么问题","link":"#docker-能解决什么问题","children":[{"level":3,"title":"麻烦的环境配置","slug":"麻烦的环境配置","link":"#麻烦的环境配置","children":[]},{"level":3,"title":"现在的应用程序","slug":"现在的应用程序","link":"#现在的应用程序","children":[]},{"level":3,"title":"新架构的挑战","slug":"新架构的挑战","link":"#新架构的挑战","children":[]},{"level":3,"title":"统一的管理","slug":"统一的管理","link":"#统一的管理","children":[]}]},{"level":2,"title":"“容器”","slug":"容器","link":"#容器","children":[{"level":3,"title":"虚拟化技术","slug":"虚拟化技术","link":"#虚拟化技术","children":[]},{"level":3,"title":"容器技术","slug":"容器技术","link":"#容器技术","children":[]}]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[{"level":3,"title":"Docker 架构","slug":"docker-架构","link":"#docker-架构","children":[]},{"level":3,"title":"Docker 底层实现","slug":"docker-底层实现","link":"#docker-底层实现","children":[]},{"level":3,"title":"Docker 核心技术","slug":"docker-核心技术","link":"#docker-核心技术","children":[]},{"level":3,"title":"Docker VS VM","slug":"docker-vs-vm","link":"#docker-vs-vm","children":[]}]}],"git":{"createdTime":1734536771000,"updatedTime":1734536771000,"contributors":[{"name":"码匠君","username":"码匠君","email":"pointer_v@qq.com","commits":1,"url":"https://github.com/码匠君"}]},"readingTime":{"minutes":5.56,"words":1669},"filePathRelative":"microservices/container-technology.md","localizedDate":"2024年12月18日","autoDesc":true}');export{x as comp,C as data};
