---
layout: question
title:  Vue CLI CSS预处理器选项：dart-sass VS节点-sass？
date:   2020-03-11T03:50:48.000Z
description: 当创建与CLI（v3.7.0）的新项目中，有之间进行选择的选项dart-sass或node-sass编译器。它们之间如何进行比较，以比Vue docs...
img: 
author: 小宇宙番长
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当创建与CLI（v3.7.0）的新项目中，有之间进行选择的选项</font></font><code>dart-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们之间如何进行比较，以比</font></font><a href="https://cli.vuejs.org/guide/css.html#pre-processors" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue docs中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明的更具体</font><font style="vertical-align: inherit;">？</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass性能技巧</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，使用Dart Sass时，由于异步回调的开销，默认情况下，同步编译的速度是异步编译速度的两倍。</font><font style="vertical-align: inherit;">为了避免这种开销，您可以使用Fiber包从同步代码路径中调用异步导入器。</font><font style="vertical-align: inherit;">为此，只需将光纤安装为项目依赖项即可：</font></font></p>
  
  <p><code>npm install -D fibers</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请注意，由于它是本机模块，因此在操作系统和构建环境上可能存在兼容性问题。</font><font style="vertical-align: inherit;">在这种情况下，请运行</font></font><code>npm uninstall -D fibers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以解决问题。</font></font></p>
</blockquote>

<pre class="lang-sh prettyprint-override"><code>? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)<font></font>
❯ Sass/SCSS (with dart-sass)<font></font>
  Sass/SCSS (with node-sass)<font></font>
  Less<font></font>
  Stylus<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2020/01：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Vue CLI 4.2.2创建新项目仍然建议</font></font><code>dart-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为之前的第一个选项</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然而，这里已经确定这</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是性能更高的选择，</font></font><a href="https://www.npmtrends.com/dart-sass-vs-node-sass" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎没有人使用dart-sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（ccleve的评论）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第625篇《Vue CLI CSS预处理器选项：dart-sass VS节点-sass？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据官方的</font></font><a href="https://sass-lang.com/dart-sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sass-lang网站</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dart Sass是Sass的主要实现，这意味着它在任何其他实现之前都具有新功能。</font><font style="vertical-align: inherit;">它快速，易于安装，并且可以编译</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为纯JavaScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，从而可以轻松集成到现代Web开发工作流中。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在Dart-VM内运行Dart-Sass，则运行速度很快，但它表示</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以编译为纯JS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">的npmjs软件包</font></font><code>dart-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一个编译版本，比</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">慢</font></font><code>native dart-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在寻找测量值，我建议在</font></font><a href="https://github.com/sass/dart-sass/blob/master/perf.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关</font><a href="https://github.com/sass/dart-sass/blob/master/perf.md" rel="noreferrer"><font style="vertical-align: inherit;">信息</font></a><font style="vertical-align: inherit;">，其中有示例和不同的编号：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在包含16个导入Bootstrap框架实例的文件上运行：</font></font></p>
  
  <ul>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASSC：0.820秒</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本快照中的Dart Sass：1.558秒</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dart Sass本机可执行文件：0.927s</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js上的Dart Sass：3.129s基于这些数字，本机可执行文件中的Dart Sass大约为：</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比libsass慢1.1倍</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比Node上的Dart Sass快3.4倍</font></font></p></li>
  </ul>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Dart Sass作为提前编译的本机代码运行的第一次测量，结果令人鼓舞。</font><font style="vertical-align: inherit;">它远远低于微小文件的100ms阈值，并且在大多数测试用例中都可以与SassC媲美。</font><font style="vertical-align: inherit;">SassC仍然在许多扩展的测试中处于领先地位，尽管只是很小的一部分，在我们的真实测试案例中仍然处于领先地位（尽管Dart Sass在其他案例中处于领先地位）。</font><font style="vertical-align: inherit;">可以将这两种实现方式公平地描述为总体上具有相同的性能。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node上的Dart Sass仍然比Dart VM上的速度慢得多，并且随着原始Dart代码变得更快，相对的速度变得更加明显。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>dart-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npmjs软件包而不是</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机</font></font><code>C</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库的</font><font style="vertical-align: inherit;">包装</font><font style="vertical-align: inherit;">）的</font><strong><font style="vertical-align: inherit;">个人经验</font></strong></font><code>dart-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是（比起我，至少50倍，因为我有很多大型主题文件）要慢于</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-sass不适用于节点v.12</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
