import { Container, LoginButton, LoginIcon, NotLogged, SubsImage, Subtitle, Title } from "./styles";
import SubscribeIcon from '../../assets/menuIcons/subscribe.png';
import LoginPic from '../../assets/menuIcons/login.png';
import { useNavigate } from "react-router-dom";

function Subscriptions() {
    const navigate = useNavigate();

    return (
        <Container>
            <NotLogged>
                <SubsImage src={SubscribeIcon} />
                <Title>Não perca os novos vídeos</Title>
                <Subtitle>Faça login para ver as atualizações dos seus canais favoritos do YouTube</Subtitle>
                <LoginButton onClick={() => navigate('/login')}>
                    <LoginIcon alt="" src={LoginPic} />
                    <p>Fazer login</p>
                </LoginButton>
            </NotLogged>
        </Container>
    );
};

export default Subscriptions;