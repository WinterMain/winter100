---
layout: question
title:  通过config.json文件注册时，导入语句破坏了typeorm实体
date:   2020-04-07T10:53:36.000Z
description: 按照官方文档，我创建了小型koa / typeorm / postgres应用。当我createConnection与config 一起使用时，将实体导入...
img: 
author: 老丝
category: question
answer: 2
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照官方文档，我创建了小型koa / typeorm / postgres应用。</font><font style="vertical-align: inherit;">当我</font></font><code>createConnection</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与config </font><font style="vertical-align: inherit;">一起使用</font><font style="vertical-align: inherit;">时，将实体导入同一文件中，应用运行正常，但是typeorm cli无法找到配置文件，因此我尝试将config移至“ ormconfig.json”。</font><font style="vertical-align: inherit;">现在我得到这个错误：</font></font></p>

<p><code>SyntaxError: Cannot use import statement outside a module</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来typeorm无法使用es6功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><code>ormconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "type": "postgres",<font></font>
  "host": "localhost",<font></font>
  "port": 5432,<font></font>
  "username": ****,<font></font>
  "password": ****,<font></font>
  "database": ****,<font></font>
  "synchronize": true,<font></font>
  "entities": ["src/entity/**/*.ts"],<font></font>
  "migrations": ["src/migration/**/*.ts"],<font></font>
  "subscribers": ["src/subscriber/**/*.ts"],<font></font>
  "cli": {<font></font>
    "entitiesDir": "src/entity",<font></font>
    "migrationsDir": "src/migration",<font></font>
    "subscribersDir": "src/subscriber"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "compilerOptions": {<font></font>
    "lib": ["es5", "es6"],<font></font>
    "target": "es6",<font></font>
    "module": "commonjs",<font></font>
    "moduleResolution": "node",<font></font>
    "outDir": "./dist",<font></font>
    "emitDecoratorMetadata": true,<font></font>
    "experimentalDecorators": true,<font></font>
  },<font></font>
  "exclude": ["node_modules"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现错误的文件：</font></font></p>

<pre><code>import {<font></font>
  BaseEntity,<font></font>
  Column,<font></font>
  Entity,<font></font>
  PrimaryGeneratedColumn,<font></font>
  CreateDateColumn,<font></font>
  ManyToOne<font></font>
} from 'typeorm';<font></font>
import { IsIn, IsPositive, IsNotEmpty } from 'class-validator';<font></font>
<font></font>
import { LOAN_TYPE } from '../consts';<font></font>
import { User } from './user';<font></font>
<font></font>
@Entity('loans')<font></font>
export class Loan extends BaseEntity {<font></font>
  @PrimaryGeneratedColumn()<font></font>
  public id: number;<font></font>
<font></font>
  @CreateDateColumn({ type: 'timestamp' })<font></font>
  public createdAt: Date;<font></font>
<font></font>
  @Column()<font></font>
  @IsNotEmpty()<font></font>
  @IsPositive()<font></font>
  public amount: number;<font></font>
<font></font>
  @Column({ type: 'enum', enum: LOAN_TYPE })<font></font>
  @IsNotEmpty()<font></font>
  @IsIn(Object.values(LOAN_TYPE))<font></font>
  public type: LOAN_TYPE;<font></font>
<font></font>
  @Column({ default: false })<font></font>
  public approvalStatus: boolean;<font></font>
<font></font>
  @ManyToOne(type =&gt; User, user =&gt; user.loans)<font></font>
  @IsNotEmpty()<font></font>
  public user: User;<font></font>
}<font></font>
<font></font>
export default Loan;<font></font>
<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4153篇《通过config.json文件注册时，导入语句破坏了typeorm实体》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请确保您有</font></font><code>"module": "commonjs"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>"compilerOptions"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>tsconfig.json</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ts-node运行typeorm cli： </font></font><code>ts-node ./node_modules/typeorm/cli.js</code></li>
</ol>

<p><a href="https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#if-entities-files-are-in-typescript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看文件</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试运行CLI或运行应用程序时出现错误？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要更改</font></font><code>"entities"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的条目</font></font><code>ormconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font></font><code>["dist/entity/**/*.js"]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>"entitiesDir"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font></font><code>"dist/entity"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
