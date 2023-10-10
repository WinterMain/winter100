---
layout: question
title:  使用带有Nuxt js的axios从Directions API获取数据时，跨域读取阻止（CORB）
date:   2020-03-23T13:14:22.000Z
description: In my Nuxt project, I use vue2-google-maps library to create map and axios to...
img: 
author: Gil伽罗小宇宙
category: question
answer: 0
tags: ajax Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>In my Nuxt project, I use vue2-google-maps library to create map and axios to get data from Map API.
I want to get distance between 2 location in google map, so i use Directions API: <a href="https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&amp;destination=Universal+Studios+Hollywood&amp;key=API_KEY" rel="nofollow noreferrer">https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&amp;destination=Universal+Studios+Hollywood&amp;key=API_KEY</a>. 
When I use it with Insomnia, I retrieved data normally, like below picture:</p>

<p><a href="https://www.samyoc.com//uploads/users/777/images/thumbnails/1584969134902.png" data-src="https://www.samyoc.com//uploads/users/777/images/1584969134902.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/LMeDk.png" alt="在此处输入图片说明"></a></p>

<p>But when i use it with nuxt using axios, I get some error like:</p>

<p><a href="https://www.samyoc.com//uploads/users/777/images/thumbnails/1584969134904.jpg" data-src="https://www.samyoc.com//uploads/users/777/images/1584969134904.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/5WW8p.jpg" alt="在此处输入图片说明"></a></p>

<blockquote>
  <p>No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin '<a href="http://localhost:3000" rel="nofollow noreferrer">http://localhost:3000</a>' is therefore not allowed access.</p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨域读取阻止（CORB）阻止了跨域响应</font></font><a href="https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&amp;destination=Universal+Studios+Hollywood&amp;key=API_KEY" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&amp;destination=Universal+Studios+Hollywood&amp;key=API_KEY（MIME</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型为application / json）。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://www.chromestatus.com/feature/5629709824032768" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.chromestatus.com/feature/5629709824032768</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我将Geocoding API与nuxt一起使用，则可以正常工作，我尝试添加标头Access-Control-Allow-Origin = *，但仍然会收到错误。</font><font style="vertical-align: inherit;">我不知道为什么会出现这些错误。</font><font style="vertical-align: inherit;">我的代码：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>axios<font></font>
  .get('https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&amp;destination=Universal+Studios+Hollywood&amp;key=API_KEY')<font></font>
  .then(res =&gt; {<font></font>
      console.log("Res: ");<font></font>
      console.log(res)<font></font>
   })<font></font>
   .catch(err =&gt; console.log(err));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请帮我。</font><font style="vertical-align: inherit;">谢谢！！！</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3053篇《使用带有Nuxt js的axios从Directions API获取数据时，跨域读取阻止（CORB）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
