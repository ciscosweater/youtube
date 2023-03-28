import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const UploadBox = styled.div`
    padding: 50px 0px;
    margin: 20px 0px 0px 50px;
    width: 700px;
    min-height: 500px;
    top: 80px;
    border: 1px solid #C0C0C0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleLine = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
    align-items: center;
`;

export const YoutubeLogo = styled.img`
    width: 100px;
`;

export const UploadTitle = styled.span`
    font-size: 22px;
    margin-bottom: 5px;
    font-weight: 500;
`;

export const UploadSubtitle = styled.span`
    font-size: 15px;
    margin-bottom: 30px;
    text-align: center;
    width: 500px;
`;

export const InputLabel = styled.span`
    width: 500px;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const InputBox = styled.input<{ error: boolean }>`
    width: 460px;
    height: 45px;
    border: 1px solid #c0c0c0;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: ${({ error }) => error ? "#fceae9" : "#fff"};
`;

export const Message = styled.p`
    width: 350px;
    font-size: 14px;
    font-weight: 400;
    color: #696969;
    margin: 20px 0px 30px 0px;
    text-align: center;
`;

export const ErrorMessage = styled.p<{ error: boolean }>`
    display: ${({ error }) => error ? "" : "none"};
    width: 350px;
    font-size: 18px;
    font-weight: 600;
    color: #d62d20;
    text-align: center;
    margin: -15px 0px 10px 0px;
`;

export const UploadButton = styled.button<{ error: boolean }>`
    height: 45px;
    width: 120px;
    border: none;
    background-color: ${({ error }) => error ? "#d62d20" : "#3381ff"};
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        background-color: ${({ error }) => error ? "#b1251b" : "#2674f2"};
    }
`;