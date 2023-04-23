import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId ;
        const recieverId = request.body.recieverId ;
        const exist =  await Conversation.findOne({members : {$all : [recieverId, senderId]}}) ;

        if(exist) {
            return response.status(200).json('conversation already exist') ;
        }
        const newConversation = new Conversation({
            member : [senderId, recieverId]
        }) 
        await newConversation.save() ;
        return response.status(200).json('conversation saved successfully!') ;
    }
    catch(error) {
        return response.status(200).json(error.message) ;
    }
}