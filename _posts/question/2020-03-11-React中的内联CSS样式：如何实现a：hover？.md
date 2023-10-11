---
layout: question
title:  React中的内联CSS样式：如何实现a：hover？
date:   2020-03-11T04:16:28.000Z
description: 我非常喜欢React中的内联CSS模式，并决定使用它。但是，您不能使用 hover和类似的选择器。那么在使用内联CSS样式时实现悬停时高亮显示的最佳方...
img: 
author: 梅十三
category: question
answer: 8
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我非常喜欢</font></font><a href="https://speakerdeck.com/vjeux/react-css-in-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://speakerdeck.com/vjeux/react-css-in-js" rel="noreferrer"><font style="vertical-align: inherit;">内联CSS模式，</font></a><font style="vertical-align: inherit;">并决定使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您不能使用</font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和类似的选择器。</font><font style="vertical-align: inherit;">那么在使用内联CSS样式时实现悬停时高亮显示的最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">#reactjs的一个建议是拥有一个</font></font><code>Clickable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件并像这样使用它：</font></font></p>

<pre class="lang-jsx prettyprint-override"><code>&lt;Clickable&gt;<font></font>
    &lt;Link /&gt;<font></font>
&lt;/Clickable&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>Clickable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个</font></font><code>hovered</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态，并将其作为道具的链接。</font><font style="vertical-align: inherit;">但是，</font></font><code>Clickable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我的方式来实现它）包裹</font></font><code>Link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以便它可以设置</font></font><code>onMouseEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>onMouseLeave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给它。</font><font style="vertical-align: inherit;">不过，这会使事情变得有些复杂（例如，</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包裹在</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行为上与有所不同</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有更简单的方法？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第651篇《React中的内联CSS样式：如何实现a：hover？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;Hoverable hoverStyle={styles.linkHover}&gt;<font></font>
  &lt;a href="https://example.com" style={styles.link}&gt;<font></font>
    Go<font></font>
  &lt;/a&gt;<font></font>
&lt;/Hoverable&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可悬停定义为：</font></font></p>

<pre><code>function Hoverable(props) {<font></font>
  const [hover, setHover] = useState(false);<font></font>
<font></font>
  const child = Children.only(props.children);<font></font>
<font></font>
  const onHoverChange = useCallback(<font></font>
    e =&gt; {<font></font>
      const name = e.type === "mouseenter" ? "onMouseEnter" : "onMouseLeave";<font></font>
      setHover(!hover);<font></font>
      if (child.props[name]) {<font></font>
        child.props[name](e);<font></font>
      }<font></font>
    },<font></font>
    [setHover, hover, child]<font></font>
  );<font></font>
<font></font>
  return React.cloneElement(child, {<font></font>
    onMouseEnter: onHoverChange,<font></font>
    onMouseLeave: onHoverChange,<font></font>
    style: Object.assign({}, child.props.style, hover ? props.hoverStyle : {})<font></font>
  });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿西门Tom</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不是100％确定这是否是答案，但我使用内联颜色和图像来模拟CSS：hover效果的技巧。</font></font></p>

<pre><code>`This works best with an image`<font></font>
<font></font>
class TestHover extends React.PureComponent {<font></font>
render() {<font></font>
const landingImage = {     <font></font>
"backgroundImage": "url(https://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg)",<font></font>
"BackgroundColor": "Red", `this can be any color`<font></font>
"minHeight": "100%",<font></font>
"backgroundAttachment": "fixed",<font></font>
"backgroundPosition": "center",<font></font>
"backgroundRepeat": "no-repeat",<font></font>
"backgroundSize": "cover", <font></font>
"opacity": "0.8", `the hove trick is here in the opcaity slightly see through gives the effect when the background color changes`<font></font>
    }<font></font>
<font></font>
  return (<font></font>
    &lt;aside className="menu"&gt;<font></font>
        &lt;div className="menu-item"&gt;<font></font>
          &lt;div style={landingImage}&gt;SOME TEXT&lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/aside&gt;<font></font>
      ); <font></font>
  }<font></font>
}<font></font>
ReactDOM.render(<font></font>
    &lt;TestHover /&gt;,<font></font>
  document.getElementById("root")<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>.menu {<font></font>
top: 2.70em;<font></font>
bottom: 0px;<font></font>
width: 100%;<font></font>
position: absolute;<font></font>
}<font></font>
<font></font>
.menu-item {<font></font>
cursor: pointer;<font></font>
height: 100%;<font></font>
font-size: 2em;<font></font>
line-height: 1.3em;<font></font>
color: #000;<font></font>
font-family: "Poppins";<font></font>
font-style: italic;<font></font>
font-weight: 800;<font></font>
text-align: center;<font></font>
display: flex;<font></font>
flex-direction: column;<font></font>
justify-content: center;<font></font>
}<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬停前</font></font></p>
</blockquote>

<pre><code>.menu-item:nth-child(1) {<font></font>
color: white;<font></font>
background-color: #001b37;<font></font>
} <font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬停时</font></font></p>
</blockquote>

<pre><code>.menu-item:nth-child(1):hover {<font></font>
color: green;<font></font>
background-color: white;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：</font><a href="https://codepen.io/roryfn/pen/dxyYqj?editors=0011" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://codepen.io/roryfn/pen/dxyYqj?editors=0011" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codepen.io/roryfn/pen/dxyYqj？editors = 0011</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，使用setState的onMouseOver和onMouseLeave对我来说似乎有些负担-但是由于这是React的工作方式，因此这对我来说似乎是最简单，最干净的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，在服务器端渲染主题css也是一个很好的解决方案，并且可以使React组件更加干净。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不必在元素上添加动态样式（例如用于theming），则根本不应该使用内联样式，而应使用css类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是传统的html / css规则，用于保持html / JSX的简洁和简洁。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于在react组件中具有内联样式（以及还使用：hover CSS函数），这可能是一个不错的技巧：</font></font></p>

<pre><code>...<font></font>
<font></font>
&lt;style&gt;<font></font>
  {`.galleryThumbnail.selected:hover{outline:2px solid #00c6af}`}<font></font>
&lt;/style&gt;<font></font>
<font></font>
...<font></font>
<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙A宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全的CSS支持正是这大量CSSinJS库有效运行的原因，您需要生成实际的CSS，而不是内联样式。</font><font style="vertical-align: inherit;">此外，在较大的系统中，内联样式的响应速度要慢得多。</font><font style="vertical-align: inherit;">免责声明-我维护</font></font><a href="http://cssinjs.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我处于同样的情况。</font><font style="vertical-align: inherit;">确实像在组件中保留样式的模式，但悬停状态似乎是最后的障碍。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我所做的是编写一个mixin，您可以将其添加到需要悬停状态的组件中。</font><font style="vertical-align: inherit;">这个混入将向</font></font><code>hovered</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的组件状态</font><font style="vertical-align: inherit;">添加一个新</font><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">它将被设置为</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果在组件，并设置主DOM节点的用户悬停回</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果用户离开元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，在组件渲染函数中，您可以执行以下操作：</font></font></p>

<pre><code>&lt;button style={m(<font></font>
     this.styles.container,<font></font>
     this.state.hovered &amp;&amp; this.styles.hover,<font></font>
)}&gt;{this.props.children}&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，每次</font></font><code>hovered</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态更改时，组件都会重新呈现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还为此创建了一个沙箱存储库，我用它自己来测试其中的一些模式。</font><font style="vertical-align: inherit;">如果您想查看我的实施示例，请查看。</font></font></p>

<p><a href="https://github.com/Sitebase/cssinjs/tree/feature-interaction-mixin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Sitebase/cssinjs/tree/feature-interaction-mixin</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">晚会，但要有解决方案。</font><font style="vertical-align: inherit;">您可以使用“＆”来定义第n个Child等的样式：</font></font></p>

<pre><code>day: {<font></font>
    display: "flex",<font></font>
    flex: "1",<font></font>
    justifyContent: "center",<font></font>
    alignItems: "center",<font></font>
    width: "50px",<font></font>
    height: "50px",<font></font>
    transition: "all 0.2s",<font></font>
    borderLeft: "solid 1px #cccccc",<font></font>
<font></font>
    "&amp;:hover": {<font></font>
      background: "#efefef"<font></font>
    },<font></font>
    "&amp;:last-child": {<font></font>
      borderRight: "solid 1px #cccccc"<font></font>
    }<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端L</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用Radium-它是ReactJS用于内联样式的开源工具。</font><font style="vertical-align: inherit;">它恰好添加了您需要的选择器。</font><font style="vertical-align: inherit;">非常受欢迎，请查看</font></font><a href="https://www.npmjs.com/package/radium"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-Radium on npm</font></font></a> </p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
