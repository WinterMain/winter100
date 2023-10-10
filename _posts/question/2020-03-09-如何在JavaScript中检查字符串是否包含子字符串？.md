---
layout: question
title:  如何在JavaScript中检查字符串是否包含子字符串？
date:   2020-03-09T04:11:44.000Z
description:                                                                          ...
img: 
author: Davaid番长
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="https://stackoverflow.com/help/privileges/edit-community-wiki" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常我希望有一种</font></font><code>String.contains()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，但是似乎没有。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么合理的方法来检查？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">test</span><span class="pun">.</span><span class="pln">indexOf</span><span class="pun">(</span><span class="str">"title"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">!=-</span><span class="lit">1</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码不可读（“！=-1”的含义是什么？）。</font><font style="vertical-align: inherit;">只需使用String.search。</font><font style="vertical-align: inherit;">它可能完全符合您的目的，并且也易于阅读。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">test</span><span class="pun">.</span><span class="pln">search</span><span class="pun">(</span><span class="str">/title/</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回true / false。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式使用许多资源。</font><font style="vertical-align: inherit;">但是在大多数情况下，可读性更为重要。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
