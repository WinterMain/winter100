---
layout: question
title:  在Sublime Text 3中，如何为JSX文件启用Emmet？
date:   2020-03-19T02:08:37.000Z
description: 之前，我一直使用Allan Hortle的JSX包，直到遇到有关如何突出显示语法的问题。然后，我注意到有一个官方软件包sublime-react。在使...
img: 
author: 老丝镜风
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前，我一直使用</font></font><a href="https://github.com/allanhortle/JSX"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Allan Hortle的JSX包，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到遇到有关如何突出显示语法的问题。</font><font style="vertical-align: inherit;">然后，我注意到有一个官方软件包</font></font><a href="https://github.com/reactjs/sublime-react"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sublime-react</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用Allan Hortle的软件包时，他在中添加了一个片段，</font></font><code>Preferences &gt; Key Bindings – User</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以启用Emmet功能，如下所示：</font></font></p>

<pre><code>{<font></font>
    "keys": ["tab"],<font></font>
    "command": "expand_abbreviation_by_tab", <font></font>
    "context": [<font></font>
        {<font></font>
            "operand": "source.js.jsx", <font></font>
            "operator": "equal", <font></font>
            "match_all": true, <font></font>
            "key": "selector"<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码段似乎不适用于正式的sublime-react程序包。</font><font style="vertical-align: inherit;">似乎需要对键绑定进行修改，但是对Sublime文档的初步阅读没有引起人们的兴趣。</font><font style="vertical-align: inherit;">救命？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2244篇《在Sublime Text 3中，如何为JSX文件启用Emmet？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猴子</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是扩大这个答案。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可能不希望您写的所有字母都可扩展为html。</font><font style="vertical-align: inherit;">您可以在上下文中设置另一个对象，以限制应用制表符补全的时间。</font><font style="vertical-align: inherit;">可以在</font></font><a href="https://gist.github.com/max-mykhailenko/41d0c3991d92f38dcbc6" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此要点</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到此代码，</font><font style="vertical-align: inherit;">但是我对Regex进行了修改，使其更好。</font></font></p>

<pre><code>{<font></font>
    "keys": ["tab"],<font></font>
    "command": "expand_abbreviation_by_tab", <font></font>
    "context": [{<font></font>
        "operand": "source.js", <font></font>
        "operator": "equal", <font></font>
        "match_all": true, <font></font>
        "key": "selector"<font></font>
    },{<font></font>
        "key": "preceding_text", <font></font>
        "operator": "regex_contains", <font></font>
        "operand": "(\\b(a\\b|div|span|p\\b|button)(\\.\\w*|&gt;\\w*)?)", <font></font>
        "match_all": true<font></font>
    },{<font></font>
        "key": "selection_empty", <font></font>
        "operator": "equal", <font></font>
        "operand": true, <font></font>
        "match_all": true<font></font>
    }]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还需要按照要点中的建议安装RegReplace和Command of Chain包，甚至可以</font></font><code>span.class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其变成。</font></font><code>&lt;span className="class"&gt;&lt;/span&gt;</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果您想添加更多元素来侦听，只需将它们添加到列表中即可，即</font></font><code>(a\\b|div|span|p\\b|button|strong)</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
The </font></font><code>\\b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指单词边界和阻止以下内容扩展</font></font><code>abc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>&lt;abc&gt;&lt;/abc&gt;</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://twitter.com/emmetio/status/583398878789132289"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Emmet</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在2015年4月</font><a href="https://twitter.com/emmetio/status/583398878789132289"><font style="vertical-align: inherit;">增加了对jsx的支持</font></a><font style="vertical-align: inherit;">，但默认情况下不起作用。</font><font style="vertical-align: inherit;">好吧，令我惊讶的是它实际上是在使用</font></font><code>control + E</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快捷键，但是我想使用该</font></font><code>TAB</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键进行扩展。</font><font style="vertical-align: inherit;">遵循</font></font><a href="https://github.com/sergeche/emmet-sublime/blob/master/README.md#how-to-expand-abbreviations-with-tab-in-other-syntaxes"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方指示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我完成了窍门。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，我必须在用户密钥绑定文件（</font></font><code>Preferences</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt; </font></font><code>Key Bindings — User</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中</font><font style="vertical-align: inherit;">粘贴以下内容
 </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{ "keys": ["tab"], "command": "expand_abbreviation_by_tab", "context":<font></font>
    [<font></font>
        { "operand": "source.js", "operator": "equal", "match_all": true, "key": "selector" },<font></font>
        { "match_all": true, "key": "selection_empty" },<font></font>
        { "operator": "equal", "operand": false, "match_all": true, "key": "has_next_field" },<font></font>
        { "operand": false, "operator": "equal", "match_all": true, "key": "auto_complete_visible" },<font></font>
        { "match_all": true, "key": "is_abbreviation" }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是没有所有注释且正确的代码</font></font><code>SCOPE_SELECTOR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪宝儿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://github.com/allanhortle/JSX"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX-SublimeText包</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自述文件中：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Emmet的默认设置是不支持JS文件。</font><font style="vertical-align: inherit;">因此，您需要为JSX文件中的tab标签添加键盘快捷键。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开</font></font><code>Preferences &gt; Key Bindings - user</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并添加以下条目：</font></font></p>
</blockquote>

<pre class="lang-json prettyprint-override"><code>{<font></font>
    "keys": ["tab"],<font></font>
    "command": "expand_abbreviation_by_tab", <font></font>
    "context": [<font></font>
        {<font></font>
            "operand": "source.js.jsx", <font></font>
            "operator": "equal", <font></font>
            "match_all": true, <font></font>
            "key": "selector"<font></font>
        },<font></font>
        {   <font></font>
            "key": "selection_empty", <font></font>
            "operator": "equal", <font></font>
            "operand": true,<font></font>
            "match_all": true <font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿GO</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用</font></font><code>ctrl+e</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>cmd+e</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac上）而不是tab即可使emmet在您的jsx中工作。</font><font style="vertical-align: inherit;">例如，如果我展开（使用</font></font><code>ctrl+e</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>render(){<font></font>
        return(<font></font>
            .modal&gt;.btn.btn-success{Click Me}   <font></font>
        )<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我得到 </font></font></p>

<pre><code>render(){<font></font>
        return(<font></font>
            &lt;div className="modal"&gt;<font></font>
                    &lt;div className="btn btn-success"&gt;Click Me&lt;/div&gt;<font></font>
                &lt;/div&gt;  <font></font>
        )<font></font>
    }<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
