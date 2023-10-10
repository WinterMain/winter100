---
layout: question
title:  从Create-React-App升级到Next.js-CSS样式表不起作用
date:   2020-03-24T07:46:45.000Z
description: 最近，我们发现我们必须在我们的React项目中使用SSR。我检查了我所知道的每种方法，并几乎测试了我在中型站点和其他站点上发现的所有方法。经过大量的工作，...
img: 
author: 凯阿飞卡卡西
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我们发现我们必须在我们的React项目中使用SSR。</font><font style="vertical-align: inherit;">我检查了我所知道的每种方法，并几乎测试了我在中型站点和其他站点上发现的所有方法。</font><font style="vertical-align: inherit;">经过大量的工作，我决定我们必须迁移到Next JS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然所有内容的迁移过程都很好，但适用于样式表。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在旧版应用中，我们使用webpack将样式与项目捆绑在一起，一切都很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是webpack.config.js</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const HtmlWebpackPlugin = require('html-webpack-plugin');<font></font>
const ExtractTextPlugin = require("extract-text-webpack-plugin");<font></font>
const port = process.env.PORT || 3000;<font></font>
const extractSCSS = new ExtractTextPlugin('./[name].css');<font></font>
<font></font>
// const UglifyJS = require('uglifyjs-webpack-plugin');<font></font>
module.exports = {<font></font>
<font></font>
  mode: 'development',<font></font>
  output: {<font></font>
    filename: 'bundle.[hash].js',<font></font>
    publicPath: '/'<font></font>
  },<font></font>
  devtool: 'source-map',<font></font>
  module: {<font></font>
    rules: [<font></font>
<font></font>
      // First Rule<font></font>
<font></font>
      {<font></font>
        test: /\.(js)$/,<font></font>
        exclude: /node_modules/,<font></font>
        use: ['babel-loader'],<font></font>
<font></font>
      },<font></font>
<font></font>
      // Second Rule<font></font>
<font></font>
      {<font></font>
        test: /\.scss$/,<font></font>
        use: ['css-hot-loader'].concat(extractSCSS.extract({<font></font>
          fallback: 'style-loader',<font></font>
          use: [<font></font>
            {<font></font>
              loader: 'css-loader?sourceMap',<font></font>
              options: { alias: { '../img': '../public/img' }, sourceMap: true }<font></font>
            },<font></font>
            {<font></font>
              loader: 'sass-loader',<font></font>
              options: {<font></font>
                sourceMap: true<font></font>
              }<font></font>
            }<font></font>
          ]<font></font>
        }))<font></font>
      },<font></font>
      {<font></font>
        test: /\.css$/,<font></font>
        use: ['style-loader', 'css-loader']<font></font>
      },<font></font>
<font></font>
        {<font></font>
        test: /\.(png|svg|jpg|gif)$/,<font></font>
        use: [<font></font>
          'file-loader'<font></font>
        ]<font></font>
      },<font></font>
      {<font></font>
        test: /\.(woff|woff2|eot|ttf|otf)$/,<font></font>
        use: [<font></font>
          'file-loader'<font></font>
        ]<font></font>
      }<font></font>
    ]<font></font>
  },<font></font>
  plugins: [<font></font>
<font></font>
    new HtmlWebpackPlugin({<font></font>
      template: 'public/index.html',<font></font>
      favicon: 'public/favicon.ico'<font></font>
<font></font>
    }),<font></font>
<font></font>
<font></font>
    extractSCSS,<font></font>
<font></font>
  ],<font></font>
  devServer: {<font></font>
    host: 'localhost',<font></font>
    port: port,<font></font>
    historyApiFallback: true,<font></font>
    open: true<font></font>
  }<font></font>
};</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在迁移应用程序之后，我的next.config.js如下所示：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// next.config.js<font></font>
const withSass = require('@zeit/next-sass')<font></font>
const withCSS = require('@zeit/next-css')<font></font>
<font></font>
module.exports = withCSS( withSass(<font></font>
  {<font></font>
    webpack(config, options) {<font></font>
      config.module.rules.push({<font></font>
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,<font></font>
        use: {<font></font>
          loader: 'url-loader',<font></font>
          options: {<font></font>
            limit: 100000<font></font>
          }<font></font>
        }<font></font>
      },<font></font>
      )<font></font>
<font></font>
      return config<font></font>
    },<font></font>
<font></font>
  }<font></font>
))</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于，所有内容均可正确呈现，但其中没有样式表，并且不包含任何样式。</font><font style="vertical-align: inherit;">有谁可以帮助我解决这个问题？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需同时使用CSS和withSass插件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Sass，withSass插件会将其编译为CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需确保将路径添加到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Head</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">内的_document.js文件中的CSS文件中，</font><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre><code>&lt;Head&gt;<font></font>
  &lt;link rel="stylesheet" href="/_next/static/style.css" /&gt;<font></font>
&lt;/Head&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenMandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是一个真正的答案，但是Next.js中的CSS真是太糟了！</font><font style="vertical-align: inherit;">我发现自己一直在努力使其工作，因此我决定遵循他们的文档并简单地使用：</font></font></p>

<pre><code>const App = () =&gt; {<font></font>
  return (<font></font>
    {style}<font></font>
    &lt;div/&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
let style = (&lt;style jsx&gt;<font></font>
{`<font></font>
.someClass {}<font></font>
`}<font></font>
&lt;/style&gt; )<font></font>
<font></font>
export default App;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您可以像在常规HTML中一样拥有CSS，而无需任何外部导入</font></font></p>

<p><a href="https://nextjs.org/learn/basics/styling-components" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
