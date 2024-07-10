import { defineComponent } from 'vue';

import { useCounter } from '@/composables/useCounter';

export default defineComponent({
    props: {
        counterValue: {
            type: Number,
            required: true,
        },
    },
    setup({ counterValue }) {
        const { counter, squareCounter } = useCounter(counterValue);

        return { counter, squareCounter };
    },
});