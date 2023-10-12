const {app,gatewayServer} = require('./src/app');

require('dotenv').config()

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`API Documentation Running on http://localhost/apidocs`);
});

gatewayServer.start(process.env.GATEWAY_PORT).then(()=>{
    console.log("API Gateway Started")
})