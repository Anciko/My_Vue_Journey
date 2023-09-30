const app = Vue.createApp({
    data() {
        return {
            url: "https://www.youtube.com",
            books: [
                { title: "A final Empire", author: "JK Neymer", isFav: true },
                { title: "The Last stand", author: "Robert", isFav: false },
                { title: "The Amazing Girl", author: "Lewis", isFav: true }
            ],
            items: [
                { id: 1, name: "Eggs", price: 20 },
                { id: 1, name: "Umbrellla", price: 30 },
                { id: 1, name: "Busket", price: 40 },
            ],
            country: '',
            title: "A Final Empire",
            author: "JK Neymer",
            showBooks: true,
            x: 0,
            y: 0
        }
    },

    methods: {
        changeTitle() {
            this.title = "Land of Tomoorw"
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        handleEvent(e, test) {
            console.log(e.type, e);
            if (test != null) {
                console.log(test);
            }
        },

        handleMouseMove(e) {
            this.x = e.offsetX,
                this.y = e.offsetY
        },

        getTotal() {
            console.log("get total method")
            return this.items.reduce((acc, current) => (acc = acc + current.price), 0)
        }

    },
    
    computed: {
        total() {
            console.log("tatal computed property");
            return this.items.reduce((acc, current) => (acc = acc + current.price ),0 )
        }
    }
});

app.mount("#app");

/**
 * Computed properties
===========================
 computed properties is to define a data property inside our components.

 make cache

 computed property is definitely the better approach  keeping in mind the app's performace.

 At first time, when you start to use computed properties, it might all seem a little bit complicated or starnge. But they are really useful.

 */