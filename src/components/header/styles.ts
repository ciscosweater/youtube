import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 2;
    top: 0px;

    @media (max-width: 1280px) {
        width: 100vw;
        z-index: 999;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin ? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.25s;

    :hover {
        background-color: #f2f2f2;
    }

`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;

    @media (max-width: 1280px) {
        display: none;
    }
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }
`;

export const HeaderButton = styled.div`
    display: flex;
`;

export const LoginButton = styled.div<{ openMenu: boolean }>`
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

    @media (max-width: 1280px) {
        width: 40px;

        p {
            display: none;
        }
    }
`;

export const LoginIcon = styled.img`
    width: 30px;
    padding-right: 5px;

    @media (max-width: 1280px) {
        padding-right: 0px;
    }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
  width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const DropdownMenuSection = styled.div`
    margin: 7.5px 0px;
`;

export const DropdownMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }

  span {
    font-size: 14px;
  }
`;

export const DropdownMenuIcon = styled.img`
    width: 18px;
    margin: 0px 15px 0px 10px;
`;

export const DropdownUser = styled.div`
    display: flex;
    margin: 15px 10px;
`;

export const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const UserName = styled.span`
    font-size: 16px;
`;

export const UserEmail = styled.span`
    font-size: 16px;
`;

export const UserManage = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;
    color: #3381ff;

    :hover {
        color: #2674f2;
    }
`;

export const DropdownDivider = styled.div`
    width: 100%;
    background-color: #e0e0e0;
    height: 1px;
`;