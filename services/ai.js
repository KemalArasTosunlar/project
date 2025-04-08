import { openai } from '../config/openai'; // Assuming OpenAI is configured

export const askAI = async (message, dogId) => {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: message },
                { role: "system", content: `Provide insights based on the dog's ID: ${dogId}` }
            ]
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        throw new Error(error.message);
    }
};
