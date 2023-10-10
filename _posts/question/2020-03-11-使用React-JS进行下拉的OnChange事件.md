---
layout: question
title:  使用React JS进行下拉的OnChange事件
date:   2020-03-11T06:53:56.000Z
description: var MySelect = React.createClass({     change  function(){         return d...
img: 
author: 乐米亚
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>var MySelect = React.createClass({<font></font>
     change: function(){<font></font>
         return document.querySelector('#lang').value;<font></font>
     },<font></font>
     render: function(){<font></font>
        return(<font></font>
           &lt;div&gt;<font></font>
               &lt;select id="lang"&gt;<font></font>
                  &lt;option value="select" onChange={this.change}&gt;Select&lt;/option&gt;<font></font>
                  &lt;option value="Java" onChange={this.change}&gt;Java&lt;/option&gt;<font></font>
                  &lt;option value="C++" onChange={this.change}&gt;C++&lt;/option&gt;<font></font>
               &lt;/select&gt;<font></font>
               &lt;p&gt;&lt;/p&gt;<font></font>
               &lt;p value={this.change}&gt;&lt;/p&gt;<font></font>
           &lt;/div&gt;<font></font>
        );<font></font>
     }<font></font>
});<font></font>
<font></font>
React.render(&lt;MySelect /&gt;, document.body);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件不起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第699篇《使用React JS进行下拉的OnChange事件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Near小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>React Hooks (16.8+):</p>

<pre><code>const Dropdown = ({<font></font>
  options<font></font>
}) =&gt; {<font></font>
  const [selectedOption, setSelectedOption] = useState(options[0].value);<font></font>
  return (<font></font>
      &lt;select<font></font>
        value={selectedOption}<font></font>
        onChange={e =&gt; setSelectedOption(e.target.value)}&gt;<font></font>
        {options.map(o =&gt; (<font></font>
          &lt;option value={o.value}&gt;{o.label}&lt;/option&gt;<font></font>
        ))}<font></font>
      &lt;/select&gt;<font></font>
  );<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
