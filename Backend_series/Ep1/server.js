require('dotenv').config(); // MUST be at the top

const app = require('./src/app');
const mongoose = require('mongoose');

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((err) => {
      console.log('Error connecting to database:', err);
    });
}

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
