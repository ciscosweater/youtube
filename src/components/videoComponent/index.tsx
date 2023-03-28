import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";


function VideoComponent(props: any) {

    return (
        <a href={props.link} >
            <Container>
                <ImageBanner src={props.imageSrc} />
                <TitleContainer>
                    <ChannelImage src={props.channelImage} />
                    <TextContainer>
                        <Title>{props.title}</Title>
                        <TextCard>{props.profile}</TextCard>
                        <TextCard>{props.stats}</TextCard>
                    </TextContainer>
                </TitleContainer>
            </Container>
        </a>
    );
};

export default VideoComponent;