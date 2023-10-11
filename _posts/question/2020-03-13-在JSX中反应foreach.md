---
layout: question
title:  在JSX中反应foreach
date:   2020-03-13T12:13:55.000Z
description: 我有一个要通过REACT输出的对象question = {    text  "Is this a good question?",    ans...
img: 
author: 西里米亚
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个要通过REACT输出的对象</font></font></p>

<pre><code>question = {<font></font>
    text: "Is this a good question?",<font></font>
    answers: [<font></font>
       "Yes",<font></font>
       "No",<font></font>
       "I don't know"<font></font>
    ]<font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而我的react组件（已减少）是另一个组件</font></font></p>

<pre><code>class QuestionSet extends Component {<font></font>
render(){ <font></font>
    &lt;div className="container"&gt;<font></font>
       &lt;h1&gt;{this.props.question.text}&lt;/h1&gt;<font></font>
       {this.props.question.answers.forEach(answer =&gt; {     <font></font>
           console.log("Entered");  //This does ifre                       <font></font>
           &lt;Answer answer={answer} /&gt;   //THIS DOES NOT WORK <font></font>
        })}<font></font>
}<font></font>
<font></font>
export default QuestionSet;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从上面的代码片段中可以看到，我正在尝试通过在props中使用数组Answers来插入组件Answer的数组，它确实令人陶醉，但没有输出到HTML中。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1530篇《在JSX中反应foreach》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将元素数组传递给</font></font><code>jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">问题是</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么都不返回（即返回</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">更好地使用，</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它返回这样的数组</font></font></p>

<pre><code>class QuestionSet extends Component {<font></font>
render(){ <font></font>
    &lt;div className="container"&gt;<font></font>
       &lt;h1&gt;{this.props.question.text}&lt;/h1&gt;<font></font>
       {this.props.question.answers.map((answer, i) =&gt; {     <font></font>
           console.log("Entered");                 <font></font>
           // Return the element. Also pass key     <font></font>
           return (&lt;Answer key={i} answer={answer} /&gt;) <font></font>
        })}<font></font>
}<font></font>
<font></font>
export default QuestionSet;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
