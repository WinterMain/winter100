---
layout: question
title:  在TypeScript中，是什么！（惊叹号/ bang）运算符取消引用成员时？
date:   2020-05-25T09:09:26.000Z
description: 在查看tslint规则的源代码时，我遇到了以下语句：if (node.parent\!.kind === ts.SyntaxKind.ObjectLit...
img: 
author: 别坑我
category: question
answer: 1
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在查看tslint规则的源代码时，我遇到了以下语句：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">node</span><span class="pun">.</span><span class="pln">parent</span><span class="pun">!.</span><span class="pln">kind </span><span class="pun">===</span><span class="pln"> ts</span><span class="pun">.</span><span class="typ">SyntaxKind</span><span class="pun">.</span><span class="typ">ObjectLiteralExpression</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后请注意</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符</font></font><code>node.parent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有趣！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我首先尝试使用当前安装的TS（1.5.3）版本在本地编译文件。</font><font style="vertical-align: inherit;">产生的错误指出了爆炸的确切位置：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$ tsc </span><span class="pun">--</span><span class="pln">noImplicitAny memberAccessRule</span><span class="pun">.</span><span class="pln">ts 
noPublicModifierRule</span><span class="pun">.</span><span class="pln">ts</span><span class="pun">(</span><span class="lit">57</span><span class="pun">,</span><span class="lit">24</span><span class="pun">):</span><span class="pln"> error TS1005</span><span class="pun">:</span><span class="pln"> </span><span class="str">')'</span><span class="pln"> expected</span><span class="pun">.</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接下来，我升级到了最新的TS（2.1.6），可以毫无问题地对其进行编译。</font><font style="vertical-align: inherit;">因此，这似乎是TS 2.x的功能。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译完全忽略了爆炸，导致出现以下JS：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">node</span><span class="pun">.</span><span class="pln">parent</span><span class="pun">.</span><span class="pln">kind </span><span class="pun">===</span><span class="pln"> ts</span><span class="pun">.</span><span class="typ">SyntaxKind</span><span class="pun">.</span><span class="typ">ObjectLiteralExpression</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我的Google赋使我失败了。 </font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TS的感叹号运算符是什么，它如何工作？</font></font></em></strong></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路易的回答很好，但我想我会简要总结一下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bang运算符告诉编译器暂时放宽其可能要求的“非空”约束。</font><font style="vertical-align: inherit;">它对编译器说：“作为开发人员，我比您更清楚此变量现在不能为null”。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
