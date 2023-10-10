---
layout: question
title:  在React Native中调整图像大小
date:   2020-03-19T03:42:13.000Z
description: 我正在尝试在我的本机应用程序中调整图像尺寸（缩小以适合屏幕尺寸），但由于尺寸太大而无法执行。这是代码：'use strict';var Rea...
img: 
author: 小宇宙Near
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在我的本机应用程序中调整图像尺寸（缩小以适合屏幕尺寸），但由于尺寸太大而无法执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是代码：</font></font></p>

<pre><code>'use strict';<font></font>
<font></font>
var React = require('react-native');<font></font>
var {<font></font>
  StyleSheet,<font></font>
  Text,<font></font>
  TextInput,<font></font>
  View,<font></font>
  TouchableHighlight,<font></font>
  ActivityIndicatorIOS,<font></font>
  Image,<font></font>
  Component<font></font>
} = React;<font></font>
<font></font>
var styles = StyleSheet.create({<font></font>
  description: {<font></font>
    marginBottom: 20,<font></font>
    fontSize: 18,<font></font>
    textAlign: 'center',<font></font>
    color: '#656565'<font></font>
  },<font></font>
  container: {<font></font>
    padding: 30,<font></font>
    marginTop: 65,<font></font>
    alignItems: 'center'<font></font>
  },<font></font>
  flowRight: {<font></font>
    flexDirection: 'row',<font></font>
    alignItems: 'center',<font></font>
    alignSelf: 'stretch'<font></font>
  },<font></font>
  buttonText: {<font></font>
    fontSize: 18,<font></font>
    color: 'white',<font></font>
    alignSelf: 'center'<font></font>
  },<font></font>
  button: {<font></font>
    height: 36,<font></font>
    flex: 1,<font></font>
    flexDirection: 'row',<font></font>
    backgroundColor: '#48BBEC',<font></font>
    borderColor: '#48BBEC',<font></font>
    borderWidth: 1,<font></font>
    borderRadius: 8,<font></font>
    marginBottom: 10,<font></font>
    alignSelf: 'stretch',<font></font>
    justifyContent: 'center'<font></font>
  },<font></font>
  searchInput: {<font></font>
    height: 36,<font></font>
    padding: 4,<font></font>
    marginRight: 5,<font></font>
    flex: 4,<font></font>
    fontSize: 18,<font></font>
    borderWidth: 1,<font></font>
    borderColor: '#48BBEC',<font></font>
    borderRadius: 8,<font></font>
    color: '#48BBEC'<font></font>
  },<font></font>
  image: {<font></font>
    width: 200,<font></font>
    height: 220<font></font>
  },<font></font>
});<font></font>
<font></font>
class SearchPage extends Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;View style={styles.container}&gt;<font></font>
<font></font>
        &lt;Image source={require('image!rclogo')} style={styles.image}/&gt;<font></font>
<font></font>
        &lt;Text style={styles.description}&gt;<font></font>
          Search for RCers!<font></font>
        &lt;/Text&gt;<font></font>
<font></font>
        &lt;Text style={styles.description}&gt;<font></font>
          Search<font></font>
        &lt;/Text&gt;<font></font>
<font></font>
        &lt;View style={styles.flowRight}&gt;<font></font>
          &lt;TextInput<font></font>
            style={styles.searchInput}<font></font>
            placeholder='Search by Batch, Name, Interest...'/&gt;<font></font>
          &lt;TouchableHighlight style={styles.button}<font></font>
              underlayColor='#99d9f4'&gt;<font></font>
            &lt;Text style={styles.buttonText}&gt;Go&lt;/Text&gt;<font></font>
          &lt;/TouchableHighlight&gt;<font></font>
        &lt;/View&gt;<font></font>
<font></font>
        &lt;TouchableHighlight style={styles.button}<font></font>
            underlayColor='#99d9f4'&gt;<font></font>
          &lt;Text style={styles.buttonText}&gt;Location&lt;/Text&gt;<font></font>
        &lt;/TouchableHighlight&gt;<font></font>
<font></font>
      &lt;/View&gt;<font></font>
    );<font></font>
  }<font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图将其从容器标签中取出，但似乎无法理解为什么它无法正确呈现？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用flexbox resizeMode完成此操作吗？</font><font style="vertical-align: inherit;">你怎么做呢？</font><font style="vertical-align: inherit;">我找不到关于它的任何文档...</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2316篇《在React Native中调整图像大小》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木禾</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到相同的问题，并且能够调整调整</font></font><a href="https://facebook.github.io/react-native/docs/image.html#resizemode"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大小模式，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到发现满意的地方。</font><font style="vertical-align: inherit;">替代方法包括：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用图像编辑器</font><font style="vertical-align: inherit;">减小</font></font><a href="https://facebook.github.io/react-native/docs/image.html#static-resources"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态资源</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的大小</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用图像编辑器向静态资源添加透明边框</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://facebook.github.io/react-native/docs/image.html#network-resources"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络资源</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以牺牲UX为代价</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为避免在调整图像时质量下降，请考虑使用矢量图形，以便您可以轻松地尝试不同的尺寸。</font><font style="vertical-align: inherit;">Inkscape是免费工具，可以很好地实现此目的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
