import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../../contexts/menuContext';
import { Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function ShortComponent(props: any) {
    const { openMenu } = useContext(MenuContext);

    return (
        <Link to={props.link}>
            <Container openMenu={openMenu}>
                <ImageBanner openMenu={openMenu} src={props.imageSrc} />
                <TitleContainer>
                    <TextContainer>
                        <Title>{props.title}</Title>
                        <TextCard>{props.views}</TextCard>
                    </TextContainer>
                </TitleContainer>
            </Container>
        </Link>
    );
};

export default ShortComponent;