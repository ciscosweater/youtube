import React, { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { ButtonIcon, Container, ExploreTitle, FooterText, LinksContainer, LinksSpan, LoginButton, LoginIcon, LoginText, MenuDiv, MenuItem } from "./styles";
import ConsoleIcon from '../../assets/menuIcons/console.png';
import HomeIcon from '../../assets/menuIcons/home.png';
import AddIcon from '../../assets/menuIcons/add.png';
import BagIcon from '../../assets/menuIcons/bag.png';
import FeedbackIcon from '../../assets/menuIcons/feedback.png';
import FlagsIcon from '../../assets/menuIcons/flags.png';
import HistoryIcon from '../../assets/menuIcons/history.png';
import IpodIcon from '../../assets/menuIcons/ipod.png';
import LearningIcon from '../../assets/menuIcons/learning.png';
import LibraryIcon from '../../assets/menuIcons/library.png';
import LiveIcon from '../../assets/menuIcons/live.png';
import LoginPic from '../../assets/menuIcons/login.png';
import MovieIcon from '../../assets/menuIcons/movie.png';
import NewsIcon from '../../assets/menuIcons/newspaper.png';
import QuestionIcon from '../../assets/menuIcons/question.png';
import SettingsIcon from '../../assets/menuIcons/settings.png';
import ShortsIcon from '../../assets/menuIcons/shorts.png';
import SportsIcon from '../../assets/menuIcons/sports.png';
import SubscribeIcon from '../../assets/menuIcons/subscribe.png';
import TrendingIcon from '../../assets/menuIcons/trending.png';
import YoutubeIcon from '../../assets/menuIcons/youtube.png';
import YoutubeKidsIcon from '../../assets/menuIcons/youtube-kids.png';
import YoutubeMusicIcon from '../../assets/menuIcons/youtube-music.png';
import YoutubeTvIcon from '../../assets/menuIcons/youtube-tv.png';
import { useNavigate } from 'react-router-dom';

const firstItems = [
    {
        title: "Início",
        icon: HomeIcon,
        nav: "/"
    },
    {
        title: "Shorts",
        icon: ShortsIcon,
        nav: "/shorts"
    },
    {
        title: "Inscrições",
        icon: SubscribeIcon,
        nav: "/subscriptions"
    }
]

const secondItems = [
    {
        title: "Biblioteca",
        icon: LibraryIcon,
        nav: '/library'
    },
    {
        title: "Histórico",
        icon: HistoryIcon,
        nav: "/history"
    }
]

const exploreItems = [
    {
        title: "Em Alta",
        icon: TrendingIcon
    },
    {
        title: "Shopping",
        icon: BagIcon
    },
    {
        title: "Música",
        icon: IpodIcon
    },
    {
        title: "Filmes",
        icon: MovieIcon
    },
    {
        title: "Ao vivo",
        icon: LiveIcon
    },
    {
        title: "Jogos",
        icon: ConsoleIcon
    },
    {
        title: "Notícias",
        icon: NewsIcon
    },
    {
        title: "Esportes",
        icon: SportsIcon
    },
    {
        title: "Aprender",
        icon: LearningIcon
    }
]

const ytItems = [
    {
        title: "YouTube Premium",
        icon: YoutubeIcon
    },
    {
        title: "YouTube Music",
        icon: YoutubeMusicIcon
    },
    {
        title: "YouTube Kids",
        icon: YoutubeKidsIcon
    },
    {
        title: "YouTube TV",
        icon: YoutubeTvIcon
    }
]

const endItems = [
    {
        title: "Configurações",
        icon: SettingsIcon
    },
    {
        title: "Histórico de denúncias",
        icon: FlagsIcon
    },
    {
        title: "Ajuda",
        icon: QuestionIcon
    },
    {
        title: "Enviar feedback",
        icon: FeedbackIcon
    }
]

const firstLinks = [
    {
        title: "Sobre",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Imprensa",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Direitos autorais",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Entre em contato",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Criadores de conteúdo",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Publicidade",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Desenvolvedores",
        link: "https://www.youtube.com/about/"
    },
]

const secondLinks = [
    {
        title: "Termos",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Privacidade",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Política e segurança",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Como funciona o YouTube",
        link: "https://www.youtube.com/about/"
    },
    {
        title: "Testar os novos recursos",
        link: "https://www.youtube.com/about/"
    }
]

function Menu() {
    const { openMenu } = useContext(MenuContext);
    const navigate = useNavigate();

    return (
        <Container openMenu={openMenu}>
            {firstItems.map((element) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(element.nav)}>
                    <ButtonIcon alt="" src={element.icon} />
                    <span>{element.title}</span>
                </MenuItem>
            ))}
            <MenuDiv openMenu={openMenu} />
            {secondItems.map((element) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(element.nav)}>
                    <ButtonIcon alt="" src={element.icon} />
                    <span>{element.title}</span>
                </MenuItem>
            ))}
            <MenuDiv openMenu={openMenu} />
            <LoginText openMenu={openMenu}>
                Faça login para curtir vídeos, comentar e se inscrever.
            </LoginText>
            <LoginButton openMenu={openMenu}>
                <LoginIcon alt="" src={LoginPic} />
                <p>Fazer login</p>
            </LoginButton>
            <MenuDiv openMenu={openMenu} />
            <ExploreTitle openMenu={openMenu} >Explorar</ExploreTitle>
            {exploreItems.map((element) => (
                <MenuItem openMenu={openMenu} style={{ display: openMenu ? '' : 'none' }}>
                    <ButtonIcon alt="" src={element.icon} />
                    <span>{element.title}</span>
                </MenuItem>
            ))}
            <MenuDiv openMenu={openMenu} />
            <MenuItem openMenu={openMenu} style={{ display: openMenu ? '' : 'none' }}>
                <ButtonIcon alt="" src={AddIcon} />
                <span>Procurar Canais</span>
            </MenuItem>
            <MenuDiv openMenu={openMenu} />
            <ExploreTitle openMenu={openMenu} >Mais do YouTube</ExploreTitle>
            {ytItems.map((element) => (
                <MenuItem openMenu={openMenu} style={{ display: openMenu ? '' : 'none' }}>
                    <ButtonIcon alt="" src={element.icon} />
                    <span>{element.title}</span>
                </MenuItem>
            ))}
            <MenuDiv openMenu={openMenu} />
            {endItems.map((element) => (
                <MenuItem openMenu={openMenu} style={{ display: openMenu ? '' : 'none' }}>
                    <ButtonIcon alt="" src={element.icon} />
                    <span>{element.title}</span>
                </MenuItem>
            ))}
            <MenuDiv openMenu={openMenu} />
            <LinksContainer openMenu={openMenu} >
                {firstLinks.map((element) => (
                    <LinksSpan>
                        <a href={element.link}>{element.title}</a>
                    </LinksSpan>
                ))}
            </LinksContainer>
            <LinksContainer openMenu={openMenu} >
                {secondLinks.map((element) => (
                    <LinksSpan>
                        <a href={element.link}>{element.title}</a>
                    </LinksSpan>
                ))}
            </LinksContainer>
            <FooterText openMenu={openMenu} >
                © 2023 Gustavo Francisco
            </FooterText>
        </Container>
    );
};

export default Menu;