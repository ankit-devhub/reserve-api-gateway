const express = require('express');
const app = express();
const logger = require('./services/Logger/logger');
const gateway = require('fast-gateway');

//swagger-ui setup
const swaggerDocs = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const swaggerSpecs = swaggerDocs(require('./config/swagger-ui/swagger'))
app.use("/apidocs",swaggerUi.serve,swaggerUi.setup(swaggerSpecs))



//API Gateway Setup
const gatewayServer = gateway({
    routes:[
        {
            prefix:'/auth',
            target:'http://localhost:5001',
        },
        {
            prefix:'/booking',
            target:'http://localhost:5002',
        }
    ]
})

gatewayServer.get('/cus',(req,res)=>{
    logger.info("hit cus api");
    res.send("working gatewayserver route")
})


module.exports = {app,gatewayServer};