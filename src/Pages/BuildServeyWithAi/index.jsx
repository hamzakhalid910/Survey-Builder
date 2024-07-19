import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BulbSVG from "../../Icons Svg Components/bulbSVG";
import React from "react";
import Header from "../../Components/Common/Header";
import "./style.scss";
import SvgRenderer from "../../Svg Components";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

import { useState } from "react";

function BuildSurveyWithAi() {
  const API_Key = ""; //Make API Key

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello,I am ChatGPT",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);

    async function processMessageToChatGPT(chatMessages) {
      let apiMessage = chatMessages.map((messageObject) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
          role = "assisttan";
        } else {
          role = "user";
        }
        return { role: role, content: messageObject.message };
      });

      const systemMessage = {
        role: "system",
        content: "I want you to create Survey", //How u want GPT to behave
      };

      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [systemMessage, ...apiMessages],
      };

      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer" + API_Key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.choices[0].message.content);
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              sender: "ChatGPT",
            },
          ]);
          setTyping(false);
        });
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="background-container">
        <div className="header-container flex">
          <div className="bulb-container">
            <div className="bulb-icon-container ">
              <BulbSVG />
            </div>
            <div className="sample-prompts-container">
              <p>Create a new Survey form With AI</p>
            </div>
          </div>
        </div>

        <div className="prompt-input-container">
          <p className="prompt-input-title">
            Tell us what you want to build Survey Form with AI Prompt:
          </p>

          <div className="gpt-box">
            {" "}
            <MainContainer>
              <ChatContainer>
                <MessageList
                  typingIndicator={
                    typing ? (
                      <TypingIndicator content="ChatGPT is typing" />
                    ) : null
                  }
                >
                  {messages.map((message, i) => {
                    return <Message key={i} model={message} />;
                  })}
                </MessageList>
                <MessageInput
                  placeholder="Type Message Here"
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </div>

        <div className="dropdown-container">
          <p className="tip-heading">Tips</p>
          <div className="tips">
            <p>
              Clearly state your question with all necessary details to avoid
              ambiguity.
            </p>

            <p>
              Include examples or show what you’ve tried to help clarify your
              request.
            </p>
            <p>
              If your question is complex, break it down into smaller parts to
              make it easier to understand and answer.
            </p>
            <p>
              Provide context or background information to help better
              understand your query.
            </p>
            <p>
              Clearly mention what you aim to achieve or the desired outcome of
              your query.
            </p>
            <p>
              When asking about code, include relevant code snippets to
              illustrate your issue or question.
            </p>
          </div>
        </div>

        <div className="row promp-templates">
          <div className=" promps-container">
            <h1>Example 1</h1>
            <p>
              Can you explain the main causes of World War I and how each
              contributed to the outbreak of the war?
            </p>
          </div>
          <div className=" promps-container">
            <h1>Example 2</h1>
            <p>
              I'm learning Python and need help with a function that returns the
              factorial of a number. Can you provide a simple example and
              explain how it works?
            </p>
          </div>
          <div className=" promps-container">
            <h1>Example 2</h1>
            <p>
              I'm planning a trip to Japan for two weeks. What are the must-see
              attractions in Tokyo and Kyoto, and any tips for first-time
              travelers?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildSurveyWithAi;
