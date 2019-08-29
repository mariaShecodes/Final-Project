import React, { Component } from 'react'
import styled from "@emotion/styled";
import { withState, lifecycle, compose } from "recompose";
import {Message} from './Message'
import io from "socket.io-client";
import {InputBox} from './InputBox'

const socket = io("localhost:5000");

const ChatWrapper = styled.div`
  border: 1px solid rgb(23, 162, 184);
  border-radius: 5px;
  padding: 10px;
  width: 400px;
`;

const injectStateArray = withState("messages", "setMessages", []);

const injectSocketIo = lifecycle({

    componentDidMount() {
      const {messages, setMessages} = this.props
      console.log("Chat Ready")
      socket.on("front", msg =>{
        console.log(`Mensaje del servidor ${msg}`)
        messages.push({type: "server", msg})
        setMessages(messages)
      })
    }
})

const chatInjector = compose(
    injectStateArray,
    injectSocketIo
);

export const Chat = chatInjector(({messages, setMessages})=> (
    <ChatWrapper>
      {messages.map(({ type, msg }, idx) => (
        <Message server={type === "server" ? true : false} key={idx}>
          {msg}
        </Message>
      ))}
      <InputBox
        newMessage={msg => {
          socket.emit("mensajeria", msg);
          messages.push({ type: "me", msg });
          setMessages(messages);
        }}
        />
    </ChatWrapper>
  
))
  