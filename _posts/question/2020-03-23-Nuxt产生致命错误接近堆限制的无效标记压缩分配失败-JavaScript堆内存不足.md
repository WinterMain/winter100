---
layout: question
title:  Nuxt产生致命错误：接近堆限制的无效标记压缩分配失败-JavaScript堆内存不足
date:   2020-03-23T02:58:31.000Z
description: 我正在尝试使用nuxt generate静态html页面（带有动态url参数）。这是我在nuxt.config.js文件中的路线配置routes  f...
img: 
author: 理查德泡芙
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用</font></font><code>nuxt generate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态html页面（带有动态url参数）。</font><font style="vertical-align: inherit;">这是我在</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中的</font><font style="vertical-align: inherit;">路线配置</font></font></p>

<pre><code>routes: function () {<font></font>
      let domain = 'https://example.com'<font></font>
      if (process.env.NUXT_ENV === 'dev' || process.env.NUXT_ENV === 'development') {<font></font>
        domain = 'https://dev-example.com'<font></font>
      }<font></font>
      if (process.env.NUXT_ENV === 'local') {<font></font>
        domain = 'http://localhost:3002'<font></font>
      }<font></font>
      let rooms = axios.get(domain + '/nuxt/rooms').then((res) =&gt; {<font></font>
        if(res &amp;&amp; res.data.length){<font></font>
          return res.data.map((room) =&gt; {<font></font>
            return '/manage/pro/room/' + room._id<font></font>
          })<font></font>
        }else{<font></font>
          return []<font></font>
        }<font></font>
      }).catch(response =&gt; {<font></font>
        console.log('errore room')<font></font>
      });<font></font>
      let bookings = axios.get(domain + '/nuxt/users').then((res) =&gt; {<font></font>
        if(res &amp;&amp; res.data.length){<font></font>
          return res.data.map((user) =&gt; {<font></font>
            return '/bookings/' + user.slug<font></font>
          })<font></font>
        }else {<font></font>
          return []<font></font>
        }<font></font>
      }).catch(response =&gt; {<font></font>
        console.log('errore rehearsal')<font></font>
      });<font></font>
      let user = axios.get(domain + '/nuxt/users').then((res) =&gt; {<font></font>
        if(res &amp;&amp; res.data.length){<font></font>
          return res.data.map((user) =&gt; {<font></font>
            return '/user/' + user._id + '/' + user.username<font></font>
          })<font></font>
        }else {<font></font>
          return []<font></font>
        }<font></font>
      }).catch(response =&gt; {<font></font>
        console.log('errore user public')<font></font>
      });<font></font>
      let posts = axios.get(domain + '/nuxt/posts').then((res) =&gt; {<font></font>
        if(res &amp;&amp; res.data.length){<font></font>
          return res.data.map((post) =&gt; {<font></font>
            return '/post/' + post._id<font></font>
          })<font></font>
        }else {<font></font>
          return []<font></font>
        }<font></font>
      }).catch(response =&gt; {<font></font>
        console.log('errore posts')<font></font>
      });<font></font>
      return Promise.all([rooms, posts, user, bookings]).then(values =&gt; {<font></font>
        return values.join().split(',');<font></font>
      })<font></font>
    }<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一直很好，直到今天该过程都取得了成功。</font><font style="vertical-align: inherit;">这似乎需要太多的RAM内存。</font><font style="vertical-align: inherit;">不知道为什么，也不知道如何解决此问题。</font><font style="vertical-align: inherit;">这是最后的控制台输出行</font></font></p>

<pre><code>2018-09-06T13:12:34.423Z nuxt:render Rendering url /manage/pro/room/5b3f26783e62155502337f8f<font></font>
<font></font>
&lt;--- Last few GCs ---&gt;<font></font>
<font></font>
[14687:0x2c19ac0]   657918 ms: Mark-sweep 1339.9 (1440.7) -&gt; 1328.1 (1440.2) MB, 2760.7 / 0.1 ms  (average mu = 0.224, current mu = 0.161) allocation failure scavenge might not succeed<font></font>
[14687:0x2c19ac0]   661179 ms: Mark-sweep 1341.0 (1440.2) -&gt; 1330.6 (1444.2) MB, 2752.4 / 0.1 ms  (average mu = 0.191, current mu = 0.156) allocation failure scavenge might not succeed<font></font>
<font></font>
<font></font>
&lt;--- JS stacktrace ---&gt;<font></font>
<font></font>
==== JS stack trace =========================================<font></font>
<font></font>
    0: ExitFrame [pc: 0x5b702a041bd]<font></font>
    1: StubFrame [pc: 0x5b702a14fb2]<font></font>
Security context: 0x3e9218f9e589 &lt;JSObject&gt;<font></font>
    2: rules [0x2590b4e7c449] [/node_modules/clean-css/lib/writer/helpers.js:~46] [pc=0x5b704716ec9](this=0x3e348f706519 &lt;JSGlobal Object&gt;,context=0x1a44edae1691 &lt;Object map = 0x169e1dc614d1&gt;,tokens=0x1806c1ded131 &lt;JSArray[2]&gt;)<font></font>
    3: all [0x2590b4e7c749] [/node_modules/clean-css/lib...<font></font>
<font></font>
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory<font></font>
 1: node::Abort() [node]<font></font>
 2: 0x89375c [node]<font></font>
 3: v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]<font></font>
 4: v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]<font></font>
 5: 0xe616b2 [node]<font></font>
 6: v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [node]<font></font>
 7: v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]<font></font>
 8: v8::internal::Heap::AllocateRawWithRetry(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [node]<font></font>
 9: v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [node]<font></font>
10: v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [node]<font></font>
11: 0x5b702a041bd<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2708篇《Nuxt产生致命错误：接近堆限制的无效标记压缩分配失败-JavaScript堆内存不足》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑您的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并修改您的启动脚本以使用带有</font></font><code>--max-old-space-size=4096</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志的</font><font style="vertical-align: inherit;">节点，</font><font style="vertical-align: inherit;">例如，您的package.json可能具有以下内容：</font></font></p>

<pre><code>"scripts": {<font></font>
    "dev": "nuxt",<font></font>
    "build": "nuxt build",<font></font>
    "start": "nuxt start"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此代替： </font></font></p>

<pre><code>"scripts": {<font></font>
    "dev": "node --max-old-space-size=4096 node_modules/nuxt/bin/nuxt.js nuxt",<font></font>
    "build": "node --max-old-space-size=4096 node_modules/nuxt/bin/nuxt.js build",<font></font>
    "start": "node --max-old-space-size=4096 node_modules/nuxt/bin/nuxt.js start"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些参考：</font><a href="https://medium.com/@vuongtran/how-to-solve-process-out-of-memory-in-node-js-5f0de8f8464c" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://medium.com/@vuongtran/how-to-solve-process-out-of-memory-in-node-js-5f0de8f8464c" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//medium.com/@vuongtran/how-to-solve-process-out-of-memory-in-node-js-5f0de8f8464c</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
