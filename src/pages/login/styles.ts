import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const LoginBox = styled.div`
    width: 450px;
    height: 500px;
    border: 1px solid #C0C0C0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const YoutubeLogo = styled.img`
    width: 100px;
`;

export const LoginTitle = styled.span`
    font-size: 22px;
    margin-bottom: 5px;
`;

export const LoginSubtitle = styled.span`
    font-size: 16px;
    margin-bottom: 30px;
`;

export const InputBox = styled.input<{ error: boolean }>`
    width: 310px;
    height: 45px;
    border: 1px solid #c0c0c0;
    background-color: ${({ error }) => error ? "#fceae9" : "#fff"};
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
`;

export const Message = styled.p`
    width: 350px;
    font-size: 14px;
    font-weight: 400;
    color: #696969;
    margin: 40px 0px;
`;

export const ErrorMessage = styled.p<{ error: boolean }>`
    display: ${({ error }) => error ? "" : "none"};
    width: 350px;
    font-size: 14px;
    font-weight: 600;
    color: #d62d20;
    margin: -15px 0px 10px 0px;
`;

export const RecoverEmail = styled.a<{ error: boolean }>`
    font-size: 14px;
    font-weight: 500;
    color: ${({ error }) => error ? "#d62d20" : "#3381ff"};
    align-self: flex-start;
    margin-left: 48px;
    cursor: pointer;

    :hover {
        color: ${({ error }) => error ? "#b1251b" : "#2674f2"};
    }
`;

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
`;

export const LoginButton = styled.button<{ error: boolean }>`
    height: 35px;
    width: 80px;
    border: none;
    background-color: ${({ error }) => error ? "#d62d20" : "#3381ff"};
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        background-color: ${({ error }) => error ? "#b1251b" : "#2674f2"};
    }
`;

export const SignUp = styled.a<{ error: boolean }>`
    font-size: 14px;
    font-weight: 500;
    color: ${({ error }) => error ? "#d62d20" : "#3381ff"};
    cursor: pointer;

    :hover {
        color: ${({ error }) => error ? "#b1251b" : "#2674f2"};
    }
`;