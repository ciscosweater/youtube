import styled from "styled-components";

export const ScreenDiv = styled.div<{ openMenu: boolean }>`
    width: 100%;
    padding: ${({ openMenu }) => openMenu ? '0px 50px 30px 50px' : '0px 20px 30px 20px'};
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;