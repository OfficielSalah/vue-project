'use strict'
const merge = require('webpack-merge')
const dev = require('./dev.env')

module.exports = merge(dev, {
  NODE_ENV= '"development"'
})
