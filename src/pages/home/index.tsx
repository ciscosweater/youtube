import { useContext } from 'react';
import CategoryBar from "../../components/categoryBar";
import VideoComponent from "../../components/videoComponent";
import { Container, SectionDivider, ShortsIcon, ShortsTitle, ShortsTitleContainer, ShortsVideoContainer, ShowMoreDiv, ShowMoreImg } from "./styles";
import ShortsPic from '../../assets/menuIcons/shorts.png';
import ShortComponent from "../../components/shortComponent";
import { MenuContext } from '../../contexts/menuContext';
import DownArrowPic from '../../assets/down-arrow.png'
import { VideoContext } from '../../contexts/videoContext';

function Home() {

    const { homeVideos } = useContext(VideoContext)

    const { openMenu } = useContext(MenuContext);

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
        },
        {
            imageSrc: "https://i.ytimg.com/vi/MsB6kpILoF8/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Did you know this about the PS3?",
            views: "900 mil visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/OJuvywc7C0A/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Ground Deformation - Far...",
            views: "195 mil visualizações"
        }
    ]

    const shortsRender = shortsVideos.slice(0, openMenu ? 8 : 10)

    const moreRender = homeVideos.slice(openMenu ? 8 : 10, openMenu ? 12 : 15)

    return (
        <Container id="container">
            <CategoryBar />
            {homeRender.map((item: any) => (
                <VideoComponent
                    imageSrc={item.thumblink}
                    channelImage={item.channelimage}
                    title={item.title}
                    profile={item.profile}
                    stats={item.stats}
                    link={item.videolink}
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
            {moreRender.map((item: any) => (
                <VideoComponent
                    imageSrc={item.thumblink}
                    channelImage={item.channelimage}
                    title={item.title}
                    profile={item.profile}
                    stats={item.stats}
                    link={item.videolink}
                />
            ))}
        </Container>
    );
};

export default Home;