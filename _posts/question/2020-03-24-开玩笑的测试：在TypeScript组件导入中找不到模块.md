---
layout: question
title:  开玩笑的测试：在TypeScript组件导入中找不到模块
date:   2020-03-24T10:32:25.000Z
description: 我的样式对象的路径是正确的，但是不确定为什么会出现以下错误：  无法从“ Astronaut.tsx”中找到模块“ ../../shared/mod...
img: 
author: 古一Green
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的样式对象的路径是正确的，但是不确定为什么会出现以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法从“ Astronaut.tsx”中找到模块“ ../../shared/models”</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从“ ../../shared/models”导入{moonHoldings}；</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我简单的Jest测试：</font></font></p>

<pre><code>import React from 'react';<font></font>
import { shallow } from 'enzyme';<font></font>
import toJson from 'enzyme-to-json';<font></font>
<font></font>
// @ts-ignore (works with .tsx)<font></font>
import Astronaut from '../Astronaut.tsx';<font></font>
<font></font>
describe('&lt;Astronaut /&gt; component', () =&gt; {<font></font>
  describe('should render', () =&gt; {<font></font>
    const wrapper = shallow(&lt;Astronaut showLogo={true} /&gt;);<font></font>
    it ('should render a component matching the snapshot', () =&gt; {<font></font>
      const tree = toJson(wrapper);<font></font>
      expect(tree).toMatchSnapshot();<font></font>
      expect(wrapper).toHaveLength(1);<font></font>
    });<font></font>
  });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">宇航员</font></font></p>

<pre><code>import React from 'react';<font></font>
<font></font>
import { moonHoldings } from '../../shared/models';  // &lt;-- The problem<font></font>
import { astronaut } from '../../styles'; // &lt;-- This works<font></font>
<font></font>
const { AstronautContainer, Heading } = astronaut;<font></font>
<font></font>
interface LogoCheck {<font></font>
  showLogo: boolean;<font></font>
}<font></font>
<font></font>
export default (showLogo: LogoCheck) =&gt;  (<font></font>
  &lt;AstronautContainer&gt;<font></font>
    { showLogo.showLogo === true ? &lt;Heading&gt;{moonHoldings}&lt;/Heading&gt; : null }<font></font>
    &lt;img src="static/astronaut.png" alt="astronaut" /&gt;<font></font>
  &lt;/AstronautContainer&gt;<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Package.json的Jest配置部分</font></font></p>

<pre><code>"jest": {<font></font>
  "setupTestFrameworkScriptFile": "&lt;rootDir&gt;/jest.setup.js",<font></font>
  "testPathIgnorePatterns": [<font></font>
    "&lt;rootDir&gt;/.next/",<font></font>
    "&lt;rootDir&gt;/node_modules/"<font></font>
  ],<font></font>
  "transform": {<font></font>
    "\\.(gql|graphql)$": "jest-transform-graphql",<font></font>
    ".*": "babel-jest",<font></font>
    "^.+\\.js?$": "babel-jest"<font></font>
  },<font></font>
  "moduleFileExtensions": [<font></font>
    "js",<font></font>
    "json",<font></font>
    "ts",<font></font>
    "tsx"<font></font>
  ],<font></font>
  "modulePaths": [<font></font>
    "&lt;rootDir&gt;/components/",<font></font>
    "&lt;rootDir&gt;/pages/",<font></font>
    "&lt;rootDir&gt;/shared/"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和我的文件夹结构：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/1456/images/thumbnails/1585045817754.png" data-src="https://www.samyoc.com//uploads/users/1456/images/1585045817754.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/unqiT.png" alt="在此处输入图片说明"></a></p>

<p><a href="https://www.samyoc.com//uploads/users/1456/images/thumbnails/1585045817756.png" data-src="https://www.samyoc.com//uploads/users/1456/images/1585045817756.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/R3x2i.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3663篇《开玩笑的测试：在TypeScript组件导入中找不到模块》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
