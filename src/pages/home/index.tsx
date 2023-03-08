import CategoryBar from "../../components/categoryBar";
import VideoComponent from "../../components/videoComponent";
import { Container, SectionDivider, ShortsIcon, ShortsTitle, ShortsTitleContainer, ShortsVideoContainer } from "./styles";
import ShortsPic from '../../assets/menuIcons/shorts.png';
import ShortComponent from "../../components/shortComponent";

function Home() {
    const homeVideos = [
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
    ]

    const shortsVideos = [
        {
            imageSrc: "https://i.ytimg.com/vi/vbR0rr4NPTY/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Rockstar Games Ranked (My opinion)",
            views: "1,9 mi de visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/vbR0rr4NPTY/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Rockstar Games Ranked (My opinion)",
            views: "1,9 mi de visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/vbR0rr4NPTY/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Rockstar Games Ranked (My opinion)",
            views: "1,9 mi de visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/vbR0rr4NPTY/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Rockstar Games Ranked (My opinion)",
            views: "1,9 mi de visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/vbR0rr4NPTY/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Rockstar Games Ranked (My opinion)",
            views: "1,9 mi de visualizações"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/vbR0rr4NPTY/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBoRZbM7YSDilQVvJggOarpAol_wg",
            title: "Rockstar Games Ranked (My opinion)",
            views: "1,9 mi de visualizações"
        },
    ]

    const moreVideos = [
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        },
        {
            imageSrc: "https://i.ytimg.com/vi/YEeKDYva2kc/maxresdefault.jpg",
            channelImage: "https://yt3.ggpht.com/VZc2iTrFcS_e7XwnFlQiLw-kgzVv2mDIhqKhJSV1fjYwNBuRK_SJuvCh_LCkmf7gDhWEmBIj=s48-c-k-c0x00ffffff-no-rj",
            title: "Hogwarts Legacy - Ray Tracing On/Off Comparison",
            profile: "EIGHTLEAFCLOVER",
            stats: "884 mil visualizações - há 3 semanas"
        }
    ]


    return (
        <Container>
            <CategoryBar />
            {homeVideos.map((item) => (
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
                {shortsVideos.map((item) => (
                    <ShortComponent
                        imageSrc={item.imageSrc}
                        title={item.title}
                        views={item.views}
                    />
                ))}
            </ShortsVideoContainer>
            <SectionDivider />
            {moreVideos.map((item) => (
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