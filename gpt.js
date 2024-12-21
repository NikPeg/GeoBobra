const axios = require('axios');
const fs = require('fs');
const config = require('./config');

const generateDrawing = async (task, texFilePath, maxTokens = 1000) => {
    const prompt = `${task} ${config.content.prompt}`;

    const requestBody = {
        model: config.model.gpt,
        messages: [{ role: "user", content: prompt }],
        max_tokens: maxTokens
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.gpt.token}`
            }
        });
        if (response.data && response.data.choices && response.data.choices.length > 0) {
            let latexCode = '';
            response.data.choices.forEach(choice => {
                if (choice.message && choice.message.content) {
                    latexCode += choice.message.content + '\n'; // Trim and concatenate the content
                }
            });
            fs.writeFileSync(texFilePath, latexCode);
            return latexCode;
        } else {
            console.error('Unexpected response format:', response.data);
            throw new Error('No valid response found in response');
        }
    } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
        throw error;
    }
};

module.exports = { generateDrawing };
