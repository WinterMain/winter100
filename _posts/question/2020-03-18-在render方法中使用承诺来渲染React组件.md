---
layout: question
title:  在render方法中使用承诺来渲染React组件
date:   2020-03-18T07:43:20.000Z
description: 我有一个组件，它以道具的形式获取项目map的集合，并将其作为呈现为父组件的子代的组件的集合。我们使用存储WebSQL为字节数组的图像。在map函数中，我从...
img: 
author: JinJinSam
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个组件，它以道具的形式获取项目</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的集合，并将其作为呈现为父组件的子代的组件的集合。</font><font style="vertical-align: inherit;">我们使用存储</font></font><code>WebSQL</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为字节数组的</font><font style="vertical-align: inherit;">图像</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数中，我从项目中获取图像ID，并异步调用，</font></font><code>DAL</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取图像的字节数组。</font><font style="vertical-align: inherit;">我的问题是我不能将诺言传播到React中，因为它不是设计来处理渲染中的诺言的（无论如何我还是不能说的）。</font><font style="vertical-align: inherit;">我来自</font></font><code>C#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景，所以我猜我在寻找类似</font></font><code>await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字的内容来重新同步分支代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数看起来像这样（简化）：</font></font></p>

<pre><code>var items = this.props.items.map(function (item) {<font></font>
        var imageSrc = Utils.getImageUrlById(item.get('ImageId')); // &lt;-- this contains an async call<font></font>
        return (<font></font>
            &lt;MenuItem text={item.get('ItemTitle')}<font></font>
                      imageUrl={imageSrc} /&gt;<font></font>
       );<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>getImageUrlById</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法如下所示：</font></font></p>

<pre><code>getImageUrlById(imageId) {<font></font>
    return ImageStore.getImageById(imageId).then(function (imageObject) { //&lt;-- getImageById returns a promise<font></font>
       var completeUrl = getLocalImageUrl(imageObject.StandardConImage);<font></font>
       return completeUrl;<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是行不通的，但是我不知道需要进行哪些修改才能使其正常工作。</font><font style="vertical-align: inherit;">我尝试向链中添加另一个Promise，但是由于我的render函数返回一个Promise而不是合法的JSX，因此出现错误。</font><font style="vertical-align: inherit;">我当时在想，也许我需要利用一种</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期方法来获取数据，但是由于我需要</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经存在该方法，所以我不知道该在哪里进行操作。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Near</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法应该从渲染UI </font></font><code>this.props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以异步加载数据，则可以使用</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存储</font></font><code>imageId: imageUrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的映射。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在您的</font></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法中，您可以</font></font><code>imageUrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font><font style="vertical-align: inherit;">填充</font></font><code>imageId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后，</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过渲染</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，   </font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">方法应该是纯粹而简单的</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，</font></font><code>this.state.imageUrls</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步填充了，因此渲染的图像列表项在获取其网址后将一一显示。</font><font style="vertical-align: inherit;">您还可以</font></font><code>this.state.imageUrls</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用所有图片ID或索引（不带网址）</font><font style="vertical-align: inherit;">初始化</font><font style="vertical-align: inherit;">，这样您可以在加载图片时显示加载器。</font></font></p>

<pre><code>constructor(props) {<font></font>
    super(props)<font></font>
    this.state = {<font></font>
        imageUrls: []<font></font>
    };<font></font>
}<font></font>
<font></font>
componentDidMount() {<font></font>
    this.props.items.map((item) =&gt; {<font></font>
        ImageStore.getImageById(item.imageId).then(image =&gt; {<font></font>
            const mapping = {id: item.imageId, url: image.url};<font></font>
            const newUrls = this.state.imageUrls.slice();<font></font>
            newUrls.push(mapping);<font></font>
<font></font>
            this.setState({ imageUrls: newUrls });<font></font>
        })<font></font>
    });<font></font>
}<font></font>
<font></font>
render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        {this.state.imageUrls.map(mapping =&gt; (<font></font>
            &lt;div&gt;id: {mapping.id}, url: {mapping.url}&lt;/div&gt;<font></font>
        ))}<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
