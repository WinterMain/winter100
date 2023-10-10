---
layout: question
title:  同一服务器上的Apache和Node.js
date:   2020-03-18T08:45:03.000Z
description: 我想使用Node，因为它速度很快，使用的是我在客户端使用的相同语言，并且按照定义它是非阻塞的。但是我雇用来编写程序进行文件处理（保存，编辑，重命名，下载，...
img: 
author: 神无LEYMandy
category: question
answer: 6
tags: apache Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用Node，因为它速度很快，使用的是我在客户端使用的相同语言，并且按照定义它是非阻塞的。</font><font style="vertical-align: inherit;">但是我雇用来编写程序进行文件处理（保存，编辑，重命名，下载，上传文​​件等）的那个人，他想使用apache。</font><font style="vertical-align: inherit;">因此，我必须：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说服他使用Node（在此方面他几乎没有放弃）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弄清楚如何在节点或节点中上载，下载，重命名，保存等文件</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须在同一服务器上安装apache和node。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪个是最有利的情况，我该如何实施？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋梅古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设您正在制作Web应用程序，因为您引用的是Apache和Node。</font><font style="vertical-align: inherit;">快速解答-是否可以-是。</font><font style="vertical-align: inherit;">是否推荐-否。</font><font style="vertical-align: inherit;">Node捆绑了它自己的Web服务器，大多数网站都在端口80上运行。我还假设Nodejs目前不支持Apache插件，并且我不确定创建虚拟主机是否是实现此目的的最佳方法。</font><font style="vertical-align: inherit;">这些是像Joyent一样的维护Nodejs的开发人员应该回答的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好不要评估端口，而要评估Node的技术堆栈，因为它与大多数其他堆栈完全不同，这就是我喜欢它的原因，但是它还涉及一些您应该事先意识到的折衷方案。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的示例看起来类似于CMS或共享Web应用程序，并且有数百种开箱即用的应用程序可以在Apache上很好地运行。</font><font style="vertical-align: inherit;">即使您不喜欢任何现成的解决方案，也可以用PHP / Java / Python编写一个Webapp或将它与几个现成的应用程序混合使用，它们都经过设计和支持，可在单个Apache实例后运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在是时候停下来想一想我刚才说的话了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您可以决定要使用哪个技术堆栈了。</font><font style="vertical-align: inherit;">如果您的网站永远不会使用数千个需要Apache的现成应用程序中的任何一个，那么请使用Node，否则您必须首先消除我之前所说的假设。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，您选择的技术栈比任何单个组件都重要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我完全同意@Straseus的观点，即使用node.js文件系统api处理上传和下载相对比较简单，但从长远来看，请更多地考虑您想要从网站中获得什么，然后选择您的技术栈。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">学习Node的框架比学习其他框架要容易，但这不是万能的。</font><font style="vertical-align: inherit;">稍加努力（本身可能是值得的），您也可以学习任何其他框架。</font><font style="vertical-align: inherit;">我们彼此学习，如果您作为一个小型团队工作，与单独工作相比，您的工作效率会更高。</font><font style="vertical-align: inherit;">因此，不要那么便宜地降低团队其他成员的技能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章大约有一年的历史了，很可能您已经决定了，但是我希望我的助手能帮助下一个正在做出类似决定的人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢阅读。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Eva小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明运行</font></font><code>node server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">沿</font></font><code>apache2(v2.4.xx) server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
 </font></font><br>
<br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了管在一个特定的URL的所有请求您的Node.js应用程序创建</font></font><code>CUSTOM.conf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的内部文件</font></font><code>/etc/apache2/conf-available</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录，并添加以下行创建的文件：</font></font></p>

<pre><code>ProxyPass /node http://localhost:8000/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将8000更改为首选端口号</font></font><code>node server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。 
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令启用自定义配置：</font></font></p>

<pre><code>$&gt; sudo a2enconf CUSTOM
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CUSTOM是您新创建的文件名，不带扩展名，然后</font></font><code>proxy_http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令</font><font style="vertical-align: inherit;">启用</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$&gt; sudo a2enmod proxy_http
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它应该同时启用</font></font><code>proxy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>proxy_http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块。</font><font style="vertical-align: inherit;">您可以使用以下方法检查模块是否已启用：</font></font></p>

<pre><code>$&gt; sudo a2query -m MODULE_NAME
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用配置和模块后，您将需要重新启动apache服务器：</font></font></p>

<pre><code>$&gt; sudo service apache2 restart
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以执行节点服务器。</font><font style="vertical-align: inherit;">对的所有请求</font></font><code>URL/node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将由节点服务器处理。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近遇到了一个类似的问题，我需要在基于PHP的codeigniter项目中使用websocket在客户端和服务器之间进行通信。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过将端口（正在运行的节点应用）添加到</font></font><code>Allow incoming TCP ports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>Allow outgoing TCP ports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列表中</font><font style="vertical-align: inherit;">解决了此问题</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>Firewall Configurations</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器的WHM面板中</font><font style="vertical-align: inherit;">找到这些配置</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一台服务器上运行Node和Apache很简单，因为它们不会冲突。</font><font style="vertical-align: inherit;">NodeJS只是执行JavaScript服务器端的一种方式。</font><font style="vertical-align: inherit;">真正的困境来自外部访问Node和Apache。</font><font style="vertical-align: inherit;">在我看来，您有两种选择：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置Apache以将所有匹配的请求代理到NodeJS，这将执行文件上传以及节点中的其他操作。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将Apache和Node放在不同的IP：port组合上（如果您的服务器有两个IP，则一个可以绑定到节点侦听器，另一个绑定到Apache）。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也开始怀疑这可能不是您真正想要的。</font><font style="vertical-align: inherit;">如果您的最终目标是用Node.js编写应用程序逻辑，然后将某些“文件处理”部分卸载给承包商，那么这实际上是一种语言选择，而不是Web服务器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋飞云</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题更多地涉及</font></font><a href="http://serverfault.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器故障，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是FWIW我想说在大多数情况下在Node.js之前运行Apache不是一个好方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Apache的ProxyPass在很多方面都很棒（例如，将基于Tomcat的服务作为站点的一部分公开），并且如果您的Node.js应用只是在做特定的，小的角色，或者是内部工具，只可能有有限的用户数量那么使用它可能会更容易，这样您就可以继续使用它，但是听起来不像这里。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要利用性能和扩展性，可以从使用Node.js中获得收益-特别是如果您要使用涉及维护持久性连接（如Web套接字）的东西-最好同时运行Apache和Node。 js在其他端口上（例如localhost：8080上的Apache，localhost：3000上的Node.js），然后在前面运行类似nginx，Varnish或HA代理的内容-并以此方式路由流量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用诸如varnish或nginx之类的东西，您可以基于路径和/或主机来路由流量。</font><font style="vertical-align: inherit;">与使用Apache进行相同的操作相比，它们都使用更少的系统资源，并且具有更大的可伸缩性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>ProxyPass /node http://localhost:8000/     
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在httpd-vhosts.conf而不是httpd.conf中进行以上输入时，这对我有用</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在我的环境中安装了XAMPP，并希望通过8080端口（即</font><a href="http://localhost/[name_of_the_node_application]" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http：// localhost / [name_of_the_node_application]）</font></a><font style="vertical-align: inherit;">上运行的NodeJS applicatin击打80端口上的Apache上的所有流量。</font></font><a href="http://localhost/[name_of_the_node_application]" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
