---
layout: question
title:  反应componentDidMount不触发
date:   2020-04-03T03:39:30.000Z
description: 我建立了一个新的react项目，由于某种原因，该componentDidMount方法没有被调用。我已经通过调用console.login 来验证了此...
img: 
author: 凯乐
category: question
answer: 7
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建立了一个新的react项目，由于某种原因，该</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法没有被调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经通过调用</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font><font style="vertical-align: inherit;">来验证了此行为</font><font style="vertical-align: inherit;">，</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在控制台中看不到它的输出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，</font></font><code>this.setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很困惑为什么</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不被调用。</font><font style="vertical-align: inherit;">我尝试同时使用React“ v0.14.0”和“ v0.14.3”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不调用“ componentDidMount”？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码：</font></font></p>

<pre><code>var React = require('react');<font></font>
<font></font>
var RecipePage = React.createClass({<font></font>
  componentDidMount: function() {<font></font>
    console.log('mounted!');<font></font>
  },<font></font>
  render: function() {<font></font>
    return (<font></font>
      &lt;div&gt;Random Page&lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
module.exports = RecipePage;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天路易</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言</font><font style="vertical-align: inherit;">，在该</font><strong><font style="vertical-align: inherit;">componentDidMount</font></strong><font style="vertical-align: inherit;">开始按预期启动</font><font style="vertical-align: inherit;">后，</font><font style="vertical-align: inherit;">我还在</font><font style="vertical-align: inherit;">类中</font><font style="vertical-align: inherit;">声明了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentDidUpdate</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，原因是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ComponentDidMount中的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大写字母“ C” </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其更改为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentDidMount</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并有效</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我</font></font><code>componentWillMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在同一个类中定义2x </font><font style="vertical-align: inherit;">时，这发生在我身上</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这不会产生运行时错误。</font><font style="vertical-align: inherit;">我只是删除了第二个定义，事情就开始起作用了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小哥</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以...瞧瞧......我终于开始工作了（在后端专家的帮助下）。</font><font style="vertical-align: inherit;">之所以未触发“ componentDidMount”方法，是因为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的服务器正在捆绑并在服务器端提供所有的react + html服务</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（只有调用“ render”和“ getInitialState”方法才能创建“ html”模板，该模板通过客户端的浏览器传递...但是它停在那里，因为它认为已经完成了）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到一种通过服务器交付生成的“已编译” html的方法，此外，还</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在客户端再次访问和“启动” react自己的事件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当编译我的“ view”文件（index.js或index.html）时，我包含了一个“ Application.start（）”脚本，该脚本将我的bundle.js代码再次注入模板中。</font><font style="vertical-align: inherit;">然后在我的gulpfile中，导出“ Application”变量，以便“ view”文件可以访问它。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gahh ...为此拉了我的头发。</font><font style="vertical-align: inherit;">是时候阅读</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器端和客户端渲染了</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我</font></font><code>export default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在导入的文件中</font><font style="vertical-align: inherit;">导入了没有</font><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">的组件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当我解决此问题后，</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始射击...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要更改module.exports以指向RecipePage而不是TestPage</font></font></p>

<pre><code>module.exports = RecipePage;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码中</font><font style="vertical-align: inherit;">还有另一个</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
