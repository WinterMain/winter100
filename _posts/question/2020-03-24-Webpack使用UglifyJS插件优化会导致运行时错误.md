---
layout: question
title:  Webpack使用UglifyJS插件优化会导致运行时错误
date:   2020-03-24T10:24:20.000Z
description: 我有一个同构的React应用程序，它通过webpack捆绑在一起。我有2个入口点，分别对应2个捆绑的文件输出：vendors.js和app.js。...
img: 
author: 飞云古一
category: question
answer: 3
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个同构的React应用程序，它通过webpack捆绑在一起。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有2个入口点，分别对应2个捆绑的文件输出：</font></font><code>vendors.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当运行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack-dev-server</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或没有任何优化标志的编译时，一切正常。</font><font style="vertical-align: inherit;">但是，一旦我尝试使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Uglify</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件，编译后的输出就会包含错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了：</font></font></p>

<pre><code>webpack -p<font></font>
webpack -optimize-minimize<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在配置中：</font></font></p>

<pre><code>new webpack.optimize.UglifyJsPlugin({sourceMap:false})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是所有这些都会导致相同的运行时错误（未定义的变量）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么明显的原因可能导致这种情况吗？</font><font style="vertical-align: inherit;">Uglify是否过于热心并删除了不该这么做的东西？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3646篇《Webpack使用UglifyJS插件优化会导致运行时错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于停用了mangle并仍然存在问题的用户，请检查是否使用-p参数进行构建。</font><font style="vertical-align: inherit;">看来-p也使输出混乱，在我的情况下，我不得不将UflifyJsPlugin混乱切换为false并在没有-p标志的情况下进行构建才能使其工作（以增加js权重约50的代价） ％）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过使用以下命令解决了这个问题（我使用的是Webpack 4.5）：</font></font></p>

<pre><code>var config = {<font></font>
  optimization: {<font></font>
    minimizer: [<font></font>
      new UglifyJsPlugin({<font></font>
        uglifyOptions: {<font></font>
          safari10: true,<font></font>
          mangle: {<font></font>
            safari10: true,<font></font>
          }<font></font>
        }<font></font>
      })<font></font>
    ]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://github.com/mishoo/UglifyJS2/tree/harmony#mangle-options" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/mishoo/UglifyJS2/tree/harmony#mangle-options</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">safari10（默认为false）-传递true可以解决Safari 10循环迭代器错误“无法两次声明let变量”的问题。</font><font style="vertical-align: inherit;">另请参阅：safari10输出选项。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要注意，这进去了</font></font><code>optimization.minimizer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当我把它放进去时，它对我没有用</font></font><code>plugins</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该问题是由Uglify流氓造成的。</font><font style="vertical-align: inherit;">不知道哪个变量重命名会导致问题，解决方案是完全关闭重整：</font></font></p>

<pre><code>new webpack.optimize.UglifyJsPlugin({<font></font>
  sourceMap: false,<font></font>
  mangle: false<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该作为</font></font><a href="http://webpack.github.io/docs/configuration.html#plugins" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到您的配置文件中，例如：</font></font></p>

<pre><code>var config = {<font></font>
<font></font>
  //... various config settings<font></font>
<font></font>
  plugins: [<font></font>
    new webpack.optimize.UglifyJsPlugin({<font></font>
      sourceMap: false,<font></font>
      mangle: false<font></font>
    })<font></font>
  ]<font></font>
};<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
