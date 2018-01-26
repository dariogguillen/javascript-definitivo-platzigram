var page = require('page')
var empty = require('empty-element')
var template = require('./template')

page('/', function(ctx, next) {
  document.title = 'Platzigram'
  var main = document.querySelector('#main-container')
  empty(main).appendChild(template)
})
