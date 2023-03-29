import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VideoContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: 10px;
    margin: 30px 0px 50px 0px;
    justify-content: space-evenly;
`;

export const PageBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 95%;
    margin-top: 10px;
    margin-bottom: -15px;
`;

export const TitleDiv = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
`;

export const TitleIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;
`;

export const TitleText = styled.span`
    font-size: 20px;
    font-weight: 500;
`;

export const ShowMore = styled.span`
    font-size: 16px;
    cursor: pointer;
    color: #3381ff;
    font-weight: 500;

    :hover {
        color: #2674f2;
    }
`;