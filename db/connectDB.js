import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return mongoose.connections[0];
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        return conn;
    } catch (error) {
        process.exit(1);
    }
}

export default connectDB;