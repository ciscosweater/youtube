import styled from "styled-components";

export const Container = styled.div`
    width: 345px;
    cursor: pointer;

    @media (max-width: 1910px) {
        width: 240px;
    }

    @media (max-width: 1280px) {
        width: 345px;
    }
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 194px;
    border-radius: 12px;
    padding-bottom: 5px;
    transition: 0.25s;

    :hover {
        transform: scale(1.02);
        position: relative;
        z-index: 0;
    }

    @media (max-width: 1910px) {
        height: 135px;
    }

    @media (max-width: 1280px) {
        height: calc(90vw * 0.5625)
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;

    @media (max-width: 1910px) {
        width: 30px;
        height: 30px;
    }
`;

export const ChannelInitials = styled.div`
    background-color: beige;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    padding-bottom: 5px;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;