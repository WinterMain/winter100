---
layout: question
title:  我是否对SVG文件使用<img>，<object>或<embed>？
date:   2020-03-18T08:31:22.000Z
description: 我应该使用<img>，<object>或<embed>用于加载SVG文件插入到页面的方式类似于加载jpg，gif还是png？每个代码分别是什么以确保其...
img: 
author: 神乐Tony阿飞
category: question
answer: 6
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该使用</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;object&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;embed&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于加载SVG文件插入到页面的方式类似于加载</font></font><code>jpg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>gif</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是</font></font><code>png</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个代码分别是什么以确保其正常工作？</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在我的研究中，我看到了关于包含模仿类型或指向后备SVG渲染器的参考，但是没有看到一个很好的最新参考）。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我正在用</font></font><a href="http://www.modernizr.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Modernizr</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查SVG支持，</font><font style="vertical-align: inherit;">然后退回（可能是用一个普通</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签进行</font><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">）不支持SVG的浏览器。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Stafan猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议结合使用</font></font></p>

<pre><code>&lt;svg viewBox="" width="" height=""&gt;<font></font>
&lt;path fill="#xxxxxx" d="M203.3,71.6c-.........."&gt;&lt;/path&gt;<font></font>
&lt;/svg&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Pro</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人会使用</font></font><code>&lt;svg&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，因为如果您这样做，则可以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全控制它</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您确实使用它，</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则不会用CSS等控制SVG的内部。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一件事是</font></font><a href="https://caniuse.com/#feat=svg-html5" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需打开</font></font><code>svg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并将其直接粘贴到模板中即可。</font></font></p>

<pre><code>&lt;svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3400 2700" preserveAspectRatio="xMidYMid meet" (click)="goHome();"&gt;<font></font>
  &lt;g id="layer101"&gt;<font></font>
    &lt;path d="M1410 2283 c-162 -225 -328 -455 -370 -513 -422 -579 -473 -654 -486 -715 -7 -33 -50 -247 -94 -475 -44 -228 -88 -448 -96 -488 -9 -40 -14 -75 -11 -78 2 -3 87 85 188 196 165 180 189 202 231 215 25 7 129 34 230 60 100 26 184 48 185 49 4 4 43 197 43 212 0 10 -7 13 -22 9 -13 -3 -106 -25 -208 -49 -102 -25 -201 -47 -221 -51 l-37 -7 8 42 c4 23 12 45 16 49 5 4 114 32 243 62 129 30 240 59 246 66 10 10 30 132 22 139 -1 2 -110 -24 -241 -57 -131 -33 -240 -58 -242 -56 -6 6 13 98 22 107 5 4 135 40 289 80 239 61 284 75 307 98 14 15 83 90 153 167 70 77 132 140 139 140 7 0 70 -63 141 -140 70 -77 137 -150 150 -163 17 -19 81 -39 310 -97 159 -41 292 -78 296 -82 8 -9 29 -106 24 -111 -1 -2 -112 24 -245 58 -134 33 -245 58 -248 56 -6 -7 16 -128 25 -136 5 -4 112 -30 238 -59 127 -29 237 -54 246 -57 11 -3 20 -23 27 -57 6 -28 9 -53 8 -54 -1 -1 -38 7 -81 17 -274 66 -379 90 -395 90 -16 0 -16 -6 3 -102 11 -57 21 -104 22 -106 1 -1 96 -27 211 -57 115 -31 220 -60 234 -66 14 -6 104 -101 200 -211 95 -111 175 -197 177 -192 1 5 -40 249 -91 542 l-94 532 -145 203 c-220 309 -446 627 -732 1030 -143 201 -265 366 -271 367 -6 0 -143 -183 -304 -407z m10 -819 l-91 -161 -209 -52 c-115 -29 -214 -51 -219 -49 -6 1 32 55 84 118 l95 115 213 101 c116 55 213 98 215 94 1 -3 -38 -78 -88 -166z m691 77 l214 -99 102 -123 c56 -68 100 -125 99 -127 -4 -3 -435 106 -447 114 -4 2 -37 59 -74 126 -38 68 -79 142 -93 166 -13 23 -22 42 -20 42 2 0 101 -44 219 -99z"/&gt;<font></font>
    &lt;path d="M1126 2474 c-198 -79 -361 -146 -363 -147 -2 -3 -70 -410 -133 -805 -12 -73 -20 -137 -18 -143 2 -6 26 23 54 63 27 40 224 320 437 622 213 302 386 550 385 551 -2 2 -165 -62 -362 -141z"/&gt;<font></font>
    &lt;path d="M1982 2549 c25 -35 159 -230 298 -434 139 -203 283 -413 319 -465 37 -52 93 -134 125 -182 59 -87 83 -109 73 -65 -5 20 -50 263 -138 747 -17 91 -36 170 -42 176 -9 8 -571 246 -661 280 -14 6 -7 -10 26 -57z"/&gt;<font></font>
    &lt;path d="M1679 1291 c-8 -11 -71 -80 -141 -153 l-127 -134 -95 -439 c-52 -242 -92 -442 -90 -445 6 -5 38 28 218 223 l99 107 154 0 c85 0 163 -4 173 -10 10 -5 78 -79 151 -162 73 -84 136 -157 140 -162 18 -21 18 4 -2 85 -11 46 -58 248 -105 448 l-84 364 -87 96 c-108 121 -183 201 -187 201 -2 0 -10 -9 -17 -19z m96 -488 c33 -102 59 -189 57 -192 -2 -6 -244 -2 -251 4 -5 6 120 375 127 375 4 0 34 -84 67 -187z"/&gt;<font></font>
    &lt;/g&gt;<font></font>
  &lt;/svg&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在您的CSS中，您可以简单地例如：</font></font></p>

<pre><code>svg {<font></font>
  fill: red;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些资源：</font></font><a href="https://css-tricks.com/using-svg/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVG技巧</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要SVG使用CSS完全可样式化，则必须在DOM中内联。</font><font style="vertical-align: inherit;">这可以通过SVG注入来实现，该注入使用Javascript </font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在页面加载后用SVG文件的内容</font><font style="vertical-align: inherit;">替换HTML元素（通常是</font><font style="vertical-align: inherit;">元素）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用</font></font><a href="https://github.com/iconfu/svg-inject" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVGInject的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个最小示例</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;script src="svg-inject.min.js"&gt;&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
  &lt;img src="image.svg" onload="SVGInject(this)" /&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载图像后，</font></font><code>onload="SVGInject(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将触发注入，并且该</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素将被</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性中</font><font style="vertical-align: inherit;">提供的文件内容替换</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这适用于所有支持SVG的浏览器。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我是SVGInject的合著者</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font><code>srcset</code></h1>

<p><font style="vertical-align: inherit;"></font><a href="https://caniuse.com/#search=srcset" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当今</font></font><code>srcset</code><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数</font><a href="https://caniuse.com/#search=srcset" rel="noreferrer"><font style="vertical-align: inherit;">当前的浏览器都支持</font></a><a href="https://caniuse.com/#search=srcset" rel="noreferrer"><font style="vertical-align: inherit;">属性</font></a><font style="vertical-align: inherit;">，该</font><a href="https://caniuse.com/#search=srcset" rel="noreferrer"><font style="vertical-align: inherit;">属性</font></a><font style="vertical-align: inherit;">允许为不同的用户指定不同的图像。</font><font style="vertical-align: inherit;">例如，您可以将其用于1x和2x像素密度，浏览器将选择正确的文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，如果您在中指定了SVG </font></font><code>srcset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但浏览器不支持</font><font style="vertical-align: inherit;">SVG </font><font style="vertical-align: inherit;">，则会在上回退</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;img src="logo.png" srcset="logo.svg" alt="My logo"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他解决方案相比，此方法具有以下优点：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不依赖任何奇怪的黑客或脚本</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很简单</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您仍然可以包含替代文字</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持的浏览器</font></font><code>srcset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该知道如何处理它，以便它仅下载所需的文件。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyItachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;object&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>&lt;embed&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有一个有趣的属性：它们使从外部文档中获得SVG文档的引用成为可能（考虑了同源策略）。</font><font style="vertical-align: inherit;">然后，可以使用该参考为SVG设置动画，更改其样式表等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定</font></font></p>

<pre><code>&lt;object id="svg1" data="/static/image.svg" type="image/svg+xml"&gt;&lt;/object&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您可以做类似的事情</font></font></p>

<pre><code>document.getElementById("svg1").addEventListener("load", function() {<font></font>
    var doc = this.getSVGDocument();<font></font>
    var rect = doc.querySelector("rect"); // suppose our image contains a &lt;rect&gt;<font></font>
    rect.setAttribute("fill", "green");<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从IE9及更高版本开始，您可以在普通的IMG标签中使用SVG。</font></font></p>

<p><a href="https://caniuse.com/svg-img" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://caniuse.com/svg-img</font></font></a></p>

<pre><code>&lt;img src="/static/image.svg"&gt;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
