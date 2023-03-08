import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu ? '300px' : '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 95%;
    min-height: ${({ openMenu }) => openMenu ? '45px' : '80px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu ? 'none' : 'center'};

    span {
        font-weight: ${({ openMenu }) => openMenu ? '400' : '400'};
        margin-left: ${({ openMenu }) => openMenu ? '20px' : 'none'};
        font-size: ${({ openMenu }) => openMenu ? '16px' : '12px'};
        padding-top: ${({ openMenu }) => openMenu ? '0' : '5px'};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
`;

export const MenuDiv = styled.div<{ openMenu: boolean }>`
    width: 95%;
    border: 0.5px solid #e0e0e0;
    margin: 15px 0 15px 0;
    display: ${({ openMenu }) => openMenu ? '' : 'none'};
`;

export const LoginText = styled.p<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu ? '' : 'none'};
    width: 80%;
    margin-top: 0px;
`;

export const LoginButton = styled.div<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
    border-radius: 20px;
    height: 35px;
    width: 135px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: -50px;

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

export const ExploreTitle = styled.p<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu ? '' : 'none'};   
    font-size: 20px;
    align-self: start;
    padding: 0 0 0 20px;
    margin: 0px 0px 10px 0px;
`;

export const LinksContainer = styled.div<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
    width: 80%;
    flex-wrap: wrap;
    gap: 0 10px;
    margin-bottom: 10px;
`;

export const LinksSpan = styled.span`
    font-size: 0.8em;
    font-weight: 500;
    color: #505050;
`;

export const FooterText = styled.p<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu ? '' : 'none'};
    color: #808080;
    font-size: 0.8em;
    align-self: start;
    padding: 0 0 0 20px;
`;