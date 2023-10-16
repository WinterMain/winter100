---
layout: question
title:  在Facebook React中使用Mixins与组件进行代码重用
date:   2020-03-12T02:55:17.000Z
description: I'm beginning to use Facebook React in a Backbone project and so far it's goi...
img: 
author: 蛋蛋蛋蛋
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I'm beginning to use Facebook React in a Backbone project and so far it's going really well.<br>
However, I noticed some duplication creeping into my React code.</p>

<p>For example, <strong>I have several form-like widgets</strong> with states like <code>INITIAL</code>, <code>SENDING</code> and <code>SENT</code>. When a button is pressed, the form needs to be validated, a request is made, and then state is updated. State is kept inside React <code>this.state</code> of course, along with field values.</p>

<p>If these were Backbone views, I would have extracted a base class called <code>FormView</code> but <strong>my impression was that React neither endorses nor supports subclassing to share view logic</strong> (correct me if I'm wrong).</p>

<p>I've seen two approaches to code reuse in React:</p>

<ul>
<li>Mixins (like <a href="http://facebook.github.io/react/docs/two-way-binding-helpers.html" rel="noreferrer">LinkedStateMixin</a> that ships with React);</li>
<li>Container Components  (such as <a href="https://github.com/guillaumervls/react-infinite-scroll" rel="noreferrer">react-infinite-scroll</a>).</li>
</ul>

<p>Am I correct that mixins and containers are preferred to inheritance in React?  Is this a deliberate design decision?  <strong>Would it make more sense to use a mixin or a container component for my “form widget” example from second paragraph?</strong></p>

<p><a href="https://gist.github.com/gaearon/9070604" rel="noreferrer">Here's a gist with <code>FeedbackWidget</code> and <code>JoinWidget</code> in their current state</a>. They have a similar structure, similar <code>beginSend</code> method and will both need to have some validation support (not there yet).</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第905篇《在Facebook React中使用Mixins与组件进行代码重用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
