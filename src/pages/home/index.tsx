import React, { useContext } from 'react';
import CategoryBar from "../../components/categoryBar";
import VideoComponent from "../../components/videoComponent";
import { Container, SectionDivider, ShortsIcon, ShortsTitle, ShortsTitleContainer, ShortsVideoContainer, ShowMoreDiv, ShowMoreImg } from "./styles";
import ShortsPic from '../../assets/menuIcons/shorts.png';
import ShortComponent from "../../components/shortComponent";
import { MenuContext } from '../../contexts/menuContext';
import DownArrowPic from '../../assets/down-arrow.png'

function Home() {
    const { openMenu } = useContext(MenuContext);

    const homeVideos = [
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg",
            channelImage: "https://yt3.googleusercontent.com/KNYElmLFGAOSZoBmxYGKKXhGHrT2e7Hmz3WsBerbam5uaDXFADAmT7htj3OcC-uK1O88lC9fQg=s176-c-k-c0x00ffffff-no-rj",
            title: "lofi hip hop radio - beats to relax/study to",
            profile: "Lofi Girl",
            stats: "37 mil assistindo"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/QY1_HTbfxoE/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJVRsz2OR6zJdO4rlxwDRO1gZ9hOx-73CFQrieYJ=s48-c-k-c0x00ffffff-no-rj",
            title: "8 JOGOS SURVIVAL INCRÍVEIS! 💀🤩",
            profile: "Pipocando Games",
            stats: "1,2 mil visualizações - há 44 minutos"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/Av51FlG2JSo/mqdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "El gobierno consume pan con leche y sal 10h",
            profile: "SalazarMejia",
            stats: "315 mil visualizações - há 1 mês"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/4GMbkv6_zXg/mqdefault.jpg",
            channelImage: "https://yt3.ggpht.com/iMZ1g5W6ds6JEfJ0TAUbvEisvxjRhUDgUFLdmkHg4wgUaJKkH-U0qA6UtPyw_uq2FZjlFrf2NQ=s48-c-k-c0x00ffffff-no-rj",
            title: "YouTube Trumpet Play on YouTube with computer Keyboard",
            profile: "Music With Keyboard",
            stats: "2,5 mi de visualizações - há 1 ano"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/B4fhLM-s6uE/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/aaakNQLtIdGm1s3Ll34_rmf2l3kez208ITn0x4ZJQtKmoE_idiL1NjH6QfcMoV1AVwYE4IdrZek=s48-c-k-c0x00ffffff-no-rj",
            title: "Exposed da streamer que não existe",
            profile: "Goularte",
            stats: "80 mil visualizações - há 13 horas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/RtY5FV5TrIU/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJXmsddMiDKshfcwTIWVqAr8bvJrz8NDFgEgarht=s48-c-k-c0x00ffffff-no-rj",
            title: "NES Development Environment",
            profile: "NesHacker",
            stats: "246 mil visualizações - há 1 ano"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/wz4ZbRZZLJg/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJWQRnIBl8SbPa_gV1ZALOoEBvebysjttxnHVmc03Q=s48-c-k-c0x00ffffff-no-rj",
            title: "Like a Dragon: Ishin! - Karaoke: Baka Mitai",
            profile: "devilleon7",
            stats: "131 mil visualizações - há 2 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/DpFZTNm3O8M/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJXDtRBHMiZqVTrqbfyygzkZ72XKATr_HMEO4rYVXA=s48-c-k-c0x00ffffff-no-rj",
            title: "EVOLUÇÃO da TURMA da MÔNICA nos GAMES",
            profile: "Fiaspo",
            stats: "40 mil visualizações - há 15 horas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/e9Q4uNvpgdQ/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/2AaQ4qrB3qdTdR3xv8R9TsoxgZukS2NYfERwdEBZugVsvI1XgnndwS-xGqtwkSy6QWezkiNyew=s48-c-k-c0x00ffffff-no-rj",
            title: "10 NEW Nintendo Switch eShop Games Worth Buying!",
            profile: "BeatEmUps",
            stats: "105 mil visualizações - há 18 horas"
        },
    ]

    const homeRender = homeVideos.slice(0, openMenu ? 8 : 10)

    const shortsVideos = [
        {
            imageSrc: "https://i.ytimg.com/vi/vbR0rr4NPTY/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Rockstar Games Ranked (My opinion)",
            views: "1,9 mi de visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/PLYYjsfUAc0/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "o final ''RUIM'' de Far Cry 3 ( ͡° ͜ʖ ͡°)",
            views: "287 mil visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/FFcXzxfdxFc/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Mafia 2 has one of the coolest and...",
            views: "755 mil visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/FthzlRrAZUk/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "This is Why Kratos Doesn't Talk |...",
            views: "55 mil visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/rcVffPAfoDM/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "No longer need this on Xbox",
            views: "341 mil visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/cMcB7rHqpPw/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "AC Unity vs AC Syndicate | Parkou...",
            views: "333 mil visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/h-wF9aewHM4/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "O que tem dentro da CABANA DO...",
            views: "147 mil visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/BhLrQJyTfF8/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "O AVÔ DE VOLDEMORT ESTÁ...",
            views: "266 mil visualizações"
        }
    ]

    const shortsRender = shortsVideos.slice(0, openMenu ? 7 : 8)

    const moreVideos = [
        {
            imageSrc: "https://i.ytimg.com/vi/RS-kJpr-wfw/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJUplfm1C8wUGUTLxr-jiUV_FgY6ilNlOpl_z5GLyw=s48-c-k-c0x00ffffff-no-rj",
            title: "GTX 750 Ti - Hogwarts Legacy",
            profile: "zWORMz Gaming",
            stats: "76 mil visualizações - há 2 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/0mD4NoUBFPM/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJVLMOXgBgSo03HymghIGPjnbIix27H2gQZ_FRXMrg=s48-c-k-c0x00ffffff-no-rj",
            title: "GUILTY GEAR STRIVE - Teste no Xbox Series S",
            profile: "Meu Series S",
            stats: "721 visualizações - há 22 horas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/OhwQqMA4p7o/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJXMd1C0Nm2pgza87EA65zVlzKYTYXC3FORSOhkT7w=s48-c-k-c0x00ffffff-no-rj",
            title: "How Big is Naruto Storm Connections?",
            profile: "Globku",
            stats: "138 mil visualizações - há 5 dias"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/BPHncSYtgZQ/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJWLe3JoYiExwOXLKZT6DBGEgP4Ro5S74CYVy0-x8g=s48-c-k-c0x00ffffff-no-rj",
            title: "7 Amazing Details In Old DBZ Games! (Budokai Tenkaichi 3)",
            profile: "KaDazee",
            stats: "1,6 mi de visualizações - há 9 meses"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/hDwlrGtXa-U/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/ytc/AL5GRJXXcIjSdRIgmgHRnwRNe_T6nz1aq8fOhCcpDD8c7Q=s48-c-k-c0x00ffffff-no-rj",
            title: "ESSE é o MUNDO do FOREVER MAPA 4",
            profile: "Forever Player",
            stats: "152 mil visualizações - há 18 horas"
        },
    ]

    const moreRender = moreVideos.slice(0, openMenu ? 4 : 5)

    return (
        <Container id="container">
            <CategoryBar />
            {homeRender.map((item) => (
                <VideoComponent
                    imageSrc={item.imageSrc}
                    channelImage={item.channelImage}
                    title={item.title}
                    profile={item.profile}
                    stats={item.stats}
                />
            ))}
            <SectionDivider />
            <ShortsTitleContainer>
                <ShortsIcon src={ShortsPic} />
                <ShortsTitle>Shorts</ShortsTitle>
            </ShortsTitleContainer>
            <ShortsVideoContainer>
                {shortsRender.map((item) => (
                    <ShortComponent
                        imageSrc={item.imageSrc}
                        title={item.title}
                        views={item.views}
                    />
                ))}
            </ShortsVideoContainer>
            <ShowMoreDiv>
                <ShowMoreImg src={DownArrowPic} />
            </ShowMoreDiv>
            <SectionDivider />
            {moreRender.map((item) => (
                <VideoComponent
                    imageSrc={item.imageSrc}
                    channelImage={item.channelImage}
                    title={item.title}
                    profile={item.profile}
                    stats={item.stats}
                />
            ))}
        </Container>
    );
};

export default Home;