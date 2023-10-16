---
layout: question
title:  处理单页应用程序URL和Django URL
date:   2020-03-13T09:10:32.000Z
description: 我在Vue.js中创建了一个单页应用程序，该应用程序使用HTML5历史记录模式进行路由，并且html文件与Django一起提供。django 的url...
img: 
author: Itachi小宇宙
category: question
answer: 0
tags: django Django
topic: Django
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Vue.js中创建了一个单页应用程序，该应用程序使用HTML5历史记录模式进行路由，并且html文件与Django一起提供。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">django </font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">urls.py</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像这样：</font></font></p>

<pre><code>urlpatterns = [<font></font>
    url(r'^$', views.home),<font></font>
    url(r'^admin/', admin.site.urls),<font></font>
    url(r'^api-token-auth/', obtain_jwt_token),<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">views.home</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>def home(request):<font></font>
    return render(request, 'index.html')<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请考虑以下情形：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户访问主页（即</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于首页响应单页Vuejs应用程序所需的index.html，因此其工作原理与预期的一样。</font></font></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户从那里导航到“关于”页面（即</font></font><code>/username/12</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用Vue路由器导航时，它仍然可以正常工作。</font></font></p>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，用户刷新页面。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于没有</font></font><code>/username/12</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">urls.py</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模式，它会显示</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到网页（404） </font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>Now, I could provide another pattern in <strong>urls.py</strong> to catch all pattern in the last order as this:</p>

<pre><code>urlpatterns = [<font></font>
    url(r'^admin/', admin.site.urls),<font></font>
    url(r'^api-token-auth/', obtain_jwt_token),<font></font>
    url(r'^.*$', views.home),<font></font>
]<font></font>
</code></pre>

<p>But other urls like the media or static urls will also point to the same <em>catch all pattern regex</em>. How can I solve this problem?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1467篇《处理单页应用程序URL和Django URL》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
