---
layout: question
title:  有人可以解释Webpack的CommonsChunkPlugin
date:   2020-03-23T06:35:07.000Z
description: 我得到了一个基本要点，即CommonsChunkPlugin查看所有入口点，检查它们之间是否存在通用的软件包/依赖项，并将它们分成自己的捆绑包。因此，...
img: 
author: 米亚
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到了一个基本要点，即</font></font><code>CommonsChunkPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看所有入口点，检查它们之间是否存在通用的软件包/依赖项，并将它们分成自己的捆绑包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，假设我具有以下配置：</font></font></p>

<pre><code>...<font></font>
enrty : {<font></font>
    entry1 : 'entry1.js', //which has 'jquery' as a dependency<font></font>
    entry2 : 'entry2.js', //which has 'jquery as a dependency<font></font>
    vendors : [<font></font>
        'jquery',<font></font>
        'some_jquery_plugin' //which has 'jquery' as a dependency<font></font>
    ]<font></font>
},<font></font>
output: {<font></font>
    path: PATHS.build,<font></font>
    filename: '[name].bundle.js'<font></font>
}<font></font>
...<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我捆绑而不使用 </font></font><code>CommonsChunkPlugin</code></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将获得3个新的捆绑包文件：</font></font></p>

<ul>
<li><code>entry1.bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含来自</font></font><code>entry1.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">的完整代码</font><font style="vertical-align: inherit;">，</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并包含其自己的运行时</font></font></li>
<li><code>entry2.bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含来自</font></font><code>entry2.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">的完整代码</font><font style="vertical-align: inherit;">，</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并包含其自己的运行时</font></font></li>
<li><code>vendors.bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含来自</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">的完整代码</font><font style="vertical-align: inherit;">，</font></font><code>some_jquery_plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并包含其自己的运行时</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这显然很不好，因为我可能会</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在页面中</font><font style="vertical-align: inherit;">加载</font><font style="vertical-align: inherit;">3次，因此我们不希望这样做。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我捆绑使用 </font></font><code>CommonsChunkPlugin</code></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据传递给</font></font><code>CommonsChunkPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下任何</font><font style="vertical-align: inherit;">参数的参数</font><font style="vertical-align: inherit;">，将会发生：</font></font></p>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况1：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果通过，</font></font><code>{ name : 'commons' }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将得到以下捆绑文件：</font></font></p>

<ul>
<li><code>entry1.bundle.js</code> which contains the complete code from <code>entry1.js</code>, a requirement for <code>jquery</code> and does not contain the runtime</li>
<li><code>entry2.bundle.js</code> which contains the complete code from <code>entry2.js</code>, a requirement for <code>jquery</code> and does not contain the runtime</li>
<li><code>vendors.bundle.js</code> which contains the complete code from <code>some_jquery_plugin</code>, a requirement for <code>jquery</code> and does not contain the runtime</li>
<li><code>commons.bundle.js</code> which contains the complete code from <code>jquery</code> and contains the runtime</li>
</ul>

<p>This way we end up with some smaller bundles overall and the runtime is contained in the <code>commons</code> bundle. Pretty ok but not ideal.</p></li>
<li><p><strong>CASE 2 :</strong> If I pass <code>{ name : 'vendors' }</code> I will end up with the following bundle files:</p>

<ul>
<li><code>entry1.bundle.js</code> which contains the complete code from <code>entry1.js</code>, a requirement for <code>jquery</code> and does not contain the runtime</li>
<li><code>entry2.bundle.js</code> which contains the complete code from <code>entry2.js</code>, a requirement for <code>jquery</code> and does not contain the runtime</li>
<li><code>vendors.bundle.js</code> which contains the complete code from <code>jquery</code> and <code>some_jquery_plugin</code> and contains the runtime. </li>
</ul>

<p>This way, again, we end up with some smaller bundles overall but the runtime is now contained in the <code>vendors</code> bundle. It's a little worse than the previous case, since the runtime is now in the <code>vendors</code> bundle.</p></li>
<li><p><strong>CASE 3 :</strong> If I pass <code>{ names : ['vendors', 'manifest'] }</code> I will end up with the following bundle files:</p>

<ul>
<li><code>entry1.bundle.js</code> which contains the complete code from <code>entry1.js</code>, a requirement for <code>jquery</code> and does not contain the runtime</li>
<li><code>entry2.bundle.js</code> which contains the complete code from <code>entry2.js</code>, a requirement for <code>jquery</code> and does not contain the runtime</li>
<li><code>vendors.bundle.js</code> which contains the complete code from <code>jquery</code> and <code>some_jquery_plugin</code> and does not contain the runtime</li>
<li><code>manifest.bundle.js</code> which contains requirements for every other bundle and contains the runtime</li>
</ul>

<p>This way we end up with some smaller bundles overall and the runtime is contained in the <code>manifest</code> bundle. This is the ideal case.</p></li>
</ul>

<h1>What I do not understand/I am not sure I understand</h1>

<ul>
<li><p>In <strong>CASE 2</strong> why did we end up with the <code>vendors</code> bundle containing both the common code (<code>jquery</code>) and whatever remained from the <code>vendors</code> entry (<code>some_jquery_plugin</code>)? From my understanding, what the <code>CommonsChunkPlugin</code> did here was that it gathered the common code (<code>jquery</code>), and since we forced it to output it to the <code>vendors</code> bundle, it kind of "merged" the common code into the <code>vendors</code> bundle (which now only contained the code from <code>some_jquery_plugin</code>). <strong>Please confirm or explain.</strong> </p></li>
<li><p>In <strong>CASE 3</strong> I do not understand what happened when we passed <code>{ names : ['vendors', 'manifest'] }</code> to the plugin. Why/how was the <code>vendors</code> bundle kept intact, containing both <code>jquery</code> and <code>some_jquery_plugin</code>, when <code>jquery</code> is clearly a common dependency, and why was the generated <code>manifest.bundle.js</code> file created the way it was created (requiring all other bundles and containing the runtime) ?</p></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2846篇《有人可以解释Webpack的CommonsChunkPlugin》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是</font></font><code>CommonsChunkPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作原理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个公共块“接收”由几个入口块共享的模块。</font><font style="vertical-align: inherit;">在</font></font><a href="https://github.com/webpack/webpack/tree/master/examples/multiple-commons-chunks" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack存储库中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以找到复杂配置的一个很好的例子</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><code>CommonsChunkPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Webpack的优化阶段运行，这意味着它在内存被密封并写入磁盘之前就在内存中运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当定义了几个通用块时，将按顺序对其进行处理。</font><font style="vertical-align: inherit;">在您的情况3中，就像两次运行插件一样。</font><font style="vertical-align: inherit;">但是请注意，它们</font></font><code>CommonsChunkPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能具有更复杂的配置（minSize，minChunks等），这会影响模块的移动方式。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况1：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有3 </font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块（</font></font><code>entry1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>entry2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该配置将</font></font><code>commons</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为公共块。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该插件处理</font></font><code>commons</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公共块（由于该块不存在，因此将创建它）：

</font></font><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它收集其他块中多次</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">的模块</font><font style="vertical-align: inherit;">：</font></font><code>entry1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>entry2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用，</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以便从这些块中删除该模块并将其添加到该</font></font><code>commons</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块中。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>commons</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块被标记为</font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而该块</font></font><code>entry1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>entry2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块被作为未标记</font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，由于</font></font><code>commons</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块是</font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块，因此它包含运行时和</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况2：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有3 </font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块（</font></font><code>entry1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>entry2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该配置将</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为公共块。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该插件处理</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公共块：

</font></font><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它收集其他块中多次</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">的模块</font><font style="vertical-align: inherit;">：</font></font><code>entry1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>entry2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用，</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以便从这些块中删除该模块（请注意，</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于该</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块已包含</font><font style="vertical-align: inherit;">该模块，因此未将其添加到该</font><font style="vertical-align: inherit;">块</font><font style="vertical-align: inherit;">中）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块被标记为</font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而该块</font></font><code>entry1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>entry2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块旗标被作为</font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，由于</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块是</font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块，因此它包含运行时和</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>jquery_plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况3：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有3 </font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块（</font></font><code>entry1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>entry2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该配置将</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块和</font></font><code>manifest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块设置为公共块。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该插件将创建</font></font><code>manifest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块，因为它不存在。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该插件处理</font></font><code>vendors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公共块：

</font></font><ol>
<li>It collects the modules that are used more than once in the other chunks: <code>entry1</code> and <code>entry2</code> use <code>jquery</code> so the module is removed from these chunks (note that it is not added to the <code>vendors</code> chunk because the <code>vendors</code> chunk already contains it).</li>
<li>The <code>vendors</code> chunk is flagged as an <code>entry</code> chunk while the <code>entry1</code> and <code>entry2</code> chunks are unflagged as <code>entry</code>.</li>
</ol></li>
<li>The plugin processes the <code>manifest</code> common chunk (since the chunk does not exist, it is created):

<ol>
<li>It collects the modules that are used more than once in the other chunks: as there are no modules used more than once, no module is moved.</li>
<li>The <code>manifest</code> chunk is flagged as <code>entry</code> chunk while the <code>entry1</code>, <code>entry2</code> and <code>vendors</code> are unflagged as <code>entry</code>.</li>
</ol></li>
<li>Finally, since the <code>manifest</code> chunk is an <code>entry</code> chunk it contains the runtime.</li>
</ol>

<p>Hope it helps.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
