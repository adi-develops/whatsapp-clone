import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    iss: String,
    nbf: Number,
    aud: String,
    sub: {
        type: String,
        required: true
    },
    email: String,
    email_verified: Boolean,
    azp: String,
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    given_name: String,
    family_name: String,
    iat: Number,
    exp:Number,
    jti: String
})

const User = mongoose.model("User", userSchema)

export default User
