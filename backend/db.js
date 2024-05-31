const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://tiwariankit3105:ankit123@cluster0.hmwjthp.mongodb.net/Todo"
    );
    console.log("Mogno DB Connected Successfully");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
