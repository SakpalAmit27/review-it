import mongoose, {Schema,Document}from "mongoose";


// an interface for message and type safety
export interface Message extends Document{

    content:string;
    createdAt:Date;
}

// only for type safety
const MessageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    },
    
})

// for user // 

export interface User extends Document{
    username:string,
    email:string;
    password:string;
    verifyCode:string;
    isVerified:boolean;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
    messages:Message[]
}

const UserSchema:Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        trim:true,
        unique:true

    },
    email:{
        type:String,
        required:[true,"email is required"], 
        unique:true,

        // using regx for email validation // 

        match:[/.+\@.+\..+/,'please use a valid email address']

  },

    password:{
        type:String,
        required:[true,"Password is required"]
  },
    verifyCode:{
        type:String,
        required:[true,"Verify-code is required"]

    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Verify-code-expiry is required"]

    },
    isVerified:{
        type:Boolean,
        default:false,

    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
        
    },
    messages:[MessageSchema]



})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model("User",UserSchema)


// Exporting our Usermodel // 

export default UserModel;