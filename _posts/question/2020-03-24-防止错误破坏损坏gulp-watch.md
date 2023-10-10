---
layout: question
title:  防止错误破坏/损坏gulp watch
date:   2020-03-24T03:01:18.000Z
description: 我正在运行gulp 3.6.2，并具有从在线示例中设置的以下任务gulp.task('watch', \['default'\], function ()...
img: 
author: Itachi
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在运行gulp 3.6.2，并具有从在线示例中设置的以下任务</font></font></p>

<pre><code>gulp.task('watch', ['default'], function () {<font></font>
  gulp.watch([<font></font>
    'views/**/*.html',        <font></font>
    'public/**/*.js',<font></font>
    'public/**/*.css'        <font></font>
  ], function (event) {<font></font>
    return gulp.src(event.path)<font></font>
      .pipe(refresh(lrserver));<font></font>
  });<font></font>
<font></font>
  gulp.watch(['./app/**/*.coffee'],['scripts']);<font></font>
  gulp.watch('./app/**/*.scss',['scss']);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我的CoffeeScript gulp手表出现错误时，手表就会停止-显然不是我想要的。</font></font></p>

<p><a href="https://github.com/gulpjs/gulp/issues/71" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他地方推荐的那样</font></font></a></p>

<pre><code>gulp.watch(['./app/**/*.coffee'],['scripts']).on('error', swallowError);<font></font>
gulp.watch('./app/**/*.scss',['scss']).on('error', swallowError);<font></font>
function swallowError (error) { error.end(); }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但它似乎不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应@Aperçu的回答，我修改了</font></font><code>swallowError</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法并尝试了以下操作：</font></font></p>

<pre><code>gulp.task('scripts', function () {<font></font>
  gulp.src('./app/script/*.coffee')<font></font>
    .pipe(coffee({ bare: true }))<font></font>
    .pipe(gulp.dest('./public/js'))<font></font>
    .on('error', swallowError);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动，然后在我的coffee文件中创建语法错误。</font><font style="vertical-align: inherit;">同样的问题：</font></font></p>

<pre><code>[gulp] Finished 'scripts' after 306 μs<font></font>
<font></font>
stream.js:94<font></font>
      throw er; // Unhandled stream error in pipe.<font></font>
            ^<font></font>
Error: W:\bariokart\app\script\trishell.coffee:5:1: error: unexpected *<font></font>
*<font></font>
^<font></font>
  at Stream.modifyFile (W:\bariokart\node_modules\gulp-coffee\index.js:37:33)<font></font>
  at Stream.stream.write (W:\bariokart\node_modules\gulp-coffee\node_modules\event-stream\node_modules\through\index.js:26:11)<font></font>
  at Stream.ondata (stream.js:51:26)<font></font>
  at Stream.EventEmitter.emit (events.js:95:17)<font></font>
  at queueData (W:\bariokart\node_modules\gulp\node_modules\vinyl-fs\node_modules\map-stream\index.js:43:21)<font></font>
  at next (W:\bariokart\node_modules\gulp\node_modules\vinyl-fs\node_modules\map-stream\index.js:71:7)<font></font>
  at W:\bariokart\node_modules\gulp\node_modules\vinyl-fs\node_modules\map-stream\index.js:85:7<font></font>
  at W:\bariokart\node_modules\gulp\node_modules\vinyl-fs\lib\src\bufferFile.js:8:5<font></font>
  at fs.js:266:14<font></font>
  at W:\bariokart\node_modules\gulp\node_modules\vinyl-fs\node_modules\graceful-fs\graceful-fs.js:104:5<font></font>
  at Object.oncomplete (fs.js:107:15)<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个简单的解决方案是</font></font><code>gulp watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bash（或sh）shell中</font><font style="vertical-align: inherit;">放入</font><font style="vertical-align: inherit;">无限循环。</font></font></p>

<p><code>while true; do gulp; gulp watch; sleep 1; done</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑JavaScript时，请将此命令的输出保存在屏幕上的可见区域。</font><font style="vertical-align: inherit;">当您的编辑导致错误时，Gulp将崩溃，打印其堆栈跟踪，等待一秒钟，然后继续查看源文件。</font><font style="vertical-align: inherit;">然后，您可以更正语法错误，Gulp将通过打印正常输出或再次崩溃（然后恢复）来指示编辑是否成功。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将在Linux或Mac终端中工作。</font><font style="vertical-align: inherit;">如果您使用的是Windows，请使用Cygwin或Ubuntu Bash（Windows 10）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
