import React from "react";
import styled from "@emotion/styled";

const MessageInner = styled.div`
    background: ${({ server }) => (server ? "rgb(232, 237, 236)" : "rgb(177, 223, 230)")};
    border-radius: 5%;
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