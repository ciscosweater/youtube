import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { ButtonsDiv, Container, ErrorMessage, InputBox, LoginBox, LoginButton, LoginSubtitle, LoginTitle, Message, RecoverEmail, SignUp, YoutubeLogo } from './styles';
import newLogo from '../../assets/newLogo.png';

function Login() {
    const { handleLogin, login } = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = async () => {
        const success = await handleLogin(email, password);
        if (!success) {
            setError(true);
        } else {
            setError(false);
        };
    };

    const handleRedirect = () => {
        navigate('/');
        window.location.reload();
    }

    return (
        <>
            {login ?
                handleRedirect()
                :
                <Container>
                    <LoginBox>
                        <YoutubeLogo src={newLogo} />
                        <LoginTitle>Fazer Login</LoginTitle>
                        <LoginSubtitle>Prosseguir no YouTube</LoginSubtitle>
                        <ErrorMessage error={error} >O email ou senha estão incorretos.</ErrorMessage>
                        <InputBox error={error} type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputBox error={error} type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <RecoverEmail error={error}>Esqueceu seu e-mail?</RecoverEmail>
                        <Message>Não está no seu computador? Use o modo visitante para fazer login com privacidade. </Message>
                        <ButtonsDiv>
                            <SignUp error={error} onClick={() => navigate('/signup')}>Criar conta</SignUp>
                            <LoginButton error={error} onClick={handleLoginClick}>Avançar</LoginButton>
                        </ButtonsDiv>
                    </LoginBox>
                </Container>
            }
        </>
    );
};

export default Login;