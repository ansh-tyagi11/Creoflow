import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected to MongoDB");
        return mongoose.connections[0];
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected:${conn.connection.host}`)
        return conn;
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;