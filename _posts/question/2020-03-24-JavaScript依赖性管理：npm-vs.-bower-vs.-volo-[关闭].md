---
layout: question
title:  JavaScript依赖性管理：npm vs. bower vs. volo \[关闭\]
date:   2020-03-24T09:09:07.000Z
description:                                                                          ...
img: 
author: 蛋蛋
category: question
answer: 4
tags: JavaScript Node.js
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题需要更加</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，使其仅通过</font></font><a href="/posts/15092345/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来关注一个问题</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2014-11-27 07：13：09Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你如何比较</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>bower</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>volo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这三个都可以用于为UI项目安装JavaScript依赖项。</font><font style="vertical-align: inherit;">我了解</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是特定于节点的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，什么时候使用什么呢？</font></font></p>

<p><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依然屹立遥远，但</font></font><code>bower</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>volo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎正好解决同样的问题，虽然我不是能画之间的线路</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>bower-volo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿西里Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这不在问题范围内，但还有另一种选择。</font><font style="vertical-align: inherit;">Jam JS- </font></font><a href="http://jamjs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jamjs.org/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的一件事是，它在jam中具有强大的功能：</font></font></p>

<pre><code>jam compile output.js
</code></pre>

<p>Someone should make yet another package manager and name it: yapm :)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bower与NPM相比，最大的优势是其依赖关系管理使用组件的单个版本来实施（而NPM通过将不同的副本/版本作为不同模块的子依赖项来工作）。</font><font style="vertical-align: inherit;">这是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一件非常好的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事情，因为它可以防止需要包含多个不同版本组件的副本的客户端javascript变得肿。</font><font style="vertical-align: inherit;">包含模块的多个副本是NPM依赖性管理工作方式的核心，因此NPM完全不适合客户端软件包管理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的结果是，bower软件包的维护者和消费者必须更加谨慎地维护其依赖版本号以避免冲突，但这是值得付出的代价。</font><font style="vertical-align: inherit;">而且我发现NPM模块在发行主要版本，次要版本和修补程序版本时通常都很草率，因此NPM依赖性管理也不是一件容易的事。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOSam</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最能描述npm和bower区别的描述是：npm管理称为包的JavaScript模块，而Bower管理称为组件的前端组件（即css，html和JavaScript）。</font><font style="vertical-align: inherit;">npm也用于安装凉亭。</font><font style="vertical-align: inherit;">这是</font></font><a href="http://codylindley.com/techpro/2013_04_12__package-managers-an-introducto/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关npm和bower</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不涵盖volo）</font><font style="vertical-align: inherit;">的</font><a href="http://codylindley.com/techpro/2013_04_12__package-managers-an-introducto/" rel="noreferrer"><font style="vertical-align: inherit;">广泛文章，其中</font></a><font style="vertical-align: inherit;">涉及很多细节。       </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们似乎正在解决相同的问题，但适用于不同的环境/世界。</font><font style="vertical-align: inherit;">NPM用于nodejs和volo，用于浏览器的bower。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事实是，您还可以使用NPM来管理浏览器的javascript和CSS。</font><font style="vertical-align: inherit;">没有什么可以阻止您这样做。</font><font style="vertical-align: inherit;">从这种意义上说，使用NPM对我而言比必须为同一目的管理两个不同的工具更为自然。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来凉亭有更多可用的软件包，至少对于更流行的软件包而言。</font><font style="vertical-align: inherit;">但是很快</font></font><a href="http://bugs.jquery.com/ticket/13119"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery也将直接在NPM中可用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可能所有其他库都将遵循相同的趋势。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，因为有一样的工具</font></font><strong><a href="http://browserify.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">browserify</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><a href="https://github.com/medikoo/modules-webmake"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webmake</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在那里，在浏览器的帮助使用节点模块，没有了一个真正的需要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">凉亭</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VOLO</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，除非他们提供的东西别人为你（一个特定的模块只存在于他们的注册表）。</font></font></p>

<p><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Volo</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bower</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者</font><font style="vertical-align: inherit;">也</font><font style="vertical-align: inherit;">都很好，但是从我的角度来看，如果您已经在使用NPM，则最好坚持使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使不使用browserify或webmake</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><strong><font style="vertical-align: inherit;">也可以使用NPM来管理客户端依赖性</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在我正在从事的大多数项目中，安装npm模块后，我会运行脚本将其部署到客户端应用程序使用它们的位置。</font><font style="vertical-align: inherit;">有时我会用grunt将该文件与其他js文件连接起来，有时我会直接从Web应用程序的模板文件中引用它。</font><font style="vertical-align: inherit;">无论如何，这是个人喜好。</font><font style="vertical-align: inherit;">其他人可能会发现Bower或Volo更易于使用，因为它们更自然地适合其工作流程。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
