<!-- 
    
    SFC - SINGLE FILE COMPONENT


    App.vue es el unico archivo que el
    linter nos permite que posea un unico nombre
-->

<!-- Etiqueta obligatoria -->
<template>
    <main style="width: 100%; height: 100dvh; background: gainsboro">
        <Sidebar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />
        <IndecisionView />
        <Counter1 :counterValue="initialCounter" />
        <Counter2 :counterValue="initialCounter" />
        <Counter3 :counterValue="initialCounter" />
    </main>
</template>

<script lang="ts" setup>
/*
    Importacion de componentes
*/
import { ref } from 'vue';
import Counter1 from './components/CounterComponent.vue';
import Counter2 from './components/CounterScript.vue';
import Counter3 from './components/my-counter-script/CounterScript2.vue';
import Sidebar from './components/SideBar.vue';
import IndecisionView from '@/views/IndecisionView.vue'

const initialCounter = ref(18000);

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
