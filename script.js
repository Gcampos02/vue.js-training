var app = new Vue({
    el: '#app',
    data: {
        message: 'Olá Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
//seen: false

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Criar algo incrível' }
        ]
    }
})
//app4.todos.push({text: 'Novo Item'})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app5 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

// Define um novo componente chamado todo-item
Vue.component('todo-item', {
    // O componente todo-item agora aceita uma
    // "prop", que é como um atributo personalizado.
    // Esta propriedade foi chamada de "todo".
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetais' },
            { id: 1, text: 'Queijo' },
            { id: 2, text: 'Qualquer outra coisa que humanos podem comer' }
        ]
    }
})