import React, { useContext } from 'react';
import { Container, SideDiv, YTShorts } from "./styles";
import ShortsPlaceholder from '../../assets/placeholders/shorts.mp4';
import ShortsSideButton from '../../components/shortsSideButton';
import LikeIcon from '../../assets/like.png';
import DislikeIcon from '../../assets/dislike.png';
import CommentIcon from '../../assets/comment.png';
import MoreIcon from '../../assets/more.png';
import ShareIcon from '../../assets/share.png';
import { MenuContext } from '../../contexts/menuContext';

const buttons = [
    {
        title: "Gostei",
        icon: LikeIcon
    },
    {
        title: "Não Gostei",
        icon: DislikeIcon
    },
    {
        title: "Comentar",
        icon: CommentIcon
    },
    {
        title: "Compartilhar",
        icon: ShareIcon
    },
    {
        title: "",
        icon: MoreIcon
    },
]

function Shorts() {
    const { openMenu } = useContext(MenuContext);

    return (
        <Container>
            <YTShorts controls autoPlay>
                <source src={ShortsPlaceholder} />
            </YTShorts>
            <SideDiv openMenu={openMenu} >
                {buttons.map((element) => (
                    <ShortsSideButton
                        title={element.title}
                        icon={element.icon}
                    />
                ))}
            </SideDiv>
        </Container>
    );
};

export default Shorts;