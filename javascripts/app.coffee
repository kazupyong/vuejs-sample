$ = require('jquery')
Vue = require('vue')

$ ->
  app = new Vue
    el: '#app'
    data: message: "hello vue!"

  app3 = new Vue
    el: '#app3'
    data: seen: false

  app4 = new Vue
    el: '#app4'
    data: todos: [
      { text: 'Learn JavaScript' }
      { text: 'Learn Vue' }
      { text: 'Build something awesome' }
    ]


  vm = new Vue
    el: '#demo'
    data:
      firstName: 'Foo2'
      lastName: 'Bar'
      fullName: 'Foo Bar'
    watch:
      firstName: (val) ->
        @fullName = val + ' ' + @lastName
        return
      lastName: (val) ->
        @fullName = @firstName + ' ' + val
        return
