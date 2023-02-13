import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import { StarbucksController } from './controllers/starbucks.controller.js'
import { PhoneController } from './controllers/phone.controller.js'
import { UserContoller } from './controllers/users.controller.js'
import { StarBucks } from './mongodb/starbucksSchema.model.js'
import { Tokens } from './mongodb/tokenSchema.model.js'
import { tokenservice } from './controllers/services/phone.services.js'
import { Users } from './mongodb/userSchema.model.js'

const app = express()

app.use(express.json());
app.use(cors()) 
app.use('/api-docs', express.json(), swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

const userContoller = new UserContoller(Users, Tokens)
app.post('/users', userContoller.signupUserList)
app.get('/users', userContoller.getUserList)

const Tokenservice = new tokenservice()
const phoneController = new PhoneController(Tokens,Tokenservice)
app.post('/tokens/phone', phoneController.tokenGet)
app.patch('/tokens/phone', phoneController.authToken)


const starBucks =  new StarbucksController(StarBucks)
app.get('/starbucks', starBucks.findCoffeeMenu)

// await mongoose.connect("mongodb://my-mongodb:27017/myproject") // compose를 통한 연결
await mongoose.connect("mongodb://localhost:27017/myproject") // 로컬 연결

app.listen(3000, ()=>{
    console.log('welcome in new server port 3000')
})