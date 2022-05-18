import { AppDataSource } from "./data-source"
import * as express from "express"
import { Users } from "./entity/Users"
import { Congregacoes } from './entity/Congregacoes';

import routes from './routes';

// create and setup express app
const app = express()
app.use(express.json())

const port = '3088'

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
    app.use(routes)
})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
})

// start express server
app.listen(port, ()=>{
console.log('Escutando na porta '+port)
})