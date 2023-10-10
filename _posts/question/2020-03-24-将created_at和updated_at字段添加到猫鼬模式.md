---
layout: question
title:  将created_at和updated_at字段添加到猫鼬模式
date:   2020-03-24T10:06:26.000Z
description: 有没有一种方法可以将created_at和updated_at字段添加到猫鼬模式，而不必每次调用新的MyModel（）时都将其传递？created_a...
img: 
author: L斯丁
category: question
answer: 5
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以将created_at和updated_at字段添加到猫鼬模式，而不必每次调用新的MyModel（）时都将其传递？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">created_at字段将是一个日期，并且仅在创建文档时添加。</font><font style="vertical-align: inherit;">每当在文档上调用save（）时，updated_at字段都将被更新为新日期。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在模式中尝试过此操作，但是除非我明确添加，否则该字段不会显示：</font></font></p>

<pre><code>var ItemSchema = new Schema({<font></font>
    name    : { type: String, required: true, trim: true }<font></font>
  , created_at    : { type: Date, required: true, default: Date.now }<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用的</font></font><a href="https://github.com/tblobaum/mongoose-troop#timestamp" rel="nofollow"><code>timestamp</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件</font></font><code>mongoose-troop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此行为添加到任何架构。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我实现创建和更新的方式。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的架构中，我添加了创建和更新的内容，如下所示：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   / **</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
     *文章架构</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
     * /</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    var ArticleSchema = new Schema（{</font></font><font></font>
        <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建：{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            类型：日期，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            默认值：Date.now</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        }，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        更新： {</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            类型：日期，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            默认值：Date.now</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        }，</font></font></b><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        标题：{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            类型：字符串，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            默认值：''，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            修剪：是的，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            必填：“标题不能为空”</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        }，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        内容：{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            类型：字符串，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            默认值：''，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            修剪：真</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        }，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        用户：{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            类型：Schema.ObjectId，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            参考：“用户”</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        }</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    }）;</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在我添加的文章控制器内的文章更新方法中：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ **</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
     *更新文章</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
     * /</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    exports.update = function（req，res）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        var article = req.article;</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        article = _.extend（article，req.body）;</font></font><font></font>
        <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">article.set（“ updated”，Date.now（））;</font></font></b><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        article.save（function（err）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            如果（错误）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                返回res.status（400）.send（{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    消息：errorHandler.getErrorMessage（err）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                }）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            }其他{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                res.json（文章）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            }</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        }）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    };</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">粗体部分是您感兴趣的部分。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的模型架构中，只需添加属性</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间戳</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并为其分配值</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即可，如下所示：</font></font></p>

<pre><code>var ItemSchema = new Schema({<font></font>
   name :  { type: String, required: true, trim: true },<font></font>
},{timestamps : true}<font></font>
);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>timestamps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对您的模式</font><font style="vertical-align: inherit;">使用内置</font><font style="vertical-align: inherit;">选项。</font></font></p>

<pre><code>var ItemSchema = new Schema({<font></font>
    name: { type: String, required: true, trim: true }<font></font>
},<font></font>
{<font></font>
    timestamps: true<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将自动将</font></font><code>createdAt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>updatedAt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到您的架构。</font></font></p>

<p><a href="http://mongoosejs.com/docs/guide.html#timestamps"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://mongoosejs.com/docs/guide.html#timestamps</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用</font></font><code>update()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>findOneAndUpdate()</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><code>{upsert: true}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用 </font></font><code>$setOnInsert</code></p>

<pre><code>var update = {<font></font>
  updatedAt: new Date(),<font></font>
  $setOnInsert: {<font></font>
    createdAt: new Date()<font></font>
  }<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
