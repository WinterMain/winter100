---
layout: question
title:  防止在路线更改上提交Formik AutoSave
date:   2020-03-23T07:50:27.000Z
description: 我的应用程序具有带<AutoSave/>组件的表单。表单值更改后，此组件调用将提交。一切正常，但更改路线时，它会更改表单值并<AutoSave/>调用提交...
img: 
author: 乐米亚
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的应用程序具有带</font></font><a href="https://twitter.com/jaredpalmer/status/1134141652191404033?s=20" rel="nofollow noreferrer"><code>&lt;AutoSave/&gt;</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件的</font><font style="vertical-align: inherit;">表单</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">表单值更改后，此组件调用将提交。</font><font style="vertical-align: inherit;">一切正常，但更改路线时，它会更改表单值并</font></font><code>&lt;AutoSave/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用提交。</font><font style="vertical-align: inherit;">如何解决这个问题呢？</font><font style="vertical-align: inherit;">一种可能的解决方案是</font></font><code>&lt;AutoSave/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在更改路线时再次</font><font style="vertical-align: inherit;">安装</font><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><a href="https://codesandbox.io/s/quirky-bouman-7h663" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">密码箱</font></font></a></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动保存：</font></font></strong></p>

<pre><code>import React, { useEffect, useCallback } from 'react'<font></font>
import { useFormikContext } from 'formik'<font></font>
import debounce from 'lodash.debounce'<font></font>
<font></font>
const AutoSave = ({ debounceMs }) =&gt; {<font></font>
  const formik = useFormikContext()<font></font>
<font></font>
  const debouncedSubmit = useCallback(<font></font>
    debounce(formik.submitForm, debounceMs),<font></font>
    [formik.submitForm, debounceMs]<font></font>
  )<font></font>
<font></font>
  useEffect(() =&gt; debouncedSubmit, [debouncedSubmit, formik.values])<font></font>
<font></font>
  return &lt;&gt;{!!formik.isSubmitting &amp;&amp; "saving..."}&lt;/&gt;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的应用程式：</font></font></strong></p>

<pre><code>const App: FC = () =&gt; {<font></font>
  const {books} = getBooks() // [{id: 1, title: 'test', summary: 'test'}, ...]<font></font>
  const {query} = useRouter()<font></font>
<font></font>
  const handleSubmit = useCallback(async values =&gt; {<font></font>
    try {<font></font>
      await API.patch('/books', {id: query.book, ...values})<font></font>
    } catch (e) {}<font></font>
  }, [query.book])<font></font>
<font></font>
  return (<font></font>
    &lt;&gt;<font></font>
      &lt;span&gt;Books&lt;/span&gt;<font></font>
      {books.map(({id, title}, key) =&gt; (<font></font>
        &lt;Link key={key} href='/book/[book]' as={`/book/${id}`}&gt;<font></font>
          &lt;a&gt;{title}&lt;/a&gt;<font></font>
        &lt;/Link&gt;<font></font>
      ))}<font></font>
      {query.book &amp;&amp; (<font></font>
        &lt;MainForm  <font></font>
         book={books.find(book =&gt; book.id === query.book)}<font></font>
         handleSubmit={handleSubmit}/&gt;<font></font>
      )}<font></font>
    &lt;/&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MainForm：</font></font></strong></p>

<pre><code>type Props = {<font></font>
  book: BookProps // {id: string, title: string ...},<font></font>
  handleSubmit: (values) =&gt; Promise&lt;void&gt;<font></font>
}<font></font>
<font></font>
const MainForm: FC&lt;Props&gt; = ({book, handleSubmit}) =&gt; (<font></font>
  &lt;Formik <font></font>
    enableReinitialize <font></font>
    initialValues={{title: book.title, summary: book.summary}}<font></font>
    handleSubmit={values =&gt; handleSubmit(values)}&gt;<font></font>
    {() =&gt; (<font></font>
      &lt;Form&gt;<font></font>
        //...My fields...<font></font>
        &lt;AutoSave debounceMs={500}/&gt; // &lt;=== AutoSave with debounce<font></font>
      &lt;/Form&gt;<font></font>
    )}<font></font>
  &lt;/Formik&gt;<font></font>
)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2946篇《防止在路线更改上提交Formik AutoSave》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
