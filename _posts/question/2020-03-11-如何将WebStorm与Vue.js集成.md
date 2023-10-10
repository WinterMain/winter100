---
layout: question
title:  如何将WebStorm与Vue.js集成
date:   2020-03-11T15:23:09.000Z
description: WebStorm本身不支持Vue.js（至少到目前为止-2016年4月）。我发现很少有关如何改善WebStorm体验的建议。现在，我想将它们列出在一个...
img: 
author: TomTom乐
category: question
answer: 3
tags: Intellij-idea Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebStorm本身不支持</font></font><a href="https://vuejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（至少到目前为止-2016年4月）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现很少有关如何改善WebStorm体验的建议。</font><font style="vertical-align: inherit;">现在，我想将它们列出在一个地方（我将在下面回答我自己的问题）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随时改善答案</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第845篇《如何将WebStorm与Vue.js集成》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我绕过模板注入与单独的模板文件，这不是很好...</font></font></p>

<pre><code>&lt;template lang="pug" src="./MyComponent.pug"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebStorm开始正式支持VueJS </font></font><a href="https://blog.jetbrains.com/webstorm/2017/02/webstorm-2017-1-eap-171-2822/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见他们的博客</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但现在它仅在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抢先体验预览版本中有效</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更新了未知HTML标记的列表，因此您只需要在PhpStorm设置中将其复制粘贴：</font></font></p>

<pre><code>nobr, noembed, comment, noscript, embed, script, :checked, :class, :click, :disabled, :for, :id, :name, :readonly, :style, :title, :value, @click, @click.prevent, @click.stop, @click.capture, @click.self, @drag, @drag.prevent, @drag.stop, @drag.capture, @drag.self, @dragend, @dragend.prevent, @dragend.stop, @dragend.capture, @dragend.self, @dragenter, @dragenter.prevent, @dragenter.stop, @dragenter.capture, @dragenter.self, @dragleave, @dragleave.prevent, @dragleave.stop, @dragleave.capture, @dragleave.self, @dragover, @dragover.prevent, @dragover.stop, @dragover.capture, @dragover.self, @dragstart, @dragstart.prevent, @dragstart.stop, @dragstart.capture, @dragstart.self, @drop, @drop.prevent, @drop.stop, @drop.capture, @drop.self, @input, @input.prevent, @input.stop, @input.capture, @input.self, @submit, @submit.prevent, @submit.stop, @submit.capture, @submit.self, scoped, slot, tab-index, v-bind, v-class, v-else, v-for, v-html, v-if, v-link, v-model, v-on, v-on:input, v-on:input.prevent, v-on:input.stop, v-on:input.capture, v-on:input.self, v-on:submit, v-on:submit.prevent, v-on:submit.stop, v-on:submit.capture, v-on:submit.self, v-on:blur, v-on:blur.prevent, v-on:blur.stop, v-on:blur.capture, v-on:blur.self, v-on:change, v-on:change.prevent, v-on:change.stop, v-on:change.capture, v-on:change.self, v-on:click, v-on:click.prevent, v-on:click.stop, v-on:click.capture, v-on:click.self, v-on:focus, v-on:focus.prevent, v-on:focus.stop, v-on:focus.capture, v-on:focus.self, v-on:keypress, v-on:keypress.prevent, v-on:keypress.stop, v-on:keypress.capture, v-on:keypress.self, v-on:keyup, v-on:keyup.prevent, v-on:keyup.stop, v-on:keyup.capture, v-on:keyup.self, v-on:keyup.enter, v-on:keyup.enter.prevent, v-on:keyup.enter.stop, v-on:keyup.enter.capture, v-on:keyup.enter.self, v-on:keyup.tab, v-on:keyup.tab.prevent, v-on:keyup.tab.stop, v-on:keyup.tab.capture, v-on:keyup.tab.self, v-on:keyup.delete, v-on:keyup.delete.prevent, v-on:keyup.delete.stop, v-on:keyup.delete.capture, v-on:keyup.delete.self, v-on:keyup.esc, v-on:keyup.esc.prevent, v-on:keyup.esc.stop, v-on:keyup.esc.capture, v-on:keyup.esc.self, v-on:keyup.space, v-on:keyup.space.prevent, v-on:keyup.space.stop, v-on:keyup.space.capture, v-on:keyup.space.self, v-on:keyup.up, v-on:keyup.up.prevent, v-on:keyup.up.stop, v-on:keyup.up.capture, v-on:keyup.up.self, v-on:keyup.down, v-on:keyup.down.prevent, v-on:keyup.down.stop, v-on:keyup.down.capture, v-on:keyup.down.self, v-on:keyup.left, v-on:keyup.left.prevent, v-on:keyup.left.stop, v-on:keyup.left.capture, v-on:keyup.left.self, v-on:keyup.right, v-on:keyup.right.prevent, v-on:keyup.right.stop, v-on:keyup.right.capture, v-on:keyup.right.self, v-show, v-text, v-on:drag, v-on:drag.prevent, v-on:drag.stop, v-on:drag.capture, v-on:drag.self, v-on:dragend, v-on:dragend.prevent, v-on:dragend.stop, v-on:dragend.capture, v-on:dragend.self, v-on:dragenter, v-on:dragenter.prevent, v-on:dragenter.stop, v-on:dragenter.capture, v-on:dragenter.self, v-on:dragleave, v-on:dragleave.prevent, v-on:dragleave.stop, v-on:dragleave.capture, v-on:dragleave.self, v-on:dragover, v-on:dragover.prevent, v-on:dragover.stop, v-on:dragover.capture, v-on:dragover.self, v-on:dragstart, v-on:dragstart.prevent, v-on:dragstart.stop, v-on:dragstart.capture, v-on:dragstart.self, v-on:drop, v-on:drop.prevent, v-on:drop.stop, v-on:drop.capture, v-on:drop.self, @focus, @focus.prevent, @focus.stop, @focus.capture, @focus.self, @change, @change.prevent, @change.stop, @change.capture, @change.self, @blur, @blur.prevent, @blur.stop, @blur.capture, @blur.self, @keypress, @keypress.prevent, @keypress.stop, @keypress.capture, @keypress.self, @keyup, @keyup.prevent, @keyup.stop, @keyup.capture, @keyup.self, v-on:reset, v-on:reset.prevent, v-on:reset.stop, v-on:reset.capture, v-on:reset.self, @reset, @reset.prevent, @reset.stop, @reset.capture, @reset.self, v-on:keydown, v-on:keydown.prevent, v-on:keydown.stop, v-on:keydown.capture, v-on:keydown.self, @keydown, @keydown.prevent, @keydown.stop, @keydown.capture, @keydown.self, v-on:mousenter, v-on:mousenter.prevent, v-on:mousenter.stop, v-on:mousenter.capture, v-on:mousenter.self, v-on:mouseover, v-on:mouseover.prevent, v-on:mouseover.stop, v-on:mouseover.capture, v-on:mouseover.self, v-on:mousemove, v-on:mousemove.prevent, v-on:mousemove.stop, v-on:mousemove.capture, v-on:mousemove.self, v-on:mousedown, v-on:mousedown.prevent, v-on:mousedown.stop, v-on:mousedown.capture, v-on:mousedown.self, v-on:mouseup, v-on:mouseup.prevent, v-on:mouseup.stop, v-on:mouseup.capture, v-on:mouseup.self, @mousenter, @mousenter.prevent, @mousenter.stop, @mousenter.capture, @mousenter.self, @mouseover, @mouseover.prevent, @mouseover.stop, @mouseover.capture, @mouseover.self, @mousemove, @mousemove.prevent, @mousemove.stop, @mousemove.capture, @mousemove.self, @mousedown, @mousedown.prevent, @mousedown.stop, @mousedown.capture, @mousedown.self, @mouseup, @mouseup.prevent, @mouseup.stop, @mouseup.capture, @mouseup.self, v-on:dblclick, v-on:dblclick.prevent, v-on:dblclick.stop, v-on:dblclick.capture, v-on:dblclick.self, v-on:contextmenu, v-on:contextmenu.prevent, v-on:contextmenu.stop, v-on:contextmenu.capture, v-on:contextmenu.self, v-on:wheel, v-on:wheel.prevent, v-on:wheel.stop, v-on:wheel.capture, v-on:wheel.self, v-on:mouseleave, v-on:mouseleave.prevent, v-on:mouseleave.stop, v-on:mouseleave.capture, v-on:mouseleave.self, v-on:mouseout, v-on:mouseout.prevent, v-on:mouseout.stop, v-on:mouseout.capture, v-on:mouseout.self, v-on:select, v-on:select.prevent, v-on:select.stop, v-on:select.capture, v-on:select.self, @dblclick, @dblclick.prevent, @dblclick.stop, @dblclick.capture, @dblclick.self, @contextmenu, @contextmenu.prevent, @contextmenu.stop, @contextmenu.capture, @contextmenu.self, @wheel, @wheel.prevent, @wheel.stop, @wheel.capture, @wheel.self, @mouseleave, @mouseleave.prevent, @mouseleave.stop, @mouseleave.capture, @mouseleave.self, @mouseout, @mouseout.prevent, @mouseout.stop, @mouseout.capture, @mouseout.self, @select, @select.prevent, @select.stop, @select.capture, @select.self, v-bind:key
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会评论您以前的回答，但由于字符数限制，我无法这样做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：还有更多</font><font style="vertical-align: inherit;">可用的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我个人认为，我只手工挑选了最常见的</font><a href="https://developer.mozilla.org/en-US/docs/Web/Events" rel="noreferrer"><font style="vertical-align: inherit;">事件</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
