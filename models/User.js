import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    dashboard: {
        // uuid: { type: String, default: uuidv4 },
        // uuid: { type: String, default: uuidv4 },
        razorPayId: { type: String },
        razorPaySecret: { type: String },
        username: { type: String },
        lastLogin: { type: Date, default: Date.now },
    }
}, { timestamps: true });

export default mongoose.models.User || model('User', UserSchema);