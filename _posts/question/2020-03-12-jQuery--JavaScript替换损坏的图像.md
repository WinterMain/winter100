---
layout: question
title:  jQuery / JavaScript替换损坏的图像
date:   2020-03-12T07:30:12.000Z
description: 我有一个包含一堆图像的网页。有时，该图像不可用，因此在客户端的浏览器中会显示损坏的图像。如何使用jQuery获取图像集，将其过滤为损坏的图像，然后替换...
img: 
author: JinJin乐逆天
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个包含一堆图像的网页。</font><font style="vertical-align: inherit;">有时，该图像不可用，因此在客户端的浏览器中会显示损坏的图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用jQuery获取图像集，将其过滤为损坏的图像，然后替换src？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-我以为使用jQuery会更容易，但是事实证明，仅使用纯JavaScript解决方案（即Prestaul提供的解决方案）要容易得多。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，使用</font></font><code>error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件是不可行的，例如，因为您试图在已加载的页面上执行某项操作，例如，通过控制台，书签或异步加载的脚本运行代码时。</font><font style="vertical-align: inherit;">在这种情况下，检查</font></font><code>img.naturalWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>img.naturalHeight</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为0似乎可以解决问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，以下代码片段可从控制台重新加载所有损坏的图像： </font></font></p>

<pre><code>$$("img").forEach(img =&gt; {<font></font>
  if (!img.naturalWidth &amp;&amp; !img.naturalHeight) {<font></font>
    img.src = img.src;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery 1.8</font></font></p>

<pre><code>// If missing.png is missing, it is replaced by replacement.png<font></font>
$( "img" )<font></font>
  .error(function() {<font></font>
    $( this ).attr( "src", "replacement.png" );<font></font>
  })<font></font>
  .attr( "src", "missing.png" );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery 3</font></font></p>

<pre><code>// If missing.png is missing, it is replaced by replacement.png<font></font>
$( "img" )<font></font>
  .on("error", function() {<font></font>
    $( this ).attr( "src", "replacement.png" );<font></font>
  })<font></font>
  .attr( "src", "missing.png" );<font></font>
</code></pre>

<p><a href="https://api.jquery.com/error/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木心</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定是否有更好的方法，但是我可以考虑采用这种方法-您可以将Ajax发布到img URL，然后解析响应以查看图像是否真的回来了。</font><font style="vertical-align: inherit;">如果它以404或类似的形式返回，则换掉img。</font><font style="vertical-align: inherit;">虽然我希望这会很慢。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在查看</font></font><a href="https://stackoverflow.com/questions/18837735/check-if-image-exists-on-server-using-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他SO帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时发现了此</font><a href="https://stackoverflow.com/questions/18837735/check-if-image-exists-on-server-using-javascript"><font style="vertical-align: inherit;">帖子</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">以下是我在那给出的答案的副本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个旧线程，但是React已经流行起来，也许，使用React的人会来这里寻找相同问题的答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您使用的是React，则可以执行以下操作，这是React团队的Ben Alpert在</font><a href="https://discuss.reactjs.org/t/onerror-for-img-to-hide-images-with-error/2094" rel="nofollow noreferrer"><font style="vertical-align: inherit;">此处</font></a><font style="vertical-align: inherit;">提供的原始答案。</font></font><a href="https://discuss.reactjs.org/t/onerror-for-img-to-hide-images-with-error/2094" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>getInitialState: function(event) {<font></font>
    return {image: "http://example.com/primary_image.jpg"};<font></font>
},<font></font>
handleError: function(event) {<font></font>
    this.setState({image: "http://example.com/failover_image.jpg"});<font></font>
},<font></font>
render: function() {<font></font>
    return (<font></font>
        &lt;img onError={this.handleError} src={src} /&gt;;<font></font>
    );<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您插入了</font></font><code>img</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with </font></font><code>innerHTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如：</font></font><code>$("div").innerHTML = &lt;img src="wrong-uri"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则如果加载失败，则可以加载另一个图像，例如：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
    function imgError(img) {<font></font>
        img.error="";<font></font>
        img.src="valid-uri";<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;img src="wrong-uri" onerror="javascript:imgError(this)"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么</font></font><code>javascript: _</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要？</font><font style="vertical-align: inherit;">由于通过脚本标记插入到DOM中的脚本在</font></font><code>innerHTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注入时未运行，因此必须明确。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">成天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="http://en.wikipedia.org/wiki/CoffeeScript" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CoffeeScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变体：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我解决了Turbolinks的一个问题，该问题有时会导致Firefox中出现.error（）方法，即使该图像确实存在。</font></font></p>

<pre><code>$("img").error -&gt;<font></font>
  e = $(@).get 0<font></font>
  $(@).hide() if !$.browser.msie &amp;&amp; (typeof this.naturalWidth == "undefined" || this.naturalWidth == 0)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro理查德LEY</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好地使用</font></font></p>

<pre><code>jQuery(window).load(function(){<font></font>
    $.imgReload();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为使用</font></font><code>document.ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不一定意味着图像已加载，所以仅HTML。</font><font style="vertical-align: inherit;">因此，不需要延迟的呼叫。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一项cr脚的技术，但是可以保证：</font></font></p>

<pre><code>&lt;img ...  onerror="this.parentNode.removeChild(this);"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用内置</font></font><code>error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理程序：</font></font></p>

<pre><code>$("img").error(function () {<font></font>
    $(this).unbind("error").attr("src", "broken.gif");<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>error()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法在</font></font><a href="https://api.jquery.com/error/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jquery 1.8</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">及更高版本中</font><font style="vertical-align: inherit;">已弃用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">相反，您应该</font></font><code>.on("error")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用：</font></font></p>

<pre><code>$("img").on("error", function () {<font></font>
    $(this).attr("src", "broken.gif");<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
