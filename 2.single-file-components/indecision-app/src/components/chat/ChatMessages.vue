<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <!-- Example Message -->
            <ChatBubble v-for="item in messages" :key="item.id" v-bind="item" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ChatBubble from '@/components/chat/ChatBubble.vue';
import type { IChatMessage } from '@/interfaces/chat-message.interface';
import { ref, watch } from 'vue';

interface IChatMessagesProps {
    messages: IChatMessage[];
}

const { messages } = defineProps<IChatMessagesProps>();

/*
    REFERENCIA A ELEMENTO DEL DOM
*/
const chatRef = ref<HTMLDivElement|null>(null);

/*
    OBSERVAR CAMBIOS EN LISTA DE MENSAJES messages
*/
watch( messages, () => {
    setTimeout(() => {
        chatRef.value?.scrollTo({
            top: chatRef.value.scrollHeight,
            behavior: 'smooth' 
        })
    }, 100);
});
</script>
