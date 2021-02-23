const express = require('express');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./SwaggerObject');
const app = express();
app.use(express.json({ extended: false }));

app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocument.swaggerObj()));

const PORT = process.env.PORT || 5000;

//Connect Database
connectDB();

app.get('/', (req, res) => res.json({ msg: "Welcome to Test API!!!" }));

// Define Routes
app.use('/api/posts', require('./routes/posts'));

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));