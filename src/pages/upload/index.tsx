import { Container, ErrorMessage, InputBox, InputLabel, Message, TitleLine, UploadBox, UploadButton, UploadSubtitle, UploadTitle, YoutubeLogo } from "./styles";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import newLogo from '../../assets/newLogo.png';
import { VideoContext } from "../../contexts/videoContext";
import queryString from "query-string";

function UploadVideo() {

    const [error, setError] = useState(false);
    const { login, user } = useContext(UserContext)
    const { uploadVideo } = useContext(VideoContext)
    console.log("login", login)

    const [title, setTitle] = useState('');
    const [profile, setProfile] = useState('');
    const [stats, setStats] = useState('x mil visualizações - há x dias');
    const [channelimage, setChannelImage] = useState('');
    const [videolink, setVideolink] = useState('');

    const videoId = queryString.parseUrl(videolink).query.v

    const navigate = useNavigate();

    const handleUploadClick = async () => {
        const success = await uploadVideo(title, profile, stats, `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, channelimage, videolink, user.id);
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
            navigate('/login');
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputLabel>Nome do canal</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
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
                    <InputLabel>Link da imagem de perfil do canal</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
                        placeholder='https://yt3.ggpht.com/...'
                        value={channelimage}
                        onChange={(e) => setChannelImage(e.target.value)}
                    />
                    <InputLabel>Link do vídeo</InputLabel>
                    <InputBox
                        error={error}
                        type='text'
                        placeholder='https://www.youtube.com/watch?v=...'
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