import { Container, HistoryImage, LoginButton, LoginIcon, NotLogged, Subtitle, Title } from "./styles";
import HistoryIcon from '../../assets/menuIcons/history.png';
import LoginPic from '../../assets/menuIcons/login.png';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from "../../contexts/userContext";
import TemplateVideoPage from "../../components/templateVideoPage";

function History() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext)

    return (
        <>
            {login ?
                <Container>
                    <Title>Em desenvolvimento.</Title>
                </Container>
                :
                <Container>
                    <NotLogged>
                        <HistoryImage src={HistoryIcon} />
                        <Title>Controle o que você assiste</Title>
                        <Subtitle>O histórico de exibição não é visível quando você está desconectado.</Subtitle>
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

export default History;
