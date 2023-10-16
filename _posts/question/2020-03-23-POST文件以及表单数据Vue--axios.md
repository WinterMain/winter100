---
layout: question
title:  POST文件以及表单数据Vue + axios
date:   2020-03-23T04:03:14.000Z
description: 我有一个Vuejs组件的方法：async submit () {        if (this.$refs.form.validate()) {...
img: 
author: ProL
category: question
answer: 1
tags: php Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个Vuejs组件的方法：</font></font></p>

<pre><code>async submit () {<font></font>
        if (this.$refs.form.validate()) {<font></font>
          let formData = new FormData()<font></font>
          formData.append('userImage', this.avatarFile, this.avatarFile.name)<font></font>
          this.avatarFile = formData<font></font>
          try {<font></font>
            let response = await this.$axios.post('http://localhost:3003/api/test.php', {<font></font>
              avatar: this.avatarFile,<font></font>
              name: this.name,<font></font>
              gender: this.gender,<font></font>
              dob: this.DOB,<font></font>
            }, {<font></font>
              headers: {<font></font>
                'Content-Type': 'multipart/form-data; boundary=' + formData._boundary<font></font>
              }<font></font>
            })<font></font>
            if (response.status === 200 &amp;&amp; response.data.status === 'success') {<font></font>
              console.log(this.response)<font></font>
            }<font></font>
          } catch (e) {<font></font>
           console.log(e)<font></font>
          }<font></font>
        }<font></font>
      }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>test.php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我</font></font><code>json_decode(file_get_contents("php://input"), TRUE);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来读取数据作为</font></font><code>$_POST</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然我能读</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>gender</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>dob</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确，我不能获取</font></font><code>avatar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有相同的解决方案吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font><code>formData.append(.., ..)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我打算处理14个以上的</font><font style="vertical-align: inherit;">变量，</font><font style="vertical-align: inherit;">因此我</font><font style="vertical-align: inherit;">不会附加每个</font><font style="vertical-align: inherit;">变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主持人注意：在使用formData和其他数据对象的地方，我没有发现任何问题。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2788篇《POST文件以及表单数据Vue + axios》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（process.php）</font></font></p>

<pre><code>&lt;?php<font></font>
    $data = array(<font></font>
        "post"  =&gt; $_POST,<font></font>
        "files" =&gt; $_FILES<font></font>
    );<font></font>
<font></font>
    echo json_encode($data);<font></font>
?&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue和表单HTML</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let vm = new Vue({<font></font>
    el: "#myApp",<font></font>
    data: {<font></font>
        form: {}<font></font>
    },<font></font>
    methods: {<font></font>
        submit: async function (e) {<font></font>
            e.preventDefault();<font></font>
<font></font>
            /* formData */<font></font>
            var formData = new FormData( this.$refs.formHTML );<font></font>
<font></font>
            /* AJAX request */<font></font>
            await axios({<font></font>
                method: "post",<font></font>
                url: "process.php",<font></font>
<font></font>
                data: formData,<font></font>
<font></font>
                config: { headers: { "Content-Type": "multipart/form-data" } }<font></font>
            })<font></font>
<font></font>
            /* handle success */<font></font>
            .then( response =&gt; { console.log(response.data); } )<font></font>
<font></font>
            /* handle error */<font></font>
            .catch( response =&gt; { console.log(response) } );<font></font>
        }<font></font>
    }<font></font>
});</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;div id="myApp" &gt;<font></font>
<font></font>
    &lt;form @submit="submit" ref="formHTML" &gt;<font></font>
<font></font>
        Name: &lt;input type="text" name="name" v-model="form.name" /&gt;&lt;br /&gt;<font></font>
<font></font>
        Gender:<font></font>
        &lt;input type="radio" name="gender" value="male" v-model="form.gender" /&gt; Male<font></font>
        &lt;input type="radio" name="gender" value="female" v-model="form.gender" /&gt; Female &lt;br /&gt;<font></font>
<font></font>
        File: &lt;input type="file" name="upload" v-model="form.upload" /&gt;&lt;hr /&gt;<font></font>
<font></font>
        &lt;input type="submit" name="submit" value="Submit" /&gt;<font></font>
<font></font>
    &lt;/form&gt;<font></font>
<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
