import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const NotLogged = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const HistoryImage = styled.img`
    width: 120px;
`;

export const Title = styled.span`
    font-size: 25px;
    text-align: center;
    font-weight: 500;
`;

export const Subtitle = styled.span`
    font-size: 16px;
    text-align: center;
`;

export const LoginButton = styled.div`
    display: flex;
    border-radius: 20px;
    height: 35px;
    width: 135px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 2px 0px 0px 10px;
    transition: 0.25s;

    p {
        font-size: 0.9em;
        font-weight: 600;
        color: #1755d3;
        padding-bottom: 2px;
    }

    :hover {
        background-color: #def1ff;
        outline: none;
        border-color: #def1ff;
    }
`;

export const LoginIcon = styled.img`
    width: 30px;
    padding-right: 5px;
`;