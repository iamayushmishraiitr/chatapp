import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetmessage from "../../hooks/useGetmessage.js";
import { useEffect, useMemo, useRef } from "react";
import Message from "./Message.jsx";

const MessageDisplay = () => {
  const { id } = useParams();
  const { load, getmessages } = useGetmessage();
  useMemo(() => getmessages({ receiverId: id }), [id]);
  const messages = useSelector((state) => state.messages.messages);
  const cur = useSelector((state) => state.user.currentUser);
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="w-[450px] h-[450px] ml-2 overflow-y-auto">
      {messages &&
        messages.map((message, index) => (
          <div key={index} ref={lastMessageRef}>
            <Message message={message} receiverid={id} />
          </div>
        ))}
    </div>
  );
};

export default MessageDisplay;
