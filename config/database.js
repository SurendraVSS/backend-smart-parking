const mongoose = require("mongoose");
const { MONGO_URI } = process.env;
exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect('mongodb+srv://Chinmay:Chinmay@cluster0.jvc0sra.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
