---
layout: question
title:  使用Next JS和React Navigation响应本机Web
date:   2020-03-24T09:29:28.000Z
description: 我正在尝试确定在React Native Web项目中设置路由的最佳方法。我正在使用expo，并按照本指南使用Next JS https //docs.e...
img: 
author: Davaid樱
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试确定在React Native Web项目中设置路由的最佳方法。</font><font style="vertical-align: inherit;">我正在使用expo，并按照本指南使用Next JS </font></font><a href="https://docs.expo.io/versions/latest/guides/using-nextjs/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.expo.io/versions/latest/guides/using-nextjs/，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我有这样的App.js：</font></font></p>

<pre><code>import index from "./pages/index";<font></font>
import alternate from "./pages/alternate";<font></font>
import { createStackNavigator } from "react-navigation-stack";<font></font>
import { createAppContainer } from "react-navigation";<font></font>
const AppNavigator = createStackNavigator(<font></font>
  {<font></font>
    index,<font></font>
    alternate<font></font>
  },<font></font>
  {<font></font>
    initialRouteName: "index"<font></font>
  }<font></font>
);<font></font>
<font></font>
const AppContainer = createAppContainer(AppNavigator);<font></font>
export default AppContainer;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我关心的是如何最好地处理路由。</font><font style="vertical-align: inherit;">我目前有这样的index.js页面设置。</font></font></p>

<pre><code>import * as React from 'react'<font></font>
import { StyleSheet, Button, Text, View } from 'react-native'<font></font>
<font></font>
<font></font>
export default function App ({navigation}) {<font></font>
  return (<font></font>
    &lt;View style={styles.container}&gt;<font></font>
<font></font>
      {/* Native route */}<font></font>
      &lt;Button<font></font>
        title="Go to Details"<font></font>
        onPress={() =&gt; navigation.navigate("alternate")}<font></font>
      /&gt;<font></font>
<font></font>
      {/* Web route */}<font></font>
      &lt;Text style={styles.link} accessibilityRole="link" href={`/alternate`}&gt;<font></font>
        A universal link<font></font>
      &lt;/Text&gt;<font></font>
    &lt;/View&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，当前需要使用单独的代码来呈现本机与Web路由。</font><font style="vertical-align: inherit;">我想知道什么是处理这种渲染的最佳方法。</font><font style="vertical-align: inherit;">我研究了将</font></font><a href="https://reactnavigation.org/docs/en/web-support.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Navigation用于Web</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且不会反对，但是似乎我应该坚持使用Next Router。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此先感谢您对处理条件渲染的任何建议。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3561篇《使用Next JS和React Navigation响应本机Web》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅卡卡西Eva</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此使用reactnavigation Web支持</font></font></p>

<p><a href="https://reactnavigation.org/docs/en/web-support.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactnavigation.org/docs/en/web-support.html</font></font></a></p>

<pre><code>import { createSwitchNavigator } from "@react-navigation/core";<font></font>
import { createBrowserApp } from "@react-navigation/web";<font></font>
<font></font>
const MyNavigator = createSwitchNavigator(routes);<font></font>
<font></font>
const App = createBrowserApp(MyNavigator);<font></font>
<font></font>
// now you can render "App" normally<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
