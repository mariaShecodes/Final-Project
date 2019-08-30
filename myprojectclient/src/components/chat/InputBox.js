import React, { Component } from 'react'
import styled from "@emotion/styled";

const Input = styled.input`
  width: 80%;
  padding: 4px;
  font-size: 20px;
  box-sizing: border-box;
`;

const Button = styled.p`
  width: 20%;
  padding: 5px;
  margin-top: 5px;
  font-size: 20px;
  box-sizing: border-box;
  border-radius: 5%;
  display: inline-block;
  text-align: center;
  background: rgb(131, 201, 212);
  color: white;
  user-select: none;
  cursor: pointer;
`;


export class InputBox extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  send() {
    const {text} = this.state
    const {newMessage} = this.props

    if (newMessage) {
      console.log(`Sending message: ${text}`)
      newMessage(text)
    }else {
      console.log("missing Callback")
    }
    this.setState({text: ''})
  }

  render() {
    const text = this.state.text
    return (
      <div>
        <Input 
          value={text}
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.send();
            }
          }}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}>
        </Input>
        <Button onClick={() => this.send()}>Enviar</Button>

      </div>
    )
  }
}