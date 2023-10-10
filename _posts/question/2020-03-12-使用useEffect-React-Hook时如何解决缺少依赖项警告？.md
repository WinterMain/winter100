---
layout: question
title:  使用useEffect React Hook时如何解决缺少依赖项警告？
date:   2020-03-12T04:45:54.000Z
description: 使用React 16.8.6（在以前的版本16.8.3中很好），当我尝试防止在获取请求上发生无限循环时，出现此错误 ./src/components/...
img: 
author: GilGilPro
category: question
answer: 6
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React 16.8.6（在以前的版本16.8.3中很好），当我尝试防止在获取请求上发生无限循环时，出现此错误 </font></font></p>

<pre><code>./src/components/BusinessesList.js<font></font>
Line 51:  React Hook useEffect has a missing dependency: 'fetchBusinesses'.<font></font>
Either include it or remove the dependency array  react-hooks/exhaustive-deps<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直找不到停止无限循环的解决方案。</font><font style="vertical-align: inherit;">我想远离使用</font></font><code>useReducer()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我确实在</font></font><a href="https://github.com/facebook/react/issues/14920" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/facebook/react/issues/14920</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了这个讨论</font><font style="vertical-align: inherit;">，在这里可能的解决方案是</font></font><code>You can always // eslint-disable-next-line react-hooks/exhaustive-deps if you think you know what you're doing.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定自己在做什么，所以我还没有尝试实现它。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这个当前设置，</font></font><a href="https://stackoverflow.com/questions/53243203/react-hook-useeffect-runs-continuously-forever-infinite-loop"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React钩子useEffect永远/无限循环连续运行</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，唯一的注释是</font></font><code>useCallback()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不熟悉的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前的使用方式</font></font><code>useEffect()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（类似于，我一开始只想运行一次</font></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>useEffect(() =&gt; {<font></font>
    fetchBusinesses();<font></font>
  }, []);<font></font>
</code></pre>

<pre><code>const fetchBusinesses = () =&gt; {<font></font>
    return fetch("theURL", {method: "GET"}<font></font>
    )<font></font>
      .then(res =&gt; normalizeResponseErrors(res))<font></font>
      .then(res =&gt; {<font></font>
        return res.json();<font></font>
      })<font></font>
      .then(rcvdBusinesses =&gt; {<font></font>
        // some stuff<font></font>
      })<font></font>
      .catch(err =&gt; {<font></font>
        // some error handling<font></font>
      });<font></font>
  };<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在下一行禁用eslint即可；</font></font></p>

<pre><code>useEffect(() =&gt; {<font></font>
   fetchBusinesses();<font></font>
// eslint-disable-next-line<font></font>
}, []);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您就可以像安装组件一样使用它（称为一次）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么 </font></font></p>

<pre><code>const fetchBusinesses = useCallback(() =&gt; {<font></font>
 // your logic in here<font></font>
 }, [someDeps])<font></font>
<font></font>
useEffect(() =&gt; {<font></font>
   fetchBusinesses();<font></font>
// no need to skip eslint warning<font></font>
}, [fetchBusinesses]); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当某些Dept更改时，都会调用fetchBusinesses</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该解决方案也由react提供，他们建议您使用</font></font><code>useCallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这将返回函数的备注版本：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ fetchBusinesses”函数使useEffect Hook（在第NN行）的依赖关系在每个渲染上都发生变化。</font><font style="vertical-align: inherit;">要解决此问题，请将“ fetchBusinesses”定义包装到其自己的useCallback（）中。Hook react-hooks / exhaustive-deps</font></font></p>
</blockquote>

<p><code>useCallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用简单，因为它具有相同的签名，</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不同之处在于useCallback返回一个函数。</font><font style="vertical-align: inherit;">它看起来像这样：</font></font></p>

<pre><code> const fetchBusinesses = useCallback( () =&gt; {<font></font>
        return fetch("theURL", {method: "GET"}<font></font>
    )<font></font>
    .then(// some stuff)<font></font>
    .catch(// some error handling)<font></font>
  }, [//deps])<font></font>
  // We have a first effect thant uses fetchBusinesses<font></font>
  useEffect(() =&gt; {<font></font>
    // do things and then fetchBusinesses<font></font>
    fetchBusinesses(); <font></font>
  }, [fetchBusinesses]);<font></font>
   // We can have many effect thant uses fetchBusinesses<font></font>
  useEffect(() =&gt; {<font></font>
    // do other things and then fetchBusinesses<font></font>
    fetchBusinesses();<font></font>
  }, [fetchBusinesses]);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文是使用钩子获取数据的良好入门：</font><a href="https://www.robinwieruch.de/react-hooks-fetch-data/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.robinwieruch.de/react-hooks-fetch-data/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.robinwieruch.de/react-hooks-fetch-data/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本质上，在内部包含fetch函数定义</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>useEffect(() =&gt; {<font></font>
  const fetchBusinesses = () =&gt; {<font></font>
    return fetch("theUrl"...<font></font>
      // ...your fetch implementation<font></font>
    );<font></font>
  }<font></font>
<font></font>
  fetchBusinesses();<font></font>
}, []);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">况且什么在其他的答案已经提到（声明函数内</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，与memoize的它</font></font><code>useCallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您也可以直接将其设置为，禁止eslint的警告）</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调：</font></font></p>

<pre class="lang-js prettyprint-override"><code>useEffect(fetchBusinesses, [])
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只会触发一次，因此请确保正确设置了所有函数的依赖项（与使用相同</font></font><code>componentDidMount/componentWillMount...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<hr>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑02/21/2020</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅出于完整性考虑：</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.使用函数作为</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调</font></font></h3>

<pre><code>useEffect(fetchBusinesses, [])
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.声明内部功能 </font></font><code>useEffect()</code></h3>

<pre class="lang-js prettyprint-override"><code>useEffect(() =&gt; {<font></font>
  function fetchBusinesses() {<font></font>
    ...<font></font>
  }<font></font>
  fetchBusinesses()<font></font>
}, [])<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.与 </font></font><code>useCallback()</code></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，如果函数中具有依赖项，则必须将它们包括在</font></font><code>useCallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖关系数组中，</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果函数的参数发生更改</font><font style="vertical-align: inherit;">，这将</font><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">触发依赖项</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">此外，还有很多样板...因此只需直接将功能传递给</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>1. useEffect(fetchBusinesses, [])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint-override"><code>const fetchBusinesses = useCallback(() =&gt; {<font></font>
  ...<font></font>
}, [])<font></font>
useEffect(() =&gt; {<font></font>
  fetchBusinesses()<font></font>
}, [fetchBusinesses])<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.禁用eslint的警告</font></font></h3>

<pre><code>useEffect(() =&gt; {<font></font>
  fetchBusinesses()<font></font>
}, []) // eslint-disable-line react-hooks/exhaustive-deps<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以删除第二个参数类型数组，</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font><code>fetchBusinesses()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次更新都会调用。</font><font style="vertical-align: inherit;">您可以根据需要</font></font><code>IF</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>fetchBusinesses()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行中</font><font style="vertical-align: inherit;">添加一条</font><font style="vertical-align: inherit;">语句</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>React.useEffect(() =&gt; {<font></font>
  fetchBusinesses();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个是</font></font><code>fetchBusinesses()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件外部</font><font style="vertical-align: inherit;">实现该</font><font style="vertical-align: inherit;">功能。</font><font style="vertical-align: inherit;">只是不要忘记将任何依赖项参数传递给您的</font></font><code>fetchBusinesses(dependency)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用（如果有）。</font></font></p>

<pre><code>function fetchBusinesses (fetch) {<font></font>
  return fetch("theURL", { method: "GET" })<font></font>
    .then(res =&gt; normalizeResponseErrors(res))<font></font>
    .then(res =&gt; res.json())<font></font>
    .then(rcvdBusinesses =&gt; {<font></font>
      // some stuff<font></font>
    })<font></font>
    .catch(err =&gt; {<font></font>
      // some error handling<font></font>
    });<font></font>
}<font></font>
<font></font>
function YourComponent (props) {<font></font>
  const { fetch } = props;<font></font>
<font></font>
  React.useEffect(() =&gt; {<font></font>
    fetchBusinesses(fetch);<font></font>
  }, [fetch]);<font></font>
<font></font>
  // ...<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果除了效果以外没有在其他地方使用fetchBusinesses方法，则可以将其移至效果中并避免出现警告</font></font></p>

<pre><code>useEffect(() =&gt; {<font></font>
    const fetchBusinesses = () =&gt; {<font></font>
       return fetch("theURL", {method: "GET"}<font></font>
    )<font></font>
      .then(res =&gt; normalizeResponseErrors(res))<font></font>
      .then(res =&gt; {<font></font>
        return res.json();<font></font>
      })<font></font>
      .then(rcvdBusinesses =&gt; {<font></font>
        // some stuff<font></font>
      })<font></font>
      .catch(err =&gt; {<font></font>
        // some error handling<font></font>
      });<font></font>
  };<font></font>
  fetchBusinesses();<font></font>
}, []);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果在渲染之外使用fetchBusinesses，则必须注意两点</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有与你的任何问题，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递</font></font><code>fetchBusinesses</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当它与它的外围封闭件支架中的二手的方法是什么？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的方法是否依赖于从其封闭包中收到的某些变量？</font><font style="vertical-align: inherit;">事实并非如此。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个渲染上，都会重新创建fetchBusinesses，因此将其传递给useEffect会引起问题。</font><font style="vertical-align: inherit;">因此，如果要将fetchBusinesses传递给依赖项数组，则必须先记住它。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">综上所述，我想说的是，如果您在</font></font><code>fetchBusinesses</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部</font><font style="vertical-align: inherit;">使用，则可以使用</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用规则，</font></font><code>// eslint-disable-next-line react-hooks/exhaustive-deps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则可以将方法移到useEffect内部</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要禁用该规则，您可以这样写</font></font></p>

<pre><code>useEffect(() =&gt; {<font></font>
   // other code<font></font>
   ...<font></font>
<font></font>
   // eslint-disable-next-line react-hooks/exhaustive-deps<font></font>
}, []) <font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
