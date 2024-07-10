<!-- 
    
    SFC - SINGLE FILE COMPONENT


    App.vue es el unico archivo que el
    linter nos permite que posea un unico nombre
-->

<!--
    TEMPLATE
    Etiqueta obligatoria 
-->
<template>
    <section class="content-section">
        <div class="content-section__text-container">
            <h1 class="content-section__title">Mi contador {{ counter }}</h1>
            <p class="content-section__description">Contador al cuadrado {{ squareCounter }}</p>
        </div>
        <div class="content-section__button-container">
            <button @click="counter--" class="button button--ripple">-1</button>
            <button @click="counter++" class="button button--ripple">+1</button>
        </div>
    </section>
</template>

<!-- 
    SCRIPTS
-->
<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';
/*
    PROPS

    son inmutables (readonly)
*/
const { counterValue } = defineProps({
    counterValue: {
        type: Number,
        required: true
    }
});

const {counter, squareCounter} = useCounter( counterValue );

</script>

<!-- 
    STYLES
-->
<style scoped>
.content-section {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    max-width: 400px;
    width: 100%;
}

.content-section__title {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
}

.content-section__description {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
}

.content-section__button-container {
    display: flex;
    justify-content: space-around;
}

.button {
    position: relative;
    overflow: hidden;
    background-color: #6200ea;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.button--ripple::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    transform-origin: center;
    transition:
        transform 0.5s,
        opacity 1s;
}

.button--ripple:active::after {
    transform: scale(2.5);
    opacity: 0;
}

.button--ripple:hover {
    background-color: #3700b3;
}
</style>
