import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(procecss.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected.")
    } catch(error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;