---
layout: question
title:  npm不起作用-“读取ECONNRESET”
date:   2020-03-24T09:01:07.000Z
description: 我在使用npm时遇到问题，无法安装任何软件。这是错误消息：C \Windows\system32>npm install -g yonpm http...
img: 
author: 伽罗
category: question
answer: 25
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用npm时遇到问题，无法安装任何软件。</font><font style="vertical-align: inherit;">这是错误消息：</font></font></p>

<pre><code>C:\Windows\system32&gt;npm install -g yo<font></font>
npm http GET https://registry.npmjs.org/yo<font></font>
npm http GET https://registry.npmjs.org/yo<font></font>
npm http GET https://registry.npmjs.org/yo<font></font>
npm ERR! network read ECONNRESET<font></font>
npm ERR! network This is most likely not a problem with npm itself<font></font>
npm ERR! network and is related to network connectivity.<font></font>
npm ERR! network In most cases you are behind a proxy or have bad network settin<font></font>
gs.<font></font>
npm ERR! network<font></font>
npm ERR! network If you are behind a proxy, please make sure that the<font></font>
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'<font></font>
<font></font>
npm ERR! System Windows_NT 6.2.9200<font></font>
npm ERR! command "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nod<font></font>
ejs\\node_modules\\npm\\bin\\npm-cli.js" "install" "-g" "yo"<font></font>
npm ERR! cwd C:\Windows\system32<font></font>
npm ERR! node -v v0.10.17<font></font>
npm ERR! npm -v 1.3.8<font></font>
npm ERR! syscall read<font></font>
npm ERR! code ECONNRESET<font></font>
npm ERR! errno ECONNRESET<font></font>
npm ERR!<font></font>
npm ERR! Additional logging details can be found in:<font></font>
npm ERR!     C:\Windows\system32\npm-debug.log<font></font>
npm ERR! not ok code 0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道为什么吗？</font><font style="vertical-align: inherit;">这是我的网络设置，似乎我没有配置任何代理。</font><font style="vertical-align: inherit;">我还禁用了所有防火墙。</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/24211/images/thumbnails/1585040467663.png" data-src="https://www.samyoc.com//uploads/users/24211/images/1585040467663.png" alt="在此处输入图片说明"></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3521篇《npm不起作用-“读取ECONNRESET”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请用这个 </font></font></p>

<blockquote>
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm配置设置注册表</font></font><a href="http://registry.npmjs.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://registry.npmjs.org/</font></font></a></p>
  </blockquote>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm config set https-proxy“ </font></font><a href="http://username:password@proxy-url:proxy-port" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// username：password @ proxy-url：proxy-port</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”对我有用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以防万一...再多花点时间为我工作。</font><font style="vertical-align: inherit;">这</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是暂时的连接问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动我的电脑使其正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Windows，则应遵循“高级系统设置”来检查在那里声明的env var，您应注意，代理配置可能位于环境变量中，如下图所示： </font></font></p>

<p><a href="https://i.stack.imgur.com/suuvY.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/suuvY.png" alt="Windows环境变量"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您的代理服务器不可用或阻止来自npm的流量，您可能会注意到本主题中的上述错误。</font><font style="vertical-align: inherit;">也许您根本不需要任何代理，在这种情况下，只需删除此HTTP_PROXY env变量即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在Windows和npm设置中关闭了所有代理配置，但是，npm在下载资源时仍然出现超时和连接错误，然后我发现env变量上还剩下一个代理配置，这引起了所有麻烦。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现“ npm config edit”对于更新https-proxy，proxy，registry的条目更有用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了这样的事情</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm配置列表</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm config编辑（在vi中打开） </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑或设置https代理，代理，注册表的配置条目</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们公司的防火墙将停止安装节点，因此会连接到个人网络并进行安装，它对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Sam</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用：</font></font></p>

<pre><code>proxy = http://1.1.1.1:3128/<font></font>
https_proxy = http://1.1.1.1:3128/<font></font>
strict-ssl = false<font></font>
ca = null<font></font>
registry = http://registry.npmjs.org/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里找到答案：</font><a href="https://fak3r.com/2015/07/31/howto-use-npm-behind-a-corporate-proxy/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://fak3r.com/2015/07/31/howto-use-npm-behind-a-corporate-proxy/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//fak3r.com/2015/07/31/howto-use-npm-behind-a-corporate-proxy/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从npm安装任何软件包时，我在Windows中都遇到了相同的问题。</font><font style="vertical-align: inherit;">修复了以下问题：-**以管理员身份打开命令提示符并运行这3条命令** /</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> npm config rm代理</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> npm config rm https-proxy</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   npm安装npm @ latest -g</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于MAC / LINUX </font></font></strong><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> sudo npm config rm代理</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> sudo npm config rm https-proxy</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> sudo npm install npm @ latest -g</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，这是带有npm的版本isuue。</font><font style="vertical-align: inherit;">请检查它的担心</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Oracle VirtualBox中</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模拟的系统</font><font style="vertical-align: inherit;">上运行时，我遇到了同样的问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我通过在网络适配器属性中添加Google DNS地址来解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络适​​配器属性&gt; IPv4属性&gt;首选DNS地址：</font></font><code>8.8.8.8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，但是这些解决方案均无法正常工作。</font><font style="vertical-align: inherit;">最后，我通过</font><font style="vertical-align: inherit;">npm兼容的</font></font><a href="https://yarnpkg.com/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">yarn</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来安装软件包</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">根据官方网站：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于大多数用户而言，从npm迁移应该是一个相当简单的过程。</font><font style="vertical-align: inherit;">Yarn可以使用与npm相同的package.json格式，并且可以从npm注册表中安装任何软件包。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需安装yarn，然后使用以下命令（相当于</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in yarn）</font><font style="vertical-align: inherit;">运行安装程序</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>yarn install
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下位置了解更多信息</font></font><a href="https://yarnpkg.com/lang/en/docs/migrating-from-npm/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：Yarn：从npm迁移</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有代理，我在本地家庭网络上也遇到了同样的问题。</font><font style="vertical-align: inherit;">此主题中的其他答案对我不起作用。</font><font style="vertical-align: inherit;">我最终要做的是使用</font></font><code>yarn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它可以与互换使用</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>yarn add
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到今天，我仍然不知道为什么我的npm仍然无法正常工作。</font><font style="vertical-align: inherit;">我肯定知道这是我的Wi-Fi的问题，因为当我连接到LTE时，从智能手机广播的互联网</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">又可以正常工作。</font><font style="vertical-align: inherit;">这可能与路由器设置有关（当我升级互联网速度并且ISP工作人员用新路由器替换旧路由器时出现问题）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>npm config rm proxy</code></p>

<p><code>npm config rm https-proxy</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端前端凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个老问题，但无论如何。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试部署到heroku时遇到了这个问题，而对我</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用</font><font style="vertical-align: inherit;">的修复程序是更新</font><font style="vertical-align: inherit;">所使用</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">版本。</font><font style="vertical-align: inherit;">我的版本为2.xx，我更新为3.xx</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOJim</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有npm抛出此错误的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，基本上，每当抛出错误时，我要么使用</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
git </font><font style="vertical-align: inherit;">手动安装</font><font style="vertical-align: inherit;">，要么等待并安装指定的版本，例如：</font></font></p>

<pre><code>npm install resolve@^1.1.6
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独运行时：</font></font></p>

<pre><code>npm install resolve
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有工作。</font></font></p>

<p><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将node.js从7更新为8，npm安装顺利进行。</font></font></strike></p><strike>

</strike><p><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为也许是版本7引起了这个问题，因为</font></font><a href="https://stackoverflow.com/a/43049611/7096189"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@luschn</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">降级为6，所以他也没有使用7。</font></font></strike></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许注册表本身在返回错误时没有在状态页上显示问题，因为一段时间后，我可以安装这个破损的软件包，然后继续</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装其余的</font><font style="vertical-align: inherit;">软件包</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinNear</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试过这里和其他页面上发布的几乎所有方法，但是没有用。</font><font style="vertical-align: inherit;">以下是我按顺序执行的命令，我鼓励您尝试一下，因为它对许多人有用（但对我而言不行）：  </font></font></p>

<ul>
<li><code>npm config rm proxy</code></li>
<li><code>npm config rm https-proxy</code></li>
<li><code>npm config set https-proxy https://username:password@proxy.company.com:6050</code> </li>
<li><code>npm config set proxy http://username:password@proxy.company.com:6050</code></li>
<li><code>npm config set registry http://registry.npmjs.org/</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后尝试安装该软件包</font></font><code>npm install -g express</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但失败了。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我尝试运行</font></font><code>npm install npm@latest -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">时，</font><font style="vertical-align: inherit;">它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奇迹般地</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行并安装良好！</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
然后</font></font><code>npm install -g express</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">也很好。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TL; DR</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：将npm更新到最新版本解决了该问题（当前为6.0.1）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在工作中，我必须加载浏览器并浏览一个网页（这使我可以通过我们的网络过滤器进行身份验证）。</font><font style="vertical-align: inherit;">然后，我重试了命令，它成功运行了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您保存的承载令牌现在无效，那么您也可能会遇到此错误。</font><font style="vertical-align: inherit;">我在使用私有存储库时遇到过这种情况，在该存储库中擦除并重置了帐户，使令牌无效。</font><font style="vertical-align: inherit;">尽管您的存储库可能不需要身份验证，但是如果您具有来自先前登录的令牌，它将被传递，如果无效，则您的连接将被关闭。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过使用新的用户名和密码再次登录，或者大概通过npm注销来解决此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪JinJin西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不想切换到http作为注册表，对我有用的是从最新的Node版本降级到LTS版本（截至目前为6.x）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能是由于使用npm安装任何东西</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致的-导致缓存中的文件归root所有，从而导致此问题。</font><font style="vertical-align: inherit;">您可以通过运行以下命令进行修复：</font></font></p>

<p><code>sudo rm -rf ~/.npm</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除缓存。</font><font style="vertical-align: inherit;">然后尝试任何你再次做，确保你永远不会使用</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或者问题可能回来）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很多更多的信息：</font></font><a href="https://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo/24404451#24404451"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm抛出错误而没有sudo</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要检查NPM代理设置并删除它。</font></font></p>

<pre><code>npm config get proxy<font></font>
npm config rm proxy<font></font>
npm config rm https-proxy<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能有人希望全新安装的NodeJS + NPM不会配置代理。</font><font style="vertical-align: inherit;">奇怪的是，我的确定义了一个代理，指向IP和端口3128。删除代理就可以了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还需要指定代理服务器/端口，在某些环境中，代理的系统设置不足以使npm正常工作。</font></font></p>

<pre><code>    npm config set proxy "http://your-proxy.com:80"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使npm在代理网络中正常运行的三件事。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此设置npm注册表，默认情况下可能需要使用https。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm配置集注册表“ </font></font><a href="http://registry.npmjs.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://registry.npmjs.org/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次是系统中的两个代理服务器。</font><font style="vertical-align: inherit;">如果您的组织使用代理还是您。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm config设置代理“ </font></font><a href="http://username:password@proxy-url:proxy-port" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// username：password @ proxy-url：proxy-port</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm config设置https-proxy“ </font></font><a href="http://username:password@proxy-url:proxy-port" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// username：password @ proxy-url：proxy-port</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以通过以下方法检查它们是否已设置</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm config获取https-proxy</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于所有值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyStafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font></p>

<pre><code>npm config set registry http://registry.npmjs.org/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此npm要求</font></font><code>http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">url而不是</font></font><code>https</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后尝试相同的</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在家删除您的代理设置并在Office网络上打开，这可能很烦人，但是对我有用：</font></font></p>

<pre><code>npm config set proxy http://xxx.xxx.xxx.4:8080   <font></font>
npm config set https-proxy http://xxx.xxx.xxx.4:8080<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>npm config rm proxy   <font></font>
npm config rm https-proxy<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
