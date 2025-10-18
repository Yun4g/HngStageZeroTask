import express from 'express';
import dotenv from 'dotenv';
import me from './routes/me.js';
import cors from 'cors';


 dotenv.config();


const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());

app.use(me);


app.use(cors({
  origin: '*',
  methods: ['GET']
}));



app.get('/', (req, res) => {
    res.send('Stage Zero Hng Task');
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





