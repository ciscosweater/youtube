import { useContext } from 'react';
import { Container, LibraryImage, LoginButton, LoginIcon, NotLogged, Subtitle, Title } from "./styles";
import LibraryIcon from '../../assets/menuIcons/library.png';
import LoginPic from '../../assets/menuIcons/login.png';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import TemplateVideoPage from '../../components/templateVideoPage';
import { VideoContext } from '../../contexts/videoContext';

function Library() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext)
    const { userVideos } = useContext(VideoContext)

    return (
        <>
            {login ?
                <TemplateVideoPage
                    icon={LibraryIcon}
                    title={'Vídeos enviados por você'}
                    render={userVideos}
                />
                :
                <Container>
                    <NotLogged>
                        <LibraryImage src={LibraryIcon} />
                        <Title>Desfrute dos seus vídeos favoritos</Title>
                        <Subtitle>Faça login para acessar os vídeos salvos ou marcados com gostei</Subtitle>
                        <LoginButton onClick={() => navigate('/login')}>
                            <LoginIcon alt="" src={LoginPic} />
                            <p>Fazer login</p>
                        </LoginButton>
                    </NotLogged>
                </Container>
            }
        </>
    );
};

export default Library;