import { computed, ref } from "vue"

export const useCounter = (counterValue: number = 18000) => {
    const counter = ref(counterValue);
    const squareCounter = computed(() => {
        return counter.value * counter.value;
    });

    return {
        counter,
        squareCounter
    }
}