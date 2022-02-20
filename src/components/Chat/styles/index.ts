import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MessagesContainer = styled.div`
    width: 400px;
    height: 700px;
    border-radius: 10px;
    border: 2px solid #4D38A2;
`;

export const Align = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`;

// export const Input = styled(TextField)`
//     &::-webkit-input-placeholder{
//         color: #fff;
//     }
// `;
export const Content = styled.main`
    display:flex;
    flex-direction: column;
`;



export const MessageReceived = styled.div`
    margin: 0.5em 0.5em;
    background-color: #32354fb2;
    width: 50%;
    padding: 0.5rem;
    border-radius: 0 10px 10px 10px;
    /* height: ; */
    p{
        color: #D5D9DA;    
    }
`;

export const MessageSend  = styled.div`
    display: flex;
    justify-content: flex-end;
    /* justify-content: flex-end; */
    div{
    margin: 0.5em 0.5em;
    background-color: #4D38A2;
    width: 50%;
    padding: 0.5rem;
    border-radius: 10px 0px 10px 10px;
    display: flex;
        /* height: ; */
        p{
            color: #D5D9DA;
        }
    }
`;