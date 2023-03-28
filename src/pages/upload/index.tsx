import { Container, ErrorMessage, InputBox, InputLabel, Message, TitleLine, UploadBox, UploadButton, UploadSubtitle, UploadTitle, YoutubeLogo } from "./styles";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import newLogo from '../../assets/newLogo.png';
import { VideoContext } from "../../contexts/videoContext";

function UploadVideo() {

    const [error, setError] = useState(false);
    const { login, user } = useContext(UserContext)
    const { uploadVideo } = useContext(VideoContext)
    console.log("login", login)

    const [title, setTitle] = useState('');
    const [profile, setProfile] = useState('');
    const [stats, setStats] = useState('x mil visualizações - há x dias');
    const [thumblink, setThumblink] = useState('https://img.youtube.com/vi/insiraourldovídeoaqui/maxresdefault.jpg');
    const [channelimage, setChannelImage] = useState('');
    const [videolink, setVideolink] = useState('https://www.youtube.com/watch?v=insiraourldovídeoaqui');

    const navigate = useNavigate();

    const handleUploadClick = async () => {
        const success = await uploadVideo(title, profile, stats, thumblink, channelimage, videolink, user.id);
        if (!success) {
            setError(true);
        } else {
            setError(false);
            navigate('/');
            window.location.reload();
        };
    };

    useEffect(() => {
        if (!login) {
            navigate('/');
            window.location.reload();
        }
    }, [login, navigate]);

    const renderContent = () => {
        return (
            <Container>
                <UploadBox>
                    <TitleLine>
                        <UploadTitle>Envie seu vídeo!</UploadTitle>
                        <YoutubeLogo src={newLogo} />
                    </TitleLine>
                    <UploadSubtitle>
                        Como esse é um projeto, e não o YouTube de verdade, ele depende
                        de dados que você vai precisar pegar de lá para ele funcionar.
                    </UploadSubtitle>
                    <ErrorMessage error={error}>Confira as informações inseridas.</ErrorMessage>
                    <InputLabel>Título do vídeo</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
                        placeholder='Counter-strike 2 : RTX 3060 12GB + i5-12400F'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputLabel>Nome do canal</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
                        placeholder='MiSKY'
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                    />
                    <InputLabel>Estatísticas do vídeo</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
                        value={stats}
                        onChange={(e) => setStats(e.target.value)}
                    />
                    <InputLabel>Link da imagem de thumbnail do vídeo</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
                        value={thumblink}
                        onChange={(e) => setThumblink(e.target.value)}
                    />
                    <InputLabel>Link da imagem de perfil do canal</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
                        placeholder='https://yt3.ggpht.com/vjFmoqmjlF_Dbl4OAOV...'
                        value={channelimage}
                        onChange={(e) => setChannelImage(e.target.value)}
                    />
                    <InputLabel>Link do vídeo em si</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
                        value={videolink}
                        onChange={(e) => setVideolink(e.target.value)}
                    />
                    <Message>Tenha certeza que os dados inseridos estão no padrão mostrado nos placeholders. </Message>
                    <UploadButton error={error} onClick={handleUploadClick}>Enviar</UploadButton>
                </UploadBox>
            </Container>
        );
    };

    return renderContent();
};

export default UploadVideo;