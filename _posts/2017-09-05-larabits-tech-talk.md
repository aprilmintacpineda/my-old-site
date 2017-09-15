---
layout: post
post_title: LaraBits TechTalk - First step to Laravel
page_title: LaraBits TechTalk - First step to Laravel
date_posted: 2017-09-05
open_source: true
description: This post contains all links to the repositories to all the demos I used in my tech talk at LaraBits.
tags: open source, educational, tech talk, educational materials
---

# What is this?

This post contains all the resources that I will use in my `#TechTalk` at [LaraBits: First step to Laravel](https://www.facebook.com/pampdev/photos/a.1895880487314456.1073741839.1780609138841592/2006207479615089/?type=3&theater){:target="_blank"} sorted in order of appearance.

### Links

- [Without Laravel (Spaghetti code)](https://github.com/aprilmintacpineda/larabits-demo-1){:target="_blank"}
- [Example homemade MVC App](https://github.com/aprilmintacpineda/larabits-demo-2){:target="_blank"}
- [The exercise application](https://github.com/aprilmintacpineda/larabits-demo-3.git){:target="_blank"}

### Copy-Paste section

###### Without Laravel (Spaghetti code)

```
git clone https://github.com/aprilmintacpineda/larabits-demo-1.git
```

###### Example homemade MVC App

```
git clone https://github.com/aprilmintacpineda/larabits-demo-2.git
```

###### The exercise application

```
git clone https://github.com/aprilmintacpineda/larabits-demo-3.git
```

###### Webpack config template

```javascript
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

var uglifyJsPlugin = process.env.PROD == 1? [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    output: {
      comments: false
    },
    compressor: {
      warnings: false
    }
  }),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
] : [];

var uglifyCssPlugin = process.env.PROD == 1? [ new OptimizeCssAssetsWebpackPlugin() ] : []

module.exports = [
  {
    name: 'javascript',
    entry: __dirname + '/resources/assets/js/entry.js',
    output: {
      filename: 'app.js',
      path: __dirname + '/public/js'
    },
    module: {
      loaders: [
        {
          test: /\.js/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2017', 'react', 'es2015'],
            plugins: ['babel-plugin-transform-object-rest-spread', 'babel-plugin-transform-class-properties']
          }
        }
      ]
    },
    plugins: uglifyJsPlugin
  },

  {
    name: 'stylesheets',
    entry: __dirname + '/resources/assets/sass/entry.sass',
    output: {
      filename: 'app.css',
      path: __dirname + '/public/css'
    },
    module: {
      loaders: [
        {
          test: /\.sass/,
          loader: ExtractTextWebpackPlugin.extract({
            use: 'css-loader!sass-loader',
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextWebpackPlugin('app.css')
    ].concat(uglifyCssPlugin)
  }
];
```

### Basic Challenge

Create a website that...

- Allows users to create account.
- Allows respondents to send a private message to user’s account.
- Allows login users to see messages sent to them in their newsfeed.

###### Activity diagram

![activity diagram](/public/post_resources/2017-09-05-larabits-tech-talk/activity-diagram.png)

###### Database diagram

![database diagram](/public/post_resources/2017-09-05-larabits-tech-talk/database-diagram.png)

###### Data flow diagram

![data flow diagram](/public/post_resources/2017-09-05-larabits-tech-talk/data-flow-diagram.png)

### Challenge yourself

Create a feature that allows users to close their accounts. Respondents will not be able to send messages to closed accounts.