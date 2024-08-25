import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({
    is_success: {
        type: Boolean,
        required: true
    },
    user_id: {
        type: String,
        required: true,
        default: 'suryansh_raj_26072004'
    },
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Simple regex for email validation
    },
    roll_number: {
        type: String,
        required: true
    },
    numbers: {
        type: [String]
    },
    alphabets: {
        type: [String]
    },
    highest_lowercase_alphabet: {
        type: [String]
    }
});

const User = mongoose.model('User', userSchema);
export default User;
// module.exports = User;
