---
layout: question
title:  React JS onClick事件处理程序
date:   2020-03-12T04:42:30.000Z
description: 我有 var TestApp = React.createClass({      getComponent  function(){      ...
img: 
author: 乐米亚
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有 </font></font></p>

<pre><code>var TestApp = React.createClass({<font></font>
      getComponent: function(){<font></font>
          console.log(this.props);<font></font>
      },<font></font>
      render: function(){<font></font>
        return(<font></font>
             &lt;div&gt;<font></font>
             &lt;ul&gt;<font></font>
                &lt;li onClick={this.getComponent}&gt;Component 1&lt;/li&gt;<font></font>
             &lt;/ul&gt;<font></font>
             &lt;/div&gt;<font></font>
        );<font></font>
      }<font></font>
});<font></font>
React.renderComponent(&lt;TestApp /&gt;, document.body);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想为单击列表元素的背景上色。</font><font style="vertical-align: inherit;">我该如何在React中做到这一点？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像是 </font></font></p>

<pre><code>$('li').on('click', function(){<font></font>
    $(this).css({'background-color': '#ccc'});<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第948篇《React JS onClick事件处理程序》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>class FrontendSkillList extends React.Component {<font></font>
  constructor() {<font></font>
    super();<font></font>
    this.state = { selectedSkill: {} };<font></font>
  }<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;ul&gt;<font></font>
        {this.props.skills.map((skill, i) =&gt; (<font></font>
            &lt;li<font></font>
              className={<font></font>
                this.state.selectedSkill.id === skill.id ? "selected" : ""<font></font>
              }<font></font>
              onClick={this.selectSkill.bind(this, skill)}<font></font>
              style={{ cursor: "pointer" }}<font></font>
              key={skill.id}<font></font>
            &gt;<font></font>
            {skill.name}<font></font>
            &lt;/li&gt;<font></font>
        ))}<font></font>
      &lt;/ul&gt;<font></font>
    );<font></font>
  }<font></font>
<font></font>
  selectSkill(selected) {<font></font>
    if (selected.id !== this.state.selectedSkill.id) {<font></font>
      this.setState({ selectedSkill: selected });<font></font>
    } else {<font></font>
      this.setState({ selectedSkill: {} });<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
const data = [<font></font>
  { id: "1", name: "HTML5" },<font></font>
  { id: "2", name: "CSS3" },<font></font>
  { id: "3", name: "ES6 &amp; ES7" }<font></font>
];<font></font>
const element = (<font></font>
  &lt;div&gt;<font></font>
    &lt;h1&gt;Frontend Skill List&lt;/h1&gt;<font></font>
    &lt;FrontendSkillList skills={data} /&gt;<font></font>
  &lt;/div&gt;<font></font>
);<font></font>
ReactDOM.render(element, document.getElementById("root"));</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>.selected {<font></font>
  background-color: rgba(217, 83, 79, 0.8);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;div id="root"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ user544079希望这个演示可以帮助您：)我建议通过切换类名来更改背景颜色。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
