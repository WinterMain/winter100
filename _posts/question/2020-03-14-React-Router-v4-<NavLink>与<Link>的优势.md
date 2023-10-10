---
layout: question
title:  React Router v4 <NavLink>与<Link>的优势
date:   2020-03-14T10:15:31.000Z
description: 除了可以在NavLink上设置“ activeClassName”和“ activeStyle”之外，在网站上创建指向非导航元素（例如，页眉或页脚中的非主...
img: 
author: 西门
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了可以在NavLink上设置“ activeClassName”和“ activeStyle”之外，</font><font style="vertical-align: inherit;">在网站上创建指向非导航元素（例如，页眉或页脚中的非主导航）的其他路线的</font><strong><font style="vertical-align: inherit;">链接</font></strong><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">，是否有任何理由</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">链接</font></strong><font style="vertical-align: inherit;">上使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NavLink</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要活动状态/类？</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小宇宙伽罗</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，当您使用时</font><font style="vertical-align: inherit;">，所选元素上</font></font><code>&lt;Link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，</font></font><code>&lt;NavLink&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选中的元素会突出显示，因为此元素被添加了一个活动类。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyPro</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接组件</font></font></strong></p>

<blockquote>
  <p>It is used to create links which allow to navigate on different URLs
  and When we click on any of that particular <strong>Link</strong>, it should load that page which is associated with that path without reloading the page. 
  <em>Example:</em></p>
</blockquote>

<p><a href="https://i.stack.imgur.com/zSVbR.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/zSVbR.png" alt="在此处输入图片说明"></a></p>

<p><strong>NavLink Component:</strong> </p>

<blockquote>
  <p>If, we want to add some <strong>styles</strong> to the Link. So that when we click
  on any particular link, it can be easily identified which Link is
  active. For this react router provides <strong>NavLink</strong> instead of
  <strong>Link</strong>. Now replace Link from <strong>Navlink</strong> and add properties <strong>activeStyle</strong>. The <strong>activeStyle</strong> properties mean when we click on the Link, it should be highlighted with different style so that we can
  differentiate which link is currently active.
  <em>Example:</em></p>
</blockquote>

<p><a href="https://i.stack.imgur.com/YNApS.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/YNApS.png" alt="在此处输入图片说明"></a></p>

<p>Ref: <a href="https://www.javatpoint.com/react-router" rel="nofollow noreferrer">https://www.javatpoint.com/react-router</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅番长</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是明确的：</font></font></p>

<blockquote>
  <p><code>&lt;NavLink&gt;</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的特殊版本</font></font><code>&lt;Link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将在与当前URL匹配时将样式属性添加到呈现的元素。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，答案是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否定的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">除上述原因外，没有其他原因。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当需要在active上使用style或class属性时</font></font><code>&lt;Link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用</font></font><code>&lt;NavLink&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们看一个例子：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></strong></p>

<pre><code>&lt;Link to="/"&gt;Home&lt;/Link&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航链接</font></font></strong></p>

<pre><code>&lt;NavLink to="/" activeClassName="active"&gt;Home&lt;/NavLink&gt;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
