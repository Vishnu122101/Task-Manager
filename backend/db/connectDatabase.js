import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vishnu122101:T9kNKfzHWi6N1uWB@taskmanager.erhyvkh.mongodb.net/?retryWrites=true&w=majority&appName=TaskManager");
    console.log("connected to database");
  } catch (error) {
    console.error(`"Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
