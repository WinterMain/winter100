---
layout: question
title:  node --harmony\`有什么作用？
date:   2020-03-24T02:57:21.000Z
description: 节点应用程序要求我运行带有和声标志的节点，例如：node --harmony app.js什么是和声旗？它有什么作用？没有它，为什么应用程序无法...
img: 
author: 猴子村村
category: question
answer: 4
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点应用程序要求我运行带有和声标志的节点，例如：</font></font></p>

<pre><code>node --harmony app.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是和声旗？</font><font style="vertical-align: inherit;">它有什么作用？没有它，为什么应用程序无法运行？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试查看节点命令行选项（</font></font><code>node --help</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但也未提供任何详细信息。</font><font style="vertical-align: inherit;">节点文档也没有任何帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3257篇《node --harmony\`有什么作用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在旧版本的nodejs中运行ECMAScript 6功能，则可以使用--harmony标志。</font><font style="vertical-align: inherit;">最新版本的节点支持ES6，因此不需要--harmony标志</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在节点js中启用和声模块：</font><a href="http://wiki.ecmascript.org/doku.php?id=harmony%3amodules" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://wiki.ecmascript.org/doku.php? </font><a href="http://wiki.ecmascript.org/doku.php?id=harmony%3amodules" rel="nofollow"><font style="vertical-align: inherit;">id=</font></a><font style="vertical-align: inherit;"> harmony:modules
</font></font><a href="http://wiki.ecmascript.org/doku.php?id=harmony%3amodules" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如节点文档中所述，--harmony标志启用了ES6的非稳定但即将稳定的功能</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js上--harmony标志的当前行为是仅启用分段功能。</font><font style="vertical-align: inherit;">毕竟，它现在是--es_staging的同义词。</font><font style="vertical-align: inherit;">如上所述，这些是尚未被认为稳定的完整功能。</font><font style="vertical-align: inherit;">如果您想安全玩耍，尤其是在生产环境中，请考虑删除此运行时标志，直到默认在V8上（因此，在Node.js上）将其发布。</font><font style="vertical-align: inherit;">如果启用此功能，则在V8更改其语义以更严格地遵循标准的情况下，应该准备进一步进行Node.js升级以破坏代码。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>man node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在和声标志上</font><font style="vertical-align: inherit;">输入</font><font style="vertical-align: inherit;">以下内容：</font></font></p>

<pre><code> --harmony_typeof (enable harmony semantics for typeof)<font></font>
       type: bool  default: false<font></font>
 --harmony_scoping (enable harmony block scoping)<font></font>
       type: bool  default: false<font></font>
 --harmony_modules (enable harmony modules (implies block scoping))       <font></font>
        type: bool  default: false<font></font>
 --harmony_proxies (enable harmony proxies)       <font></font>
        type: bool  default: false<font></font>
 --harmony_collections (enable harmony collections  (sets,  maps,  andweak maps))<font></font>
       type: bool  default: false <font></font>
 --harmony (enable all harmony features (except typeof))<font></font>
       type: bool  default: false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此</font></font><code>--harmony</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，启用所有和谐功能（例如</font></font><code>--harmony_scoping</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>--harmony_proxies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等）</font><font style="vertical-align: inherit;">的捷径是</font></font><a href="http://www.goatslacker.com/post/16000243520/how-to-obtain-harmony-in-your-node-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此博客文章中的一种</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看来和谐启用了该语言的ECMAScript 6新功能。</font><font style="vertical-align: inherit;">文件无法和谐运行的原因</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是可能使用了新ECMAScript 6标准的非向后兼容功能（例如块范围，代理，集合，地图等）。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
