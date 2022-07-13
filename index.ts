import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const PORT = process.env.PORT || 3001;

const app = Express();
app.use(cors());
app.use(Express.json());

app.listen(PORT, () => {
  try {
    console.log('🤖 Server is running on port: ', PORT);
  } catch (err) {
    console.log('Error starting Server: ', err);
  }
});