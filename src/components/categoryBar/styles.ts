import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -10px;
`;

export const ItemContainer = styled.div`
    width: 1000px;
    justify-content: space-around;
    display: flex;
`;

export const CategoryItem = styled.div<{ isActive: boolean }>`
    width: auto;
    min-height: 30px;
    border-radius: 8px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ isActive }) => isActive ? "#0f0f0f" : "#f2f2f2"};
    color: ${({ isActive }) => isActive ? "#fff" : "#000"};
    transition: 0.25s;

    span {
    padding: 0 10px 2px 10px;
    margin-bottom: 2.5px;
    font-size: 15px;
}

    :hover {
    background-color: #e5e5e5;
}
`;