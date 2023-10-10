---
layout: question
title:  Next Js自定义路线和SSR
date:   2020-03-20T05:05:25.000Z
description: 我在next上使用apollo，最近我注意到自定义路由破坏了SSR。通常，如果您浏览页面，则阿波罗会缓存查询，而当您下次访问该页面时，它将处理缓存中的所有...
img: 
author: DavaidTony宝儿
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在next上使用apollo，最近我注意到自定义路由破坏了SSR。</font><font style="vertical-align: inherit;">通常，如果您浏览页面，则阿波罗会缓存查询，而当您下次访问该页面时，它将处理缓存中的所有内容。</font><font style="vertical-align: inherit;">但是，对于自定义路由，永远不会使用缓存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还注意到，当我单击这些页面时，控制台中会闪烁一个错误。</font><font style="vertical-align: inherit;">但是它很快消失了，我无法在这里复制它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Server.js</font></font></strong></p>

<pre><code>// <font></font>
   server.get('/about-us', (req, res) =&gt; app.render(req, res, '/about'));<font></font>
<font></font>
<font></font>
   server.get('/about', (req, res) =&gt; res.redirect(301, '/about-us'));<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">菜单点击处理程序</font></font></strong> </p>

<pre><code>const navigate = link =&gt; () =&gt; {<font></font>
        Router.push(link);<font></font>
    };<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">菜单项</font></font></strong></p>

<pre><code>export const menu = [<font></font>
    {<font></font>
        name: 'Home',<font></font>
        url: '/',<font></font>
    },<font></font>
    {<font></font>
        name: 'Catalogs',<font></font>
        url: '/catalogs',<font></font>
    },<font></font>
    {<font></font>
        name: 'Shop',<font></font>
        url: '/shop',<font></font>
    },<font></font>
    {<font></font>
        name: 'Wholesale',<font></font>
        url: '/wholesale',<font></font>
    },<font></font>
    {<font></font>
        name: 'About Us',<font></font>
        url: '/about-us',<font></font>
        prefetch: true,<font></font>
    },<font></font>
    {<font></font>
        name: 'Contact Us',<font></font>
        url: '/contact-us',<font></font>
        prefetch: true,<font></font>
    },<font></font>
];<font></font>
<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于nextjs频谱的建议，我尝试在TopNav Component中预取自定义页面，但此方法不起作用。 </font></font></p>

<pre><code>const prefetch = url =&gt; {<font></font>
        if (process.browser) {<font></font>
            console.log('prefetching these urls', url);<font></font>
            Router.prefetch(url);<font></font>
        }<font></font>
    };<font></font>
<font></font>
    useEffect(() =&gt; {<font></font>
        menu.forEach(menuItem =&gt; {<font></font>
            if (menuItem.prefetch) {<font></font>
                prefetch(menuItem.url);<font></font>
            }<font></font>
        });<font></font>
    }, []);<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门路易</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能够找出问题所在。</font><font style="vertical-align: inherit;">确实没有很好的记录，但是您需要预取组件。</font><font style="vertical-align: inherit;">因此，就我而言，</font></font><code>/about-us</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该已经预取了，</font><font style="vertical-align: inherit;">而不是预</font><font style="vertical-align: inherit;">取了</font></font><code>/about</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是</font></font><code>as</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接组件中</font><font style="vertical-align: inherit;">有</font><font style="vertical-align: inherit;">prop </font><font style="vertical-align: inherit;">的原因</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Nextjs 9刚刚发布，可解决此问题。</font></font></p>

<p><strong><a href="https://nextjs.org/blog/next-9#dynamic-route-segments" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nextjs.org/blog/next-9#dynamic-route-segments</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于nextjs 9，您可以将文件另存为[pid] .js，它将捕获特定路由中的所有路径。</font><font style="vertical-align: inherit;">即因为</font></font><code>/products/test-product</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须创建文件夹产品并在其中添加</font></font><code>[pid].js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要查询基于弹头的产品，所以我添加了这个，瞧，我可以访问组件内部的弹头。 </font></font></p>

<pre><code>Product.getInitialProps = async ({ query }) =&gt; {<font></font>
    return { slug: query.pid };<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在接下来的9年之前，这些问题非常令人沮丧，但已大大简化了工作，并帮助我彻底删除了这些问题</font></font><code>server.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
