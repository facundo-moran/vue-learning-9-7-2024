const { createApp, ref } = Vue;

/*
    createApp 

    Crear nueva app en Vue
*/
console.log({ type: typeof createApp, createApp });

/*
crear variable reactiva
*/
console.log({ type: typeof ref, ref });

/**
 *  COMPONENTE STATE
 */
const setupOld0 = function () {
    /*
        Recommended way to declare reactive state

        ref() takes the argument and returns it wrapped within a ref object with a .value property
    */
    const contador = ref(0);
    const message = ref("Message");

    console.log({
        value: {
            type: typeof contador.value,
            value: contador.value
        }
    });

    /*
        We can declare functions that mutate refs
        in the same scope and
        expose them as methods alongside the state:
    */
    const increment = () => {
        contador.value++;
    };

    return {
        contador,
        message,
        increment
    }
};

const setup = () => {
    const quotes = ref([
        { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight', authorVisible: false },
        { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight', authorVisible: false },
        { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins', authorVisible: false },
        { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight', authorVisible: false },
        { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight', authorVisible: false },
        { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One', authorVisible: false },
    ]);

    const esAuthorVisible = ref(false);

    const quote = ref("");

    const toggleAuthor = (quoteID = -1) => {
        if (quoteID > -1 && quoteID < quotes.value.length) {
            quotes.value[quoteID].authorVisible = true;
        }
    };

    const addQuote = () => {
        if (quote.value.length >= 20) {
            quotes.value.unshift({ quote: quote.value.trim(), author: 'Developer', authorVisible: false });
        }

        quote.value = '';
    };

    return {
        quotes,
        esAuthorVisible,
        toggleAuthor,
        quote,
        addQuote
    }
};


const app = createApp({
    // template: `
    //     <h1>{{ contador }}</h1>
    //     <div>
    //         <button v-on:click="increment">+</button>
    //         <!--<button @click="increment">+</button>-->
    //     </div>
    // `,
    setup
});

/*
    VUE app scope ID
*/
app.mount("#app");