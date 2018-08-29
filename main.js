const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(
    `<html>
        <head>
            <title>Testing og:url WhatsApp vulnerability</title>
            <meta property="og:title" content="Sign up now and get a free AWS account!" />
            <meta property="og:type" content="website" />       
            <meta property="og:image" content="https://www.netapp.com/us/media/2x-AWS.png" />      
            <meta property="og:url" content="https://amazon.com/free-account" />
        </head>
        <body>
            <h1>This is just a vulnerability test</h1>
            Move along
        </body>
    </html>`
    );
});

app.listen(process.env.PORT || 3000);