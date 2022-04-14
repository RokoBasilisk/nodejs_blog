const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://nghia:thaibao2015@social.mvvs3.mongodb.net/education_dev?retryWrites=true&w=majority"
    );
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect Fail!!!");
    console.log(error);
  }
}

module.exports = { connectDB };
