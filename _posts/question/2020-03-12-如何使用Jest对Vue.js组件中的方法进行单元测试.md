---
layout: question
title:  如何使用Jest对Vue.js组件中的方法进行单元测试
date:   2020-03-12T09:44:16.000Z
description: 我正在尝试对组件方法进行单元测试。这里的问题并未提出如何从单元测试中访问组件方法。具体来说，给定下面的Vue组件，如何doSomeWork()从单元测...
img: 
author: StafanDavaid
category: question
answer: 0
tags: 单元测试
topic: 单元测试
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试对组件方法进行单元测试。</font></font><a href="https://stackoverflow.com/questions/51520835/vue-and-jest-unit-testing-components"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的问题</font><font style="vertical-align: inherit;">并未提出如何从单元测试中访问组件方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体来说，给定下面的Vue组件，如何</font></font><code>doSomeWork()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从单元测试中</font><font style="vertical-align: inherit;">访问</font><font style="vertical-align: inherit;">？</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue组件：</font></font></em></p>

<pre class="lang-html prettyprint-override"><code>&lt;template&gt;<font></font>
    &lt;div id="ThisStuff"&gt;<font></font>
        &lt;span&gt;<font></font>
            Some other stuff is going on here<font></font>
        &lt;/span&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    import foo from 'bar'<font></font>
<font></font>
    export default {<font></font>
        props: {<font></font>
            ObjectWithStuffInIt: [<font></font>
                {<font></font>
                    id: 1<font></font>
                    bar: false<font></font>
                },<font></font>
                {<font></font>
                    id: 2<font></font>
                    bar: false<font></font>
                },<font></font>
            ]<font></font>
        },<font></font>
        data: {<font></font>
            foo: "foo"<font></font>
        },<font></font>
        methods: {<font></font>
            doSomeWork: function() {<font></font>
                for (var i = 0; i &lt; ObjectWithStuffInIt.length; i++) { <font></font>
                    if (foo === "diddly") {<font></font>
                        ObjectWithStuffInIt[i].bar = true;<font></font>
                    }<font></font>
                }<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的测试代码：</font></font></em></p>

<pre class="lang-js prettyprint-override"><code>import {createLocalVue, shallow} from 'vue-test-utils'<font></font>
import ThisVueFile.test.js from '../../thisPlace/ThatPlace/ThisVueFile.vue'<font></font>
import Vuex from 'vuex'<font></font>
<font></font>
const localVue = createLocalVue()<font></font>
localVue.use(Vuex);<font></font>
<font></font>
describe('ThisVueFile.test.js', () =&gt; {<font></font>
    let user;<font></font>
    let store;<font></font>
<font></font>
    beforeEach(() =&gt; {<font></font>
        let getters = {<font></font>
            user: () =&gt; user<font></font>
        }<font></font>
<font></font>
        store = new Vuex.Store({ getters })<font></font>
    })<font></font>
<font></font>
    // I need to fill propsData: with some local data here <font></font>
    //     because it is server data<font></font>
    // I need to have access to the method<font></font>
    // I need to use local data for `foo` in the test. <font></font>
<font></font>
    it(' When foo is set to -diddly- then set bar to true ', () =&gt; {<font></font>
        foo = "diddly";<font></font>
        // run the method in the component here <font></font>
        doSomeWork();<font></font>
<font></font>
        expect(OjbectWithStuffInIt[0].bar.equals(true));<font></font>
    })<font></font>
})<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1238篇《如何使用Jest对Vue.js组件中的方法进行单元测试》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
