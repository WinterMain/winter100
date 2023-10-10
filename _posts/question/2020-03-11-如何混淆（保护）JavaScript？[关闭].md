---
layout: question
title:  如何混淆（保护）JavaScript？\[关闭\]
date:   2020-03-11T04:15:35.000Z
description:                                                                          ...
img: 
author: 老丝猪猪小卤蛋
category: question
answer: 21
tags: JavaScript
topic: JavaScript
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，使其仅通过</font></font><a href="/posts/194397/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来关注一个问题</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2014-01-08 22：20：15Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想制作一个不是开源的JavaScript应用程序，因此我想学习如何混淆我的JS代码？</font><font style="vertical-align: inherit;">这可能吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第648篇《如何混淆（保护）JavaScript？[关闭]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.anotherchris.net/tools/online-javascript-minifier/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这缩小</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不会混淆。</font><font style="vertical-align: inherit;">如果您不想使用命令行Java，则可以将javascript粘贴到网络表单中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用JavaScript库，请考虑与Closure Compiler的Advanced模式编译兼容（经过少量修改）的Dojo Toolkit。</font></font></p>

<p><a href="http://dojo-toolkit.33424.n3.nabble.com/file/n2636749/Using_the_Dojo_Toolkit_with_the_Closure_Compiler.pdf?by-user=t" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dojo –唯一与Closure编译器兼容的JavaScript库</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Closure Advanced模式编译的代码几乎不可能进行反向工程，甚至无法通过美化程序进行处理，因为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整个</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码库（包括库）都被混淆了。</font><font style="vertical-align: inherit;">平均而言，它也小25％。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过精简的JavaScript代码（YUI Compressor，Uglify等）在经过美化后很容易进行逆向工程。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个工具</font></font><a href="http://javascript-source.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript Obfuscator</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在HTML5游戏中使用了它，不仅使它的大小从950KB减小到150KB，而且使源代码变得不可读，关闭编译器和压缩器是可逆的，我个人也不知道如何逆转这种混淆。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Sam神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我过去曾经使用过，而且做得很好。</font><font style="vertical-align: inherit;">它不是免费的，但您绝对应该看看。</font></font><br>
<a href="http://www.stunnix.com/prod/jo" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript混淆器和编码器</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您绝对应该考虑看看</font></font><a href="http://www.obfuscriptor.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Obfuscriptor</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我超越了从其他工具（例如</font></font><a href="http://developer.yahoo.com/yui/compressor/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI Compressor</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://closure-compiler.appspot.com/home" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Closure）中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到的典型Javascript缩小技巧</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混淆的代码看起来更像是加密的。</font><font style="vertical-align: inherit;">不像我以前见过的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY宝儿神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为JavaScript / HTML / CSS混淆器/压缩器，您还可以尝试</font></font><a href="http://digua.sf.net" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Patu Digua</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您尝试过</font></font><a href="http://www.bananascript.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bananascript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">它产生高度压缩且完全不可读的代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在对Java脚本混淆使用Closure-Compiler实用程序。</font><font style="vertical-align: inherit;">它使代码最小化，并且具有更多的混淆选项。</font><font style="vertical-align: inherit;">可以从以下网址的Google代码获得此实用程序：</font></font><br>
<a href="http://code.google.com/closure/compiler" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭工具</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是现在有几天我听到了很多UglifyJS的信息。</font><font style="vertical-align: inherit;">您可以在Closure Compiler和UglifyJS之间找到各种比较，其中Uglify似乎是赢家。</font></font><br>
<a href="http://badassjs.com/post/971960912/uglifyjs-a-fast-new-javascript-compressor-for-node-js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UglifyJS：一种适用于Node.js的快速新型JavaScript压缩器，与封闭版本相当</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很快我会给UglifyJS一个机会。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小宇宙伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">院长爱德华的Packer是出色的混淆器，尽管它主要混淆代码，而不是代码中可能包含的任何字符串元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅：</font></font><a href="http://jscompress.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Online Javascript Compression Tool，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   然后从下拉列表中选择Packer（Dean Edwards）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Sam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的印象是，有些企业（例如：JackBe）将加密的JavaScript代码放在* .gif文件而不是JS文件中，作为对混淆的一种附加措施。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用</font></font><a href="http://www.jasob.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jasob</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多年了，它是最好的混淆器。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它具有高级UI，但仍然直观且易于使用。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它还将处理HTML和CSS文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用它的最好办法是前缀所有的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">私人</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的东西，如下划线变量，然后使用</font></font><code>sort</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能组它们放在一起，并</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们关闭作为模糊的目标。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户仍然可以查看源，但它更难以破解当你的私有变量是由类似转换</font></font><code>_sUserPreferredNickName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引擎将自动计算目标变量的数量，并对其进行优先级排序以获取最大压缩率。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不为Jasob工作，而提倡一些友善的建议也无济于事。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
缺点是它不是免费的，有点贵，但是当与其他替代品堆叠在一起时仍然值得-“免费”选项甚至还差得很远。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议先使用诸如YUI Compressor之类的东西进行压缩，然后再使用诸如</font><a href="http://www.javascriptobfuscator.com/" rel="noreferrer"><font style="vertical-align: inherit;">http://www.javascriptobfuscator.com/之</font></a><font style="vertical-align: inherit;">类的所有字符串和数字将其转换为十六进制值</font></font><a href="http://www.javascriptobfuscator.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，代码将几乎变得难以理解，我认为在此阶段，黑客重新制定代码的时间要比他从头开始重写的时间更长。</font><font style="vertical-align: inherit;">重写和克隆实际上是您无法停止的。</font><font style="vertical-align: inherit;">毕竟我们是自由人！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋理查德Tony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于Javascript的非开源应用程序非常愚蠢。</font><font style="vertical-align: inherit;">Javascript是一种客户端解释型语言。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS模糊处理通常是为了减小脚本的大小，而不是“保护”脚本。</font><font style="vertical-align: inherit;">如果您不希望公开代码，则Java语言不是正确的语言。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">周围有很多工具，但是出于某种原因，大多数工具的名称中都带有“ compressor”（压缩器）（或“ minifier”）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无法保护客户端代码：只需在Google Chrome浏览器上按F12键，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">暂停javascript执行</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您将获得所有字符串，即使是加密的字符串。</font></font><a href="http://jsbeautifier.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">美化</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><a href="http://esprima.org/demo/rename.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并重命名变量</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您将获得几乎原始的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在编写服务器端javascript（即NodeJS），则担心有人入侵您的服务器，并希望使黑客工作更加困难，给您更多的时间来恢复访问权限，然后使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javacript编译器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要在Advanced Compilation上使用Closure Compiler，因为它是重命名所有变量的唯一工具，即使这些变量在多个文件/模块中使用也是如此。</font><font style="vertical-align: inherit;">但这只是一个问题：仅当您以</font></font><a href="https://developers.google.com/closure/compiler/docs/api-tutorial3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编码风格进行</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写时，它才有效</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">成天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><a href="http://www.jscrambler.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JScrambler</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我最近试了一下，对此印象深刻。</font><font style="vertical-align: inherit;">它为那些不太关心细节而只想快速完成的人提供了一组带有预定义设置的混淆模板。</font><font style="vertical-align: inherit;">您还可以通过选择所需的任何转换/技术来创建自定义混淆。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与我针对YUI Compressor建议的其他大多数答案相反；</font><font style="vertical-align: inherit;">您应该使用</font></font><a href="http://code.google.com/closure/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Closure</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不是因为它压缩得更多，而是因为它会捕获javascript错误（例如</font></font><code>a = [1,2,3,];</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使IE陷入困境）之类的主要原因。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释语言的问题在于，您发送源代码以使它们正常工作（除非您有用于字节码的编译器，但同样，反编译是非常琐碎的）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您不想牺牲性能，则只能对变量和函数名进行操作。</font><font style="vertical-align: inherit;">用a，b ... aa，ab ...或a101，a102等替换它们。当然，请尽可能多地删除空间/换行符（这就是所谓的JS压缩器所做的事情）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果您必须对字符串进行加密和实时解密，则混淆字符串会影响性能。</font><font style="vertical-align: inherit;">再加上JS调试器可以显示最终值...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋理查德Tony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以混淆所有想要的javascript源，但是由于要求所有源代码都必须在客户端计算机上实际运行，因此它始终是可逆向工程的……我能想到的最好选择是完成所有处理使用服务器端代码，而javascript所做的所有客户端代码就是将处理请求发送到服务器本身。</font><font style="vertical-align: inherit;">否则，任何人都将始终能够跟踪代码正在执行的所有操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人提到base64是为了保护字符串安全。</font><font style="vertical-align: inherit;">这是一个可怕的主意。</font><font style="vertical-align: inherit;">想要对代码进行反向工程的人员类型可以立即识别出Base64。</font><font style="vertical-align: inherit;">他们要做的第一件事是将其取消编码并查看其内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混淆：</font></font></strong></p>

<p><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用</font></font><a href="http://yuilibrary.com/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI Compressor</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是一个非常流行的工具，由Yahoo UI团队构建，增强和维护。</font></font></strike></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用：</font></font></p>

<ul>
<li><a href="http://closure-compiler.appspot.com/home" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Closure编译器</font></font></a></li>
<li><a href="http://marijnhaverbeke.nl/uglifyjs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UglifyJS</font></font></a></li>
</ul>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：这个问题最初是在10多年前提出的，并且不再维护YUI。</font><font style="vertical-align: inherit;">Google Closure编译器仍在使用，并且UglifyJS可以通过节点包管理器在本地运行：</font></font><code>npm install -g uglify-js</code></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">私有字符串数据：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将字符串值设为私有是另一个问题，而混淆并不会带来太大好处。</font><font style="vertical-align: inherit;">当然，通过将源打包成乱码，最小的混乱，您可以</font><font style="vertical-align: inherit;">通过</font><strong><font style="vertical-align: inherit;">模糊</font></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得轻便的</font><strong><font style="vertical-align: inherit;">安全性</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">大多数情况下，查看源的是您的用户，客户端上的字符串值是供他们使用的，因此通常不需要那种私有字符串值。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确实拥有一个您不希望用户看到的价值，那么您将有两个选择。</font><font style="vertical-align: inherit;">首先，您可以进行某种加密，该加密在页面加载时解密。</font><font style="vertical-align: inherit;">那可能是最安全的选择之一，但也可能是很多不必要的工作。</font><font style="vertical-align: inherit;">您可能可以对一些字符串值进行base64编码，这会更容易..但是真正想要这些字符串值的人可以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松地对其进行解码</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">加密是真正阻止任何人访问您的数据的唯一方法，大多数人发现加密比他们需要的安全性更高。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边注：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">众所周知，JavaScript中的混淆会导致一些错误。</font><font style="vertical-align: inherit;">混淆器对此有所改善，但是许多公司认为他们可以从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">压缩</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">压缩中获得</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">足够的好处</font><font style="vertical-align: inherit;">，而增加混淆所带来的节省</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不总是值得的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您想保护自己的源代码，也许您会认为值得这样做，只是使您的代码更难阅读。</font></font><a href="http://www.crockford.com/javascript/jsmin.html" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSMin</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个很好的选择。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混淆永远无法真正起作用。</font><font style="vertical-align: inherit;">对于任何真正想要获取您的代码的人来说，这只是一个减速。</font><font style="vertical-align: inherit;">更糟糕的是，它使您的用户无法修复错误（并将修复发送回给您），并使您更难于在现场诊断问题。</font><font style="vertical-align: inherit;">浪费您的时间和金钱。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与律师讨论知识产权法以及您的法律选择是什么。</font></font><a href="https://en.wikipedia.org/wiki/Open-source_license" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“开放源代码”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不意味着“人们可以阅读源代码”。</font><font style="vertical-align: inherit;">相反，开放源代码是一种特殊的许可模型，授予许可自由使用和修改您的代码。</font><font style="vertical-align: inherit;">如果您不授予此类许可，那么复制您的代码的人将受到侵犯，并且（在世界大多数地方）您可以通过法律选择予以阻止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正保护代码的唯一方法是不发布代码。</font><font style="vertical-align: inherit;">将重要的代码移到服务器端，并让您的公共Javascript代码对它进行Ajax调用。</font></font></p>

<p><a href="https://stackoverflow.com/questions/232736/code-obfuscator-for-php"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里查看有关混淆器的完整答案。</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很惊讶没有人提到Google的</font></font><a href="http://code.google.com/closure/compiler/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Closure Compiler</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它不仅会缩小/压缩，还会进行分析以查找和删除未使用的代码，并进行重写以实现最大程度的缩小。</font><font style="vertical-align: inherit;">它还可以进行类型检查并警告语法错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JQuery最近从YUI Compresser切换到Closure Compiler，并且看到了“ </font></font><a href="http://twitter.com/jeresig/status/5462879648" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坚实的进步</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
