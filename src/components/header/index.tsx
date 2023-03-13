import React, { useContext } from 'react';
import { ButtonContainer, ButtonIcon, Container, LogoContainer, SearchContainer, SearchInputContainer, SearchInput, SearchButton, HeaderButton, LoginButton, LoginIcon } from "./styles";
import HamburguerIcon from '../../assets/menuIcons/hamburger.png';
import Logo from '../../assets/youtube-logo.png';
import SearchIcon from '../../assets/menuIcons/search.png';
import MicIcon from '../../assets/menuIcons/mic.png';
import VideoIcon from '../../assets/menuIcons/video.png';
import NotificationIcon from '../../assets/menuIcons/bell.png';
import LoginPic from '../../assets/menuIcons/login.png';
import { MenuContext } from '../../contexts/menuContext';

function Header() {
    const { openMenu, setOpenMenu } = useContext(MenuContext);

    const handleClick = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <Container>

            <LogoContainer>
                <ButtonContainer onClick={handleClick} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img
                    style={{ cursor: "pointer", width: "80px" }}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon} />
                </ButtonContainer>
                <LoginButton openMenu={openMenu}>
                    <LoginIcon alt="" src={LoginPic} />
                    <p>Fazer login</p>
                </LoginButton>
            </HeaderButton>

        </Container>
    );
};

export default Header;