---
layout: question
title:  Firestore .startAt无法正常工作
date:   2020-03-23T14:13:23.000Z
description: infiniteHandler($state) {    var next = db        .collection("posts")    ...
img: 
author: 西门达蒙
category: question
answer: 2
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>infiniteHandler($state) {<font></font>
    var next = db<font></font>
        .collection("posts")<font></font>
        .orderBy("timestamp", "desc")<font></font>
        .startAfter(this.lastVisible)<font></font>
        .limit(3)<font></font>
<font></font>
    next.get().then(documentSnapshots =&gt; {<font></font>
        //Get the last visible document<font></font>
        // this.lastVisible =<font></font>
        // documentSnapshots.docs[documentSnapshots.docs.length - 1]<font></font>
<font></font>
        if (documentSnapshots.docs.length == 0) $state.complete()<font></font>
        else {<font></font>
            this.$store.commit(<font></font>
                "modules/posts/updateLastVisible",<font></font>
                documentSnapshots.docs[documentSnapshots.docs.length - 1].data()<font></font>
                .timestamp<font></font>
            )<font></font>
        }<font></font>
<font></font>
        documentSnapshots.forEach(doc =&gt; {<font></font>
            var post = doc.data()<font></font>
            post.docID = doc.id<font></font>
            this.$store.commit("modules/posts/pushPost", post)<font></font>
        })<font></font>
        $state.loaded()<font></font>
    })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的无限加载处理程序，一旦到达列表的末尾，它将获取新的数据库条目。</font><font style="vertical-align: inherit;">到目前为止工作正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在页面加载时的第一次提取 </font></font></p>

<pre><code>async fetch({ store }){<font></font>
    if (store.state.modules.posts.posts.length &lt; 5) {<font></font>
        let posts = []<font></font>
        await db<font></font>
            .collection("posts")<font></font>
            .orderBy("timestamp", "desc")<font></font>
            .limit(3)<font></font>
            .get()<font></font>
            .then(querySnapshot =&gt; {<font></font>
                store.commit(<font></font>
                    "modules/posts/updateLastVisible",<font></font>
                    querySnapshot.docs[2].data().timestamp<font></font>
                )<font></font>
                querySnapshot.forEach(doc =&gt; {<font></font>
                    var x = doc.data()<font></font>
                    x.docID = doc.id<font></font>
                    posts.push(x)<font></font>
                })<font></font>
            })<font></font>
        store.commit("modules/posts/fetchedPosts", posts)<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，问题是当我在无限Loading处理程序中进行获取时，我再次获取了页面加载时获取的前3个条目，这导致条目显示两次，这不应该发生，因为</font></font><code>this.lastVisible</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有第三个元素的时间戳我是在加载时获取的，因此应该忽略这些内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这些元素之后，一切都可以与一起正常运行，</font></font><code>.startAfter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是再次加载前三个</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">毫无意义。</font><font style="vertical-align: inherit;">我使用devtools检查了存储，并且一切正常，</font></font><code>this.lastVisible</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第一次调用infiniteLoading Handler时</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">它的值正确。</font></font></p>

<p>Bounty Edit:
Okay so I still have the problem I tried to play around with it a bit more to find the issue but its still occuring... I will set a bounty now and I hope anyone is able to help.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3141篇《Firestore .startAt无法正常工作》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，所以我找到了一个暂时的解决方案，该解决方案目前可以使用，但仍然不够美观：</font></font></p>

<pre><code>documentSnapshots.forEach(doc =&gt; {<font></font>
          if (<font></font>
            doc.id !== this.posts[0].docID &amp;&amp;<font></font>
            doc.id !== this.posts[1].docID &amp;&amp;<font></font>
            doc.id !== this.posts[2].docID<font></font>
          ) {<font></font>
            var post = doc.data()<font></font>
            post.docID = doc.id<font></font>
            this.$store.commit("modules/posts/pushPost", post)<font></font>
          }<font></font>
        })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也尝试通过不同的解决方案来提高效率，感谢您的帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想忽略infiniteHandler中的前3个帖子，则可以创建一个帖子数组，在其中存储帖子ID，并检查帖子ID是否已加载。</font><font style="vertical-align: inherit;">我知道应该使用查询解决此问题，但作为临时解决方案，我希望它对您有用。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>infiniteHandler($state) {<font></font>
    var next = db<font></font>
        .collection("posts")<font></font>
        .orderBy("timestamp", "desc")<font></font>
        .startAfter(this.lastVisible)<font></font>
        .limit(3)<font></font>
<font></font>
    next.get().then(documentSnapshots =&gt; {<font></font>
        //Get the last visible document<font></font>
        // this.lastVisible =<font></font>
        // documentSnapshots.docs[documentSnapshots.docs.length - 1]<font></font>
<font></font>
        if (documentSnapshots.docs.length == 0) $state.complete()<font></font>
        else {<font></font>
            this.$store.commit(<font></font>
                "modules/posts/updateLastVisible",<font></font>
                documentSnapshots.docs[documentSnapshots.docs.length - 1].data()<font></font>
                .timestamp<font></font>
            )<font></font>
        }<font></font>
<font></font>
        documentSnapshots.forEach(doc =&gt; {<font></font>
            var check = this.postIdArray.indexOf(doc.id);<font></font>
            if(check == -1){<font></font>
                var post = doc.data()<font></font>
                post.docID = doc.id<font></font>
                this.$store.commit("modules/posts/pushPost", post);<font></font>
                this.postIdArray[] = doc.id;<font></font>
            }<font></font>
        })<font></font>
        $state.loaded()<font></font>
    })<font></font>
}<font></font>
<font></font>
<font></font>
<font></font>
async fetch({ store }){<font></font>
    this.postIdArray = [];<font></font>
    if (store.state.modules.posts.posts.length &lt; 5) {<font></font>
        let posts = []<font></font>
        await db<font></font>
            .collection("posts")<font></font>
            .orderBy("timestamp", "desc")<font></font>
            .limit(3)<font></font>
            .get()<font></font>
            .then(querySnapshot =&gt; {<font></font>
                store.commit(<font></font>
                    "modules/posts/updateLastVisible",<font></font>
                    querySnapshot.docs[2].data().timestamp<font></font>
                )<font></font>
                querySnapshot.forEach(doc =&gt; {<font></font>
                    var x = doc.data()<font></font>
                    x.docID = doc.id<font></font>
                    this.postIdArray[] = doc.id;<font></font>
                    posts.push(x)<font></font>
                })<font></font>
            })<font></font>
        store.commit("modules/posts/fetchedPosts", posts)<font></font>
    }<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
