---
layout: question
title:  使用Typescript使用getInitialProps将prop传递到Next.js中的每个页面
date:   2020-03-23T01:44:12.000Z
description: 我遇到一种情况，我需要在页面呈现到服务器端并使用Next.js发送回给我之前，知道用户是否已登录，以避免UI发生闪烁变化。我能够弄清楚如果用户已经使用...
img: 
author: 樱小胖Mandy
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到一种情况，我需要在页面呈现到服务器端并使用Next.js发送回给我之前，知道用户是否已登录，以避免UI发生闪烁变化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能够弄清楚如果用户已经使用此HOC组件登录，如何防止用户访问某些页面...</font></font></p>

<pre><code>export const noAuthenticatedAllowed = (WrappedComponent: NextPage) =&gt; {<font></font>
    const Wrapper = (props: any) =&gt; {<font></font>
        return &lt;WrappedComponent {...props} /&gt;;<font></font>
    };<font></font>
<font></font>
    Wrapper.getInitialProps = async (ctx: NextPageContext) =&gt; {<font></font>
        let context = {};<font></font>
        const { AppToken } = nextCookie(ctx);<font></font>
        if (AppToken) {<font></font>
            const decodedToken: MetadataObj = jwt_decode(AppToken);<font></font>
            const isExpired = () =&gt; {<font></font>
                if (decodedToken.exp &lt; Date.now() / 1000) {<font></font>
                    return true;<font></font>
                } else {<font></font>
                    return false;<font></font>
                }<font></font>
            };<font></font>
<font></font>
            if (ctx.req) {<font></font>
                if (!isExpired()) {<font></font>
                    ctx.res &amp;&amp; ctx.res.writeHead(302, { Location: "/" });<font></font>
                    ctx.res &amp;&amp; ctx.res.end();<font></font>
                }<font></font>
            }<font></font>
<font></font>
            if (!isExpired()) {<font></font>
                context = { ...ctx };<font></font>
                Router.push("/");<font></font>
            }<font></font>
        }<font></font>
<font></font>
        const componentProps =<font></font>
            WrappedComponent.getInitialProps &amp;&amp;<font></font>
            (await WrappedComponent.getInitialProps(ctx));<font></font>
<font></font>
        return { ...componentProps, context };<font></font>
    };<font></font>
<font></font>
    return Wrapper;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很棒。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我如何构建类似的HOC组件，将其包装起来，比如说“ _app.tsx”，这样我就可以通过获取令牌并确定令牌是否过期并基于它来将“ userAuthenticated”属性传递给每个页面该道具我可以向用户显示适当的UI，而不会产生烦人的闪烁效果？</font></font></p>

<p>I hope you can help me with that, I tried to do it the same way I built the above HOC, but I couldn't do it, especially that Typescript doesn't make this any easier with its weird errors :(
<br><br><br>
<strong>Edit ============================================</strong></p>

<p>I was able to create such HOC component and pass down the pro <code>userAuthenticated</code>to each page like this ...</p>

<pre><code>export const isAuthenticated = (WrappedComponent: NextPage) =&gt; {<font></font>
    const Wrapper = (props: any) =&gt; {<font></font>
        return &lt;WrappedComponent {...props} /&gt;;<font></font>
    };<font></font>
<font></font>
    Wrapper.getInitialProps = async (ctx: NextPageContext) =&gt; {<font></font>
        let userAuthenticated = false;<font></font>
<font></font>
        const { AppToken} = nextCookie(ctx);<font></font>
        if (AppToken) {<font></font>
            const decodedToken: MetadataObj = jwt_decode(AppToken);<font></font>
            const isExpired = () =&gt; {<font></font>
                if (decodedToken.exp &lt; Date.now() / 1000) {<font></font>
                    return true;<font></font>
                } else {<font></font>
                    return false;<font></font>
                }<font></font>
            };<font></font>
<font></font>
            if (ctx.req) {<font></font>
                if (!isExpired()) {<font></font>
                    // ctx.res &amp;&amp; ctx.res.writeHead(302, { Location: "/" });<font></font>
                    // ctx.res &amp;&amp; ctx.res.end();<font></font>
                    userAuthenticated = true;<font></font>
                }<font></font>
            }<font></font>
<font></font>
            if (!isExpired()) {<font></font>
                userAuthenticated = true;<font></font>
            }<font></font>
        }<font></font>
<font></font>
        const componentProps =<font></font>
            WrappedComponent.getInitialProps &amp;&amp;<font></font>
            (await WrappedComponent.getInitialProps(ctx));<font></font>
<font></font>
        return { ...componentProps, userAuthenticated };<font></font>
    };<font></font>
<font></font>
    return Wrapper;<font></font>
};<font></font>
</code></pre>

<p>However I had to wrap every single page with this HOC in order to pass down the prop <code>userAuthenticated</code> to the global layout that I have, because I couldn't wrap the "_app.tsx" class component with it, it always gives me an Error ...</p>

<p>This works ...</p>

<pre><code>export default isAuthenticated(Home);<font></font>
export default isAuthenticated(about);<font></font>
</code></pre>

<p>But this doesn't ...</p>

<pre><code>export default withRedux(configureStore)(isAuthenticated(MyApp));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，必须对每个页面都执行此操作，然后将属性传递到每个页面的全局布局中，而不是只在“ _app.tsx”中执行一次，这有点烦人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜原因可能是因为“ _app.tsx”是类组件而不是像其余页面一样的功能组件？</font><font style="vertical-align: inherit;">我不知道，我只是在猜测。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么帮助吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2611篇《使用Typescript使用getInitialProps将prop传递到Next.js中的每个页面》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
