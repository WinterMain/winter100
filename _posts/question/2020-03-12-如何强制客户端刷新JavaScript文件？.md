---
layout: question
title:  如何强制客户端刷新JavaScript文件？
date:   2020-03-12T03:14:34.000Z
description: 我们目前正处于非公开Beta测试阶段，因此仍在进行相当快速的更改，尽管显然随着使用量的增加，我们将放慢这个过程。话虽这么说，我们遇到的一个问题是，在我们推...
img: 
author: 梅小哥
category: question
answer: 21
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们目前正处于非公开Beta测试阶段，因此仍在进行相当快速的更改，尽管显然随着使用量的增加，我们将放慢这个过程。</font><font style="vertical-align: inherit;">话虽这么说，我们遇到的一个问题是，在我们推出新JavaScript文件的更新后，客户端浏览器仍然使用文件的缓存版本，而他们看不到更新。</font><font style="vertical-align: inherit;">显然，在技术支持电话上，我们可以简单地通知他们进行</font></font><kbd>ctrl</kbd><kbd>F5</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刷新以确保他们从服务器获取最新文件，但是最好在此之前进行处理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们当前的想法是将版本号简单地附加到JavaScript文件的名称上，然后在进行更改时增加脚本上的版本并更新所有引用。</font><font style="vertical-align: inherit;">这肯定可以完成工作，但是更新每个发行版上的引用可能会很麻烦。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我确定我们不是第一个处理此问题的人，所以我认为我会将它扔给社区。</font><font style="vertical-align: inherit;">更新代码时，如何确保客户端更新其缓存？</font><font style="vertical-align: inherit;">如果您使用上述方法，是否正在使用简化更改的过程？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第934篇《如何强制客户端刷新JavaScript文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面为我​​工作： </font></font></p>

<pre><code>&lt;head&gt;<font></font>
&lt;meta charset="UTF-8"&gt;<font></font>
&lt;meta http-equiv="cache-control" content="no-cache, must-revalidate, post-check=0, pre-check=0" /&gt;<font></font>
&lt;meta http-equiv="cache-control" content="max-age=0" /&gt;<font></font>
&lt;meta http-equiv="expires" content="0" /&gt;<font></font>
&lt;meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" /&gt;<font></font>
&lt;meta http-equiv="pragma" content="no-cache" /&gt;<font></font>
&lt;/head&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种简单的方法。</font><font style="vertical-align: inherit;">编辑htaccess</font></font></p>

<pre><code>RewriteEngine On<font></font>
RewriteBase /<font></font>
RewriteCond %{REQUEST_URI} \.(jpe?g|bmp|png|gif|css|js|mp3|ogg)$ [NC]<font></font>
RewriteCond %{QUERY_STRING} !^(.+?&amp;v33|)v=33[^&amp;]*(?:&amp;(.*)|)$ [NC]<font></font>
RewriteRule ^ %{REQUEST_URI}?v=33 [R=301,L]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Monkey洋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过标记帮助器在ASP.NET Core中进行缓存清除将为您解决此问题，并允许浏览器保留缓存的脚本/ css，直到文件更改为止。</font><font style="vertical-align: inherit;">只需将标签助手asp-append-version =“ true”添加到脚本（js）或链接（css）标签中：</font></font></p>

<pre><code>&lt;link rel="stylesheet" href="~/css/site.min.css" asp-append-version="true"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dave Paquette在此处提供了一个很好的示例以及缓存清除的说明（页面底部）</font></font><a href="http://www.davepaquette.com/archive/2015/05/06/link-and-script-tag-helpers-in-mvc6.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缓存清除</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案？</font><font style="vertical-align: inherit;">不要让浏览器完全缓存。</font><font style="vertical-align: inherit;">附加当前时间（以毫秒为单位）作为查询。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（您仍处于测试阶段，因此您可以为不针对性能进行优化提供合理的理由。这里是YMMV。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管它是特定于框架的，但Django 1.4具有</font></font><a href="https://docs.djangoproject.com/en/dev/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.CachedStaticFilesStorage" rel="nofollow noreferrer" title="此功能"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其工作方式与</font><a href="https://stackoverflow.com/a/32427/110226"><font style="vertical-align: inherit;">上述答案中</font></a><font style="vertical-align: inherit;">指向“ greenfelt”站点的链接类似</font></font><a href="https://stackoverflow.com/a/32427/110226"><font style="vertical-align: inherit;"></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用版本</font></font><code>GET</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量来防止浏览器缓存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加</font></font><code>?v=AUTO_INCREMENT_VERSION</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到网址末尾可防止浏览器缓存-避免任何和所有缓存的脚本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="http://www.stefanhayden.com/blog/2006/04/03/css-caching-hack/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.stefanhayden.com/blog/2006/04/03/css-caching-hack/上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布（参考CSS）后，我的同事刚刚找到了对该方法的引用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">很高兴看到其他人正在使用它，并且似乎可以正常工作。</font><font style="vertical-align: inherit;">在这一点上，我认为在所有脚本标签中没有比找到替换增加这些“版本号”更好的方法了吗？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小胖Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种解决方案是在获取资源时将带有时间戳的查询字符串附加到URL。</font><font style="vertical-align: inherit;">这利用了以下事实：浏览器将不会缓存从URL中带有查询字符串的资源。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能根本不希望浏览器完全不缓存这些资源。</font><font style="vertical-align: inherit;">您更可能希望将其缓存，但希望浏览器在文件可用时获取新版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最常见的解决方案似乎是在文件名本身中嵌入时间戳或修订号。</font><font style="vertical-align: inherit;">这需要做更多的工作，因为需要修改您的代码以请求正确的文件，但这意味着，例如，您的版本7 </font></font><code>snazzy_javascript_file.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（即</font></font><code>snazzy_javascript_file_7.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）会在浏览器中缓存，直到您发布版本8，然后您的代码更改为取</font></font><code>snazzy_javascript_file_8.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来代替。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用a而</font></font><code>file.js?V=1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是a </font><font style="vertical-align: inherit;">的优点</font></font><code>fileV1.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是您不需要在服务器上存储JavaScript文件的多个版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到的问题</font></font><code>file.js?V=1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，在使用新版本的库实用程序时，您可能在另一个JavaScript文件中有从属代码会中断。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了向后兼容，我认为最好</font></font><code>jQuery.1.3.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在新页面上使用并让现有页面使用</font></font><code>jQuery.1.1.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，直到必要时准备升级旧页面为止。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJinHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在asp.net mvc中，可以将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ DateTime.UtcNow.ToString（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于js文件版本号。</font><font style="vertical-align: inherit;">版本号随日期自动更改，并且您强制客户端浏览器自动刷新js文件。</font><font style="vertical-align: inherit;">我使用这种方法，并且效果很好。</font></font></p>

<pre><code>&lt;script src="~/JsFilePath/JsFile.js?v=@DateTime.UtcNow.ToString()"&gt;&lt;/script&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery函数getScript也可以用于确保每次加载页面时确实加载了js文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的方法：</font></font></p>

<pre><code>$(document).ready(function(){<font></font>
    $.getScript("../data/playlist.js", function(data, textStatus, jqxhr){<font></font>
         startProgram();<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="http://api.jquery.com/jQuery.getScript/" rel="nofollow"><font style="vertical-align: inherit;">http://api.jquery.com/jQuery.getScript/中</font></a><font style="vertical-align: inherit;">检查该功能</font></font><a href="http://api.jquery.com/jQuery.getScript/" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，$。getScript（）将缓存设置设置为false。</font><font style="vertical-align: inherit;">这会将带时间戳的查询参数附加到请求URL，以确保浏览器在每次请求时都下载脚本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">location.reload（true）;</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://www.w3schools.com/jsref/met_loc_reload.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.w3schools.com/jsref/met_loc_reload.asp</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我动态调用这一行代码，以确保已从Web服务器而不是从浏览器的缓存中重新检索了javascript，从而避免了此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并非所有浏览器都以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“？”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缓存文件 </font><font style="vertical-align: inherit;">在里面。</font><font style="vertical-align: inherit;">为了确保尽可能多地对其进行缓存，我在文件名中包含了该版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以</font></font><code>stuff.js?123</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">代替了</font></font><code>stuff_123.js</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾用过</font></font><code>mod_redirect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我认为）</font></font><code>have stuff_*.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去</font></font><code>stuff.js</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于ASP.NET，我想使用高级选项（调试/发布模式，版本）的下一个解决方案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过以下方式包含的Js或Css文件：</font></font></p>

<pre><code>&lt;script type="text/javascript" src="Scripts/exampleScript&lt;%=Global.JsPostfix%&gt;" /&gt;<font></font>
&lt;link rel="stylesheet" type="text/css" href="Css/exampleCss&lt;%=Global.CssPostfix%&gt;" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Global.JsPostfix和Global.CssPostfix是通过Global.asax中的以下方式计算的：</font></font></p>

<pre><code>protected void Application_Start(object sender, EventArgs e)<font></font>
{<font></font>
    ...<font></font>
    string jsVersion = ConfigurationManager.AppSettings["JsVersion"];<font></font>
    bool updateEveryAppStart = Convert.ToBoolean(ConfigurationManager.AppSettings["UpdateJsEveryAppStart"]);<font></font>
    int buildNumber = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.Revision;<font></font>
    JsPostfix = "";<font></font>
#if !DEBUG<font></font>
    JsPostfix += ".min";<font></font>
#endif      <font></font>
    JsPostfix += ".js?" + jsVersion + "_" + buildNumber;<font></font>
    if (updateEveryAppStart)<font></font>
    {<font></font>
        Random rand = new Random();<font></font>
        JsPosfix += "_" + rand.Next();<font></font>
    }<font></font>
    ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如今，常见的做法是生成内容哈希码作为文件名的一部分，以强制浏览器（尤其是IE）重新加载javascript文件或css文件。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如， </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供应商。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">a7561fb0e9a071baadb9</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .js </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
main。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b746e3eb72875af2caa9</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .js</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，这是构建工具（例如webpack）的工作。</font><font style="vertical-align: inherit;">如果有人想尝试使用webpack，</font><font style="vertical-align: inherit;">这里有更多</font></font><a href="https://webpack.js.org/guides/caching/#output-filenames" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细信息</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于ASP.NET页面，我正在使用以下内容</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font></strong></p>

<pre><code>&lt;script src="/Scripts/pages/common.js" type="text/javascript"&gt;&lt;/script&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后（强制装弹）</font></font></strong></p>

<pre><code>&lt;script src="/Scripts/pages/common.js?ver&lt;%=DateTime.Now.Ticks.ToString()%&gt;" type="text/javascript"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加DateTime.Now.Ticks效果很好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要生成链接到JS文件的页面，则一种简单的解决方案是将文件的最后修改时间戳记附加到生成的链接。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与Huppie的答案非常相似，但是可以在没有关键字替换的版本控制系统中使用。</font><font style="vertical-align: inherit;">这也比追加当前时间更好，因为即使文件完全没有更改，这样做也可以防止缓存。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将当前时间附加到URL确实是一种常见的解决方案。</font><font style="vertical-align: inherit;">但是，如果需要，也可以在Web服务器级别进行管理。</font><font style="vertical-align: inherit;">可以将服务器配置为发送JavaScript文件的不同HTTP标头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，要强制将文件缓存不超过1天，您可以发送：</font></font></p>

<pre><code>Cache-Control: max-age=86400, must-revalidate
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Beta版，如果要强制用户始终获取最新版本，则可以使用：</font></font></p>

<pre><code>Cache-Control: no-cache, must-revalidate
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Page-Speed：在URL中不要包含用于静态资源的查询字符串。</font><font style="vertical-align: inherit;">大多数代理（最著名的是通过3.0版的Squid up）不使用“？”缓存资源。</font><font style="vertical-align: inherit;">即使响应中存在Cache-control：公共标头，也不会在其URL中显示。</font><font style="vertical-align: inherit;">要为这些资源启用代理缓存，请从对静态资源的引用中删除查询字符串，然后将参数编码为文件名本身。</font></font></p>

<p>In this case, you can include the version into URL ex: <a href="http://abc.com/">http://abc.com/</a><strong>v1.2</strong>/script.js and use apache mod_rewrite to redirect the link to <a href="http://abc.com/script.js">http://abc.com/script.js</a>. When you change the version, client browser will update the new file.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p>This usage has been deprected:
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache</a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案仅晚了6年，但是我在很多地方都看不到这个答案。HTML5引入了</font><font style="vertical-align: inherit;">用于解决此问题的</font></font><a href="http://www.w3schools.com/html/html5_app_cache.asp" rel="nofollow noreferrer" title="应用程序缓存"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序缓存</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我发现我正在编写的新服务器代码使存储在人们浏览器中的旧javascript崩溃，因此我想找到一种使它们的javascript过期的方法。</font><font style="vertical-align: inherit;">使用清单文件，如下所示：</font></font></p>

<pre><code>CACHE MANIFEST<font></font>
# Aug 14, 2014<font></font>
/mycode.js<font></font>
<font></font>
NETWORK:<font></font>
*<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在每次您希望用户更新其缓存时使用新的时间戳生成该文件。</font><font style="vertical-align: inherit;">附带说明一下，如果添加了此选项，则</font><font style="vertical-align: inherit;">在清单通知您之前</font><font style="vertical-align: inherit;">，浏览器将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新加载（即使当用户刷新页面时）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子古一蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，一个常见的解决方案是</font></font><code>?&lt;version&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在脚本的src链接中</font><font style="vertical-align: inherit;">添加一个</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;script type="text/javascript" src="myfile.js?1500"&gt;&lt;/script&gt;
</code></pre>

<hr>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这一点上，我认为在所有脚本标签中没有比找到替换增加这些“版本号”更好的方法了吗？</font></font></p>
</blockquote>

<p>You might have a version control system do that for you? Most version control systems have a way to automatically inject the revision number on check-in for instance.</p>

<p>It would look something like this:</p>

<pre><code>&lt;script type="text/javascript" src="myfile.js?$$REVISION$$"&gt;&lt;/script&gt;
</code></pre>

<hr>

<p>Of course, there are always better solutions like <a href="http://blog.greenfelt.net/2009/09/01/caching-javascript-safely/" rel="noreferrer">this one</a>.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
