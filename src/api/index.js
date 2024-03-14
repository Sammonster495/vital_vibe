const express = require('express');
const app = express();
const child_process = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.post('/predict', async (req, res) => {
    try{
        const { experience } = req.body;
        const pythonProcess = child_process.spawn('python', ['../ml_python/salary_prediction.py', experience]);

        const pythonOutput = await new Promise((resolve, reject) => {
            pythonProcess.stdout.on('data', (data) => {
                resolve(data.toString());
            });
            pythonProcess.stderr.on('data', (err) => {
                reject(err.toString());
            });
        });
        res.json({ prediction: pythonOutput });
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }

    
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});