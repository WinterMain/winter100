---
layout: question
title:  使用TypeScript在React组件中的默认属性值
date:   2020-03-11T07:38:03.000Z
description: 我不知道如何使用Typescript为我的组件设置默认属性值。这是源代码：class PageState{}export class Pa...
img: 
author: 西门逆天
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道如何使用Typescript为我的组件设置默认属性值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是源代码：</font></font></p>

<pre><code>class PageState<font></font>
{<font></font>
}<font></font>
<font></font>
export class PageProps<font></font>
{<font></font>
    foo: string = "bar";<font></font>
}<font></font>
<font></font>
export class PageComponent extends React.Component&lt;PageProps, PageState&gt;<font></font>
{<font></font>
    public render(): JSX.Element<font></font>
    {<font></font>
        return (<font></font>
            &lt;span&gt;Hello, world&lt;/span&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试使用这样的组件时：</font></font></p>

<pre><code>ReactDOM.render(&lt;PageComponent /&gt;, document.getElementById("page"));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到一条错误消息，指出</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺少</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我想使用默认值。</font><font style="vertical-align: inherit;">我也尝试过</font></font><code>static defaultProps = ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件内部</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，但是我怀疑它没有任何作用。</font></font></p>

<pre><code>src/typescript/main.tsx(8,17): error TS2324: Property 'foo' is missing in type 'IntrinsicAttributes &amp; IntrinsicClassAttributes&lt;PageComponent&gt; &amp; PageProps &amp; { children?: ReactEle...'.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用默认属性值？</font><font style="vertical-align: inherit;">我公司使用的许多JS组件都依赖于它们，不使用它们不是一种选择。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第740篇《使用TypeScript在React组件中的默认属性值》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Typescript 2.1+中，使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Partial &lt;T&gt;</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是将接口属性设置为可选。</font></font></p>

<pre><code>export interface Props {<font></font>
    obj: Model,<font></font>
    a: boolean<font></font>
    b: boolean<font></font>
}<font></font>
<font></font>
public static defaultProps: Partial&lt;Props&gt; = {<font></font>
    a: true<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
