var page = require('page')
var empty = require('empty-element')
var template = require('./template')

page('/signin', function(ctx, next) {
  document.title = 'Platzigram - Signin'
  var main = document.querySelector('#main-container')
  empty(main).appendChild(template)
})
