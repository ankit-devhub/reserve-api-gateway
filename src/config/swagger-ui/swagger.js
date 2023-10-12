const swaggerOptions = {
    definition:{
        openapi:"3.1.0",
        info:{
            title:"Reserve App - Api Documentation",
            version:"1.0.0.0",
            description:
            "A sample api"
        },
        servers:[
            {
                description:"API Gateway",
                url:`http://localhost:9090`
            }
        ],
    },
    apis:["../../routes/*.js"]
};

module.exports = swaggerOptions