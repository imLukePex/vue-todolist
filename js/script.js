// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;

createApp({
    data() {
        return {
            inputTask: {
                text: "",
                done: false
            },

            error: false,

            todos: [{
                text: 'Homepage refresh',
                done: false
            }, {
                text: 'Recruiting blog post',
                done: true
            }, {
                text: 'Mobile app launch',
                done: false
            }, {
                text: 'Interview John H.',
                done: true
            }, {
                text: 'Summit update to mobile storefronts',
                done: false
            }, {
                text: 'Schedule meeting with Alex',
                done: false
            }, {
                text: 'Review editorial calendar',
                done: true
            }],
        }
    },
    methods: {
        addTask() {
            if(this.inputTask.text.length < 5) {
                this.error = true;
            } else {
                this.todos.unshift({text: this.inputTask.text});
                this.inputTask = {text: ''};
                this.error = false;
            }

        },

        delTask(i) {
            this.todos.splice(i, 1);
        },

        markedTask(i) {
            if(this.todos[i].done === true) {
                this.todos[i].done = false;
            } else {
                this.todos[i].done = true;
            }
        }
    },
    mounted() {
        console.log("L'applicazione è caricata!!");
    }
}).mount('#app')