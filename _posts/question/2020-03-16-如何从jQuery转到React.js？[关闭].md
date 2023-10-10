---
layout: question
title:  如何从jQuery转到React.js？\[关闭\]
date:   2020-03-16T02:03:51.000Z
description:                                                                          ...
img: 
author: 路易Jim
category: question
answer: 0
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题需要更加</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，使其仅通过</font></font><a href="/posts/23585765/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来关注一个问题</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2014-07-28 18：37：24Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经读了几天的React。</font><font style="vertical-align: inherit;">我可以理解大部分的内容，但是我对自己的编写能力并不完全自信。</font><font style="vertical-align: inherit;">我一直在开发一个小型Web应用程序，该应用程序通过jQuery完成所有html生成并将元素彼此附加。</font><font style="vertical-align: inherit;">我想尝试使用React重建它，因为我相信它会更快。</font><font style="vertical-align: inherit;">这个</font></font><a href="http://jsfiddle.net/easilyBaffled/7X7Xu/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是我正在从事的工作的一个小例子。</font><font style="vertical-align: inherit;">您将如何使用React编写它？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS：</font></font></strong></p>

<pre><code>function remove() {<font></font>
    this.remove();<font></font>
}<font></font>
<font></font>
function timed_append_new_element() {<font></font>
    setTimeout(function () {<font></font>
        var added_content = $("&lt;span /&gt;", {<font></font>
            class: "added_content",<font></font>
            text: "Click to close",<font></font>
            click: remove<font></font>
        });<font></font>
        container.append(added_content);<font></font>
    }, 3000);<font></font>
}<font></font>
<font></font>
function append_new_element() {<font></font>
    var added_content = $("&lt;span /&gt;", {<font></font>
        class: "timed_added_content",<font></font>
        text: "Click to close",<font></font>
        click: remove<font></font>
    });<font></font>
    container.append(added_content);<font></font>
}<font></font>
<font></font>
<font></font>
var container = $("&lt;div /&gt;", {<font></font>
    class: "container"<font></font>
});<font></font>
var header = $("&lt;span /&gt;", {<font></font>
    class: "header",<font></font>
    text: "jQuery to React.js Header"<font></font>
});<font></font>
var add_button = $("&lt;button /&gt;", {<font></font>
    class: "add_button",<font></font>
    text: "Add Element",<font></font>
    click: append_new_element<font></font>
});<font></font>
var timed_add_button = $("&lt;button /&gt;", {<font></font>
    class: "add_button",<font></font>
    text: "Add Element in 3 seconds",<font></font>
    click: timed_append_new_element<font></font>
});<font></font>
container.append(header);<font></font>
container.append(add_button);<font></font>
container.append(timed_add_button);<font></font>
$("body").append(container);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1654篇《如何从jQuery转到React.js？[关闭]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
