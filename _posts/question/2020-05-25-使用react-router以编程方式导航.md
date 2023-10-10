---
layout: question
title:  使用react-router以编程方式导航
date:   2020-05-25T04:13:27.000Z
description: 我正在开发一个应用程序，在其中检查用户是否不是loggedIn。我有显示登录表单，否则dispatch一个action将改变路线和加载其他组件。这是我的代...
img: 
author: 别坑我
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在开发一个应用程序，在其中检查用户是否不是</font></font><code>loggedIn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我有显示登录表单，否则</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><code>action</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将改变路线和加载其他组件。</font><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">isLoggedIn</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="com">// dispatch an action to change the route</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="com">// return login component</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Login</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于无法更改</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">内部的状态，如何实现此目的</font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4165篇《使用react-router以编程方式导航》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">connected-react-router </font></font></strong> <a href="https://github.com/supasate/connected-react-router" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/supasate/connected-react-router</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
，即使您需要，它也可以帮助执行减速器/动作的导航。</font><font style="vertical-align: inherit;">它有据可查且易于配置</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
