import router  from './routes';
import express from 'express';

const app = express();

app.use(router);


app.listen(3333, () => console.log('Server is running on port 3333'));