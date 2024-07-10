<!-- 
    IndecisionView es un componente padre con diseño de chat, tiene una caja de mensajes llamada
    ChatMessages que adentro tendran mensajes llamados ChatBubbles y por ultimo,
    este componente padre, tiene un caja con un input para crear un mensaje llamada
    MessageBox.

    Fuente: https://tailwindcomponents.com/component/chat-layout
-->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <!-- NOMBRE DEL CHAT -->
        <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
            <span>Mi chatbot amigo</span>
        </div>
        <!-- 
            CAJA CON MENSAJES (DEL USUARIO Y TAMBIEN RESPUESTAS)
        -->
        <ChatMessages :messages="messageList" />
        <!-- 
            CAJA INPUT NUEVO MENSAJE
         -->
        <MessageBox @message="onNewUserMessage" />
    </div>
</template>

<script lang="ts" setup>
/*
    IMPORTS
*/
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messageList, onNewUserMessage } = useChat();
</script>
