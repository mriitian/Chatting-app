import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors({origin:true}))

app.get('/', (req, res) => {
    res.send('Home');
})

app.post('/authenticate', async (req, res) => {
    const {username} = req.body;
    try {
        const r = await axios.put('https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"PRIVATE-KEY": "86a8c64e-0ef5-44b1-9b44-b0ef4c237c5a"}})
        
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
})

app.listen(port, (req, res) => {
    console.log('Server running on port' + port);
})