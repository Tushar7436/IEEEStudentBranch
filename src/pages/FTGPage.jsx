import "../Assets/styles/FTG.css";
import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import avatar1 from '../Assets/images/Avatars/avatar1.jpg';
import avatar2 from '../Assets/images/Avatars/avatar2.jpg';
import avatar3 from '../Assets/images/Avatars/avatar3.jpg';
import avatar4 from '../Assets/images/Avatars/avatar4.jpg';
import avatar5 from '../Assets/images/Avatars/avatar5.jpg';
import avatar6 from '../Assets/images/Avatars/avatar6.jpg';
import avatar7 from '../Assets/images/Avatars/avatar6.jpg';
import avatar8 from '../Assets/images/Avatars/avatar6.jpg';
import messageSound from '../Assets/images/Avatars/ding.mp3';

const predefinedMessages = [
  { text: 'Guys tumhe pata hai!🤯', user: 'Tushar', avatars: [avatar2, avatar3] },
  { text: 'kya hua 🤔', user: 'Shristi', avatars: [avatar1, avatar2, avatar3] },
  { text: 'IEEE ka hackathon aya hai 🔥', user: 'Arjun', avatars: [avatar4, avatar5, avatar6] },
  { text: `FTG's bhi banae hai 🙂`, user: 'vikas', avatars: [avatar7] },
];

const additionalMessages = [
  { text: 'khud dekh le 😜', user: 'Arjun', avatars: [avatar4] },
];

const DiscordLink = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open('https://discord.gg/RwjFNHgV');
  };

  return (
    <button onClick={handleClick}>Chalo dekhte hai</button>
  );
};

export const FTG = () => {
  const [messages, setMessages] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [additionalMessageIndex, setAdditionalMessageIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const audioRef = useRef(new Audio(messageSound));
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messageIndex < predefinedMessages.length) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, predefinedMessages[messageIndex]]);
        if (messageIndex === 0) { 
          audioRef.current.play();
        }
        setMessageIndex(messageIndex + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [messageIndex]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleButtonClick = () => {
    if (!buttonClicked) {
      setButtonClicked(true);

      const newMessage = { text: 'kya hai ye FTG ?', user: 'You', avatars: [avatar8], fromYou: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      audioRef.current.play();

      setTimeout(() => {
        if (additionalMessageIndex < additionalMessages.length) {
          setMessages((prevMessages) => [...prevMessages, additionalMessages[additionalMessageIndex]]);
          setAdditionalMessageIndex(additionalMessageIndex + 1);
          audioRef.current.play();
        }
      }, 1000);
    }
  };

  return (
    <div className="FTG">
      <div className="chatbox">
        <div className="chatbox-header">
          Somewhere in VIT.
        </div>
        <div className="chatbox-messages">
          <TransitionGroup>
            {messages.map((message, index) => (
              <CSSTransition key={index} timeout={300} classNames={`message-${message.user}`}>
                <div ref={index === messages.length - 1 ? messagesEndRef : null} className={`chatbox-message ${message.user} ${message.fromYou ? 'from-you' : ''}`}>
                  <div className="message-user">{message.user}</div>
                  <div className="message-content">
                    <div className="message-text">{message.text}</div>
                  </div>
                  <div className="avatars">
                    {message.avatars.map((avatar, idx) => (
                      <img key={idx} src={avatar} alt="avatar" />
                    ))}
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        {messages.length >= 4 && (
          <div className="chatbox-footer animated-footer">
            Your turn to reply
            <div className="reply-buttons">
              <button onClick={handleButtonClick} disabled={buttonClicked}>kya hai ye FTG ?</button>
              <DiscordLink />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
