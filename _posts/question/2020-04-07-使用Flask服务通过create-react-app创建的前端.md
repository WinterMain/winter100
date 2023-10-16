---
layout: question
title:  使用Flask服务通过create-react-app创建的前端
date:   2020-04-07T03:13:45.000Z
description: 我有一个带有API路由的Flask后端，可通过使用create-react-app创建的React单页应用程序访问。当使用create-react-app...
img: 
author: 小胖Gil
category: question
answer: 1
tags: python React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个带有API路由的Flask后端，可通过使用create-react-app创建的React单页应用程序访问。</font><font style="vertical-align: inherit;">当使用create-react-app开发服务器时，我的Flask后端可以工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从我的Flask服务器</font><font style="vertical-align: inherit;">提供内置的（使用</font><font style="vertical-align: inherit;">）静态React应用程序。</font><font style="vertical-align: inherit;">构建React应用会导致以下目录结构：</font></font></p>

<pre><code>- build<font></font>
  - static<font></font>
    - css<font></font>
        - style.[crypto].css<font></font>
        - style.[crypto].css.map<font></font>
    - js<font></font>
        - main.[crypto].js<font></font>
        - main.[crypto].js.map<font></font>
  - index.html<font></font>
  - service-worker.js<font></font>
  - [more meta files]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>[crypto]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我的意思是在构建时所产生的随机生成的字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">收到</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件后，浏览器将发出以下请求：</font></font></p>

<pre><code>- GET /static/css/main.[crypto].css<font></font>
- GET /static/css/main.[crypto].css<font></font>
- GET /service-worker.js<font></font>
</code></pre>

<p>How should I serve these files? I came up with this:</p>

<pre><code>from flask import Blueprint, send_from_directory<font></font>
<font></font>
static = Blueprint('static', __name__)<font></font>
<font></font>
@static.route('/')<font></font>
def serve_static_index():<font></font>
    return send_from_directory('../client/build/', 'index.html')<font></font>
<font></font>
@static.route('/static/&lt;path:path&gt;') # serve whatever the client requested in the static folder<font></font>
def serve_static(path):<font></font>
    return send_from_directory('../client/build/static/', path)<font></font>
<font></font>
@static.route('/service-worker.js')<font></font>
def serve_worker():<font></font>
    return send_from_directory('../client/build/', 'service-worker.js')<font></font>
</code></pre>

<p>This way, the static assets are successfully served.</p>

<p>On the other hand, I could incorporate this with the built-in Flask static utilities. But I do not understand how to configure this. </p>

<p>Is my solution robust enough? Is there a way to use built-in Flask features to serve these assets? Is there a better way to use create-react-app?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4046篇《使用Flask服务通过create-react-app创建的前端》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案对我不起作用。</font><font style="vertical-align: inherit;">我用过了</font></font></p>

<pre class="lang-py prettyprint-override"><code>import os<font></font>
<font></font>
from flask import Flask, send_from_directory, jsonify, render_template, request<font></font>
<font></font>
from server.landing import landing as landing_bp<font></font>
from server.api import api as api_bp<font></font>
<font></font>
app = Flask(__name__, static_folder="../client/build")<font></font>
app.register_blueprint(landing_bp, url_prefix="/landing")<font></font>
app.register_blueprint(api_bp, url_prefix="/api/v1")<font></font>
<font></font>
<font></font>
@app.route("/")<font></font>
def serve():<font></font>
    """serves React App"""<font></font>
    return send_from_directory(app.static_folder, "index.html")<font></font>
<font></font>
<font></font>
@app.route("/&lt;path:path&gt;")<font></font>
def static_proxy(path):<font></font>
    """static folder serve"""<font></font>
    file_name = path.split("/")[-1]<font></font>
    dir_name = os.path.join(app.static_folder, "/".join(path.split("/")[:-1]))<font></font>
    return send_from_directory(dir_name, file_name)<font></font>
<font></font>
<font></font>
@app.errorhandler(404)<font></font>
def handle_404(e):<font></font>
    if request.path.startswith("/api/"):<font></font>
        return jsonify(message="Resource not found"), 404<font></font>
    return send_from_directory(app.static_folder, "index.html")<font></font>
<font></font>
<font></font>
@app.errorhandler(405)<font></font>
def handle_405(e):<font></font>
    if request.path.startswith("/api/"):<font></font>
        return jsonify(message="Mehtod not allowed"), 405<font></font>
    return e<font></font>
<font></font>
<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
