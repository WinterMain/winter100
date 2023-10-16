---
layout: question
title:  Node.js上的HTML解析器
date:   2020-03-23T11:55:28.000Z
description:                                                                          ...
img: 
author: JinJin
category: question
answer: 2
tags: HTML Node.js
topic: Node.js
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b> <a href="/posts/7977945/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使其</font><font style="vertical-align: inherit;">成为Stack Overflow </font></font><a href="/help/on-topic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2015-05-13 16：46：15Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://nokogiri.org"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nodejs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">有像Ruby的</font><a href="http://nokogiri.org"><font style="vertical-align: inherit;">nokogiri</font></a><font style="vertical-align: inherit;">这样的东西吗？</font><font style="vertical-align: inherit;">我的意思是用户友好的HTML解析器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Node.js模块页面上看到了一些解析器，但是找不到漂亮又新鲜的东西。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2999篇《Node.js上的HTML解析器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil米亚卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><a href="https://github.com/tmpvar/jsdom" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/tmpvar/jsdom-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您给它一些HTML，它给您一个DOM。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以看一下X射线：</font><a href="https://github.com/lapwinglabs/x-ray" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/lapwinglabs/x-ray" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/lapwinglabs/x-ray</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
