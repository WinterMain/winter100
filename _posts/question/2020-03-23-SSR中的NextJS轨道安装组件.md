---
layout: question
title:  SSR中的NextJS轨道安装组件
date:   2020-03-23T02:49:56.000Z
description: 以下内容适用于通过NextJS进行的SSR。 我正在使用React的上下文来跟踪某些已安装组件的ID。要点是class Root extends ...
img: 
author: 小胖Gil
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下内容适用于通过NextJS进行的SSR。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React的上下文来跟踪某些已安装组件的ID。</font><font style="vertical-align: inherit;">要点是</font></font></p>

<pre><code>class Root extends React.Component {<font></font>
  getChildContext () {<font></font>
    return {<font></font>
      registerComponent: this.registerComponent<font></font>
    }<font></font>
  }<font></font>
<font></font>
  registerComponent = (id) =&gt; {<font></font>
    this.setState(({ mountedComponents }) =&gt; {<font></font>
      return { mountedComponents: [...mountedComponents, id ] }<font></font>
    })<font></font>
  }<font></font>
<font></font>
  ...<font></font>
}<font></font>
<font></font>
class ChildComponent {<font></font>
  static contextTypes = { registerComponent: PropTypes.func }<font></font>
<font></font>
  constructor(props) {<font></font>
    super(props)<font></font>
<font></font>
    props.registerComponent(props.id)<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这仅适用于客户端。</font></font><code>this.state.mountedComponents</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器上。</font><font style="vertical-align: inherit;">还有另一种方法可以在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器端</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跟踪这些组件</font><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">基本上，我需要将id提供给脚本才能在</font></font><code>head</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">-等到客户端应用程序手动安装，运行并追加到头部时，这太慢了。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个快速的示例回购：</font><a href="https://github.com/tills13/nextjs-ssr-context" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/tills13/nextjs-ssr-context" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/tills13/nextjs-ssr-context</font></font></a></p>

<p><code>this.context</code> is <code>undefined</code> in the constructor of <code>Child</code>, if I move it to <code>componentDidMount</code> (currently set up this way in the repo), it works, but I'd like this to be resolved server-side. I'm not dead-set on <code>context</code>, if there's another way to do this, I'm all ears.</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2688篇《SSR中的NextJS轨道安装组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
