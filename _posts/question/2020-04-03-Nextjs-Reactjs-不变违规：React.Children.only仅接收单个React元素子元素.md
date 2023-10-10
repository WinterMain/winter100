---
layout: question
title:  Nextjs-Reactjs-不变违规：React.Children.only仅接收单个React元素子元素
date:   2020-04-03T02:52:39.000Z
description: 我正在使用Nextjs和Reactjs。我已经为我的应用程序UI设置了Layout.js文件。我不知道为什么我的控制台会返回我：   不变违规：...
img: 
author: 宝儿阿飞
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Nextjs和Reactjs。</font><font style="vertical-align: inherit;">我已经为我的应用程序UI设置了Layout.js文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道为什么我的控制台会返回我： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不变违规：React.Children.only只希望接收一个React元素的孩子。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的layout.js： </font></font></p>

<pre><code>export default ({ children, title = 'This is the default title' }) =&gt; (<font></font>
    &lt;div&gt;<font></font>
        &lt;Head&gt;<font></font>
        &lt;title&gt;{ title }&lt;/title&gt;<font></font>
        &lt;meta charSet='utf-8' /&gt;<font></font>
        &lt;meta name='viewport' content='initial-scale=1.0, width=device-width' /&gt;<font></font>
        &lt;/Head&gt;<font></font>
        &lt;div className={style.layout}&gt;<font></font>
            &lt;div&gt;<font></font>
                &lt;div className={style.header}&gt;<font></font>
                    &lt;div className= {style.headbar}&gt; <font></font>
                        &lt;div className={style.headerLeft}&gt;<font></font>
                            &lt;Logo className={style.logo}/&gt; <font></font>
                        &lt;/div&gt;<font></font>
                        &lt;div className={style.headerRight}&gt;<font></font>
                            &lt;MenuContainer className={style.menu}/&gt; <font></font>
                        &lt;/div&gt;<font></font>
                    &lt;/div&gt;<font></font>
                    &lt;div className={style.chatbox}&gt; <font></font>
                        &lt;ChatContainer/&gt;<font></font>
                    &lt;/div&gt;<font></font>
                &lt;/div&gt; <font></font>
<font></font>
                { children }<font></font>
<font></font>
                &lt;div className={style.footer}&gt; <font></font>
                    &lt;Link to="/quote" className={style.quote}&gt; <font></font>
                        Click here<font></font>
                    &lt;/Link&gt;<font></font>
                    &lt;SocialMedia/&gt;<font></font>
                    &lt;Subscription/&gt;<font></font>
                &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的wrappedComponent.js：  </font></font></p>

<pre><code>const Index = () =&gt; (<font></font>
      &lt;Provider store={store}&gt; <font></font>
            &lt;Layout&gt; <font></font>
                  &lt;Home/&gt;<font></font>
            &lt;/Layout&gt;<font></font>
      &lt;/Provider&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道出什么问题了，在我看来，一切都很好，如果有人有任何暗示，那就很好了，</font></font></p>

<pre><code>thanks
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光达蒙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是我的数据结构对应于另一个框架。</font><font style="vertical-align: inherit;">因此，存在一些使NextJS崩溃的微小细节-例如我的React Links中的“ props”调用等。</font><font style="vertical-align: inherit;">因此，如果有人遇到相同的问题，请仔细检查框架数据结构的配置</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
