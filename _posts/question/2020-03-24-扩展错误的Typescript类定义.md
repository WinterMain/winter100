---
layout: question
title:  扩展错误的Typescript类定义
date:   2020-03-24T10:29:38.000Z
description: 我在我的项目中使用NPM软件包的下一条路线。默认导出是一个类，其类型定义如下：export default class Routes implemen...
img: 
author: JinJin
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在我的项目中</font><font style="vertical-align: inherit;">使用NPM软件包的</font></font><a href="https://github.com/fridays/next-routes/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下一条路线</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">默认导出是一个类，其类型定义如下：</font></font></p>

<pre><code>export default class Routes implements Registry {<font></font>
  getRequestHandler(app: Server, custom?: HTTPHandler): HTTPHandler;<font></font>
  add(name: string, pattern?: string, page?: string): this;<font></font>
  add(pattern: string, page: string): this;<font></font>
  add(options: { name: string; pattern?: string; page?: string }): this;<font></font>
  Link: ComponentType&lt;LinkProps&gt;;<font></font>
  Router: Router;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整文件可在</font></font><a href="https://github.com/fridays/next-routes/blob/master/typings/next-routes.d.ts" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的软件包中</font><a href="https://github.com/fridays/next-routes/blob/master/typings/next-routes.d.ts" rel="nofollow noreferrer"><font style="vertical-align: inherit;">找到</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此类定义缺少包默认导出中称为的方法之一</font></font><code>findAndGetUrls</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我该如何用自己的类型扩展类定义？</font><font style="vertical-align: inherit;">我考虑过创建自己的类，该类实现NextRoutes，但定义缺少的方法定义，如下所示：</font></font></p>

<pre><code>import NextRoutes from 'next-routes';<font></font>
<font></font>
class Routes implements NextRoutes {<font></font>
  findAndGetUrls(<font></font>
    nameOrUrl: string,<font></font>
    params: {<font></font>
      [key: string]: string;<font></font>
    },<font></font>
   ): void;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是这个错误： </font></font><code>Function implementation is missing or not immediately following the declaration.</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的新尝试是</font></font><code>typings/next-routes.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目中使用以下内容</font><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">文件：</font></font></p>

<pre><code>import NextRoutes from 'next-routes';<font></font>
<font></font>
declare module 'next-routes' {<font></font>
  class Routes extends NextRoutes {<font></font>
    findAndGetUrls(<font></font>
      nameOrUrl: string,<font></font>
      params: {<font></font>
        [key: string]: string;<font></font>
      },<font></font>
    ): void;<font></font>
  }<font></font>
<font></font>
  export = Routes;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使我的代码对findAndGetUrls的使用感到满意，但是现在它抱怨没有其他方法存在，因此无法正确扩展类型。</font><font style="vertical-align: inherit;">例如</font></font><code>Property 'add' does not exist on type 'Routes'.</code> </p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3658篇《扩展错误的Typescript类定义》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经玩了一段时间，Typescript不允许您重新定义类。</font><font style="vertical-align: inherit;">但是，如果您将默认值重新导出为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是类</font><font style="vertical-align: inherit;">，则似乎可行</font><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">custom-next-routes.d.ts</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import NextRoutes, { RouteParams } from "next-routes";<font></font>
<font></font>
declare module "next-routes" {<font></font>
    export default interface Routes extends NextRoutes {<font></font>
        findAndGetUrls(nameOrUrl: string, params: RouteParams): void;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你仍然需要它命名</font></font><code>Routes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这样 TypeScript知道与合并它</font></font><code>export default class Routes implements Registry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>next-routes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我仅在最新的Typescript版本（当前为3.5.2）上尝试过此操作，因此，如果您使用的是旧版本，请使用YMMV。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
