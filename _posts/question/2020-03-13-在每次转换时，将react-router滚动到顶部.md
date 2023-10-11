---
layout: question
title:  在每次转换时，将react-router滚动到顶部
date:   2020-03-13T12:07:55.000Z
description: 导航到另一个页面时出现问题，它的位置将像以前的页面一样。所以它不会自动滚动到顶部。我也尝试window.scrollTo(0, 0)在onChange路由...
img: 
author: 梅村村Gil
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航到另一个页面时出现问题，它的位置将像以前的页面一样。</font><font style="vertical-align: inherit;">所以它不会自动滚动到顶部。</font><font style="vertical-align: inherit;">我也尝试</font></font><code>window.scrollTo(0, 0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在onChange路由器</font><font style="vertical-align: inherit;">上使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我还使用了scrollBehavior来解决此问题，但没有成功。</font><font style="vertical-align: inherit;">有什么建议吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1524篇《在每次转换时，将react-router滚动到顶部》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神无Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很hacky（但可以）：我只是添加</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.scrollTo（0,0）;</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染（）;</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅村村Gil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这</font></font><code>ReactDOM.findDomNode(this).scrollIntoView()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是可行的。</font><font style="vertical-align: inherit;">我把它放在里面</font></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>render() {<font></font>
    window.scrollTo(0, 0)<font></font>
    ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在不更改道具且未触发componentDidUpdate（）的情况下，这可能是一个简单的解决方案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于具有1-4条路由的小型应用程序，您可以尝试使用#id重定向到顶部的DOM元素，而不是仅通过一条路由来破解它。</font><font style="vertical-align: inherit;">这样就无需将Routes包装在ScrollToTop中或使用生命周期方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React Router dom v4可以使用 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个scrollToTopComponent组件，如下所示</font></font></p>

<pre><code>class ScrollToTop extends Component {<font></font>
    componentDidUpdate(prevProps) {<font></font>
      if (this.props.location !== prevProps.location) {<font></font>
        window.scrollTo(0, 0)<font></font>
      }<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
      return this.props.children<font></font>
    }<font></font>
}<font></font>
<font></font>
export default withRouter(ScrollToTop)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您使用的是标签页，请使用以下内容</font></font></p>

<pre><code>class ScrollToTopOnMount extends Component {<font></font>
    componentDidMount() {<font></font>
      window.scrollTo(0, 0)<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
      return null<font></font>
    }<font></font>
}<font></font>
<font></font>
class LongContent extends Component {<font></font>
    render() {<font></font>
      &lt;div&gt;<font></font>
         &lt;ScrollToTopOnMount/&gt;<font></font>
         &lt;h1&gt;Here is my long content page&lt;/h1&gt;<font></font>
      &lt;/div&gt;<font></font>
    }<font></font>
}<font></font>
<font></font>
// somewhere else<font></font>
&lt;Route path="/long-content" component={LongContent}/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这有助于为更多的滚动恢复VIST有文档野兔</font></font><a href="https://reacttraining.com/react-router/web/guides/scroll-restoration" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应路由器DOM滚动恢复</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想与正在使用的人分享我的解决方案，</font></font><code>react-router-dom v5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这些v4解决方案都没有为我完成工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决我的问题的是安装</font></font><a href="https://www.npmjs.com/package/react-router-scroll-top" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-scroll-top</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将包装器放入</font></font><code>&lt;App /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre class="lang-js prettyprint-override"><code>const App = () =&gt; (<font></font>
  &lt;Router&gt;<font></font>
    &lt;ScrollToTop&gt;<font></font>
      &lt;App/&gt;<font></font>
    &lt;/ScrollToTop&gt;<font></font>
  &lt;/Router&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是这样！</font><font style="vertical-align: inherit;">有效！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小宇宙小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的组件中 </font></font><code>&lt;Router&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加一个React Hook（以防您不使用React类）</font></font></p>

<pre><code>  React.useEffect(() =&gt; {<font></font>
    window.scrollTo(0, 0);<font></font>
  }, [props.location]);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得注意的是该</font></font><code>onUpdate={() =&gt; window.scrollTo(0, 0)}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法已经过时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是React Router 4+的简单解决方案。</font></font></p>

<pre><code>const history = createBrowserHistory()<font></font>
<font></font>
history.listen(_ =&gt; {<font></font>
    window.scrollTo(0, 0)  <font></font>
})<font></font>
<font></font>
&lt;Router history={history}&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router v4的文档包含</font><font style="vertical-align: inherit;">用于滚动还原的</font></font><a href="https://reacttraining.com/react-router/web/guides/scroll-restoration" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是他们的第一个代码示例，当页面导航到以下位置时，它可作为站点范围的解决方案：“滚动到顶部”：</font></font></p>

<pre><code>class ScrollToTop extends Component {<font></font>
  componentDidUpdate(prevProps) {<font></font>
    if (this.props.location !== prevProps.location) {<font></font>
      window.scrollTo(0, 0)<font></font>
    }<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return this.props.children<font></font>
  }<font></font>
}<font></font>
<font></font>
export default withRouter(ScrollToTop)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将其呈现在您应用的顶部，但在路由器下方：</font></font></p>

<pre><code>const App = () =&gt; (<font></font>
  &lt;Router&gt;<font></font>
    &lt;ScrollToTop&gt;<font></font>
      &lt;App/&gt;<font></font>
    &lt;/ScrollToTop&gt;<font></font>
  &lt;/Router&gt;<font></font>
)<font></font>
<font></font>
// or just render it bare anywhere you want, but just one :)<font></font>
&lt;ScrollToTop/&gt;<font></font>
</code></pre>

<p><a href="https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^直接从文档复制</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，这适用于大多数情况，但是还有更多关于如何处理选项卡式接口以及为何未实现通用解决方案的信息。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案用于旧代码，对于路由器v4 +，请检查其他答案</font></font></strong></p>

<pre><code>&lt;Router onUpdate={() =&gt; window.scrollTo(0, 0)} history={createBrowserHistory()}&gt;<font></font>
  ...<font></font>
&lt;/Router&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不起作用，则应查找原因。</font><font style="vertical-align: inherit;">也在里面</font></font><code>componentDidMount</code> </p>

<pre><code>document.body.scrollTop = 0;<font></font>
// or<font></font>
window.scrollTo(0,0);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用：</font></font></p>

<pre><code>componentDidUpdate() {<font></font>
  window.scrollTo(0,0);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以添加一些标志，例如“ scrolled = false”，然后进行更新：</font></font></p>

<pre><code>componentDidUpdate() {<font></font>
  if(this.scrolled === false){<font></font>
    window.scrollTo(0,0);<font></font>
    scrolled = true;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
