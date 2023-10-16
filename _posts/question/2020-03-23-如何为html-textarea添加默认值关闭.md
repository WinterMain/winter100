---
layout: question
title:  如何为html <textarea>添加默认值？\[关闭\]
date:   2020-03-23T08:30:07.000Z
description:                                                                          ...
img: 
author: 阿飞A飞云
category: question
answer: 6
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭。</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">题外话</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b> <a href="/posts/6007219/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使其</font><font style="vertical-align: inherit;">成为Stack Overflow </font></font><a href="/help/on-topic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2019-09-29 16：59：39Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6个月前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想为html设置默认值</font></font><code>&lt;textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我从材料中读到，要添加默认值，您必须执行</font></font><code>&lt;textarea&gt;This is default text&lt;/textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我做到了，但是没有用。</font><font style="vertical-align: inherit;">正确的做法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2994篇《如何为html <textarea>添加默认值？\[关闭\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用this.innerHTML。 </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;textarea name="message" rows = "10" cols = "100" onfocus="this.innerHTML=''"&gt; Enter your message here... &lt;/textarea&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当文本区域成为焦点时，基本上使文本区域的innerHTML成为空字符串。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以添加“值”属性并进行设置，如下所示：</font></font></p>

<pre><code><font></font>
&lt;textarea value="your value"&gt; &lt;/textarea&gt;<font></font>
<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid前端Harry</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要将来自数据库的信息带到textarea标签中进行编辑：输入标签不显示占用多行的数据：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效，标签输入为一行。</font></font></p>

<pre><code>&lt;!--input class="article-input" id="article-input" type="text" rows="5" value="{{article}}" /--&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">textarea标记没有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">价值</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但可以与车把配合使用</font></font></p>

<pre><code>&lt;textarea class="article-input" id="article-input" type="text" rows="9" &gt;{{article}}&lt;/textarea&gt; 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">占位符无法设置文本区域的默认值。</font><font style="vertical-align: inherit;">您可以使用</font></font></p>

<pre><code>&lt;textarea rows="10" cols="55" name="description"&gt; /*Enter default value here to display content&lt;/textarea&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将其用于数据库连接，则这是标签。</font><font style="vertical-align: inherit;">如果您使用的语言不是php，则可以使用不同的语法。对于php：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;textarea rows="10" cols="55" name="description" required&gt;&lt;?php echo $description; ?&gt;&lt;/textarea&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">required命令最大程度地减少了使用php检查空字段所需的工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://www.w3.org/TR/html5/forms.html#attr-textarea-placeholder" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">placeholder </font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Attribute</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它不会添加</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认值，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但可能正是您要查找的内容：</font></font></p>

<pre><code>&lt;textarea placeholder="this text will show in the textarea"&gt;&lt;/textarea&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里查看</font></font><a href="http://jsfiddle.net/8DzCE/949/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-http://jsfiddle.net/8DzCE/949/</font></font></a>
<a href="http://jsfiddle.net/8DzCE/949/" rel="noreferrer"><img src="https://i.stack.imgur.com/2M0z0.png" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要说明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如乔恩·布拉夫在评论中建议的那样）</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></strong></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">占位符属性未设置文本区域的值。</font><font style="vertical-align: inherit;">而是“占位符属性表示一个简短的提示（单词或短语），旨在在控件没有值时帮助用户进行数据输入” [[当用户单击文本区域时，它就会消失]。</font><font style="vertical-align: inherit;">它永远不会充当控件的“默认值”。</font><font style="vertical-align: inherit;">如果需要的话，必须将所需的文本放到此处。这是实际的默认值，如此处其他答案所示</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我做这样的事情对我有用：</font></font></p>

<pre><code>&lt;textarea name="test" rows="4" cols="6"&gt;My Text&lt;/textarea&gt;
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
