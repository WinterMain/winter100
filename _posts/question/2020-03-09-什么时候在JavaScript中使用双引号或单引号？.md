---
layout: question
title:  什么时候在JavaScript中使用双引号或单引号？
date:   2020-03-09T11:08:10.000Z
description: console.log("double"); 与 console.log('single');我看到越来越多的JavaScript库在处理字符串时使用...
img: 
author: 前端老丝
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><code>console.log("double");</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 与 </font></font><code>console.log('single');</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到越来越多的JavaScript库在处理字符串时使用单引号。</font><font style="vertical-align: inherit;">为何一个使用另一个原因？</font><font style="vertical-align: inherit;">我认为它们几乎可以互换。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第215篇《什么时候在JavaScript中使用双引号或单引号？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用单引号或双引号。</font><font style="vertical-align: inherit;">例如，这使您能够轻松地将javascript嵌套在HTML属性中，而无需转义引号。</font><font style="vertical-align: inherit;">使用PHP创建javascript时也是如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一般的想法是：如果可能的话，可以使用不需要转义的引号。</font><font style="vertical-align: inherit;">更少的转义=更好的代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi米亚斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在阅读了所有可能更快或更有利的答案之后，我会说双引号更好或更快速，因为</font></font><a href="http://closure-compiler.appspot.com/home" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google闭包编译器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将单引号转换为双引号。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全没有区别，因此，保持转义数很少主要取决于口味和字符串中的内容（或者如果JS代码本身在字符串中）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">速度差异图例可能来自PHP世界，其中两个引号的行为不同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的单引号和双引号没有区别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规格很重要：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许会有性能差异，但是它们绝对是最小的，并且会根据浏览器的实现每天变化。</font><font style="vertical-align: inherit;">除非您的JavaScript应用程序长达数十万个，否则进一步的讨论是徒劳的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就像一个基准</font></font></p>

<pre><code>a=b;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比...快</font></font></p>

<pre><code>a = b;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（多余的空格）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天，在特定的浏览器和平台等中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要在JavaScript和C＃之间来回跳动，则最好为通用约定（双引号）训练手指。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinSam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CoffeeScript时，我使用双引号。</font><font style="vertical-align: inherit;">我同意您应该选择其中一个并坚持下去。</font><font style="vertical-align: inherit;">当使用双引号时，CoffeeScript为您提供插值。</font></font></p>

<pre><code>"This is my #{name}"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6对模板字符串使用了反勾号（`）。</font><font style="vertical-align: inherit;">这可能有充分的理由，但是在编码时，为了获得插值功能，将字符串文字字符从引号或双引号更改为反斜杠可能很麻烦。</font><font style="vertical-align: inherit;">CoffeeScript可能不是完美的，但是在各处使用相同的字符串文字字符（双引号）并且始终能够插值是一个不错的功能。</font></font></p>

<pre><code>`This is my ${name}`
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些人声称看到性能差异：</font></font><a href="http://lists.evolt.org/pipermail/javascript/2003-November/006168.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧邮件列表线程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是我找不到任何要确认的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最主要的是要查看在字符串内部使用哪种引号（双引号或单引号）。</font><font style="vertical-align: inherit;">它有助于将逃生通道的数量保持在较低水平。</font><font style="vertical-align: inherit;">例如，当您在字符串中使用html时，使用单引号会更容易，这样您就不必在属性周围转义所有双引号。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子古一蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用单引号的一个（愚蠢的）原因是它们不需要您按Shift键来键入它们，而双引号则需要。</font><font style="vertical-align: inherit;">（我假设平均字符串不需要转义，这是一个合理的假设。）现在，让我们假设我每天编写200行代码。</font><font style="vertical-align: inherit;">也许在那200行中，我有30个引号。</font><font style="vertical-align: inherit;">也许输入双引号比输入单引号要花0.1秒的时间（因为我必须按Shift键）。</font><font style="vertical-align: inherit;">然后在任何一天，我浪费3秒。</font><font style="vertical-align: inherit;">如果我以这种方式进行编码，在40年中每年花费200天，那么我就浪费了6.7个小时的时间。</font><font style="vertical-align: inherit;">值得深思。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗JinJin宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道这在当今世界是否有意义，但是双引号曾经用于需要处理控制字符的内容，而单引号则用于不需要处理的字符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译器将在双引号字符串上运行字符串操作，而单引号字符串实际上保持不变。</font><font style="vertical-align: inherit;">这通常导致“好的”开发人员选择对不包含控制字符（如</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>\0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不在单引号内处理）的字符串）</font><font style="vertical-align: inherit;">使用单引号，并</font><font style="vertical-align: inherit;">在需要解析字符串时使用双引号（对于处理字符串）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们看一下参考的作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jquery.js中，每个字符串都用双引号引起来。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，从现在开始，我将使用双引号字符串。</font><font style="vertical-align: inherit;">（我正在使用单身！）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil米亚卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这主要是风格和喜好问题。</font><font style="vertical-align: inherit;">其他答案中还有一些相当有趣且有用的技术探索，因此也许我唯一要添加的就是提供一些世俗的建议。</font></font></p>

<ul>
<li><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在公司或团队中编码，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循“房屋风格”可能是一个好主意。</font></font></p></li>
<li><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您一个人在黑客一些副项目，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请看一下社区中一些杰出的领导人。</font><font style="vertical-align: inherit;">例如，假设您进入了Node.js。</font><font style="vertical-align: inherit;">看一下核心模块，例如underscore.js或express，看看它们使用什么约定，然后考虑遵循。</font></font></p></li>
<li><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个约定均被使用，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则请</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循您的个人</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
喜好。</font></font></p></li>
<li><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有个人喜好，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那就</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">掷硬币。</font></font></p></li>
<li><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有硬币，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">啤酒就在我身上；）</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从技术上讲，没有区别，只是样式和约定。</font></font></p>

<p>Douglas Crockford recommends using single quotes for internal strings and double quotes for external (by external we mean those to be displayed to user of application, like messages or alerts).  </p>

<p>I personally follow that.</p>

<p><em>UPDATE: It appears that Mr. Crockford <a href="https://plus.google.com/+DouglasCrockfordEsq/posts/EBky2K9erKt" rel="noreferrer">changed his mind</a> and now recommends using double quotes throughout  :)</em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格来说，意义没有区别。</font><font style="vertical-align: inherit;">因此选择取决于方便。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些可能影响您的选择的因素：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">房屋风格：一些开发人员组已经使用一种约定或另一种约定。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端要求：您将在字符串中使用引号吗？</font><font style="vertical-align: inherit;">（请参阅Ady的答案）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器端语言：VB.Net人们可能选择对Java脚本使用单引号，以便可以在服务器端构建脚本（VB.Net对字符串使用双引号，因此易于区分Java脚本字符串（如果使用单引号）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库代码：如果使用的库使用特定样式，则可以考虑自己使用相同的样式。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">个人喜好：您可能会认为一种或其他样式看起来更好。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单引号</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望双引号是标准的，因为它们</font></font><a href="https://stackoverflow.com/questions/242813/when-to-use-double-or-single-quotes-in-javascript#18041188"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有更多的意义</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我继续使用单引号，因为它们在场景中占主导地位。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单引号：</font></font></p>

<ul>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">爱彼迎</font></font></a></li>
<li><a href="https://github.com/facebook/fbjs/blob/8d447780c6f4df0ef92fa3d2987d9c4f96eb0100/packages/eslint-config-fbjs-opensource/index.js#L249" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脸书</font></font></a></li>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/google.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谷歌</font></font></a></li>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/grunt.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">咕unt</font></font></a></li>
<li><a href="https://github.com/gulpjs/gulp/blob/master/.jscsrc" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吞咽</font></font></a></li>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/node.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></a></li>
<li><a href="https://github.com/npm/npm/blob/master/lib/npm.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（尽管未在作者</font></font><a href="https://docs.npmjs.com/misc/coding-style" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指南中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">）</font></font></li>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/wikimedia.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">维基媒体</font></font></a></li>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/wordpress.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WordPress的</font></font></a></li>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/yandex.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扬德克斯</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有偏好：</font></font></p>

<ul>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/mdcs.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">three.js</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双引号：</font></font></p>

<ul>
<li><a href="https://plus.google.com/+DouglasCrockfordEsq/posts/EBky2K9erKt" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克罗克福德</font></font></a></li>
<li><a href="https://github.com/d3/d3-format/blob/master/src/locale.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（尽管未在中定义</font></font><a href="https://github.com/d3/d3-shape/blob/master/.eslintrc" rel="noreferrer"><code>.eslintrc</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><a href="https://github.com/jscs-dev/node-jscs/blob/master/presets/jquery.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要处理JSON，则应注意严格来说，JSON字符串必须用双引号引起来。</font><font style="vertical-align: inherit;">当然，许多库也支持单引号，但是在我的一个项目中遇到了很大的问题，然后才意识到单引号实际上并不符合JSON标准。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
