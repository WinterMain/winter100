---
layout: question
title:  开玩笑地测试TypeScript文件语法错误：“接口在严格模式下是保留字”
date:   2020-03-24T07:53:22.000Z
description: 我的分支： https   //github.com/Futuratum/moonholdings.io/tree/JestTests当前的PR： h...
img: 
author: 乐理查德
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的分支：</font></font></em> <font style="vertical-align: inherit;"><a href="https://github.com/Futuratum/moonholdings.io/tree/JestTests" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https </font></a><em><font style="vertical-align: inherit;">: </font></em></font><a href="https://github.com/Futuratum/moonholdings.io/tree/JestTests" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/Futuratum/moonholdings.io/tree/JestTests</font></font></a></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前的PR：</font></font></em> <font style="vertical-align: inherit;"><a href="https://github.com/Futuratum/moonholdings.io/pull/29" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https </font></a><em><font style="vertical-align: inherit;">: </font></em></font><a href="https://github.com/Futuratum/moonholdings.io/pull/29" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/Futuratum/moonholdings.io/pull/29</font></font></a></p>

<p><a href="https://www.samyoc.com//uploads/users/26105/images/thumbnails/1585036274748.png" data-src="https://www.samyoc.com//uploads/users/26105/images/1585036274748.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/XcsHF.png" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Astronaut.tsx组件</font></font></strong></p>

<pre><code>import React from 'react';<font></font>
<font></font>
import { moonHoldings } from '../../shared/models';<font></font>
import { astronaut } from '../../styles';<font></font>
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

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单测试：</font></font></strong></p>

<pre><code>import React from 'react';<font></font>
import { shallow } from 'enzyme';<font></font>
import toJson from 'enzyme-to-json';<font></font>
<font></font>
import Astronaut from '../components/Astronaut/Astronaut.tsx';<font></font>
<font></font>
describe('&lt;Astronaut /&gt; component', () =&gt; {<font></font>
  console.log('Astronaut', Astronaut);<font></font>
  describe('when rendering', () =&gt; {<font></font>
    const wrapper = shallow(&lt;Astronaut showLogo={true} /&gt;);<font></font>
<font></font>
    it('should render a component matching the snapshot', () =&gt; {<font></font>
      const tree = toJson(wrapper);<font></font>
      expect(tree).toMatchSnapshot();<font></font>
      expect(wrapper).toHaveLength(1);<font></font>
    });<font></font>
  });<font></font>
});<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法错误：/Users/leongaban/projects/Futuratum/moonholdings.io/components/Astronaut/Astronaut.tsx：接口是严格模式下的保留字（8：0）</font></font></p>
</blockquote>

<p><a href="https://www.samyoc.com//uploads/users/26105/images/thumbnails/1585036274751.png" data-src="https://www.samyoc.com//uploads/users/26105/images/1585036274751.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/lgpCT.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试在tsconfig中将strict更改为false，</font></font><code>compilerOptions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这没有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他人用Jest测试和Typescript碰到这个吗？</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>{<font></font>
  "name": "moonholdings.io",<font></font>
  "version": "2.0.0",<font></font>
  "description": "Moonholdings.io",<font></font>
  "main": "index.ts",<font></font>
  "scripts": {<font></font>
    "dev": "next -p 7777",<font></font>
    "build": "next build",<font></font>
    "start": "next start -p 8000",<font></font>
    "test": "NODE_ENV=test jest --watch",<font></font>
    "test-win": "SET NODE_ENV=test&amp;&amp; jest --watch",<font></font>
    "heroku-postbuild": "next build"<font></font>
  },<font></font>
  "author": "Futuratum",<font></font>
  "license": "ISC",<font></font>
  "dependencies": {<font></font>
    "@zeit/next-sass": "^1.0.1",<font></font>
    "@zeit/next-typescript": "^1.1.1",<font></font>
    "apollo-boost": "^0.1.16",<font></font>
    "apollo-client": "^2.4.2",<font></font>
    "decko": "^1.2.0",<font></font>
    "downshift": "^2.2.3",<font></font>
    "enzyme": "^3.6.0",<font></font>
    "enzyme-adapter-react-16": "^1.5.0",<font></font>
    "graphql": "^14.0.2",<font></font>
    "graphql-tag": "^2.9.2",<font></font>
    "graphql-tools": "^4.0.0",<font></font>
    "lodash.debounce": "^4.0.8",<font></font>
    "next": "^7.0.2",<font></font>
    "next-with-apollo": "^3.1.3",<font></font>
    "node-sass": "^4.11.0",<font></font>
    "nprogress": "^0.2.0",<font></font>
    "prop-types": "^15.6.2",<font></font>
    "react": "^16.7.0",<font></font>
    "react-adopt": "^0.6.0",<font></font>
    "react-apollo": "^2.2.1",<font></font>
    "react-dom": "^16.7.0",<font></font>
    "react-transition-group": "^2.5.0",<font></font>
    "styled-components": "^3.4.9",<font></font>
    "tslint": "^5.12.1",<font></font>
    "tslint-react": "^3.6.0",<font></font>
    "typescript": "^3.2.4",<font></font>
    "waait": "^1.0.2"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@babel/plugin-proposal-decorators": "^7.3.0",<font></font>
    "@babel/preset-typescript": "^7.1.0",<font></font>
    "@types/enzyme": "^3.1.15",<font></font>
    "@types/jest": "^23.3.13",<font></font>
    "@types/next": "^7.0.6",<font></font>
    "@types/react": "^16.7.20",<font></font>
    "@types/react-dom": "^16.0.11",<font></font>
    "@types/react-redux": "^7.0.0",<font></font>
    "@types/zeit__next-typescript": "^0.1.1",<font></font>
    "babel-core": "^7.0.0-bridge.0",<font></font>
    "babel-jest": "^23.6.0",<font></font>
    "babel-plugin-styled-components": "^1.7.1",<font></font>
    "casual": "^1.5.19",<font></font>
    "enzyme-to-json": "^3.3.4",<font></font>
    "jest": "^23.6.0",<font></font>
    "jest-transform-graphql": "^2.1.0"<font></font>
  },<font></font>
  "jest": {<font></font>
    "setupTestFrameworkScriptFile": "&lt;rootDir&gt;/jest.setup.js",<font></font>
    "testPathIgnorePatterns": [<font></font>
      "&lt;rootDir&gt;/.next/",<font></font>
      "&lt;rootDir&gt;/node_modules/"<font></font>
    ],<font></font>
    "transform": {<font></font>
      "\\.(gql|graphql)$": "jest-transform-graphql",<font></font>
      ".*": "babel-jest",<font></font>
      "^.+\\.js?$": "babel-jest"<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的.babelrc文件</font></font></strong></p>

<pre><code>{<font></font>
  "env": {<font></font>
    "development": {<font></font>
      "presets": [<font></font>
        "next/babel",<font></font>
        "@zeit/next-typescript/babel"<font></font>
      ],<font></font>
      "plugins": [<font></font>
        [<font></font>
          "styled-components",<font></font>
          {<font></font>
            "ssr": true,<font></font>
            "displayName": true<font></font>
          }<font></font>
        ],<font></font>
        [<font></font>
          "@babel/plugin-proposal-decorators",<font></font>
          {<font></font>
            "legacy": true<font></font>
          }<font></font>
        ]<font></font>
      ]<font></font>
    },<font></font>
    "production": {<font></font>
      "presets": [<font></font>
        "next/babel",<font></font>
        "@zeit/next-typescript/babel"<font></font>
      ],<font></font>
      "plugins": [<font></font>
        [<font></font>
          "styled-components",<font></font>
          {<font></font>
            "ssr": true,<font></font>
            "displayName": true<font></font>
          }<font></font>
        ],<font></font>
        [<font></font>
          "@babel/plugin-proposal-decorators",<font></font>
          {<font></font>
            "legacy": true<font></font>
          }<font></font>
        ]<font></font>
      ]<font></font>
    },<font></font>
    "test": {<font></font>
      "presets": [<font></font>
        [<font></font>
          "next/babel",<font></font>
          {<font></font>
            "preset-env": {<font></font>
              "modules": "commonjs"<font></font>
            }<font></font>
          }<font></font>
        ]<font></font>
      ],<font></font>
      "plugins": [<font></font>
        [<font></font>
          "styled-components",<font></font>
          {<font></font>
            "ssr": true,<font></font>
            "displayName": true<font></font>
          }<font></font>
        ]<font></font>
      ]<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3476篇《开玩笑地测试TypeScript文件语法错误：“接口在严格模式下是保留字”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
