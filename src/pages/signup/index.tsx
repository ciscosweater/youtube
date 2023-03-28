import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { ButtonsDiv, Container, ErrorMessage, InputBox, LoginBox, LoginButton, LoginRedirect, LoginSubtitle, LoginTitle, Message, NameBox, NameLine, PasswordBox, PasswordErrorMessage, PasswordLine, RecoverEmail, YoutubeLogo } from './styles';
import newLogo from '../../assets/newLogo.png';

function SignUpPage() {
    const { handleRegister, handleLogin, login } = useContext(UserContext)

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    const handleRegisterClick = async () => {
        if (password !== checkPassword || password === '' || password.length < 8) {
            setPasswordError(true);
            return;
        }

        const success = await handleRegister(`${name} ${lastName}`, email, password);

        if (!success) {
            console.log('Nao foi possivel fazer o cadastro.');
            setError(true);
        } else {
            console.log('Cadastro efetuado com sucesso.');
            handleLogin(email, password);
            setError(false);
        }
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
                        <LoginTitle>Criar sua Conta do YouTube</LoginTitle>
                        <LoginSubtitle>Prosseguir no YouTube</LoginSubtitle>
                        <ErrorMessage error={error} >Confira os dados e tente novamente.</ErrorMessage>
                        <NameLine>
                            <NameBox error={error} type='name' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
                            <NameBox error={error} type='name' placeholder='Sobrenome' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </NameLine>
                        <InputBox error={error} type='email' placeholder='Seu endereço de e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Message>Será necessário confirmar que esse e-mail pertence a você.</Message>
                        <RecoverEmail error={error}>Criar um novo endereço do Gmail</RecoverEmail>
                        <PasswordErrorMessage error={passwordError} >Confira as orientações de criação de senha e tente novamente.</PasswordErrorMessage>
                        <PasswordLine>
                            <PasswordBox error={passwordError} type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <PasswordBox error={passwordError} type='password' placeholder='Confirmar' value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} />
                        </PasswordLine>
                        <Message>Use oito ou mais caracteres com uma combinação de letras, números e símbolos</Message>
                        <ButtonsDiv>
                            <LoginRedirect error={error} onClick={() => navigate('/login')}>Faça login em vez disso</LoginRedirect>
                            <LoginButton error={error} onClick={handleRegisterClick}>Próxima</LoginButton>
                        </ButtonsDiv>
                    </LoginBox>
                </Container>
            }
        </>
    );
};

export default SignUpPage;