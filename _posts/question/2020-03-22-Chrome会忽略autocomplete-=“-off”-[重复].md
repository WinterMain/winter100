---
layout: question
title:  Chrome会忽略autocomplete =“ off” \[重复\]
date:   2020-03-22T12:10:53.000Z
description:                                                                          ...
img: 
author: NearJinJin
category: question
answer: 21
tags: html HTML
topic: HTML
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/15738259/disabling-chrome-autofill" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用Chrome自动填充</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （68个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2019-02-07 03：53：59Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去年</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个使用标签箱下拉菜单的Web应用程序。</font><font style="vertical-align: inherit;">此功能在Chrome浏览器（版本21.0.1180.89）以外的所有浏览器中均适用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段和</font></font><code>form</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><code>autocomplete="off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">字段都存在</font><font style="vertical-align: inherit;">，但Chrome仍坚持显示该字段先前条目的下拉历史记录，这使标记框列表消失了。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2569篇《Chrome会忽略autocomplete =“ off” [重复]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy逆天路易</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管我同意自动完成功能应该是用户的选择，但Chrome有时还是过于热衷（其他浏览器也可能如此）。</font><font style="vertical-align: inherit;">例如，具有不同名称的密码字段仍会自动使用保存的密码填充，而先前的字段会填充用户名。</font><font style="vertical-align: inherit;">当表单是Web应用程序的用户管理表单，并且您不希望自动填充功能使用您自己的凭据填充它时，这尤其糟糕。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome现在完全忽略了autocomplete =“ off”。</font><font style="vertical-align: inherit;">尽管JS hacks可能很好用，但在撰写本文时，我发现了一种简单的方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将密码字段的值设置为控制字符8（</font></font><code>"\x08"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PHP或</font></font><code>&amp;#8;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML中）。</font><font style="vertical-align: inherit;">Chrome会自动填充该字段，因为它具有一个值，但由于这是退格字符，因此未输入任何实际值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，这仍然是一个hack，但是对我有用。</font><font style="vertical-align: inherit;">YMMV。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天飞云</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚更新到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome 49</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://stackoverflow.com/a/22694173/4120911"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Diogo Cid的解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在页面加载后，我在运行时隐藏和删除了字段，这是另一种解决方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome现在忽略了将凭据应用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示</font></font></strong> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的第一个</font></font><code>type="password"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段及其上一个</font></font><code>type="text"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段</font><font style="vertical-align: inherit;">的原始解决方法</font><font style="vertical-align: inherit;">，因此我使用</font><em><font style="vertical-align: inherit;">CSS</font></em><font style="vertical-align: inherit;">隐藏了这两个字段</font></font><em><font style="vertical-align: inherit;"></font></em> <code>visibility: hidden;</code></p>

<pre><code>&lt;!-- HTML --&gt;<font></font>
&lt;form&gt;<font></font>
    &lt;!-- Fake fields --&gt;<font></font>
    &lt;input class="chromeHack-autocomplete"&gt;<font></font>
    &lt;input type="password" class="chromeHack-autocomplete"&gt;<font></font>
<font></font>
    &lt;input type="text" placeholder="e-mail" autocomplete="off" /&gt;<font></font>
    &lt;input type="password" placeholder="Password" autocomplete="off" /&gt;<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;!-- CSS --&gt;<font></font>
.chromeHack-autocomplete {<font></font>
    height: 0px !important;<font></font>
    width: 0px !important;<font></font>
    opacity: 0 !important;<font></font>
    padding: 0 !important; margin: 0 !important;<font></font>
}<font></font>
<font></font>
&lt;!--JavaScript (jQuery) --&gt;<font></font>
jQuery(window).load(function() {<font></font>
    $(".chromeHack-autocomplete").delay(100).hide(0, function() {<font></font>
        $(this).remove();<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道它似乎不太优雅，但可以。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在chrome </font><font style="vertical-align: inherit;">v。34 </font><font style="vertical-align: inherit;">之后，</font></font><code>autocomplete="off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>&lt;form&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签处</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">无效</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我进行了更改以避免这种烦人的行为：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">密码输入</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">把一类的输入（例如：</font></font><code>passwordInput</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（到目前为止，Chrome不会将保存的密码输入到输入中，但是现在表格已损坏）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，要使表单正常工作，请在用户单击“提交”按钮时或您希望触发表单提交的任何时间运行以下代码：</font></font></p>

<pre><code>var sI = $(".passwordInput")[0];<font></font>
$(sI).attr("id", "password");<font></font>
$(sI).attr("name", "password");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我以前经常</font></font><code>id="password" name="password"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入密码，因此在触发提交之前将它们放回原处。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个类似的问题，其中输入字段使用名称或电子邮件。</font><font style="vertical-align: inherit;">我设置为autocomplete =“ off”，但Chrome仍然强制执行建议。</font><font style="vertical-align: inherit;">原来是因为占位符文本中包含单词“ name”和“ email”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>&lt;input type="text" placeholder="name or email" autocomplete="off" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过在占位符中的单词中添加零宽度的空格来解决此问题。</font><font style="vertical-align: inherit;">Chrome不再自动完成。</font></font></p>

<pre><code>&lt;input type="text" placeholder="nam&amp;#8203;e or emai&amp;#8203;l" autocomplete="off" /&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome 48+中，使用以下解决方案：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将假字段放在真实字段之前：</font></font></p>

<pre><code>&lt;form autocomplete="off"&gt;<font></font>
  &lt;input name="fake_email"    class="visually-hidden" type="text"&gt;<font></font>
  &lt;input name="fake_password" class="visually-hidden" type="password"&gt;<font></font>
<font></font>
  &lt;input autocomplete="off" name="email"    type="text"&gt;<font></font>
  &lt;input autocomplete="off" name="password" type="password"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏假字段：</font></font></p>

<pre><code>.visually-hidden {<font></font>
  margin: -1px;<font></font>
  padding: 0;<font></font>
  width: 1px;<font></font>
  height: 1px;<font></font>
  overflow: hidden;<font></font>
  clip: rect(0 0 0 0);<font></font>
  clip: rect(0, 0, 0, 0);<font></font>
  position: absolute;<font></font>
}<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你做到了！</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也适用于旧版本。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端前端猴子</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><code>autocomplete="off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常在工作，但并非总是如此。</font><font style="vertical-align: inherit;">它取决于</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入字段的。</font><font style="vertical-align: inherit;">诸如“地址”，“电子邮件”，“名称”之类的名称将自动完成（浏览器认为它们可以帮助用户），而诸如“代码”，“固定”之类的字段将不会自动完成（如果</font></font><code>autocomplete="off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已设置）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是-自动填充功能与Google </font></font><a href="https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地址帮助程序搞混了</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过重命名来修复它 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 </font></font></p>

<pre><code>&lt;input type="text" name="address" autocomplete="off"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>&lt;input type="text" name="the_address" autocomplete="off"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过镀铬测试。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁卡卡西</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将输入类型属性更改为</font></font><code>type="search"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google不会将自动填充应用于具有搜索类型的输入。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小胖</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">autocomplete =“ off”，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">autocomplete =“ false”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ;）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自：</font><a href="https://stackoverflow.com/a/29582380/75799"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/29582380/75799"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/29582380/75799</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道为什么这对我来说有效，但是我在chrome上使用了</font></font><code>autocomplete="none"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome，并停止为我的文本字段建议地址。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天梅</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于任何寻求解决方案的人，我终于弄明白了。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果页面是HTML5页面（我使用的是XHTML），Chrome仅服从autocomplete =“ off”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将页面转换为HTML5，问题消失了（facepalm）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小卤蛋</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将发布此答案，以为该问题带来更新的解决方案。</font><font style="vertical-align: inherit;">我目前正在使用Chrome 49，对此没有给出答案。</font><font style="vertical-align: inherit;">我也在寻找与其他浏览器和以前版本一起使用的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此代码放在表格的开头</font></font></p>

<pre><code>&lt;div style="display: none;"&gt;<font></font>
    &lt;input type="text" autocomplete="new-password"&gt;<font></font>
    &lt;input type="password" autocomplete="new-password"&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在您的真实密码字段中使用</font></font></p>

<pre><code>&lt;input type="password" name="password" autocomplete="new-password"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果此方法不再起作用，或者遇到其他浏览器或版本的问题，请对此答案发表评论。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">批准日期：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬：49</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的Firefox：44、45</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边缘：25</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer：11</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><code>autocomplete=off</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在现代浏览器中基本上被忽略-主要是由于密码管理器等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试添加此功能</font></font><code>autocomplete="new-password"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并非所有浏览器都完全支持</font><font style="vertical-align: inherit;">此功能</font><font style="vertical-align: inherit;">，但是它可以在某些浏览器上使用</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到chrome忽略了</font></font><code>autocomplete="off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我以一种愚蠢的方式解决了问题，即使用“假输入”欺骗chrome以填充它，而不是填充“真实”的东西。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></strong></p>

<pre><code>&lt;input type="text" name="username" style="display:none" value="fake input" /&gt; <font></font>
&lt;input type="text" name="username" value="real input"/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome将填充“假输入”，提交后，服务器将获取“真实输入”值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里ProL</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><code>Autocomplete="Off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 不再工作了。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用只是一个随机字符串代替</font></font><code>"Off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如</font></font><code>Autocomplete="NoAutocomplete"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙达蒙</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome版本34现在忽略了</font></font><code>autocomplete=off</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">， 
 </font></font><a href="http://www.theregister.co.uk/2014/04/09/chrome_makes_new_password_grab_in_version_34/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://groups.google.com/a/chromium.org/d/msg/security-dev/wYGThW5WRrE/qiWrKwJ79S4J" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于这是好是坏的</font><a href="https://groups.google.com/a/chromium.org/d/msg/security-dev/wYGThW5WRrE/qiWrKwJ79S4J" rel="nofollow noreferrer"><font style="vertical-align: inherit;">很多讨论</font></a><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">您对此有何看法？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用 </font></font><code>autocomplete="new-password"</code></p>

<pre class="lang-html prettyprint-override"><code>&lt;input type="email" name="email"&gt;<font></font>
&lt;input type="password" name="password" autocomplete="new-password"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬：53，54，55</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox：48、49、50</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经通过使用随机字符解决了与Google Chrome浏览器的无休止的战斗。</font><font style="vertical-align: inherit;">当您始终使用随机字符串呈现自动完成功能时，它将永远不会记住任何内容。</font></font></p>

<pre><code>&lt;input name="name" type="text" autocomplete="rutjfkde"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对其他人有帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前的解决方案是使用</font></font><code>type="search"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Google不会将自动填充应用于具有搜索类型的输入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见：</font><a href="https://twitter.com/Paul_Kinlan/status/596613148985171968" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://twitter.com/Paul_Kinlan/status/596613148985171968" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//twitter.com/Paul_Kinlan/status/596613148985171968</font></font></a></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2016年4月4日更新：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来像是固定的！</font><font style="vertical-align: inherit;">参见</font></font><a href="http://codereview.chromium.org/1473733008" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codereview.chromium.org/1473733008</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了获得可靠的解决方法，您可以将此代码添加到布局页面：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;div style="display: none;"&gt;<font></font>
 &lt;input type="text" id="PreventChromeAutocomplete" <font></font>
  name="PreventChromeAutocomplete" autocomplete="address-level4" /&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当表单中至少有一个其他输入元素具有任何其他自动完成值时，Chrome才会遵守autocomplete = off。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不适用于密码字段-在Chrome中，这些字段的处理方式大不相同。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://code.google.com/p/chromium/issues/detail?id=468153" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://code.google.com/p/chromium/issues/detail?id=468153</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：2016年3月11日，Chromium团队将漏洞关闭为“无法修复”。有关</font><font style="vertical-align: inherit;">完整说明</font><font style="vertical-align: inherit;">，请参见</font></font><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最初提交的漏洞报告中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后评论</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">TL; DR：使用语义自动完成属性，例如autocomplete =“ new-street-address”以避免Chrome执行自动填充。</font></font></b></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome现在似乎会忽略它，</font></font><code>autocomplete="off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非它在</font></font><code>&lt;form autocomplete="off"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签上。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome现在似乎忽略了</font></font><code>style="display: none;"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>style="visibility: hidden;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将其更改为：</font></font></p>

<pre><code>&lt;input style="opacity: 0;position: absolute;"&gt;<font></font>
&lt;input type="password" style="opacity: 0;position: absolute;"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的经验，Chrome只会自动完成第一个</font></font><code>&lt;input type="password"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和上一个</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，我添加了：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;input style="display:none"&gt;<font></font>
&lt;input type="password" style="display:none"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至此，</font></font><code>&lt;form&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此案已解决。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
