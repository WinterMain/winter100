---
layout: question
title:  Vue js 2和Axios发布请求-表格
date:   2020-03-12T16:34:28.000Z
description: 我正在尝试使用axios发布表单，但无法使用expressjs将数据发送到后端这就是我在做什么：<template> <form class="...
img: 
author: LEYPro前端
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用axios发布表单，但无法使用expressjs将数据发送到后端</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我在做什么：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
 &lt;form class="" method="post" @submit.prevent="postNow"&gt;<font></font>
 &lt;input type="text" name="" value="" v-model="name"&gt;<font></font>
 &lt;button type="submit" name="button"&gt;Submit&lt;/button&gt;<font></font>
 &lt;/form&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
export default {<font></font>
  name: 'formPost',<font></font>
  data() {<font></font>
    return {<font></font>
      name: '',<font></font>
      show: false,<font></font>
    };<font></font>
  },<font></font>
  methods: {<font></font>
   postNow() {<font></font>
  axios.post('http://localhost:3030/api/new/post', {<font></font>
    headers: {<font></font>
      'Content-type': 'application/x-www-form-urlencoded',<font></font>
    },<font></font>
    body: this.name,<font></font>
   });<font></font>
  },<font></font>
  components: {<font></font>
    Headers,<font></font>
    Footers,<font></font>
  },<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后端文件： </font></font></p>

<pre><code>app.use(bodyParser.json());<font></font>
app.use(bodyParser.urlencoded({ extended: true }));<font></font>
router.post('/new/post', (req, res) =&gt; {<font></font>
  res.json(console.log("this is working" + ' ' + req.body.name));<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到的错误是： </font></font></p>

<pre><code>this is working undefined
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1360篇《Vue js 2和Axios发布请求-表格》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
