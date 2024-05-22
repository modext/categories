import axios from 'axios';

export const sendMessageToBackend = async (message: string) => {
    try {
        const response = await axios.post('https://ekko-ai.influencerstockexchange.com/chat', {
            query: message
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return response.data.bot; 
    } catch (error) {
        console.error("Error sending message:", error);
        throw new Error('Failed to send message'); 
    }
};
