---
layout: question
title:  如何在React组件中导入图像（.svg，.png）
date:   2020-03-19T02:07:43.000Z
description: 我正在尝试在我的react组件之一中导入图像文件。我使用Web Pack进行了项目设置这是我的组件代码 import Diamond from '...
img: 
author: 卡卡西Near
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在我的react组件之一中导入图像文件。</font><font style="vertical-align: inherit;">我使用Web Pack进行了项目设置</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的组件代码 </font></font></p>

<pre><code>import Diamond from '../../assets/linux_logo.jpg';<font></font>
<font></font>
 export class ItemCols extends Component {<font></font>
    render(){<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;section className="one-fourth" id="html"&gt;<font></font>
                    &lt;img src={Diamond} /&gt;<font></font>
                &lt;/section&gt;<font></font>
            &lt;/div&gt;<font></font>
        )<font></font>
    } <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的项目结构。 </font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/10655/images/thumbnails/1584583536590.png" data-src="https://www.samyoc.com//uploads/users/10655/images/1584583536590.png" rel="noreferrer"><img src="https://i.stack.imgur.com/MEY3R.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经通过以下方式设置了webpack.config.js文件 </font></font></p>

<pre><code>{<font></font>
    test: /\.(jpg|png|svg)$/,<font></font>
    loader: 'url-loader',<font></font>
    options: {<font></font>
      limit: 25000,<font></font>
    },<font></font>
},<font></font>
{<font></font>
    test: /\.(jpg|png|svg)$/,<font></font>
    loader: 'file-loader',<font></font>
    options: {<font></font>
      name: '[path][name].[hash].[ext]',<font></font>
    },<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS。</font><font style="vertical-align: inherit;">我可以从任何其他远程源获取图像，但不能从本地保存图像。</font><font style="vertical-align: inherit;">JavaScript控制台也没有给我任何错误。</font><font style="vertical-align: inherit;">请任何帮助。</font><font style="vertical-align: inherit;">我很新来做出反应，无法找到我做错了什么。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2241篇《如何在React组件中导入图像（.svg，.png）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
