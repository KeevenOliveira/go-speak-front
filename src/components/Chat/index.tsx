import React, { useEffect, useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { Container, Align, MessagesContainer, Content, MessageReceived, MessageSend } from './styles';
import SendIcon from '@mui/icons-material/Send';
import io, { Socket } from "socket.io-client";
interface IMessages {
    owner: string;
    message: string;
}

const Chat = () => {
    const [messages, setMessages] = useState<[IMessages]>();
    const [messageSender, setMessageSender] = useState<string | null>();
    useEffect(() => {
        const socket = io("http://localhost:8080");
        socket.on('connection', (messagesArray: [IMessages]) => {
            console.log('Hello with chat!')
            setMessages(messagesArray);
        })
    }, [messageSender])

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('entrou aqui')
        const socket = io("http://localhost:8080");
        console.log('enviou!');
        console.log('message:', messageSender);
        socket.emit('new_messages', {
            id: 'k21jb87412bkjh',
            owner: 'Keeven Oliveira',
            message: messageSender
        })
        socket.on('connection', (messagesArray: [IMessages]) => {
            console.log('Hello with chat!')
            setMessages(messagesArray);
        })
        setMessageSender('');
    }

    return (
        <Container>
            <Content>
                <MessagesContainer>
                    {messages?.map((message, index) => {
                        if (message.owner === 'Keeven Oliveira') {
                            return (
                                <MessageSend key={index}>
                                    <div>
                                        <p>{message.message}</p>
                                    </div>
                                </MessageSend>
                            )
                        } else {
                            return (
                                <MessageReceived key={index}>
                                    <p>{message.message}</p>
                                </MessageReceived>
                            )
                        }
                    })}
                </MessagesContainer>
                <form onSubmit={sendMessage} action="">
                    <Align>
                        <TextField
                            inputProps={{ style: { color: '#fff' } }}
                            color='secondary'
                            value={messageSender}
                            onChange={(e) => {
                                setMessageSender(e.target.value);
                            }}
                            // style={{ border: '2px solid #4D38A2' }}
                            placeholder="Digite aqui"
                        />
                        <IconButton type='submit'>
                            <SendIcon style={{ color: '#6826aa' }} />
                        </IconButton>
                    </Align>
                </form>
            </Content>
        </Container>
    );
}

export default Chat;