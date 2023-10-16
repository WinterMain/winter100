---
layout: question
title:  如何检测是否禁用了JavaScript？
date:   2020-03-11T09:27:44.000Z
description: 今天早上有一篇帖子问有多少人禁用JavaScript。然后我开始想知道可以使用什么技术来确定用户是否禁用了它。有谁知道一些简短/简单的方法来检测是否禁...
img: 
author: 小胖MandyGil
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天早上有一篇帖子问有多少人禁用JavaScript。</font><font style="vertical-align: inherit;">然后我开始想知道可以使用什么技术来确定用户是否禁用了它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有谁知道一些简短/简单的方法来检测是否禁用了JavaScript？</font><font style="vertical-align: inherit;">我的目的是警告您，如果没有启用JS的浏览器，站点将无法正常运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终，我想将它们重定向到可以在没有JS的情况下运行的内容，但是我需要将此检测作为占位符才能启动。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第764篇《如何检测是否禁用了JavaScript？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil樱Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在noscript中的meta中添加刷新不是一个好主意。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为noscript标签不符合XHTML</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性值“ Refresh”是非标准的，不应使用。</font><font style="vertical-align: inherit;">“刷新”使对页面的控制远离用户。</font><font style="vertical-align: inherit;">使用“刷新”将导致W3C的Web内容可访问性指南---参考</font></font><a href="http://www.w3schools.com/TAGS/att_meta_http_equiv.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/TAGS/att_meta_http_equiv.asp</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">失败</font><font style="vertical-align: inherit;">。</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿LEY理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用我在</font></font><a href="https://stackoverflow.com/questions/9205051/a-php-function-to-check-for-cookies" title="一个用于检查Cookie的PHP函数"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">介绍的纯服务器端解决方案</font><font style="vertical-align: inherit;">检查cookie，然后通过使用Jquery.Cookie删除cookie来检查javascript，然后以这种方式检查cookie并同时检查cookie和javascript</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们已经发布了一些示例，这些示例是检测的不错选择，但是基于您的“警告警告，如果没有启用JS的浏览器，站点将无法正常运行”。</font><font style="vertical-align: inherit;">您基本上会添加一个在页面上以某种方式显示的元素，例如，获得徽章后在Stack Overflow上显示“弹出式窗口”，并显示一条适当的消息，然后使用一些Javascript将其删除，该Javascript会在页面加载后立即运行（我的意思是DOM，而不是整个页面）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在什么地方检测到它？</font><font style="vertical-align: inherit;">JavaScript？</font><font style="vertical-align: inherit;">那是不可能的。</font><font style="vertical-align: inherit;">如果只希望将其用于记录目的，则可以使用某种跟踪方案，其中每个页面都有JavaScript，这些JavaScript会请求特殊资源（可能很小</font></font><code>gif</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似）。</font><font style="vertical-align: inherit;">这样，您就可以区分唯一页面请求和跟踪文件请求之间的区别。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猪猪乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不只是放置一个劫持的onClick（）事件处理程序，该事件处理程序仅在启用JS时才会触发，并使用该事件处理程序将参数（js = true）附加到单击/选择的URL（您还可以检测到一个下拉列表）并更改添加隐藏表单字段的值）。</font><font style="vertical-align: inherit;">因此，现在服务器看到此参数（js = true）时，便知道已启用JS，然后在服务器端执行了高级逻辑。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  不利的一面是，用户首次访问您的网站时，书签，URL，搜索引擎生成的URL-您将需要检测到这是新用户，因此不要寻找附加在URL上的NVP，并且服务器必须等待下一次单击才能确定用户已启用JS /已禁用JS。</font><font style="vertical-align: inherit;">此外，另一个缺点是该URL最终会出现在浏览器URL上，并且如果该用户随后将该URL标记为书签，即使该用户未启用JS，它也会具有js = true NVP，尽管在下一次单击时，服务器会明智的做法是了解用户是否仍启用了JS。</font><font style="vertical-align: inherit;">igh ..这很有趣...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我过去使用的一种技术是使用JavaScript编写会话cookie，该cookie只是充当表示启用JavaScript的标志。</font><font style="vertical-align: inherit;">然后，服务器端代码将查找此cookie，如果找不到，则将采取适当的措施。</font><font style="vertical-align: inherit;">当然，此技术确实依赖于启用cookie！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi泡芙Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您可以在noscript标签中插入图片标签，然后查看统计信息，您的网站已经加载了多少次，以及该图片的加载频率。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">常见的解决方案是将meta标记与noscript结合使用，以刷新页面并在禁用JavaScript时通知服务器，如下所示：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
    &lt;head&gt;<font></font>
        &lt;noscript&gt;<font></font>
            &lt;meta http-equiv="refresh" content="0; /?javascript=false"&gt;<font></font>
        &lt;/noscript&gt;<font></font>
        &lt;meta charset="UTF-8"/&gt;<font></font>
        &lt;title&gt;&lt;/title&gt;<font></font>
    &lt;/head&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的示例中，当禁用JavaScript时，浏览器将在0秒内重定向到网站的主页。</font><font style="vertical-align: inherit;">另外，它还将参数javascript = false发送到服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，服务器端脚本（例如node.js或PHP）可以解析该参数，并知道JavaScript已被禁用。</font><font style="vertical-align: inherit;">然后，它可以将网站的特殊非JavaScript版本发送给客户端。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙米亚猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是“最干净”的解决方案ID用法：</font></font></p>

<pre><code>&lt;noscript&gt;<font></font>
    &lt;style&gt;<font></font>
        body *{ /*hides all elements inside the body*/<font></font>
            display: none;<font></font>
        }<font></font>
        h1{ /* even if this h1 is inside head tags it will be first hidden, so we have to display it again after all body elements are hidden*/<font></font>
            display: block;<font></font>
        }<font></font>
    &lt;/style&gt;<font></font>
    &lt;h1&gt;JavaScript is not enabled, please check your browser settings.&lt;/h1&gt;<font></font>
&lt;/noscript&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果禁用了javascript，则无论如何客户端代码都不会运行，所以我认为您是想让该信息在服务器端可用。</font><font style="vertical-align: inherit;">在这种情况下，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">noscript</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的帮助较小。</font><font style="vertical-align: inherit;">取而代之的是，我将有一个隐藏的输入并使用javascript来填充一个值。</font><font style="vertical-align: inherit;">在下一个请求或回发之后，如果该值在那里，则表示您已打开javascript。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意noscript之类的东西，第一个请求可能显示为禁用javascript，但以后的请求会打开它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此添加到每个页面的HEAD标签。</font></font></p>

<pre><code>&lt;noscript&gt;<font></font>
        &lt;meta http-equiv="refresh" runat="server" id="mtaJSCheck" content="0;logon.aspx" /&gt;<font></font>
&lt;/noscript&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以你有了：</font></font></p>

<pre><code>&lt;head&gt;<font></font>
    &lt;noscript&gt;<font></font>
        &lt;meta http-equiv="refresh" runat="server" id="mtaJSCheck" content="0;logon.aspx" /&gt;<font></font>
    &lt;/noscript&gt;<font></font>
&lt;/head&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢杰伊。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;noscript&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至没有必要，更不用说</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XHTML不支持</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作示例</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;title&gt;My website&lt;/title&gt;<font></font>
    &lt;style&gt;<font></font>
      #site {<font></font>
          display: none;<font></font>
      }<font></font>
    &lt;/style&gt;<font></font>
    &lt;script src="http://code.jquery.com/jquery-latest.min.js "&gt;&lt;/script&gt;<font></font>
    &lt;script&gt;<font></font>
      $(document).ready(function() {<font></font>
          $("#noJS").hide();<font></font>
          $("#site").show();<font></font>
      });<font></font>
    &lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;div id="noJS"&gt;Please enable JavaScript...&lt;/div&gt;<font></font>
    &lt;div id="site"&gt;JavaScript dependent content here...&lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此示例中，如果启用了JavaScript，那么您将看到该站点。</font><font style="vertical-align: inherit;">如果不是，那么您会看到“请启用JavaScript”消息。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试是否启用JavaScript的最好方法就是尝试并使用JavaScript！</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有效，则启用，否则无效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用简单的JS代码段来设置隐藏字段的值。</font><font style="vertical-align: inherit;">回发后，您知道是否启用了JS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以尝试打开一个快速关闭的弹出窗口（但是可能会看到）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您还有NOSCRIPT标记，可用于为禁用JS的浏览器显示文本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC66078158</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将要看一下noscript标记。</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
...some javascript script to insert data...<font></font>
&lt;/script&gt;<font></font>
&lt;noscript&gt;<font></font>
   &lt;p&gt;Access the &lt;a href="http://someplace.com/data"&gt;data.&lt;/a&gt;&lt;/p&gt;<font></font>
&lt;/noscript&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearDavaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在主体上使用.no-js类，并基于.no-js父类创建非javascript样式。</font><font style="vertical-align: inherit;">如果禁用了javascript，则将获得所有非javascript样式；如果有JS支持，则将替换.no-js类，从而照常提供所有样式。</font></font></p>

<pre><code> document.body.className = document.body.className.replace("no-js","js");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过modernizr </font><font style="vertical-align: inherit;">在HTML5样板</font></font><a href="http://html5boilerplate.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://html5boilerplate.com/中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的技巧，</font><font style="vertical-align: inherit;">但您可以使用一行JavaScript来替换类</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Noscript标记还可以，但是为什么可以使用CSS完成HTML中的多余内容</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三泡芙猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您通过编写不引人注目的JavaScript进行其他选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使项目功能对禁用了JavaScript的用户有效，完成后，实现JavaScript UI增强。</font></font></p>

<p><a href="https://en.wikipedia.org/wiki/Unobtrusive_JavaScript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://en.wikipedia.org/wiki/Unobtrusive_JavaScript</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是对我有用的方法：如果禁用了javascript，它将重定向访客</font></font></p>

<pre><code>&lt;noscript&gt;&lt;meta http-equiv="refresh" content="0; url=whatyouwant.html" /&gt;&lt;/noscript&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的用例是您拥有一个表单（例如，登录表单），并且服务器端脚本需要知道用户是否启用了JavaScript，则可以执行以下操作：</font></font></p>

<pre><code>&lt;form onsubmit="this.js_enabled.value=1;return true;"&gt;<font></font>
    &lt;input type="hidden" name="js_enabled" value="0"&gt;<font></font>
    &lt;input type="submit" value="go"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提交表单之前，这会将js_enabled的值更改为1。</font><font style="vertical-align: inherit;">如果您的服务器端脚本得到0，则没有JS。</font><font style="vertical-align: inherit;">如果得到1，JS！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProItachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript?redirectlocale=en-US&amp;redirectslug=HTML%2FElement%2Fnoscript" rel="noreferrer"><code>noscript</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 块在禁用JavaScript时执行，通常用于显示您在JavaScript中生成的替代内容，例如</font></font></p>

<pre><code>&lt;script type="javascript"&gt;<font></font>
    ... construction of ajaxy-link,  setting of "js-enabled" cookie flag, etc..<font></font>
&lt;/script&gt;<font></font>
&lt;noscript&gt;<font></font>
    &lt;a href="next_page.php?nojs=1"&gt;Next Page&lt;/a&gt;<font></font>
&lt;/noscript&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有JS的用户将获得</font></font><code>next_page</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接-您可以在此处添加参数，以便您在下一页上知道它们是否通过JS /非JS链接来来，还是试图通过JS设置cookie，而缺少JS则意味着是JS被禁用。</font><font style="vertical-align: inherit;">这两个示例都相当琐碎并且易于操作，但是您明白了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要纯粹统计一下您有多少用户禁用了javascript，可以执行以下操作：</font></font></p>

<pre><code>&lt;noscript&gt;<font></font>
    &lt;img src="no_js.gif" alt="Javascript not enabled" /&gt;<font></font>
&lt;/noscript&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后检查您的访问日志以查看该图像被击中了多少次。</font><font style="vertical-align: inherit;">稍微粗略的解决方案，但可以为您的用户群提供一个百分比的好主意。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的方法（图像跟踪）在纯文本浏览器或根本不支持js的浏览器中效果不佳，因此，如果您的用户群主要转向该领域，则可能不是最佳方法。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
