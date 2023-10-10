---
layout: question
title:  Django-Bower + Foundation 5 + SASS，如何配置？
date:   2020-03-24T03:03:00.000Z
description: 我正在使用Django-Bower测试Foundation 5的SASS实现。我对Bower的想法是陌生的，并且对如何使此设置正常工作感到有些困惑。我...
img: 
author: 斯丁前端
category: question
answer: 0
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Django-Bower测试Foundation 5的SASS实现。</font><font style="vertical-align: inherit;">我对Bower的想法是陌生的，并且对如何使此设置正常工作感到有些困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经安装了django-bower并将其配置为可以正常运行。</font><font style="vertical-align: inherit;">将基础添加到Bower应用程序配置并运行后，</font></font><code>manage.py bower_install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以看到基础文件确实已正确安装。</font><font style="vertical-align: inherit;">我还可以使用static标签将JS加载到模板中而不会出现问题，所以我感觉我已经快到一半了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是关于如何实际使用随我的自定义SASS文件安装的bower的基础文件，以及将这些SASS文件编译为CSS的最佳方法。</font><font style="vertical-align: inherit;">我知道我应该能够将基础包括在我的SASS中，</font></font><code>@include "foundation"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我对如何获取SASS文件以“查看” components / bower_components / foundation / sass中的基础文件以及如何进行设置一无所知将css放入正确的静态文件的编译。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：PyCharm有一个选项可以查看sass文件并进行编译，因此我现在可以选择编译文件，但是当我尝试导入基础时，我得到了 </font></font><code>error blog3.sass (Line 1: File to import not found or unreadable: foundation.</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供参考，这是我的文件结构：</font></font></p>

<pre><code>├── blog3<font></font>
│&nbsp;&nbsp; └── __pycache__<font></font>
├── components<font></font>
│&nbsp;&nbsp; └── bower_components<font></font>
│&nbsp;&nbsp;     ├── foundation<font></font>
│&nbsp;&nbsp;     │&nbsp;&nbsp; ├── css<font></font>
│&nbsp;&nbsp;     │&nbsp;&nbsp; ├── js<font></font>
│&nbsp;&nbsp;     │&nbsp;&nbsp; │&nbsp;&nbsp; ├── foundation<font></font>
│&nbsp;&nbsp;     │&nbsp;&nbsp; │&nbsp;&nbsp; └── vendor<font></font>
│&nbsp;&nbsp;     │&nbsp;&nbsp; └── scss<font></font>
│&nbsp;&nbsp;     │&nbsp;&nbsp;     └── foundation<font></font>
│&nbsp;&nbsp;     │&nbsp;&nbsp;         └── components<font></font>
│&nbsp;&nbsp;     ├── jquery<font></font>
│&nbsp;&nbsp;     └── modernizr<font></font>
│&nbsp;&nbsp;         ├── feature-detects<font></font>
│&nbsp;&nbsp;         ├── media<font></font>
│&nbsp;&nbsp;         └── test<font></font>
│&nbsp;&nbsp;             ├── caniuse_files<font></font>
│&nbsp;&nbsp;             ├── js<font></font>
│&nbsp;&nbsp;             │&nbsp;&nbsp; └── lib<font></font>
│&nbsp;&nbsp;             └── qunit<font></font>
└── interface<font></font>
    ├── migrations<font></font>
    │&nbsp;&nbsp; └── __pycache__<font></font>
    ├── __pycache__<font></font>
    ├── sass<font></font>
    └── templates<font></font>
        └── interface<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的settings.py</font></font></p>

<pre><code>"""<font></font>
Django settings for blog3 project.<font></font>
<font></font>
For more information on this file, see<font></font>
https://docs.djangoproject.com/en/dev/topics/settings/<font></font>
<font></font>
For the full list of settings and their values, see<font></font>
https://docs.djangoproject.com/en/dev/ref/settings/<font></font>
"""<font></font>
<font></font>
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)<font></font>
import os<font></font>
BASE_DIR = os.path.dirname(os.path.dirname(__file__)) <font></font>
<font></font>
<font></font>
# Quick-start development settings - unsuitable for production<font></font>
# See https://docs.djangoproject.com/en/dev/howto/deployment/checklist/<font></font>
<font></font>
# SECURITY WARNING: keep the secret key used in production secret!<font></font>
SECRET_KEY = '...'<font></font>
<font></font>
# SECURITY WARNING: don't run with debug turned on in production!<font></font>
DEBUG = True<font></font>
<font></font>
TEMPLATE_DEBUG = True<font></font>
<font></font>
ALLOWED_HOSTS = []<font></font>
<font></font>
<font></font>
# Application definition<font></font>
<font></font>
INSTALLED_APPS = (<font></font>
    'django.contrib.admin',<font></font>
    'django.contrib.auth',<font></font>
    'django.contrib.contenttypes',<font></font>
    'django.contrib.sessions',<font></font>
    'django.contrib.messages',<font></font>
    'django.contrib.staticfiles',<font></font>
    'annoying',<font></font>
    'django_extensions',<font></font>
    'djangobower',<font></font>
    'interface',<font></font>
<font></font>
)<font></font>
<font></font>
MIDDLEWARE_CLASSES = (<font></font>
    'django.contrib.sessions.middleware.SessionMiddleware',<font></font>
    'django.middleware.common.CommonMiddleware',<font></font>
    'django.middleware.csrf.CsrfViewMiddleware',<font></font>
    'django.contrib.auth.middleware.AuthenticationMiddleware',<font></font>
    'django.contrib.messages.middleware.MessageMiddleware',<font></font>
    'django.middleware.clickjacking.XFrameOptionsMiddleware',<font></font>
)<font></font>
<font></font>
ROOT_URLCONF = 'blog3.urls'<font></font>
<font></font>
WSGI_APPLICATION = 'blog3.wsgi.application'<font></font>
<font></font>
<font></font>
# Database<font></font>
# https://docs.djangoproject.com/en/dev/ref/settings/#databases<font></font>
<font></font>
DATABASES = {<font></font>
    'default': {<font></font>
        'ENGINE': 'django.db.backends.sqlite3',<font></font>
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),<font></font>
    }<font></font>
}<font></font>
<font></font>
# Internationalization<font></font>
# https://docs.djangoproject.com/en/dev/topics/i18n/<font></font>
<font></font>
LANGUAGE_CODE = 'en-us'<font></font>
<font></font>
TIME_ZONE = 'UTC'<font></font>
<font></font>
USE_I18N = True<font></font>
<font></font>
USE_L10N = True<font></font>
<font></font>
USE_TZ = True  <font></font>
<font></font>
<font></font>
# Static files (CSS, JavaScript, Images)<font></font>
# https://docs.djangoproject.com/en/dev/howto/static-files/<font></font>
<font></font>
STATIC_URL = '/static/'<font></font>
STATICFILES_FINDERS = (<font></font>
    'djangobower.finders.BowerFinder',<font></font>
)<font></font>
<font></font>
BOWER_COMPONENTS_ROOT = os.path.join(BASE_DIR, "components")<font></font>
BOWER_INSTALLED_APPS = (<font></font>
    'jquery',<font></font>
    'foundation',<font></font>
)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3269篇《Django-Bower + Foundation 5 + SASS，如何配置？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
