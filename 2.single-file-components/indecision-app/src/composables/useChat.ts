import { ref } from 'vue';

import type { IChatMessage } from '@/interfaces/chat-message.interface';
import { sleep } from '@/util/sleep';

export const useChat = () => {
    const chatbotURL = 'https://yesno.wtf/api';

    /*
        LISTA DE MENSAJES USUARIO
    */
    const messageList = ref<IChatMessage[]>([
        {
            id: new Date().getTime(),
            message: 'Hola',
            itsMine: true,
        },
        {
            id: new Date().getTime(),
            message: 'Hola',
            itsMine: false,
        },
        {
            id: new Date().getTime(),
            message: 'Como estas?',
            itsMine: true,
        },
        {
            id: new Date().getTime(),
            message: 'Bien y vos?',
            itsMine: false,
        },
        {
            id: new Date().getTime(),
            message: 'Bien bien, que haces?',
            itsMine: true,
        },
    ]);

    const getChatbotResponse = async (): Promise<IChatbotResponse> => {
        const fetchRsp = await fetch(chatbotURL);

        const data = (fetchRsp.json()) as unknown as IChatbotResponse;

        return data;
    }

    /*
        HANDLER DE NUEVOS MENSAJES
    */
    const onNewUserMessage = async (content: string): Promise<void> => {
        if (!(content?.length)) return;

        messageList.value.push({
            id: new Date().getTime(),
            itsMine: true,
            message: content,
        });

        if (!content.endsWith("?")) return;

        await sleep();
        
        try {
            const rsp = await getChatbotResponse();
            
            messageList.value.push({
                id: new Date().getTime(),
                itsMine: false,
                message: rsp.answer,
                imageURL: rsp.image
            });
        } catch (error) {
            console.log({ error });
        }
    };

    return {
        messageList,
        onNewUserMessage
    }
}
