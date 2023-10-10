---
layout: question
title:  在Typescript（Angular2 ionic2）中访问SASS值（$ variables.scss中的$ colors）
date:   2020-03-19T03:37:26.000Z
description: 在Ionic 2中，我想$colors从文件“ \[我的项目\] \ src \ theme \ variables.scss”中访问变量。该文件包含：...
img: 
author: 梅十三Near
category: question
answer: 0
tags: 角度 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Ionic 2中，我想</font></font><code>$colors</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从文件“ [我的项目] \ src \ theme \ variables.scss”中访问变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文件包含：</font></font></p>

<pre><code>$colors: (<font></font>
  primary:    #387ef5,<font></font>
  secondary:  #32db64,<font></font>
  danger:     #f53d3d,<font></font>
  light:      #f4f4f4,<font></font>
  dark:       #222,<font></font>
  favorite:   #69BB7B<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个组件中，我绘制了一个画布。</font><font style="vertical-align: inherit;">看起来像这样：</font></font></p>

<pre><code>import {Component, Input, ViewChild, ElementRef} from '@angular/core';<font></font>
<font></font>
@Component({<font></font>
    selector: 'my-graph',<font></font>
})<font></font>
@View({<font></font>
    template: `&lt;canvas #myGraph class='myGraph'<font></font>
     [attr.width]='_size'<font></font>
     [attr.height]='_size'&gt;&lt;/canvas&gt;`,<font></font>
})<font></font>
<font></font>
export class MyGraphDiagram {<font></font>
    private _size: number;<font></font>
<font></font>
    // get the element with the #myGraph on it<font></font>
    @ViewChild("myGraph") myGraph: ElementRef; <font></font>
<font></font>
    constructor(){<font></font>
        this._size = 150;<font></font>
    }<font></font>
<font></font>
    ngAfterViewInit() { // wait for the view to init before using the element<font></font>
<font></font>
      let context: CanvasRenderingContext2D = this.myGraph.nativeElement.getContext("2d");<font></font>
      // HERE THE COLOR IS DEFINED AND I D LIKE TO ACCESS variable.scss TO DO THAT<font></font>
      context.fillStyle = 'blue';<font></font>
      context.fillRect(10, 10, 150, 150);<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以看到，在此代码的某个点上定义了形状的颜色：           </font></font><code>context.fillStyle = 'blue'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我想改用</font></font><code>context.fillStyle = '[variables.scss OBJECT].$colors.primary '</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
