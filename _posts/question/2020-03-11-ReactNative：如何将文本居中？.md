---
layout: question
title:  ReactNative：如何将文本居中？
date:   2020-03-11T02:50:49.000Z
description: 如何将文本在ReactNative中水平和垂直居中？ 我在rnplay.org中有一个示例应用程序，其中justifyContent =“ cente...
img: 
author: JinJin村村
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将文本在ReactNative中水平和垂直居中？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在rnplay.org中有一个示例应用程序，其中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">justifyContent =“ center”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">alignItems =“ center”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用：</font><a href="https://rnplay.org/apps/AoxNKQ" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font><strong><font style="vertical-align: inherit;">//rnplay.org/apps/AoxNKQ</font></strong></font><a href="https://rnplay.org/apps/AoxNKQ" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本应居中。</font><font style="vertical-align: inherit;">为什么在文本（黄色）和父容器之间的顶部留有空白？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码：</font></font></p>



<pre class="lang-js prettyprint-override"><code>'use strict';<font></font>
<font></font>
var React = require('react-native');<font></font>
var {<font></font>
  AppRegistry,<font></font>
  StyleSheet,<font></font>
  Text,<font></font>
  Image,<font></font>
  View,<font></font>
} = React;<font></font>
<font></font>
var SampleApp = React.createClass({<font></font>
  render: function() {<font></font>
    return (<font></font>
            &lt;View style={styles.container}&gt;<font></font>
                &lt;View style={styles.topBox}&gt;<font></font>
                    &lt;Text style={styles.headline}&gt;lorem ipsum{'\n'}ipsum lorem lorem&lt;/Text&gt;<font></font>
<font></font>
                &lt;/View&gt;<font></font>
                &lt;View style={styles.otherContainer}&gt;<font></font>
                &lt;/View&gt;<font></font>
            &lt;/View&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
var styles = StyleSheet.create({<font></font>
<font></font>
    container: {<font></font>
        flex: 1,<font></font>
        flexDirection: 'column',<font></font>
        backgroundColor: 'red',<font></font>
        justifyContent: 'center',<font></font>
        alignItems: 'center',<font></font>
    },<font></font>
<font></font>
    topBox: {<font></font>
        flex: 1,<font></font>
        flexDirection: 'row',<font></font>
        backgroundColor: 'lightgray',<font></font>
        justifyContent: 'center',<font></font>
        alignItems: 'center',<font></font>
    },<font></font>
    headline: {<font></font>
        fontWeight: 'bold',<font></font>
        fontSize: 18,<font></font>
    marginTop: 0,<font></font>
        width: 200,<font></font>
        height: 80,<font></font>
    backgroundColor: 'yellow',<font></font>
        justifyContent: 'center',<font></font>
        alignItems: 'center',<font></font>
    },<font></font>
<font></font>
  otherContainer: {<font></font>
        flex: 4,<font></font>
        justifyContent: 'center',<font></font>
        alignItems: 'center',<font></font>
    backgroundColor: 'green',<font></font>
    },<font></font>
<font></font>
<font></font>
});<font></font>
<font></font>
AppRegistry.registerComponent('SampleApp', () =&gt; SampleApp);<font></font>
<font></font>
module.exports = SampleApp;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第560篇《ReactNative：如何将文本居中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tony小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>alignSelf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文本组件上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">属性</font></font></p>

<pre><code>{ alignSelf : "center" }
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单添加 </font></font></p>

<pre><code>textAlign: "center"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的styleSheet中，就是这样。</font><font style="vertical-align: inherit;">希望这会有所帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：“中心”</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Stafan小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>textAlignVertical: "center"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是真正的魔力。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这些样式设置为图像组件：{textAlignVertical：“ center”，textAlign：“ center”}</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经回答了，但我想在此主题上添加更多内容，并根据您的用例添加不同的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>adjustsFontSizeToFit={true}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向</font></font><code>Text</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Component </font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">（当前未记录）以</font><font style="vertical-align: inherit;">自动调整父节点内的大小。</font></font></p>



<pre class="lang-js prettyprint-override"><code>  &lt;Text adjustsFontSizeToFit={true} numberOfLines={1}&gt;Hiiiz&lt;/Text&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以在“文本组件”中添加以下内容：</font></font></p>

<pre class="lang-js prettyprint-override"><code>&lt;Text style={{textAlignVertical: "center",textAlign: "center",}}&gt;Hiiiz&lt;/Text&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以将以下内容添加到Text组件的父级中：</font></font></p>

<pre class="lang-js prettyprint-override"><code>&lt;View style={{flex:1,justifyContent: "center",alignItems: "center"}}&gt;<font></font>
     &lt;Text&gt;Hiiiz&lt;/Text&gt;<font></font>
&lt;/View&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或两者</font></font></p>

<pre class="lang-js prettyprint-override"><code> &lt;View style={{flex:1,justifyContent: "center",alignItems: "center"}}&gt;<font></font>
     &lt;Text style={{textAlignVertical: "center",textAlign: "center",}}&gt;Hiiiz&lt;/Text&gt;<font></font>
&lt;/View&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或全部三个</font></font></p>

<pre class="lang-js prettyprint-override"><code> &lt;View style={{flex:1,justifyContent: "center",alignItems: "center"}}&gt;<font></font>
     &lt;Text adjustsFontSizeToFit={true} <font></font>
           numberOfLines={1} <font></font>
           style={{textAlignVertical: "center",textAlign: "center",}}&gt;Hiiiz&lt;/Text&gt;<font></font>
&lt;/View&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这一切都取决于您在做什么。</font><font style="vertical-align: inherit;">您还可以查看有关该主题的完整博客文章</font></font></p>

<p><a href="https://medium.com/@vygaio/how-to-auto-adjust-text-font-size-to-fit-into-a-nodes-width-in-react-native-9f7d1d68305b" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/@vygaio/how-to-auto-adjust-text-font-size-to-fit-into-a-nodes-width-in-react-native-9f7d1d68305b</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
