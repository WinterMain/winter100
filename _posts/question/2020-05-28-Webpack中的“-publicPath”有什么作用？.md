---
layout: question
title:  Webpack中的“ publicPath”有什么作用？
date:   2020-05-28T07:01:46.000Z
description: Webpack文档指出output.publicPath：  在output.path与JavaScript的视图。您能否详细说明这实际上意味...
img: 
author: 镜风
category: question
answer: 7
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><a href="https://github.com/webpack/docs/wiki/configuration#outputpublicpath" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出</font></font><code>output.publicPath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>output.path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与JavaScript的视图。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能否详细说明这实际上意味着什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><code>output.path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>output.filename</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来指定Webpack在哪里输出结果，但是我不确定要放入什么</font></font><code>output.publicPath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及是否需要。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  output</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    path</span><span class="pun">:</span><span class="pln"> path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="str">"./examples/dist"</span><span class="pun">),</span><span class="pln">
    filename</span><span class="pun">:</span><span class="pln"> </span><span class="str">"app.js"</span><span class="pun">,</span><span class="pln">
    publicPath</span><span class="pun">:</span><span class="pln"> </span><span class="str">"What should I put here?"</span><span class="pln">   
  </span><span class="pun">}</span><span class="pln"> 
</span><span class="pun">}</span></code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇神奇Near</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack使用publicPath来替换在CSS中定义的用于引用图像和字体文件的相对路径。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack2文档以更简洁的方式对此进行了解释：</font><a href="https://webpack.js.org/guides/public-path/#use-cases" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://webpack.js.org/guides/public-path/#use-cases
</font></font><a href="https://webpack.js.org/guides/public-path/#use-cases" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack具有非常有用的配置，可让您指定应用程序中所有资产的基本路径。</font><font style="vertical-align: inherit;">它称为publicPath。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里老丝</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，我有一个CDN，并且我将所有处理过的静态文件（js，imgs，字体...）放入我的CDN中，假设URL为</font></font><a href="http://my.cdn.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://my.cdn.com/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果存在一个js文件，该文件是html中的原始引用网址是“ ./js/my.js”，则</font><font style="vertical-align: inherit;">在生产环境中</font><font style="vertical-align: inherit;">应变为</font></font><a href="http://my.cdn.com/js/my.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://my.cdn.com/js/my.js</font></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，我需要做的就是将publicpath设置为</font></font><a href="http://my.cdn.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://my.cdn.com/，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
然后webpack将自动添加该前缀</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙十三</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用publicPath指向希望webpack-dev-server服务其“虚拟”文件的位置。</font><font style="vertical-align: inherit;">publicPath选项将与webpack-dev-server的content-build选项位于相同位置。  </font></font><a href="https://webpack.github.io/docs/webpack-dev-server.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack-dev-server</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建启动时将使用的虚拟文件。</font><font style="vertical-align: inherit;">这些虚拟文件类似于webpack创建的实际捆绑文件。</font><font style="vertical-align: inherit;">基本上，您将希望--content-base选项指向index.html所在的目录。这是示例设置：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">//application directory structure</span><span class="pln">
</span><span class="pun">/</span><span class="pln">app</span><span class="pun">/</span><span class="pln">
</span><span class="str">/build/</span><span class="pln">
</span><span class="pun">/</span><span class="pln">build</span><span class="pun">/</span><span class="pln">index</span><span class="pun">.</span><span class="pln">html
</span><span class="pun">/</span><span class="pln">webpack</span><span class="pun">.</span><span class="pln">config</span><span class="pun">.</span><span class="pln">js


</span><span class="com">//webpack.config.js</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> path </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">"path"</span><span class="pun">);</span><span class="pln">
module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="pun">...</span><span class="pln">
  output</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    path</span><span class="pun">:</span><span class="pln"> path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="pln">__dirname</span><span class="pun">,</span><span class="pln"> </span><span class="str">"build"</span><span class="pun">),</span><span class="pln">
    publicPath</span><span class="pun">:</span><span class="pln"> </span><span class="str">"/assets/"</span><span class="pun">,</span><span class="pln">
    filename</span><span class="pun">:</span><span class="pln"> </span><span class="str">"bundle.js"</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">};</span><span class="pln">  


</span><span class="com">//index.html</span><span class="pln">
</span><span class="pun">&lt;!</span><span class="pln">DOCTYPE</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="pln">html</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">...</span><span class="pln">
</span><span class="pun">&lt;</span><span class="pln">script src</span><span class="pun">=</span><span class="str">"assets/bundle.js"</span><span class="pun">&gt;&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">html</span><span class="pun">&gt;</span><span class="pln">

</span><span class="com">//starting a webpack-dev-server from the command line</span><span class="pln">
$ webpack</span><span class="pun">-</span><span class="pln">dev</span><span class="pun">-</span><span class="pln">server </span><span class="pun">--</span><span class="pln">content</span><span class="pun">-</span><span class="pln">base build </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack-dev-server已创建一个虚拟资产文件夹以及它引用的虚拟bundle.js文件。</font><font style="vertical-align: inherit;">您可以通过转到localhost：8080 / assets / bundle.js进行测试，然后在应用程序中检入这些文件。</font><font style="vertical-align: inherit;">它们仅在您运行webpack-dev-server时生成。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">镜风</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">filename</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定在</font><em><font style="vertical-align: inherit;">完成构建步骤后所有捆绑代码将累积</font></em><font style="vertical-align: inherit;">到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文件名</font></font></strong><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">path</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定将</font><font style="vertical-align: inherit;">在其中将</font><strong><font style="vertical-align: inherit;">app.js</font></strong><font style="vertical-align: inherit;">（文件名）保存到磁盘</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出目录</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果没有输出目录，则webpack将为您创建该目录。</font><font style="vertical-align: inherit;">例如：</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  output</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    path</span><span class="pun">:</span><span class="pln"> path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="str">"./examples/dist"</span><span class="pun">),</span><span class="pln">
    filename</span><span class="pun">:</span><span class="pln"> </span><span class="str">"app.js"</span><span class="pln">
  </span><span class="pun">}</span><span class="pln"> 
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将创建一个目录</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的myproject /例子/ DIST</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和该目录下的它创建</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/myproject/examples/dist/app.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">构建后，您可以浏览到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">myproject / examples / dist / app.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以查看捆绑的代码</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">publicPath：“我应该在这里放什么？”</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">publicPath</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web服务器中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定</font><font style="vertical-align: inherit;">从中获取捆绑文件app.js </font><font style="vertical-align: inherit;">的虚拟目录</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请记住，使用publicPath时的服务器一词可以是webpack-dev-server或express服务器，也可以是可与webpack一起使用的其他服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  output</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    path</span><span class="pun">:</span><span class="pln"> path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="str">"./examples/dist"</span><span class="pun">),</span><span class="pln">
    filename</span><span class="pun">:</span><span class="pln"> </span><span class="str">"app.js"</span><span class="pun">,</span><span class="pln">
    publicPath</span><span class="pun">:</span><span class="pln"> path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="str">"/public/assets/js"</span><span class="pun">)</span><span class="pln">   
  </span><span class="pun">}</span><span class="pln"> 
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此配置告诉webpack将所有js文件捆绑到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">examples / dist / app.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并写入该文件。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">publicPath</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">告诉webpack-dev-server或express服务器</font><font style="vertical-align: inherit;">从</font><strong><font style="vertical-align: inherit;">服务器中的</font></strong><font style="vertical-align: inherit;">指定虚拟位置（</font><font style="vertical-align: inherit;">即/ public / assets / js）</font><font style="vertical-align: inherit;">提供此捆绑文件，即</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">examples / dist / app.js。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在您的html文件中，您必须将此文件引用为</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">script src</span><span class="pun">=</span><span class="str">"public/assets/js/app.js"</span><span class="pun">&gt;&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，总而言之，publicPath就像</font></font><code>virtual directory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器</font><font style="vertical-align: inherit;">之间的映射，</font></font><code>output directory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并由output.path配置指定。只要对文件</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">public / assets / js / app.js的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求</font><font style="vertical-align: inherit;">到来，</font><font style="vertical-align: inherit;">就会提供</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/examples/dist/app.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><h2><code>output.path</code></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地磁盘目录，用于存储所有输出文件</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（绝对路径）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></strong> <code>path.join(__dirname, "build/")</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack会将所有内容输出到 </font></font><code>localdisk/path-to-your-project/build/</code></p>

<hr>

<h2><code>output.publicPath</code></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上载捆绑文件的位置。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（相对于服务器根目录）</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></strong> <code>/assets/</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您将应用程序部署在服务器根目录下</font></font><code>http://server/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><code>/assets/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该应用将在以下位置找到Webpack资产</font></font><code>http://server/assets/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在后台，webpack遇到的每个URL都将被重写为以“ </font></font><code>/assets/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">” </font><font style="vertical-align: inherit;">开头</font><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><code>src="picture.jpg"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 改写➡ </font></font><code>src="/assets/picture.jpg"</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问者：（</font></font><code>http://server/assets/picture.jpg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>
  
  <hr>
  
  <p><code>src="/img/picture.jpg"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 改写➡ </font></font><code>src="/assets/img/picture.jpg"</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问者：（</font></font><code>http://server/assets/img/picture.jpg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中执行时，webpack需要知道您将在何处托管生成的包。</font><font style="vertical-align: inherit;">因此，它能够请求额外的块（当使用</font></font><a href="http://webpack.github.io/docs/code-splitting.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码拆分时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）或</font><font style="vertical-align: inherit;">分别</font><font style="vertical-align: inherit;">通过</font></font><a href="https://github.com/webpack/file-loader"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件加载器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/webpack/file-loader"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">url加载器加载的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用文件</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：如果将http服务器配置为托管生成的包，</font></font><code>/assets/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则应输入：</font></font><code>publicPath: "/assets/"</code>   </p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
