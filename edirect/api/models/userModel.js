const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, max: 12, min: 6 },
    valid: { type: Boolean, default: true },
    created_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('user', UserSchema)

