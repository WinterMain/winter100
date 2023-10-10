---
layout: question
title:  如何在Vue应用程序中（通过Vuetify.js）实现带有验证的简单表单？
date:   2020-03-15T10:35:31.000Z
description: 我正在尝试使用Vuetify.js示例在使用Vue.js构建的网站上添加具有简单验证的联系表单。我是新手，所以不确定在Vue组件中应如何实现。我想...
img: 
author: 猴子猪猪
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用Vuetify.js示例在使用Vue.js构建的网站上添加具有简单验证的联系表单。</font><font style="vertical-align: inherit;">我是新手，所以不确定在Vue组件中应如何实现。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想实现一个简单的客户端表单验证，并使其与</font></font><a href="https://getform.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getform.org/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表单一起使用。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码 </font><font style="vertical-align: inherit;">联系方式</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（摘自Vuetify.js表单</font></font><a href="https://github.com/vuetifyjs/docs/blob/master/examples/forms/basic-validation.vue" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

  

<pre class="lang-html prettyprint-override"><code>&lt;v-form v-model="valid"&gt;<font></font>
      &lt;v-text-field<font></font>
        label="Name"<font></font>
        v-model="name"<font></font>
        :rules="nameRules"<font></font>
        :counter="10"<font></font>
        required<font></font>
        name="Name"<font></font>
      &gt;&lt;/v-text-field&gt;<font></font>
<font></font>
      &lt;v-text-field<font></font>
        label="E-mail"<font></font>
        v-model="email"<font></font>
        :rules="emailRules"<font></font>
        required<font></font>
        name="Email"<font></font>
      &gt;&lt;/v-text-field&gt;<font></font>
<font></font>
      &lt;v-btn<font></font>
          @click="submit"<font></font>
          :disabled="!valid"<font></font>
      &gt;submit&lt;/v-btn&gt;<font></font>
  &lt;/v-form&gt;<font></font>
<font></font>
  &lt;form method="post" action="https://www.getform.org/f/[MY_ID_HERE]" id="nativeForm"&gt;&lt;/form&gt;<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本</font></font></h3>

<pre class="lang-html prettyprint-override"><code>&lt;script&gt;<font></font>
export default {<font></font>
  name: 'contact',<font></font>
<font></font>
  data () {<font></font>
    return {<font></font>
      snackbar: true, <font></font>
      valid: false,<font></font>
        name: '',<font></font>
        nameRules: [<font></font>
          (v) =&gt; !!v || 'Name is required',<font></font>
          (v) =&gt; v.length &lt;= 10 || 'Name must be less than 10 characters'<font></font>
        ],<font></font>
        email: '',<font></font>
        emailRules: [<font></font>
          (v) =&gt; !!v || 'E-mail is required',<font></font>
          (v) =&gt; /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'<font></font>
        ]<font></font>
      }<font></font>
    },<font></font>
    methods: {<font></font>
      submit() {<font></font>
        nativeForm.submit()<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
