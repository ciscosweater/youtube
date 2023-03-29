import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1800px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 40px;

    @media (max-width:1280px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
    }
`;

export const VideoContainer = styled.div`
    width: 100%;
`;

export const SectionDivider = styled.div`
    width: 95%;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
`;

export const ShortsTitleContainer = styled.div`
    width: 100%;
    margin-top: -10px;
    padding-left: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const ShortsIcon = styled.img`
    width: 18px;
    height: 22.5px;
    padding-right: 15px;
`;

export const ShortsTitle = styled.span`
    font-size: 22px;
`;

export const ShortsVideoContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: -15px;
    
    @media (max-width: 1280px) {
        row-gap: 20px;
        column-gap: 10px;
    }
`;

export const ShowMoreDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 40px;
    margin-bottom: -38px;
    cursor: pointer;

    :hover {
        background-color: #e0e0e0;
    }
`;

export const ShowMoreImg = styled.img`
    width: 18px;
    height: 18px;
`;