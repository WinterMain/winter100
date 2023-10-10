---
layout: question
title:  什么是“只有ReactOwner可以具有引用”。意思？
date:   2020-03-18T07:49:10.000Z
description: 我有一个react带有表单的简单组件：var AddAppts = React.createClass({    handleClick  func...
img: 
author: 伊芙妮
category: question
answer: 7
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个</font></font><code>react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有表单</font><font style="vertical-align: inherit;">的简单</font><font style="vertical-align: inherit;">组件：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var AddAppts = React.createClass({<font></font>
    handleClick: function() {<font></font>
        var title = this.refs.title.getDOMNode().value;<font></font>
        ....<font></font>
<font></font>
        var appt = {<font></font>
            heading: title<font></font>
            ...<font></font>
        }<font></font>
<font></font>
        CalendarActions.addAppointment(appt);<font></font>
    },<font></font>
<font></font>
    render: function() {<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;label&gt;Description&lt;/label&gt;<font></font>
                &lt;input ref="title"&gt;&lt;/input&gt;<font></font>
                ...<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
module.exports = AddAppts;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在另一个</font></font><code>react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件中使用</font><font style="vertical-align: inherit;">此</font><font style="vertical-align: inherit;">组件：</font></font></p>

<pre class="lang-js prettyprint-override"><code>  var AddAppt = require('./AddAppts');<font></font>
<font></font>
  render: function() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;AddAppt /&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我得到这个错误： </font></font></p>

<pre class="lang-js prettyprint-override"><code> Uncaught Error: Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经用谷歌搜索了，但是无法弄清楚该问题的解决方法。 </font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2039篇《什么是“只有ReactOwner可以具有引用”。意思？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪飞云古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替 </font></font></p>

<pre><code>&lt;input ref="title"&gt;&lt;/input&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个</font></font></p>

<pre><code>&lt;input ref={(title) =&gt; this.title = title}&gt;&lt;/input&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁老丝GO</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定的解决方案对我没有用，尽管它们确实可以帮助我了解在哪里看。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，我的项目有两个</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹-一个在根目录中，一个在上级文件夹中。</font><font style="vertical-align: inherit;">我是React的新手，所以我不知道这是正常的还是什么。</font><font style="vertical-align: inherit;">当我开始一个新项目时，我只是使用Visual Studio给我的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，我知道哪些模块是造成问题，它碰巧只存在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对的</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将问题模块移至另一个</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹。</font><font style="vertical-align: inherit;">问题解决了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGreen</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><a href="https://stackoverflow.com/a/39405375/1817064"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相似</font><font style="vertical-align: inherit;">，我在使用单独的模块并使用</font></font><code>yarn link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案是</font></font><code>yarn unlink module-name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目的工作目录中运行。</font><font style="vertical-align: inherit;">然后</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">我撤离</font><font style="vertical-align: inherit;">并跑步，</font></font><code>yarn upgrade module-name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>yarn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采取适当措施。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云神无</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在将</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件上</font><font style="vertical-align: inherit;">移</font><font style="vertical-align: inherit;">一个级别后，</font><font style="vertical-align: inherit;">我看到了此错误</font><font style="vertical-align: inherit;">，因此</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的项目中</font><font style="vertical-align: inherit;">有2个</font><font style="vertical-align: inherit;">目录（一个在</font></font><code>./node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个目录中</font></font><code>./web/node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">删除旧目录可解决此问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Tom</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发使用链接到测试项目的react模块时，我看到了此错误</font></font><a href="https://docs.npmjs.com/cli/link" rel="nofollow"><code>npm link</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">切换到常规依赖项可以解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来React不喜欢</font></font><code>npm link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗十三</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新布置脚本解决了该问题。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。</font></font></strong></p>

<pre><code>&lt;script src="./lib/react.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="./lib/react-dom.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="./lib/react-with-addons.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font></font></strong></p>

<pre><code>&lt;script src="./lib/react.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="./lib/react-with-addons.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="./lib/react-dom.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font><a href="https://github.com/gcanti/tcomb-form/issues/107#issuecomment-150891680" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/gcanti/tcomb-form/issues/107#issuecomment-150891680</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Stafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用的组件模块安装了自己的react依赖项时，我遇到了此错误。</font><font style="vertical-align: inherit;">所以我使用了多个版本的React。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保不目录下的反应</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这就是为什么我们有</font></font><code>peerDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">;-)</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
