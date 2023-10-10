---
layout: question
title:  Webpack 4从带有副作用的程序包中期望什么：false
date:   2020-03-24T10:21:47.000Z
description: Webpack 4 has added a new feature  it now supports a sideEffects flag in the ...
img: 
author: 村村番长
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>Webpack 4 has added a new feature: it now supports a <code>sideEffects</code> flag in the <code>package.json</code> of the modules it is bundling. </p>

<p>From <a href="https://medium.com/webpack/webpack-4-released-today-6cdb994702d4" rel="noreferrer">Webpack 4: released today</a></p>

<blockquote>
  <p>Over the past 30 days we have worked closely with each of the frameworks to ensure that they are ready to support webpack 4 in their respective cli’s etc. Even popular library’s like lodash-es, RxJS are supporting the sideEffects flag, so by using their latest version you will see instant bundle size decreases out of the box.</p>
</blockquote>

<p>From <a href="https://github.com/webpack/webpack/blob/0b13cf19a19fd64d176c77aecbbf00ec57966276/examples/side-effects/README.md" rel="noreferrer">Webpack docs</a></p>

<blockquote>
  <p>The "sideEffects": false flag in big-module's package.json indicates that the package's modules have no side effects (on evaluation) and only expose exports. This allows tools like webpack to optimize re-exports.</p>
</blockquote>

<p>Whilst the second link shows the results of using the flag, it doesn't clearly explain what constitutes a side-effect. ES6 includes the concept of side-effects for modules as outlined <a href="https://stackoverflow.com/questions/41127479/es6-import-for-side-effects-meaning">here</a>, but how does this relate to what Webpack considers side-effects.</p>

<p>In the context of the <code>sideEffects</code> flag, what does a module need to avoid to use <code>sideEffects:false</code> without issues, or conversly, what does a module need to do in order to use <code>sideEffects:false</code> without issues.</p>

<p>For completeness, despite @SeanLarkin's solid answer below, I would love to get clarification on the following:</p>

<ol>
<li><p>Obviously side-effects means something particular in fp and would include logging (console or elsewhere) and the throwing of errors. I'm assuming in this context these are perfectly acceptable?</p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块可以包含循环引用并且仍在使用</font></font><code>sideEffects: false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有任何方法可以验证或模块能够验证模块是否可以</font></font><code>sideEffects: false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试追查由于滥用而导致的错误？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他因素会阻止模块使用</font></font><code>sideEffects: false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p></li>
</ol></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack团队的肖恩！</font><font style="vertical-align: inherit;">我会尽力代替仍在处理中的文档，在这里回答您的问题！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据ECMA模块规范（我不会尝试查找链接，因此您必须在这里信任我，因为它被埋藏了）， </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当模块</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新导出</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有导出（无论使用或未使用）时，如果其中一个导出与另一个导出产生了副作用，则需要对其进行评估和执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我用照片创建了一个小场景，以更好地形象化此案例： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这张照片中，我们看到三个模块导入到一个文件中。</font><font style="vertical-align: inherit;">导入的模块然后</font><font style="vertical-align: inherit;">从该模块</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新导出</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://i.stack.imgur.com/Iqnqg.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Iqnqg.png" alt="重新导出的模块无副作用的示例"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在此处看到任何再导出都不会相互影响，因此（如果向webpack发出了信号），我们可以省略导出</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至可以不对其进行跟踪或使用（大小和构建时间性能优势）。</font></font></p>

<p><a href="https://i.stack.imgur.com/gOoAt.png" rel="noreferrer"><img src="https://i.stack.imgur.com/gOoAt.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然而，在这种情况下，我们看到出口</font></font><code>c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被“影响”，由当地国家的变化，因为它被重新分配给的总和</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">及</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，（这就是为什么这种情况的规范要求），我们需要两者都包括</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">及其任何依赖的成捆。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们选择“ sideEffects：false”作为节省编译时间和构建大小的一种方法，因为这使我们可以立即（显式）修剪开发人员/库作者知道没有副作用的导出（以牺牲一个属性为代价）。 package.json或另外2-3行的配置）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管从技术上来说，此示例非常原始，但是当您开始处理框架或库时，这些框架或库重新导出一堆模块以达到更高的开发人员体验级别（Three.js，Angular，lodash-es等），则在以下情况下性能提升显着（如果它们是sideEffect自由模块导出），则以这种方式标记它们。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他说明：</font></font></p>

<blockquote>
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，副作用是指fp中的某些特殊现象，包括日志记录（控制台或其他地方）和引发错误。</font><font style="vertical-align: inherit;">我假设在这种情况下，这些完全可以接受吗？</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试解决的情况下，可以。</font><font style="vertical-align: inherit;">只要针对模块导出创建的效果不会受到其他因素的影响，否则会导致修剪不可接受。</font></font></p>

<blockquote>
  <ol start="2">
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个模块可以包含循环引用并且仍然可以使用吗 </font></font><code>sideEffects: false?</code></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从理论上讲应该如此。</font></font></p>

<blockquote>
  <ol start="3">
  <li><font style="vertical-align: inherit;"></font><code>sideEffects: false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了试图追踪由于误用导致的错误之外</font><font style="vertical-align: inherit;">，还有没有其他方法可以验证模块是否可以使用</font><font style="vertical-align: inherit;">？</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道，但是这将是一个很好的工具。</font></font></p>

<blockquote>
  <ol start="4">
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他因素会阻止模块使用</font></font><code>sideEffects: false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果该属性不在中</font><font style="vertical-align: inherit;">，或者</font><font style="vertical-align: inherit;">未在中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义</font></font><code>module.rules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或者</font></font><code>mode: production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未设置（利用优化）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
