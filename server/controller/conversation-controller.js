
import conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId ;
        const recieverId = request.body.recieverId ;
        const exist =  await conversation.findOne({members : {$all : [recieverId, senderId]}}) ;

        if(exist) {
            return response.status(200).json('conversation already exist') ;
        }
        const newConversation = new conversation({
            member : [senderId, recieverId]
        }) 
        newConversation.save() ;
        return response.status(200).json('conversation saved successfully!') ;
    }
    catch(error) {
        return response.status(200).json(error.message) ;
    }
}