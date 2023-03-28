import VideoComponent from "../../components/videoComponent";
import { Container, PageBar, ShowMore, TitleDiv, TitleIcon, TitleText, VideoContainer } from "./styles";

function TemplateVideoPage(props: any) {
    return (
        <Container id="container">
            <PageBar>
                <TitleDiv>
                    <TitleIcon src={props.icon} />
                    <TitleText>{props.title}</TitleText>
                </TitleDiv>
                <ShowMore>Ver tudo</ShowMore>
            </PageBar>
            <VideoContainer>
                {props.render.map((item: any) => (
                    <VideoComponent
                        imageSrc={item.thumblink}
                        channelImage={item.channelimage}
                        title={item.title}
                        profile={item.profile}
                        stats={item.stats}
                        link={item.videolink}
                    />
                ))}
            </VideoContainer>
        </Container>
    );
};

export default TemplateVideoPage;