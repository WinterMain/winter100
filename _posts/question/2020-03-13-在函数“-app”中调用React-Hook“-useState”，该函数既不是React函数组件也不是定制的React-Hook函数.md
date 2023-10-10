---
layout: question
title:  在函数“ app”中调用React Hook“ useState”，该函数既不是React函数组件也不是定制的React Hook函数
date:   2020-03-12T16:26:37.000Z
description: 我正在尝试使用React钩子解决一个简单的问题const \[personState,setPersonState\] = useState({ Defi...
img: 
author: 阿飞神无
category: question
answer: 19
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用React钩子解决一个简单的问题</font></font></p>

<pre><code>const [personState,setPersonState] = useState({ DefinedObject });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有以下依赖性。</font></font></p>

<pre><code>"dependencies": {<font></font>
    "react": "^16.8.6",<font></font>
    "react-dom": "^16.8.6",<font></font>
    "react-scripts": "3.0.0"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我仍然收到以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">./src/App.js </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第7行：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  在函数“ app”中调用React Hook“ useState”，该函数既不是React函数组件也不是定制的React Hook函数react-hooks / rules-of-hooks</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第39行：</font><font style="vertical-align: inherit;">
  未定义</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  “状态”</font></font><br><font style="vertical-align: inherit;"></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索关键字以了解有关每个错误的更多信息。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件代码如下：</font></font></p>

<pre><code>import React, {useState} from 'react'; <font></font>
import './App.css'; <font></font>
import Person from './Person/Person'; <font></font>
<font></font>
const app = props =&gt; { <font></font>
    const [personState, setPersonSate] = useState({ person:[ {name:'bishnu',age:'32'}, {name:'rasmi',age:'27'}, {name:'fretbox',age:'4'} ], }); <font></font>
    return (<font></font>
        &lt;div className="App"&gt; <font></font>
            &lt;h2&gt;This is react&lt;/h2&gt; <font></font>
            &lt;Person name={personState.person[1].name} age="27"&gt;&lt;/Person&gt;<font></font>
            &lt;Person name={personState.person[2].name} age="4"&gt;&lt;/Person&gt; <font></font>
        &lt;/div&gt; ); <font></font>
    };<font></font>
    export default app;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人组成</font></font></p>

<pre><code>import React from 'react'; <font></font>
<font></font>
const person = props =&gt; { <font></font>
    return( <font></font>
        &lt;div&gt;<font></font>
            &lt;h3&gt;i am {props.name}&lt;/h3&gt;<font></font>
            &lt;p&gt;i am {props.age} years old&lt;/p&gt;<font></font>
            &lt;p&gt;{props.children}&lt;/p&gt;<font></font>
        &lt;/div&gt; <font></font>
    )<font></font>
};<font></font>
<font></font>
export default person; <font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1343篇《在函数“ app”中调用React Hook“ useState”，该函数既不是React函数组件也不是定制的React Hook函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要使用箭头功能创建功能组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为以下示例之一执行：</font></font></p>

<pre><code>function MyComponent(props) {<font></font>
  const [states, setStates] = React.useState({ value: '' });<font></font>
<font></font>
  return (<font></font>
    &lt;input<font></font>
      type="text"<font></font>
      value={states.value}<font></font>
      onChange={(event) =&gt; setStates({ value: event.target.value })}<font></font>
    /&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>//IMPORTANT: Repeat the function name<font></font>
<font></font>
const MyComponent = function MyComponent(props) { <font></font>
  const [states, setStates] = React.useState({ value: '' });<font></font>
<font></font>
  return (<font></font>
    &lt;input<font></font>
      type="text"<font></font>
      value={states.value}<font></font>
      onChange={(event) =&gt; setStates({ value: event.target.value })}<font></font>
    /&gt;<font></font>
  );<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有问题</font></font><code>"ref"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（可能在循环中），则解决方案是使用</font></font><code>forwardRef()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// IMPORTANT: Repeat the function name<font></font>
// Add the "ref" argument to the function, in case you need to use it.<font></font>
<font></font>
const MyComponent = React.forwardRef( function MyComponent(props, ref) {<font></font>
  const [states, setStates] = React.useState({ value: '' });<font></font>
<font></font>
  return (<font></font>
    &lt;input<font></font>
      type="text"<font></font>
      value={states.value}<font></font>
      onChange={(event) =&gt; setStates({ value: event.target.value })}<font></font>
    /&gt;<font></font>
  );<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1：将文件名src / App.js更改为src / app.js</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤2：点击“是”以“更新app.js的导入”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤3：再次重新启动服务器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用const App代替const app</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您需要将组件的FirstLetter大写，在这种情况下，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">person</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Person</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图复制您的代码，以期发现问题。</font><font style="vertical-align: inherit;">由于您没有分享如何调用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件，因此我只能看到一种导致问题的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是CodeSandbox中的链接：</font></font><a href="https://codesandbox.io/s/restless-cookies-hrms5" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Invalid hook call</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么？</font><font style="vertical-align: inherit;">由于下面的代码是错误的：</font></font></p>

<pre><code>ReactDOM.render(App(), rootElement);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该是：</font></font></p>

<pre><code>ReactDOM.render(&lt;App /&gt;, rootElement);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">欲了解更多信息，您应该阅读</font></font><a href="https://reactjs.org/docs/hooks-rules.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子规则-React</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如Yuki已经指出的，解决方案是大写组件名称。</font><font style="vertical-align: inherit;">请务必注意，不仅“大写” App组件需要大写，而且所有组件也都必须大写：</font></font></p>

<pre><code>const Person = () =&gt; {return ...};<font></font>
<font></font>
export default Person;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是由于eslint-plugin-react-hooks包</font></font><a href="https://github.com/facebook/react/blob/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js#L49" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所致</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，特别是</font><font style="vertical-align: inherit;">RulesOfHooks.js脚本中的</font><a href="https://github.com/facebook/react/blob/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js#L49" rel="nofollow noreferrer"><font style="vertical-align: inherit;">isComponentName（）</font></a><font style="vertical-align: inherit;">函数所致。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="https://reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hooks常见问题解答的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方解释</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们提供了一个ESLint插件，该插件可以强制执行Hooks规则以避免错误。</font><font style="vertical-align: inherit;">它假定任何以“ use”开头且紧随其后的是大写字母的函数都是“挂钩”。</font><font style="vertical-align: inherit;">我们认识到这种启发式方法不是完美的，并且可能会有一些误报，但是如果没有整个生态系统的约定，就无法使Hooks正常工作-较长的名称将使人们不愿采用Hooks或遵循约定。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端MandyJinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JSX中，小写标记名称被视为html本机组件。</font><font style="vertical-align: inherit;">为了将React函数识别为React组件，需要大写名称。</font></font></p>

<pre><code>Capitalized types indicate that the JSX tag is referring to a React component. These tags get compiled into a direct reference to the named variable, so if you use the JSX &lt;Foo /&gt; expression, Foo must be in scope.
</code></pre>

<p><a href="https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德村村小宇宙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法很简单，正确的“ app”并用大写第一个字符写“ App”。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaidNear</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将应用程序大写为App肯定会起作用。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数的第一个字符应为大写</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿EvaL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，但应用程序却没有。</font><font style="vertical-align: inherit;">我有一个自定义类，但使用小写字母开头的函数名称，并且还收到错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将函数名称的第一个字母和导出行更改为CamelCase，错误消失了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，最终结果是这样的：</font></font></p>

<pre><code>function Document() {<font></font>
....<font></font>
}<font></font>
export default Document;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这解决了我的问题。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯梅小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React组件名称应</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大写</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，自定义钩子函数应以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">use</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">开头，</font><font style="vertical-align: inherit;">以标识为</font><font style="vertical-align: inherit;">React </font><font style="vertical-align: inherit;">钩子函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，将您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">大写</font><font style="vertical-align: inherit;">为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿前端前端</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到过同样的问题。</font><font style="vertical-align: inherit;">原来是在“ App”中将“ A”大写的问题。</font><font style="vertical-align: inherit;">另外，如果要导出，请</font></font><code>export default App;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保也导出相同名称的“ App”。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LLSam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件应以大写字母开头。</font><font style="vertical-align: inherit;">还记得更改出口行中的第一个字母！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">罗静云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将收到此错误：“在函数“ App”中调用了React Hook“ useState”，它既不是React函数组件也不是自定义的React Hook函数”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：您基本上需要将功能大写。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const Helper =()=&gt;{}<font></font>
<font></font>
function Helper2(){}</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需大写您的应用名称 </font></font></p>

<pre><code>const App = props =&gt; {...}<font></font>
<font></font>
export default App;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋和田</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在函数名称中使用首字母大写。</font><font style="vertical-align: inherit;">例如：-功能App {}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY宝儿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，这个包装中包含了短绒棉。</font><font style="vertical-align: inherit;">并且它要求您的组件应该从大写字母开始。</font><font style="vertical-align: inherit;">请检查一下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然而，对我而言，这是可悲的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">文韬武略辛弃疾</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我觉得我们在乌迪米（Udemy）正在做同样的课程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是这样，请大写 </font></font></p>

<p><code>const app</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<p><code>const App</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做的以及 </font></font></p>

<pre><code>export default app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>export default App
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我来说很有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将“ app”大写，例如</font></font></p>

<pre><code>const App = props =&gt; {...}<font></font>
<font></font>
export default App;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
