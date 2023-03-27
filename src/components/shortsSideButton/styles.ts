import styled from "styled-components";

export const ButtonDiv = styled.div`
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;

    @media (max-width: 1280px) {
        width: 40px;
    }
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #D3D3D3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;

    :hover {
        background-color: #C8C8C8;
    }

    @media (max-width: 1367px) {
        width: 45px;
        height: 45px;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;

    @media (max-width: 1367px) {
        width: 20px;
    }
`;

export const ButtonTitle = styled.span`
    font-size: 16px;
    text-align: center;
    width: 70px;
    word-wrap: break-word;

    @media (max-width: 1367px) {
        width: 50px;
    }
`;