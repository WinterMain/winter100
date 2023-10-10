---
layout: question
title:  如何使用JavaScript复制到剪贴板？
date:   2020-03-09T04:57:15.000Z
description: 将文本复制到剪贴板的最佳方法是什么？（多浏览器）我试过了： function copyToClipboard(text) {    if (wi...
img: 
author: 阿飞Pro
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将文本复制到剪贴板的最佳方法是什么？</font><font style="vertical-align: inherit;">（多浏览器）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> copyToClipboard</span><span class="pun">(</span><span class="pln">text</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">window</span><span class="pun">.</span><span class="pln">clipboardData</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="com">// Internet Explorer</span><font></font><span class="pln">
        window</span><span class="pun">.</span><span class="pln">clipboardData</span><span class="pun">.</span><span class="pln">setData</span><span class="pun">(</span><span class="str">"Text"</span><span class="pun">,</span><span class="pln"> text</span><span class="pun">);</span><font></font><span class="pln">
    </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">  </span><font></font><span class="pln">
        unsafeWindow</span><span class="pun">.</span><span class="pln">netscape</span><span class="pun">.</span><span class="pln">security</span><span class="pun">.</span><span class="typ">PrivilegeManager</span><span class="pun">.</span><span class="pln">enablePrivilege</span><span class="pun">(</span><span class="str">"UniversalXPConnect"</span><span class="pun">);</span><span class="pln">  </span><font></font><span class="pln">
        </span><span class="kwd">const</span><span class="pln"> clipboardHelper </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Components</span><span class="pun">.</span><span class="pln">classes</span><span class="pun">[</span><span class="str">"@mozilla.org/widget/clipboardhelper;1"</span><span class="pun">].</span><span class="pln">getService</span><span class="pun">(</span><span class="typ">Components</span><span class="pun">.</span><span class="pln">interfaces</span><span class="pun">.</span><span class="pln">nsIClipboardHelper</span><span class="pun">);</span><span class="pln">  </span><font></font><span class="pln">
        clipboardHelper</span><span class="pun">.</span><span class="pln">copyString</span><span class="pun">(</span><span class="pln">text</span><span class="pun">);</span><font></font><span class="pln">
    </span><span class="pun">}</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在Internet Explorer中，它会给出语法错误。</font><font style="vertical-align: inherit;">在Firefox中，显示为</font></font><code>unsafeWindow is not defined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个没有Flash的好窍门：</font></font><a href="https://stackoverflow.com/questions/17527870/how-does-trello-access-the-users-clipboard"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Trello如何访问用户的剪贴板？</font></font></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第155篇《如何使用JavaScript复制到剪贴板？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I have used clipboard.js.</p>

<p>We can get it on npm:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">npm install clipboard </span><span class="pun">--</span><span class="pln">save</span></code></pre>

<p>And also on <a href="https://bower.io/" rel="nofollow noreferrer">Bower</a></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">bower install clipboard </span><span class="pun">--</span><span class="pln">save</span></code></pre>

<p>Usage &amp; examples are at <a href="https://zenorocha.github.io/clipboard.js/" rel="nofollow noreferrer">https://zenorocha.github.io/clipboard.js/</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Copy text from HTML input to the clipboard:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="kwd">function</span><span class="pln"> myFunction</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
   </span><span class="com">/* Get the text field */</span><font></font><span class="pln">
   </span><span class="kwd">var</span><span class="pln"> copyText </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"myInput"</span><span class="pun">);</span><font></font><span class="pln">
</span><font></font><span class="pln">
   </span><span class="com">/* Select the text field */</span><font></font><span class="pln">
   copyText</span><span class="pun">.</span><span class="pln">select</span><span class="pun">();</span><font></font><span class="pln">
</span><font></font><span class="pln">
   </span><span class="com">/* Copy the text inside the text field */</span><font></font><span class="pln">
   document</span><span class="pun">.</span><span class="pln">execCommand</span><span class="pun">(</span><span class="str">"Copy"</span><span class="pun">);</span><font></font><span class="pln">
</span><font></font><span class="pln">
   </span><span class="com">/* Alert the copied text */</span><font></font><span class="pln">
   alert</span><span class="pun">(</span><span class="str">"Copied the text: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> copyText</span><span class="pun">.</span><span class="pln">value</span><span class="pun">);</span><font></font><span class="pln">
 </span><span class="pun">}</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="com">&lt;!-- The text field --&gt;</span><font></font><span class="pln">
 </span><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"text"</span><span class="pln"> </span><span class="atn">value</span><span class="pun">=</span><span class="atv">"Hello Friend"</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"myInput"</span><span class="tag">&gt;</span><font></font><span class="pln">
</span><font></font><span class="pln">
 </span><span class="com">&lt;!-- The button used to copy the text --&gt;</span><font></font><span class="pln">
</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">onclick</span><span class="pun">=</span><span class="atv">"</span><span class="pln">myFunction</span><span class="pun">()</span><span class="atv">"</span><span class="tag">&gt;</span><span class="pln">Copy text</span><span class="tag">&lt;/button&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif8" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><strong>Note:</strong> <em>The <code>document.execCommand()</code> method is not supported in Internet Explorer 9 and earlier.</em></p>

<p><strong>Source</strong>: <a href="https://www.w3schools.com/howto/howto_js_copy_clipboard.asp" rel="nofollow noreferrer">W3Schools - <em>Copy Text to Clipboard</em></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In browsers other than IE you need to use a small flash object to manipulate the clipboard, e.g.</p>

<ul>
<li><a href="http://ajaxian.com/archives/auto-copy-to-clipboard" rel="nofollow noreferrer">Auto copy to clipboard</a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离伊芙妮</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想要一个非常简单的解决方案（集成时间少于5分钟）并且看起来开箱即用，那么</font></font><a href="http://github.com/mojombo/clippy" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Clippy</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一些更复杂的解决方案的不错选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是由GitHub的联合创始人编写的。</font><font style="vertical-align: inherit;">以下示例Flash嵌入代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">object</span><font></font><span class="pln">
   classid</span><span class="pun">=</span><span class="str">"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"</span><font></font><span class="pln">
   width</span><span class="pun">=</span><span class="str">"110"</span><font></font><span class="pln">
   height</span><span class="pun">=</span><span class="str">"14"</span><font></font><span class="pln">
   id</span><span class="pun">=</span><span class="str">"clippy"</span><span class="pun">&gt;</span><font></font><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">param name</span><span class="pun">=</span><span class="str">"movie"</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"/flash/clippy.swf"</span><span class="pun">/&gt;</span><font></font><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">param name</span><span class="pun">=</span><span class="str">"allowScriptAccess"</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"always"</span><span class="pun">/&gt;</span><font></font><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">param name</span><span class="pun">=</span><span class="str">"quality"</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"high"</span><span class="pun">/&gt;</span><font></font><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">param name</span><span class="pun">=</span><span class="str">"scale"</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"noscale"</span><span class="pun">/&gt;</span><font></font><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">param NAME</span><span class="pun">=</span><span class="str">"FlashVars"</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"text=#{text}"</span><span class="pun">/&gt;</span><font></font><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">param name</span><span class="pun">=</span><span class="str">"bgcolor"</span><span class="pln"> value</span><span class="pun">=</span><span class="str">"#{bgcolor}"</span><span class="pun">/&gt;</span><font></font><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">embed</span><font></font><span class="pln">
     src</span><span class="pun">=</span><span class="str">"/flash/clippy.swf"</span><font></font><span class="pln">
     width</span><span class="pun">=</span><span class="str">"110"</span><font></font><span class="pln">
     height</span><span class="pun">=</span><span class="str">"14"</span><font></font><span class="pln">
     name</span><span class="pun">=</span><span class="str">"clippy"</span><font></font><span class="pln">
     quality</span><span class="pun">=</span><span class="str">"high"</span><font></font><span class="pln">
     allowScriptAccess</span><span class="pun">=</span><span class="str">"always"</span><font></font><span class="pln">
     type</span><span class="pun">=</span><span class="str">"application/x-shockwave-flash"</span><font></font><span class="pln">
     pluginspage</span><span class="pun">=</span><span class="str">"http://www.macromedia.com/go/getflashplayer"</span><font></font><span class="pln">
     </span><span class="typ">FlashVars</span><span class="pun">=</span><span class="str">"text=#{text}"</span><font></font><span class="pln">
     bgcolor</span><span class="pun">=</span><span class="str">"#{bgcolor}"</span><span class="pun">/&gt;</span><font></font><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">object</span><span class="pun">&gt;</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切记</font></font><code>#{text}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用需要复制的文字和</font></font><code>#{bgcolor}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">颜色</font><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下方法适用于Chrome，Firefox，Internet Explorer和Edge，以及最新版本的Safari（复制支持已添加到2016年10月发布的版本10中）。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个textarea并将其内容设置为要复制到剪贴板的文本。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将文本区域附加到DOM。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文本区域中选择文本。</font></font></li>
<li>Call document.execCommand("copy")</li>
<li>Remove the textarea from the dom.</li>
</ul>

<p>Note: you will not see the textarea, as it is added and removed within the same synchronous invocation of Javascript code.</p>

<p>Some things to watch out for if you are implementing this yourself:</p>

<ul>
<li>For security reasons, this can only called from an event handler such as click (Just as with opening windows).</li>
<li>Internet Explorer will show a permission dialog the first time the clipboard is updated.</li>
<li>Internet Explorer, and Edge will scroll when the textarea is focused.</li>
<li>execCommand() may throw in some cases.</li>
<li>Newlines and tabs can get swallowed unless you use a textarea. (Most articles seem to recommend using a div)</li>
<li>The textarea will be visible while the Internet Explorer dialog is shown, you either need to hide it, or use the Internet Explorer specific clipboardData API.</li>
<li>In Internet Explorer system administrators can disable the clipboard API.</li>
</ul>

<p>The function below should handle all of the following issues as cleanly as possible. Please leave a comment if you find any problems or have any suggestions for improving it.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// Copies a string to the clipboard. Must be called from within an</span><font></font><span class="pln">
</span><span class="com">// event handler such as click. May return false if it failed, but</span><font></font><span class="pln">
</span><span class="com">// this is not always possible. Browser support for Chrome 43+,</span><font></font><span class="pln">
</span><span class="com">// Firefox 42+, Safari 10+, Edge and Internet Explorer 10+.</span><font></font><span class="pln">
</span><span class="com">// Internet Explorer: The clipboard feature may be disabled by</span><font></font><span class="pln">
</span><span class="com">// an administrator. By default a prompt is shown the first</span><font></font><span class="pln">
</span><span class="com">// time the clipboard is used (per session).</span><font></font><span class="pln">
</span><span class="kwd">function</span><span class="pln"> copyToClipboard</span><span class="pun">(</span><span class="pln">text</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">window</span><span class="pun">.</span><span class="pln">clipboardData </span><span class="pun">&amp;&amp;</span><span class="pln"> window</span><span class="pun">.</span><span class="pln">clipboardData</span><span class="pun">.</span><span class="pln">setData</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
        </span><span class="com">// Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.</span><font></font><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> clipboardData</span><span class="pun">.</span><span class="pln">setData</span><span class="pun">(</span><span class="str">"Text"</span><span class="pun">,</span><span class="pln"> text</span><span class="pun">);</span><font></font><span class="pln">
</span><font></font><span class="pln">
    </span><span class="pun">}</span><font></font><span class="pln">
    </span><span class="kwd">else</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">document</span><span class="pun">.</span><span class="pln">queryCommandSupported </span><span class="pun">&amp;&amp;</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">queryCommandSupported</span><span class="pun">(</span><span class="str">"copy"</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> textarea </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">createElement</span><span class="pun">(</span><span class="str">"textarea"</span><span class="pun">);</span><font></font><span class="pln">
        textarea</span><span class="pun">.</span><span class="pln">textContent </span><span class="pun">=</span><span class="pln"> text</span><span class="pun">;</span><font></font><span class="pln">
        textarea</span><span class="pun">.</span><span class="pln">style</span><span class="pun">.</span><span class="pln">position </span><span class="pun">=</span><span class="pln"> </span><span class="str">"fixed"</span><span class="pun">;</span><span class="pln">  </span><span class="com">// Prevent scrolling to bottom of page in Microsoft Edge.</span><font></font><span class="pln">
        document</span><span class="pun">.</span><span class="pln">body</span><span class="pun">.</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">textarea</span><span class="pun">);</span><font></font><span class="pln">
        textarea</span><span class="pun">.</span><span class="pln">select</span><span class="pun">();</span><font></font><span class="pln">
        </span><span class="kwd">try</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">execCommand</span><span class="pun">(</span><span class="str">"copy"</span><span class="pun">);</span><span class="pln">  </span><span class="com">// Security exception may be thrown by some browsers.</span><font></font><span class="pln">
        </span><span class="pun">}</span><font></font><span class="pln">
        </span><span class="kwd">catch</span><span class="pln"> </span><span class="pun">(</span><span class="pln">ex</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
            console</span><span class="pun">.</span><span class="pln">warn</span><span class="pun">(</span><span class="str">"Copy to clipboard failed."</span><span class="pun">,</span><span class="pln"> ex</span><span class="pun">);</span><font></font><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><font></font><span class="pln">
        </span><span class="pun">}</span><font></font><span class="pln">
        finally </span><span class="pun">{</span><font></font><span class="pln">
            document</span><span class="pun">.</span><span class="pln">body</span><span class="pun">.</span><span class="pln">removeChild</span><span class="pun">(</span><span class="pln">textarea</span><span class="pun">);</span><font></font><span class="pln">
        </span><span class="pun">}</span><font></font><span class="pln">
    </span><span class="pun">}</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><a href="https://jsfiddle.net/fx6a6n6x/" rel="noreferrer">https://jsfiddle.net/fx6a6n6x/</a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
