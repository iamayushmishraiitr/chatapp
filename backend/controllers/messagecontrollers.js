import Conversations from "../models/conversation.js";
import Message from "../models/message.js";
import { io , getReceiverSocket } from "../socket/socket.js";

export const sendmessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.body.id;
    const messageContent = req.body.message;

    let conversation = await Conversations.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation =  new Conversations({
        participants :[senderId, receiverId]
      });
  
    } 
    const newMessage = new Message({
      senderid:senderId,
      recieverid: receiverId,
      message: messageContent,
    });
    conversation.messages.push(newMessage._id);
    await Promise.all([newMessage.save(), conversation.save()]);
 const  receiverSocketId=  getReceiverSocket(receiverId) ;
 if(receiverSocketId)
  {
     io.to(receiverSocketId).emit("newMessage" ,newMessage) ;
  }
      res.status(201).send(newMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).send("Error sending message");
  }
};

export const getmessage = async (req, res) => {
  try {
    const receiverId = req.query.receiverid;
    const senderId = req.query.senderid;

    if (!receiverId || !senderId) {
      return res.status(400).json({ error: "Missing receiverId or senderId" });
    }

    console.log(req.query);

    const conversation = await Conversations.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
console.log("Below conversations ")
    if (!conversation) {
      return res.status(200).json({ message: [] });
    }
    console.log("After conversations " ,conversation)
    // Return messages from the conversation
    return res.status(200).json({ message: conversation.messages });
  } catch (error) {
    console.error("Error getting messages:", error);
    res.status(500).json({ error: "Error while getting messages" });
  }
};
