import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const YTShorts = styled.video`
    width: 25%;
`;

export const SideDiv = styled.div<{ openMenu: boolean }>`
    align-self: ${({ openMenu }) => openMenu ? 'center' : 'end'};
    width: 80px;
    height: 65%;
    margin-bottom: 41px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;