---
layout: question
title:  Vue JS返回\[__ob__：Observer\]数据而不是我的对象数组
date:   2020-03-11T09:23:16.000Z
description: 我已经创建了一个页面，我想通过API调用从数据库中获取所有数据，但是我对VueJS和Javascript也很陌生，我也不知道我在哪里弄错了。我确实用Pos...
img: 
author: 文韬武略辛弃疾
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经创建了一个页面，我想通过API调用从数据库中获取所有数据，但是我对VueJS和Javascript也很陌生，我也不知道我在哪里弄错了。</font><font style="vertical-align: inherit;">我确实用Postman进行了测试，并且返回了正确的JSON。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我得到的：</font></font></p>

<pre><code>[__ob__: Observer]<font></font>
length: 0<font></font>
__ob__: Observer {value: Array(0), dep: Dep, vmCount: 0}<font></font>
__proto__: Array<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我要的：</font></font></p>

<pre><code>(140) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]<font></font>
[0 … 99]<font></font>
[100 … 139]<font></font>
length: 140<font></font>
__ob__: Observer {value: Array(140), dep: Dep, vmCount: 0}<font></font>
__proto__: Array<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那就是我的Vue模板文件：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;h2&gt;Pigeons in the racing loft&lt;/h2&gt;<font></font>
        &lt;div class="card-content m-b-20" v-for="pigeon in pigeons" v-bind:key="pigeon.id"&gt;<font></font>
            &lt;h3&gt;{{ pigeon.id }}&lt;/h3&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
    data(){<font></font>
        return{<font></font>
            pigeons: [],<font></font>
            pigeon: {<font></font>
                id: '',<font></font>
                sex: '',<font></font>
                color_id: '',<font></font>
                pattern_id: '',<font></font>
                user_id: '',<font></font>
                loft_id: '',<font></font>
                country: '',<font></font>
                experience: '',<font></font>
                form: '',<font></font>
                fatique: ''<font></font>
            },<font></font>
            pigeon_id: ''<font></font>
        }<font></font>
    },<font></font>
    created(){<font></font>
        this.fetchPigeons();<font></font>
        console.log(this.pigeons); // Here I got the observer data instead my array<font></font>
    },<font></font>
<font></font>
    methods: {<font></font>
        fetchPigeons(){<font></font>
            fetch('api/racingloft')<font></font>
            .then(res =&gt; res.json())<font></font>
            .then(res =&gt; {<font></font>
                console.log(res.data); // Here I get what I need<font></font>
                this.pigeons = res.data;<font></font>
            })<font></font>
        }<font></font>
    }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也尝试过用axios来做，但是它给了我完全一样的东西。</font><font style="vertical-align: inherit;">当我从方法中进行控制台操作时，它提供了我的数据，但在外部它什么也没有提供。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第757篇《Vue JS返回\[__ob__：Observer\]数据而不是我的对象数组》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我有完全相同的问题，但我解决了： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部链接</font><font style="vertical-align: inherit;">移动</font><font style="vertical-align: inherit;">到head标签。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的目标是调试</font></font><code>Observer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue实例中</font><font style="vertical-align: inherit;">包含的内容</font><font style="vertical-align: inherit;">，这是我的解决方案：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印出该</font></font><code>template</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块</font><font style="vertical-align: inherit;">中的变量</font><font style="vertical-align: inherit;">属于您的组件</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，您可以重新格式化输出的结构以观察细节。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div&gt;<font></font>
    {{ pigeons }}<font></font>
  &lt;div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，如果您想在中看到它</font></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则应该</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入</font></font><code>mounted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阶段。</font><font style="vertical-align: inherit;">因为在</font></font><code>created</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阶段，</font></font><code>this.pigeons</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然是空的。</font><font style="vertical-align: inherit;">参考：</font><a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//vuejs.org/v2/guide/instance.html#Lifecycle-Diagram</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅番长</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦数据存在，</font><font style="vertical-align: inherit;">您就可以使用</font><font style="vertical-align: inherit;">指令来呈现组件。</font></font></p>

<pre><code>&lt;h3 v-if="pigeons.length &gt; 0"&gt;{{ pigeon.id }}&lt;/h3&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的所有建议。</font><font style="vertical-align: inherit;">仅使用“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”，</font><font style="vertical-align: inherit;">事情就对我有效</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>const cookieInfo = ToolCookieService.getToolNumbersFromCookie();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢，兰吉特</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以尝试以下方法：</font></font></p>

<pre><code>var parsedobj = JSON.parse(JSON.stringify(obj))<font></font>
console.log(parsedobj)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它被带到埃文你自己</font></font><a href="https://github.com/vuejs/Discussion/issues/292" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和更多的信息</font></font><a href="https://guillim.github.io/vue/2019/03/20/damn-vuejs-observer.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是等待答案是第一步。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam番长逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生这种情况是因为Vue js将数据中的每个项目都转换为可以观察到的内容。</font><font style="vertical-align: inherit;">因此，如果您在数据中控制台记录某些内容，这是有道理的。</font><font style="vertical-align: inherit;">输出将是包装到观察者中的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了更好地了解您的数据，建议您安装Vue开发工具。 
</font></font><a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
