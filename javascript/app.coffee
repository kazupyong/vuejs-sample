$ = require('jquery')
Vue = require('vue')

$ ->
  app = new Vue
    el: '#app'
    data: message: "hello vue!"

$ ->
  vm = new Vue(
    el: '#example'
    data: message: 'Hello'
    computed: reversedMessage: ->
      # `this` は vm インスタンスを指します
      @message.split('').reverse().join ''
  )
