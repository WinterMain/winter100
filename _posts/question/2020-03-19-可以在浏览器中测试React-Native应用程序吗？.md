---
layout: question
title:  可以在浏览器中测试React Native应用程序吗？
date:   2020-03-19T02:01:59.000Z
description: 意识到React Native应用旨在使用模拟器进行开发/测试，是否有可能使用Web浏览器来测试应用？存在诸如https //rnplay.org/之...
img: 
author: 凯Tom
category: question
answer: 3
tags: 测试 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意识到React Native应用旨在使用模拟器进行开发/测试，是否有可能使用Web浏览器来测试应用？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在</font><font style="vertical-align: inherit;">诸如</font></font><a href="https://rnplay.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://rnplay.org/之类的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务</font><font style="vertical-align: inherit;">，但是我担心的是，它由</font></font><a href="https://appetize.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://appetize.io/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供支持，</font><font style="vertical-align: inherit;">可能会受到每月分钟数的限制。</font><font style="vertical-align: inherit;">与付费屏幕流媒体服务相比，我还想利用自由/开源技术来实现这一目标。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">沿着这些思路，为了在浏览器中测试该应用程序，是否需要该应用程序使用一个或多个库，以允许该应用程序既可以在React Native中运行，也可以在React中运行？</font><font style="vertical-align: inherit;">我想找到一种替代此特定方法的方法，因为我想专门为React Native编写代码。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2237篇《可以在浏览器中测试React Native应用程序吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Tony</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用Expo Snack   </font></font><a href="https://snack.expo.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://snack.expo.io/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在设备上（使用QR码）或在浏览器中即时测试代码。</font><font style="vertical-align: inherit;">有关更多信息，您可以阅读本文。</font></font><a href="https://blog.expo.io/sketch-a-playground-for-react-native-16b2401f44a2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://blog.expo.io/sketch-a-playground-for-react-native-16b2401f44a2</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Pro</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是! </font><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/necolas/react-native-web" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native-web</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很有可能</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这里有一些相关的，有用的资源可以入门：</font></font></p>

<ul>
<li><a href="https://github.com/joefazz/react-native-web-starter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native Web Starter</font></font></a></li>
<li><a href="https://medium.com/@yannickdot/write-once-run-anywhere-with-create-react-native-app-and-react-native-web-ad40db63eed0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将React和ReactNative合并到一个代码库中的指南</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Davaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可以，React Native只能在IOS和Android等移动模拟器中进行测试</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：Facebook已经为React本机提供了精美的入门包。</font></font></p>

<p><a href="https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">介绍Create React Native App</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此工具，您可以使用expo app（</font></font><a href="https://expo.io" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://expo.io</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">在手机上运行该应用程序。</font><font style="vertical-align: inherit;">它会使用QR码进行同步。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
