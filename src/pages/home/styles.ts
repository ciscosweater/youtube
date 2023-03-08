import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 40px;
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
    width: 90%;
    align-items: center;
    justify-content: space-evenly;
`;