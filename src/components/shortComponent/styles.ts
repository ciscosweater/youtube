import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: 175px;
    cursor: pointer;

    @media (max-width: 1910px) {
        width: ${({ openMenu }) => openMenu ? "120px" : "150px"};
    }
`;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
    width: 100%;
    height: 300px;
    border-radius: 12px;
    padding-bottom: 5px;

    transition: 0.25s;

    :hover {
        transform: scale(1.02);
    }

    @media (max-width: 1910px) {
        height: ${({ openMenu }) => openMenu ? "205px" : "260px"};
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
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