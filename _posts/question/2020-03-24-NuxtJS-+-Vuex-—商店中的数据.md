---
layout: question
title:  NuxtJS + Vuex —商店中的数据
date:   2020-03-24T03:23:41.000Z
description: Using NuxtJS (a VueJS framework), I’m trying to get a bunch of datas from a R...
img: 
author: 伽罗神奇
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>Using <a href="https://nuxtjs.org/" rel="nofollow noreferrer">NuxtJS</a> (a VueJS framework), I’m trying to get a bunch of datas from a REST API in a layout template (which can’t use the classic fech() or asyncData() methods).</p>

<p>So I'm using <a href="https://nuxtjs.org/guide/vuex-store" rel="nofollow noreferrer">vuex</a> and the <a href="https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action" rel="nofollow noreferrer">nuxtServerInit()</a> action.
This way, I should be able to gather all the datas directly during the load of the app, regardless of the current page.</p>

<p>But I can’t get it to work.</p>

<p>Here’s my map.js file for the store:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>import axios from 'axios'<font></font>
<font></font>
const api = 'http://rest.api.localhost/spots'<font></font>
 <font></font>
export const state = () =&gt; ({<font></font>
	markers: null<font></font>
})<font></font>
<font></font>
export const mutations = {<font></font>
	init (state) {<font></font>
		axios.get(api)<font></font>
			.then((res) =&gt; {<font></font>
				state.markers = res.data<font></font>
			})<font></font>
	}<font></font>
}<font></font>
<font></font>
export const actions = {<font></font>
	init ({ commit }) {<font></font>
		commit('init')<font></font>
	}<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p>And the index.js (that can fire the nuxtServerInit()):</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>export const state = () =&gt; {}<font></font>
<font></font>
export const mutations = {}<font></font>
<font></font>
export const actions = {<font></font>
	nuxtServerInit ({ commit }) {<font></font>
		// ??<font></font>
		console.log('test')<font></font>
	}<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p>But I can’t get it to work. The doc says:</p>

<blockquote>
  <p>If you are using the Modules mode of the Vuex store, only the primary module (in store/index.js) will receive this action. You'll need to chain your module actions from there.</p>
</blockquote>

<p>But I don’t know how I shall do this. How do I call an action defined in another module/file?</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试复制各种示例，但没有使它们起作用。</font><font style="vertical-align: inherit;">这是我能想到的最好的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我错过了什么？</font><font style="vertical-align: inherit;">如果需要，这</font><font style="vertical-align: inherit;">是</font><a href="https://github.com/EmmanuelBeziat/parkourfinder/tree/master/store" rel="nofollow noreferrer"><font style="vertical-align: inherit;">存储</font></a></font><a href="https://github.com/EmmanuelBeziat/parkourfinder" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/EmmanuelBeziat/parkourfinder/tree/master/store" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存储文件夹</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3311篇《NuxtJS + Vuex —商店中的数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
