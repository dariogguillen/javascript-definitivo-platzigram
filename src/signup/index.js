var page = require('page')
var empty = require('empty-element')
var template = require('./template')

page('/signup', function(ctx, next) {
  document.title = 'Platzigram - Signup'
  var main = document.querySelector('#main-container')
  empty(main).appendChild(template)
})
