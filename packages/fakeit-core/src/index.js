// @flow
import Promise from 'bluebird'

import { model } from './model'
import FakeitError from './error'
import Api from './api'

// Bluebird specific
Promise.longStackTraces()

// The model is the default item getting output because it's
// the most common for developers to use, so we want to make it easy
// for them to get it.
// ```
// // es6
// import fakeit from '@fakeit/core'
// // es5
// const fakeit = require('fakeit')
// // if you really want to
// const fakeit = require('fakeit').default
// ```
const initial = model()
Object.defineProperty(exports, '__esModule', {
  value: true,
})

Object.assign(module.exports, initial)

module.exports = initial
module.exports.default = initial
module.exports.FakeitError = FakeitError
module.exports.Api = Api
