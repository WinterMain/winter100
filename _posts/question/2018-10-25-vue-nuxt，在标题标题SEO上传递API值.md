---
layout: question
title:  vue nuxt，在标题标题SEO上传递API值
date:   2018-10-25T02:30:46.000Z
description: 我怎样才能将我的api值传递给vue上的标题？我使用的是nuxt。 我尝试使用此但我收到错误'blog is not defined'async asyncDa...
img: 
author: Winter
category: question
answer: 2
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>&nbsp;</p>

<p>我怎样才能将我的api值传递给vue上的标题？我使用的是nuxt。 我尝试使用此但我收到错误&#39;blog is not defined&#39;</p>

<pre>
<code>async asyncData({params, error}) {
        try {
            let topBlogger = await axios.get(&#39;http://api.bla.bla/API/topblogger.php&#39;)
            let isi = await axios.get(`http://api.bla.bla/API/news.php?id_artikel=${+params.id}`)
            let tagList = await axios.get(&#39;https://api.bla.bla/users&#39;)
            return {
                bloggers: topBlogger.data,
                blog: isi.data,
                tags: tagList.data,

            }
        } catch (e) {
            error({message: &#39;User not found&#39;, statusCode: 404})
        }
    },
head () {

        return {
            title: blog.id_artikel+&#39; | title bla bla&#39;,
            meta: [
                { hid: &#39;description&#39;, name: &#39;description&#39;, content: &#39;content dll&#39; }
            ]
        }
    },</code></pre>

<p>&nbsp;</p>

<p>但是当我在&lt;template&gt; &lt;/ template&gt;上使用blog时，它工作我是vueJS的新手，所以仍然无法理解它是如何工作的</p>
</div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.10.25</span>
          </div>
          <div class="discuss-comment">You need to access data using this

<pre><code>return {
            title: this.blog.id_artikel+' | title bla bla',
            meta: [
                { hid: 'description', name: 'description', content: 'content dll' }
            ]
        }
</code></pre></div>
        </div>
        
        <div class="discuss-children">
          <div class="discuss-child">
            <div class="discuss-comment">header方法里设置</div>
            <div class="discuss-meta">
              <span class="discuss-user">Winter</span>
              <span class="discuss-time">2018.10.25</span>
            </div>
          </div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.10.25</span>
          </div>
          <div class="discuss-comment"><p>直接修改header方法</p>
</div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
