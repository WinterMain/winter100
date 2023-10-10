---
layout: question
title:  如何在ReactJS中验证嵌套对象的PropTypes？
date:   2020-03-11T02:58:30.000Z
description: 我正在使用数据对象作为ReactJS中组件的道具。<Field data={data} />我知道容易验证PropTypes对象本身：pro...
img: 
author: LGil泡芙
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用数据对象作为ReactJS中组件的道具。</font></font></p>

<pre><code>&lt;Field data={data} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道容易验证PropTypes对象本身：</font></font></p>

<pre><code>propTypes: {<font></font>
  data: React.PropTypes.object<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我想验证其中的值怎么办？</font><font style="vertical-align: inherit;">即。</font><font style="vertical-align: inherit;">data.id，data.title？</font></font></p>

<pre><code>props[propName]: React.PropTypes.number.required // etc...
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>user: React.PropTypes.shap({<font></font>
    age: (props, propName) =&gt; {<font></font>
       if (!props[propName] &gt; 0 &amp;&amp; props[propName] &gt; 100) {<font></font>
          return new Error(`${propName} must be betwen 1 and 99`)<font></font>
       }<font></font>
       return null<font></font>
    },<font></font>
})<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要注意的是，嵌套的工作深度超出了一层。</font><font style="vertical-align: inherit;">这在验证URL参数时对我很有用：</font></font></p>

<pre><code>propTypes = {<font></font>
  match: PropTypes.shape({<font></font>
    params: PropTypes.shape({<font></font>
      id: PropTypes.string.isRequired<font></font>
    })<font></font>
  })<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
