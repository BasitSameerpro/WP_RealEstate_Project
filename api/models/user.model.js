import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique: true,
    },
    email: {
        type:String,
        required:true,
        unique: true,
    },
    password: {
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Favatar&psig=AOvVaw2VO80NYYFLIBfTh8GDxvXL&ust=1733412694412000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID8idK3jooDFQAAAAAdAAAAABAE.jpg"
    },
},{ timestamps: true}); 

const User = mongoose.model('User' , userSchema);

export default User;