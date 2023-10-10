---
layout: question
title:  未捕获ReferenceError：未定义$？
date:   2020-03-11T09:49:21.000Z
description: 此代码如何引发  未捕获的ReferenceError：未定义$以前什么时候可以？   $(document).ready(functio...
img: 
author: Near米亚
category: question
answer: 25
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码如何引发</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的ReferenceError：未定义$</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前什么时候可以？   </font></font></p>

<pre class="lang-js prettyprint-override"><code>$(document).ready(function() {<font></font>
    $('#tabs &gt; ul').tabs({ fx: { opacity: 'toggle' } });<font></font>
    $('#featuredvid &gt; ul').tabs();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项卡中的结果不再关闭。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标题中引用了jQuery：</font></font></p>

<pre class="lang-php prettyprint-override"><code>&lt;script language="JavaScript" type="text/javascript" src="&lt;?php echo get_option('siteurl') ?&gt;/js/sprinkle.js"&gt;&lt;/script&gt;<font></font>
&lt;script language="JavaScript" type="text/javascript" src="&lt;?php echo get_option('siteurl') ?&gt;/js/jquery-1.2.6.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script language="JavaScript" type="text/javascript" src="&lt;?php echo get_option('siteurl') ?&gt;/js/jquery-ui-personalized-1.5.2.packed.js"&gt;&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第777篇《未捕获ReferenceError：未定义$？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var $ = jQuery;<font></font>
jQuery(document).ready(function($){<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果存在网络问题，也会发生这种情况。</font><font style="vertical-align: inherit;">这意味着，即使“ jquery脚本”已经到位，并且在使用之前就已包含在内，由于无法访问jquery脚本，因此在加载页面时，因此对“ $”的定义被视为“未定义的引用”。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试/调试目的::</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试在浏览器上访问“ jquery-script” URL。</font><font style="vertical-align: inherit;">如果可访问，则您的页面应正确加载，否则将显示上述错误（或其他与脚本相关的错误）。</font><font style="vertical-align: inherit;">示例- </font><font style="vertical-align: inherit;">在浏览器上（或浏览器上下文姿态），应该可以访问</font></font><a href="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有类似的问题，其中我可以在Windows主机浏览器中加载html页（使用脚本），但无法加载vm-ubuntu。</font><font style="vertical-align: inherit;">解决网络问题，问题得到解决。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">gia</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我通过移动热点浏览Internet时遇到了这个问题。</font><font style="vertical-align: inherit;">它也正在压缩图像，并在body标签底部添加了以下脚本</font></font></p>

<pre><code>&lt;script language="javascript"&gt;&lt;!--<font></font>
bmi_SafeAddOnload(bmi_load,"bmi_orig_img");//--&gt;<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我连接到正确的wifi连接时，一切似乎都能为我找到。</font><font style="vertical-align: inherit;">希望这可以帮助某人。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="local_xxx.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有类似的问题，你知道吗，这是因为</font><font style="vertical-align: inherit;">当我在android设备webview中测试时</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络断开了</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我没有意识到，并且本地js加载没有问题，因为它不需要网络。</font><font style="vertical-align: inherit;">看起来很荒谬，但是却花了我大约1个小时来弄清楚它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奇怪的是，我的问题来自PHP。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">REST API调用失败，并且此后中断了库的加载。</font><font style="vertical-align: inherit;">由于失败是来自REST调用的，因此没有给我php编译错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可以加载jquery，也可以选择保留此选项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个类似的问题，这是因为我在样式表链接上缺少结束符&gt;。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我忘了包括：</font></font></p>

<pre><code> &lt;script src ="jquery-2.1.1.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">早些时候，我只包含了导致此错误的jquery-mobile。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">h！</font><font style="vertical-align: inherit;">我在标签中混用了引号，导致jquery引用中断。</font><font style="vertical-align: inherit;">在Chrome浏览器中进行了检查，使我看到文件未正确链接。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">现，在</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我修改了脚本标记以指向正确的内容，并在编辑器中将脚本顺序更改为正确的顺序。</font><font style="vertical-align: inherit;">但是完全忘记保存更改。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚JinJin樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下两种情况下也会发生该错误。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML文件中缺少@section脚本元素 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问DOM元素时出错。</font><font style="vertical-align: inherit;">例如，对DOM元素的访问被称为$（“ js-toggle”）而不是$（“。js-toggle”）。</font><font style="vertical-align: inherit;">其实这个时期不见了</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以要遵循的三件事-检查是否添加了必需的脚本，检查是否以必需的顺序添加了它，并且在Java脚本中出现了第三种语法错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的JavaScript文件丢失，因此发生此错误。</font><font style="vertical-align: inherit;">只需在</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">内添加JavaScript文件即可</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">参见示例：</font></font></p>

<pre><code>&lt;script src="js/sample.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
&lt;link href="css/sample.css" rel="stylesheet" type="text/css" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在标记中添加以下代码：</font></font></p>

<pre><code>&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"&gt;&lt;/script&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西梅Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这是一个错字，我忘记了一个反斜杠，并且错误地引用了源。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前 </font></font><code>src="/scripts/jquery.js"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后 &nbsp;&nbsp; </font></font><code>src="scripts/jquery.js"</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>ready()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在包含jQuery JavaScript之前，</font><font style="vertical-align: inherit;">您正在调用该</font><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">首先参考jQuery。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是ASP.NET MVC，则可以通过执行以下操作指定何时呈现JS代码： </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>page.cshtml</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">包装</font><font style="vertical-align: inherit;">到一个区域中并为其命名后，通常使用的名称是“脚本”：</font></font></p>

<pre><code>@section scripts {<font></font>
    &lt;script&gt;<font></font>
        // JS code...<font></font>
    &lt;/script&gt;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>_Layout.cshtml</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面add中</font></font><code>@RenderSection("Scripts", required: false)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，确保在引用Jquery源代码后将其放入，这将使您的JS代码晚于Jquery呈现。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在.Net中执行此操作，并且正确引用了脚本文件，并且jQuery看起来不错，请确保您的用户有权访问脚本文件。</font><font style="vertical-align: inherit;">我正在研究的项目（同事）的web.config拒绝访问匿名用户。</font><font style="vertical-align: inherit;">匿名用户可以访问我正在处理的页面，因此他们无权访问脚本文件。</font><font style="vertical-align: inherit;">将以下内容放到web.config中，一切都正确了：</font></font></p>

<pre><code>  &lt;location path="Scripts"&gt;<font></font>
    &lt;system.web&gt;<font></font>
      &lt;authorization&gt;<font></font>
        &lt;allow users="*"/&gt;<font></font>
      &lt;/authorization&gt;<font></font>
    &lt;/system.web&gt;<font></font>
  &lt;/location&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaGO樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，我通过将jQuery放在代码中所有JavaScript代码的顶部来解决了问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>&lt;script src="https://code.jquery.com/jquery-3.3.1.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="js/app.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
&lt;script src="js/form.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
&lt;script src="js/create.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
&lt;script src="js/tween.js" type="text/javascript"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望将来能对您有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想尝试使脚本</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后我忘了它，当我上线时，[custom] .js文件仅在jQuery.js之前加载50％的时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我改变了 </font></font></p>

<pre><code>&lt;script async src="js/script.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至 </font></font></p>

<pre><code>&lt;script src="js/script.js"&gt;&lt;/script&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在启动脚本之前添加库。您可以添加以下任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CDN</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来启动它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谷歌：</font></font></strong></p>

<pre><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt;&lt;/script&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">微软</font></font></strong></p>

<pre><code>&lt;script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"&gt;&lt;/script&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要其他Jquery cdn版本，请检查此</font></font><a href="https://jquery.com/download/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这之后：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
$(function(){<font></font>
    //your stuff<font></font>
});<font></font>
or<font></font>
$(document).ready(function(){<font></font>
    //your stuff<font></font>
});    <font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WordPress的：</font></font></strong></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
var $ = jQuery;<font></font>
jQuery(document).ready(function($){<font></font>
     //your stuff<font></font>
});<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了完全相同的问题，上述所有解决方案均无济于事。</font><font style="vertical-align: inherit;">但是，我只是在</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">链接</font><font style="vertical-align: inherit;">后</font><font style="vertical-align: inherit;">链接</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，问题奇迹般地消失了。</font><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我遇到了这个referenceError，因为脚本调用的顺序是错误的。</font><font style="vertical-align: inherit;">通过更改顺序解决了该问题：</font></font></p>

<pre><code>&lt;script src="js/index.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="js/jquery-1.10.2.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>&lt;script src="js/jquery-1.10.2.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="js/index.js"&gt;&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，我的问题有所不同-这是</font><strong><font style="vertical-align: inherit;">Chrome中的</font></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Document Security</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模型</font><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看这里的答案，很明显，我在调用</font></font><code>$(document).ready()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">etc.函数</font><font style="vertical-align: inherit;">之前就以某种方式未加载我的jquery文件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，他们都处于正确的位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这是因为我正在通过安全的HTTPS连接访问内容，而该页面试图从google等下载CDN托管数据。解决方案是将它们存储在本地，然后直接包含而不是从每次CDN。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：执行此操作的另一种方法是以https：//而不是http：//的形式链接到所有CDN托管的内容-然后该模型不会抱怨。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端L小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我将</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">放在</font><font style="vertical-align: inherit;">jQuery脚本链接之前，将</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">放在</font><font style="vertical-align: inherit;">jQuery脚本链接之后解决了我的问题。</font></font></p>

<pre><code>&lt;script src="http://code.jquery.com/jquery-1.10.2.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="exponential.js"&gt;&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是为我解决的问题。</font><font style="vertical-align: inherit;">最初，我去Google并在其CDN页面上复制并粘贴了jQuery的建议代码段：</font></font></p>

<pre><code>&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码段未</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">属性中</font><font style="vertical-align: inherit;">包含</font></font><code>HTTP:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>HTTPS:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我的浏览器FireFox需要它，因此我将其更改为：编辑：这对Google Chrome也适用</font></font></p>

<pre><code>&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"&gt;&lt;/script&gt;
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它起作用了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在jQuery插件加载到浏览器之前加载了自定义脚本，则可能会出现这种类型的问题。</font><font style="vertical-align: inherit;">因此，在调用jQuery插件后，请始终保留自己的JavaScript或jQuery代码，因此解决方案是：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，将链接添加到托管在GoogleApis上的jQuery文件或要从</font></font><a href="http://jquery.com/download/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jquery.com/download/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载</font><font style="vertical-align: inherit;">并托管在服务器上</font><font style="vertical-align: inherit;">的本地jQuery文件中</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或任何jQuery插件。</font><font style="vertical-align: inherit;">然后放入您的自定义脚本文件链接或代码：</font></font></p>

<pre><code>&lt;script src="js/custom.js" type="text/javascript"&gt;&lt;/script&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在包含jQuery JavaScript之前，您正在调用ready函数。</font><font style="vertical-align: inherit;">首先参考jQuery。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该首先将对jquery脚本的引用。 </font></font></p>

<pre><code>&lt;script language="JavaScript" type="text/javascript" src="/js/jquery-1.2.6.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script language="JavaScript" type="text/javascript" src="/js/jquery-ui-personalized-1.5.2.packed.js"&gt;&lt;/script&gt;<font></font>
&lt;script language="JavaScript" type="text/javascript" src="/js/sprinkle.js"&gt;&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
