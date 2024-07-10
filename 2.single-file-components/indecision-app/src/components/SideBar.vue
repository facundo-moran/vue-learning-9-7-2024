<template>
    <div class="sidebar" :class="{ 'sidebar--open': isOpen, 'sidebar--closed': !isOpen }">
        <a href="javascript:void(0)" class="sidebar__toggle-btn" @click="toggleSidebar">
            <span v-if="isOpen">&times;</span>
            <span v-else>&#9776;</span>
        </a>
        <a href="#" class="sidebar__link">
            <i class="icon">🔢</i>
            <span v-if="isOpen">Contador</span>
        </a>
        <!-- Agregar más enlaces aquí -->
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const { isOpen } = defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['toggle']);

const toggleSidebar = () => {
    emit('toggle');
};
</script>

<style scoped>
.sidebar {
    height: 100%;
    width: 60px; /* Closed width */
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidebar--open {
    width: 250px; /* Open width */
}

.sidebar__link {
    padding: 10px 15px;
    text-decoration: none;
    font-size: 18px;
    color: #818181;
    display: flex;
    align-items: center;
    transition: 0.3s;
}

.sidebar__link:hover {
    color: #f1f1f1;
}

.sidebar__toggle-btn {
    position: absolute;
    top: 20px;
    left: 15px;
    font-size: 24px;
    color: #818181;
    text-decoration: none;
    cursor: pointer;
}

.icon {
    margin-right: 10px;
}
</style>
