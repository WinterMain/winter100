---
layout: question
title:  如何在vue js html中添加多个图像以及其他输入字段？
date:   2020-03-12T08:35:00.000Z
description: 我的html代码是我还需要添加数组格式的sez，还需要添加多个图像，需要提供添加图像，并且在单击它时，需要根据客户端需要添加图像<form met...
img: 
author: 斯丁猿
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的html代码是</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还需要添加数组格式的sez，还需要添加多个图像，需要提供添加图像，并且在单击它时，需要根据客户端需要添加图像</font></font></p>

<pre><code>&lt;form method="POST" enctype="multipart/form-data" v-on:submit.prevent="handleSubmit($event);"&gt;<font></font>
  &lt;div class="row"&gt;<font></font>
    &lt;div class="col-md-4"&gt;<font></font>
      &lt;div class="form-group label-floating"&gt;<font></font>
        &lt;label class="control-label"&gt;Name&lt;/label&gt;<font></font>
        &lt;input type="text" class="form-control" v-model="name"&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="col-md-4"&gt;<font></font>
      &lt;div class="form-group label-floating"&gt;<font></font>
        &lt;label class="control-label"&gt;Alias&lt;/label&gt;<font></font>
        &lt;input type="text" class="form-control" v-model="alias"&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="col-md-4"&gt;<font></font>
      &lt;div class="form-group label-floating"&gt;<font></font>
        &lt;label class="control-label"&gt;Sex&lt;/label&gt;<font></font>
        &lt;select class="form-control" v-model="sex" id="level"&gt;<font></font>
        &lt;option value="Male"&gt;Male&lt;/option&gt;<font></font>
        &lt;option value="female"&gt;Female&lt;/option&gt;<font></font>
        &lt;/select&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="row" v-for="(book, index) in sez" :key="index"&gt;<font></font>
<font></font>
<font></font>
    &lt;div class="col-md-4"&gt;<font></font>
      &lt;div class="form-group label-floating"&gt;<font></font>
        &lt;label class="control-label"&gt;Date &lt;/label&gt;<font></font>
        &lt;input type="date" class="form-control" v-model="book.date"&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="col-md-8"&gt;<font></font>
      &lt;div class="form-group label-floating"&gt;<font></font>
        &lt;label class="control-label"&gt; Details&lt;/label&gt;<font></font>
        &lt;input type="text" class="form-control" book.details&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
  &lt;/div&gt;<font></font>
  &lt;a @click="addNewRow"&gt;Add&lt;/a&gt;<font></font>
<font></font>
  &lt;div class="card-content"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
      &lt;div class="col-md-4"&gt;<font></font>
        &lt;div class="button success expand radius"&gt;<font></font>
          &lt;span id="save_image_titlebar_logo_live"&gt;Signature&lt;/span&gt;<font></font>
          &lt;label class="custom-file-upload"&gt;&lt;input type="file" name="photo" accept="image/*"  /&gt;<font></font>
        &lt;/label&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
      &lt;div class="col-md-4"&gt;<font></font>
        &lt;div class="button success expand radius"&gt;<font></font>
          &lt;span id="save_image_titlebar_logo_live"&gt;Recent Photograph&lt;/span&gt;<font></font>
          &lt;label class="custom-file-upload"&gt;<font></font>
        &lt;input type="file" name="sign"/&gt;<font></font>
        &lt;/label&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Vue JS代码是</font></font></p>

<pre><code>addForm = new Vue({<font></font>
  el: "#addForm",<font></font>
  data: {<font></font>
    name: '',<font></font>
    alias: '',<font></font>
    sex: '',<font></font>
    sez: [{<font></font>
      date: null,<font></font>
      details: null,<font></font>
<font></font>
    }, ],<font></font>
    photo: '',<font></font>
    sign: '',<font></font>
  },<font></font>
  methods: {<font></font>
    addNewRow: function() {<font></font>
      this.seziure.push({<font></font>
        date: null,<font></font>
        details: null,<font></font>
      });<font></font>
    },<font></font>
<font></font>
    handleSubmit: function(e) {<font></font>
      var vm = this;<font></font>
      data = {};<font></font>
      data['sez'] = this.sez;<font></font>
      data['name'] = this.name;<font></font>
      data['alias'] = this.alias;<font></font>
      data['sex'] = this.sex;<font></font>
      //how to add images<font></font>
      $.ajax({<font></font>
        url: 'http://localhost:4000/save/',<font></font>
        data: data,<font></font>
        type: 'POST',<font></font>
        dataType: 'json',<font></font>
        success: function(e) {<font></font>
          if (e.status) {<font></font>
            vm.response = e;<font></font>
            alert("success")<font></font>
<font></font>
          } else {<font></font>
            vm.response = e;<font></font>
            console.log(vm.response);<font></font>
            alert("Registration Failed")<font></font>
          }<font></font>
        }<font></font>
      });<font></font>
      return false;<font></font>
    },<font></font>
  },<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码。</font><font style="vertical-align: inherit;">我不知道在这种情况下如何添加图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能帮我传递这些数据。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将这些数据与图像一起传递到后端？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不想使用base64编码。</font><font style="vertical-align: inherit;">我只需要在此ajax post请求中传递此图像以及其他数据</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
