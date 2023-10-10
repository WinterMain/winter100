---
layout: question
title:  如何在vue-router中使用Vuetify选项卡
date:   2020-03-11T04:23:43.000Z
description: 我有以下的jsfiddle有两个Vuetify标签。该文档没有显示vue-router与它们一起使用的示例。我在这篇Medium.com帖子中找到了有...
img: 
author: GO村村
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下</font></font><a href="https://jsfiddle.net/jjloneman/e5a6L27u/12/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两个Vuetify标签。</font><font style="vertical-align: inherit;">该文档没有显示</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与它们</font><font style="vertical-align: inherit;">一起使用的示例</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这篇</font></font><a href="https://medium.com/front-end-hacking/vue-js-mobile-navbar-using-vuetify-803856f00dfd" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Medium.com帖子中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了</font><font style="vertical-align: inherit;">有关如何与一起使用Vuetify的信息</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中包含以下代码：</font></font></p>

<pre><code>&lt;div id="app"&gt;<font></font>
  &lt;v-tabs grow light&gt;<font></font>
    &lt;v-tabs-bar&gt;<font></font>
      &lt;v-tabs-item href="/" router&gt;<font></font>
        &lt;v-icon&gt;motorcycle&lt;/v-icon&gt;<font></font>
      &lt;/v-tabs-item&gt;<font></font>
      &lt;v-tabs-item href="/dog" router&gt;<font></font>
        &lt;v-icon&gt;pets&lt;/v-icon&gt;<font></font>
      &lt;/v-tabs-item&gt;<font></font>
    &lt;/v-tabs-bar&gt;<font></font>
  &lt;/v-tabs&gt;<font></font>
<font></font>
  &lt;router-view /&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，该代码现在已过时，因为</font></font><a href="https://vuetifyjs.com/en/components/tabs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuetify 1.0.13 Tabs文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未</font></font><code>router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其api中</font><font style="vertical-align: inherit;">指定</font><font style="vertical-align: inherit;">道具，因此该帖子中的嵌入式示例不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还找到了这个</font></font><a href="https://stackoverflow.com/questions/46710477/vue-vuetify-how-to-add-router-link-to-tab"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">StackOverflow答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中包含以下代码：</font></font></p>

<pre><code>&lt;v-tabs-item :to="{path:'/path/to/somewhere'}"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，使用该</font></font><code>to</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具不起作用，而且Vuetify api中也未列出该道具。</font><font style="vertical-align: inherit;">相比之下，</font></font><code>v-button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuetify组件确实列出了</font></font><code>to</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop并利用</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此我希望</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">受支持的组件能够支持</font></font><code>to</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在旧的</font></font><a href="https://vuetifyjs.com/releases/0.17/#/components/tabs#api" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧版Vuetify 0.17文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">四处</font><a href="https://vuetifyjs.com/releases/0.17/#/components/tabs#api" rel="noreferrer"><font style="vertical-align: inherit;">搜寻</font></a><font style="vertical-align: inherit;">，该</font></font><code>to</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具指定为</font></font><code>v-tabs-item</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">似乎该支持可能已在1.0.13中删除。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与Vuetify标签一起</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第664篇《如何在vue-router中使用Vuetify选项卡》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖MandyGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板部分：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
    &lt;v-tabs<font></font>
      class="tabs"<font></font>
      centered<font></font>
      grow<font></font>
      height="60px"<font></font>
      v-model="activeTab"<font></font>
    &gt;<font></font>
      &lt;v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact&gt;<font></font>
        {{ tab.name }}<font></font>
      &lt;/v-tab&gt;<font></font>
    &lt;/v-tabs&gt;<font></font>
    &lt;router-view&gt;&lt;/router-view&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和js部分：</font></font></p>

<pre><code>  data() {<font></font>
    return {<font></font>
      activeTab: `/user/${this.id}`,<font></font>
      tabs: [<font></font>
        { id: 1, name: "Task", route: `/user/${this.id}` },<font></font>
        { id: 2, name: "Project", route: `/user/${this.id}/project` }<font></font>
      ]<font></font>
    };<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路线：</font></font></p>

<pre><code>{<font></font>
  path: "/user/:id",<font></font>
  component: User1,<font></font>
  props: true,<font></font>
  children: [<font></font>
    {<font></font>
      path: "", //selected tab by default<font></font>
      component: TaskTab<font></font>
    },<font></font>
    {<font></font>
      path: "project",<font></font>
      component: ProjectTab<font></font>
    }<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><a href="https://codesandbox.io/s/vuetify-v-tabs-with-vue-router-6rwgo" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见codesanbox示例</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
