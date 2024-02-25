const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const OpenAI = require('openai');

const openai = new OpenAI({apiKey : "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"} )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

async function getAnswer(question) {    
    const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Write me 10 sentence summary of this research paper: ${question}` }],
    });
    console.log(stream.choices[0])
}

 fs.readFile('primjer.txt', function(err,data){
    if(err) throw err;
    getAnswer(data);
})


app.listen(3000);

