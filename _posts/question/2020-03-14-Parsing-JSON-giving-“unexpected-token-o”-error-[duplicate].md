---
layout: question
title:  Parsing JSON giving “unexpected token o” error \[duplicate\]
date:   2020-03-14T04:54:10.000Z
description:                                                                          ...
img: 
author: 猿飞云斯丁
category: question
answer: 2
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
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b>This question already has answers here</b>:
                            
                        </div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/8081701/i-keep-getting-uncaught-syntaxerror-unexpected-token-o" dir="ltr">I keep getting “Uncaught SyntaxError: Unexpected token o”</a>
                                <span class="question-originals-answer-count">
                                    (9 answers)
                                </span>
                        </div>
                                <div class="grid--cell mb0 mt8">Closed <span title="2015-12-30 23:29:27Z" class="relativetime">4 years ago</span>.</div>
            </div>
                    </aside>
<p>I am having a problem parsing simple JSON strings. I have checked them on <a href="http://www.JSONLint.com">JSONLint</a> and it shows that they are valid. But when I try to parse them using either <code>JSON.parse</code> or the jQuery alternative it gives me the error <code>unexpected token o</code>:</p>

<pre><code>&lt;!doctype HTML&gt;
&lt;html&gt;
  &lt;head&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script type="text/javascript"&gt;
      var cur_ques_details ={"ques_id":15,"ques_title":"jlkjlkjlkjljl"};
      var ques_list = JSON.parse(cur_ques_details);

      document.write(ques_list['ques_title']);
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Note: I'm encoding my strings using <code>json_encode()</code> in PHP.</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德路易</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>Try parse so: </p>

<pre><code>var yourval = jQuery.parseJSON(JSON.stringify(data));
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙乐</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>Using <code>JSON.stringify(data);</code>:</p>

<pre><code>$.ajax({
    url: ...
    success:function(data){
        JSON.stringify(data); //to string
        alert(data.you_value); //to view you pop up
    }
});
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
