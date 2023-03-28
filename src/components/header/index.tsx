import React, { useContext, useState } from 'react';
import { ButtonContainer, ButtonIcon, Container, LogoContainer, SearchContainer, SearchInputContainer, SearchInput, SearchButton, HeaderButton, LoginButton, LoginIcon, DropdownContainer, DropdownMenu, DropdownMenuItem, DropdownUser, UserInfoDiv, UserName, UserEmail, UserManage, DropdownDivider, DropdownMenuIcon, DropdownMenuSection } from "./styles";
import HamburguerIcon from '../../assets/menuIcons/hamburger.png';
import oldLogo from '../../assets/oldLogo.png';
import newLogo from '../../assets/newLogo.png';
import SearchIcon from '../../assets/menuIcons/search.png';
import MicIcon from '../../assets/menuIcons/mic.png';
import VideoIcon from '../../assets/menuIcons/video.png';
import NotificationIcon from '../../assets/menuIcons/bell.png';
import LoginPic from '../../assets/menuIcons/login.png';
import SettingsPic from '../../assets/menuIcons/settings.png';
import UserPic from '../../assets/menuIcons/user.png';
import LogoutPic from '../../assets/menuIcons/logout.png';
import { MenuContext } from '../../contexts/menuContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function Header() {
    const navigate = useNavigate();

    const { login, user, logOut } = useContext(UserContext);
    const { openMenu, setOpenMenu } = useContext(MenuContext);
    const [currentLogo, setCurrentLogo] = useState(newLogo);

    const handleClick = () => {
        setOpenMenu(!openMenu);
    };

    const handleLogo = () => {
        if (currentLogo === newLogo) {
            setCurrentLogo(oldLogo)
        } else {
            setCurrentLogo(newLogo)
        }
    };

    const options = [
        {
            title: "Seu canal",
            action: () => {
                navigate('/shorts');
                setIsOpen(false);
            },
            icon: UserPic
        },
        {
            title: "Configurações",
            action: () => {
                console.log("falaaaaa luisao");
                setIsOpen(false);
            },
            icon: SettingsPic
        },
        {
            title: "Sair",
            action: () => {
                logOut();
                setIsOpen(false);
            },
            icon: LogoutPic
        }
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={handleClick} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img
                    onClick={handleLogo}
                    style={{ cursor: "pointer", width: "80px", transition: "opacity 0.5s ease-in-out" }}
                    alt=""
                    src={currentLogo}
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
                <ButtonContainer margin='0 0 0 10px' onClick={() => navigate('/upload')}>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon} />
                </ButtonContainer>
                {login ?
                    <DropdownContainer>
                        <ButtonContainer margin="0 0 0 10px" onClick={() => setIsOpen(!isOpen)}>
                            {user.nome.charAt(0).toUpperCase()}
                        </ButtonContainer>
                        {isOpen && (
                            <DropdownMenu>
                                <DropdownUser>
                                    <ButtonContainer>
                                        {user.nome.charAt(0).toUpperCase()}
                                    </ButtonContainer>
                                    <UserInfoDiv>
                                        <UserName>{user.nome}</UserName>
                                        <UserEmail>{user.email}</UserEmail>
                                        <UserManage>Gerenciar sua Conta do Google</UserManage>
                                    </UserInfoDiv>
                                </DropdownUser>
                                <DropdownDivider />
                                <DropdownMenuSection>
                                    {options.map((element) => (
                                        <DropdownMenuItem onClick={element.action}>
                                            <DropdownMenuIcon alt="" src={element.icon} />
                                            <span>{element.title}</span>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuSection>
                            </DropdownMenu>
                        )}
                    </DropdownContainer>
                    :
                    <LoginButton openMenu={openMenu} onClick={() => navigate('/login')} >
                        <LoginIcon alt="" src={LoginPic} />
                        <p>Fazer login</p>
                    </LoginButton>
                }
            </HeaderButton>

        </Container>
    );
};

export default Header;