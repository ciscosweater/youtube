import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonContainer, ButtonIcon, Container, LogoContainer, SearchContainer, SearchInputContainer, SearchInput, SearchButton, HeaderButton, LoginButton, LoginIcon, DropdownContainer, DropdownMenu, DropdownMenuItem, DropdownUser, UserInfoDiv, UserName, UserEmail, UserManage, DropdownDivider, DropdownMenuIcon, DropdownMenuSection } from "./styles";
import HamburguerIcon from '../../assets/menuIcons/hamburger.png';
import oldLogo from '../../assets/oldLogo.png';
import newLogo from '../../assets/newLogo.png';
import SearchIcon from '../../assets/menuIcons/search.png';
import MicIcon from '../../assets/menuIcons/mic.png';
import VideoIcon from '../../assets/menuIcons/video.png';
import NotificationIcon from '../../assets/menuIcons/bell.png';
import LoginPic from '../../assets/menuIcons/login.png';
import UserPic from '../../assets/menuIcons/user.png';
import LogoutPic from '../../assets/menuIcons/logout.png';
import { MenuContext } from '../../contexts/menuContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function Header() {
    const useQuery = () => {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    };

    const query = useQuery();
    const searchinput = query.get('input')

    const navigate = useNavigate();

    const { login, user, logOut } = useContext(UserContext);
    const { openMenu, setOpenMenu } = useContext(MenuContext);
    const [currentLogo, setCurrentLogo] = useState(newLogo);
    const [search, setSearch] = useState(searchinput ? searchinput as string : '');

    const handleClick = () => {
        setOpenMenu(!openMenu);
    };

    const handleLogo = () => {
        if (currentLogo === newLogo) {
            setCurrentLogo(oldLogo);
            navigate('/');
        } else {
            setCurrentLogo(newLogo);
            navigate('/');
        }
    };

    const handleSearching = () => {
        if (search !== '') {
            navigate(`/search/?input=${search}`);
            window.location.reload();
        } else {
            return;
        }
    };

    const handleKeySearching = (event: any) => {
        if (event.keyCode === 13) {
            handleSearching();
        };
    };

    const options = [
        {
            title: "Seu canal",
            action: () => {
                navigate('/library');
                setIsOpen(false);
            },
            icon: UserPic
        },
        {
            title: "Enviar vídeo",
            action: () => {
                navigate('/upload');
                setIsOpen(false);
            },
            icon: VideoIcon
        },
        {
            title: "Sair",
            action: () => {
                logOut();
                setIsOpen(false);
                navigate('/');
                window.location.reload();
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
                    <SearchInput
                        placeholder="Pesquisar"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeySearching}
                    />
                </SearchInputContainer>
                <SearchButton onClick={handleSearching}>
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
                        <ButtonContainer style={{ "border": "1px solid #c0c0c0" }} margin="0 0 0 10px" onClick={() => setIsOpen(!isOpen)}>
                            {user.nome.charAt(0).toUpperCase()}
                        </ButtonContainer>
                        {isOpen && (
                            <DropdownMenu>
                                <DropdownUser>
                                    <ButtonContainer style={{ "border": "1px solid #c0c0c0" }}>
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