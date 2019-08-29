//SERVER

//Crear websockets.js

const socketio = require("socket.io");

module.exports = server => {
  const io = socketio(server).listen(3005);
  io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("mensajeria", m => {
      console.log(`NUEVO MENSAJE: ${m}`);
      socket.broadcast.emit("front", m);
    });
  });
};

//Incluir en bin/www

require("../websockets")(server);


// CLIENT

// CHAT
// Crear Chat component
// Importar:
//Instalar también "@emotion/core"
import styled from "@emotion/styled";
import { withState, lifecycle, compose } from "recompose";
import io from "socket.io-client";


//Inicializar socket
const socket = io("localhost:3005");

// Composing:

// Crear valor de state message y funcion que actualiza.
const injectStateArray = withState("messages", "setMessages", []);


// Da la capacidad de trabajar con el ciclo de vida usando funciones puras

const injectSocketIo = lifecycle({
  componentDidMount() {
    const { messages, setMessages } = this.props;
    console.log("Chat Ready");
    socket.on("front", msg => {
      console.log(`Mensaje del servidor: ${msg}`);
      messages.push({ type: "server", msg });
      setMessages(messages);
    });
  }
});

// Sacamos los messages y el setMessages de los props y encendemos la escucha de socket en el canal "front", 
// recibimos el mensaje y lo pusheamos en el array que pusheamos al state con la funcion setMessages.

// Componemos el componente

const chatInjector = compose(
  injectStateArray,
  injectSocketIo
);



export const Chat = chatInjector(({ messages, setMessages }) => (
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



// Creamos componente de estilo y envolvemos el chat con el

const ChatWrapper = styled.div`
  border: 1px solid red;
  padding: 10px;
  width: 400px;
`;




// INPUTBOX CLASS

// Le damos estilos

import styled from "@emotion/styled";

const Input = styled.input`
  width: 80%;
  padding: 5px;
  font-size: 20px;
  box-sizing: border-box;
  border: 0;
`;


const Button = styled.a`
  width: 20%;
  padding: 5px;
  font-size: 20px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  background: tomato;
  color: white;
  user-select: none;
  cursor: pointer;
`;

// creamos constructor y State con text: ''
// Al input le damos la value del text y al onchange una funcion que asigne el e.target.value al state.

        <Input 
          value={text}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}>
        </Input>

// En app definimos la función newMessage y se la pasamos al input

        newMessage={msg => {
               socket.emit("mensajeria", msg);
               messages.push({ type: "me", msg });
               setMessages(messages);
             }}

// De vuelta en Input creamos el METODO send()
// Pilla el text del state y la funcion newMessage de los props. Si hay newMessage lo envía.
  send() {
    const { text } = this.state;
    const { newMessage } = this.props;
    if (newMessage) {
      console.log(`Sending message: ${text}`);
      newMessage(text);
    } else {
      console.log("Missing callback");
    }
    this.setState({ text: "" });
  }

  // Definimos un onkeypress en el input para lanzar send()

  onKeyPress={e => {
            if (e.key === "Enter") {
              this.send();
            }
          }}

// Ponemos un boton para los analogicos

// **COMPROBAR CAMBIO DE STATE**

// creamos FUNCION Message para pintar los mensajes del array.

  import React from "react";
  import styled from "@emotion/styled";

//Comentar que los estilos pueden tener logica
  const MessageInner = styled.div`
    background: ${({ server }) => (server ? "gray" : "green")};
    border-radius: 10px;
    padding: 4px 8px;
    margin: 10px;
    display: inline-block;
    text-align: ${({ server }) => (server ? "left" : "right")};
  `;
  
  const MessageWrapper = styled.div`
    text-align: ${({ server }) => (server ? "left" : "right")};
  `;
  
  export const Message = ({ children, server = false }) => (
    <MessageWrapper server={server}>
      <MessageInner server={server}>{children}</MessageInner>
    </MessageWrapper>
  );
  

//Mapear el array creando messages

//Comentar que lo que esta dentro de la etiqueta se pasara como children en las props
{
  messages.map(({ type, msg }, idx) => (
    <Message server={type === "server" ? true : false} key={idx}>
      {msg}
    </Message>
  ))
}