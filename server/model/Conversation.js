import mongoose from 'mongoose' ;

const ConversationSchema = new mongoose.Schema({
    member : {
        type : Array
    },
    message : {
        type : String
    } }, 
    {
        timestamp : true 
    }
) ; 

const Conversation = mongoose.model('Conversation', ConversationSchema) ;
export default Conversation ;