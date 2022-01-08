import 'reflect-metadata'

import express from 'express';

import'./database/connect'
import routes from './routes'
const cors = require('cors')
const app = express();

app.use(cors('*'))
app.use(express.json());

app.use(routes)



app.listen(3000, () => console.log('server started in port 3000'))