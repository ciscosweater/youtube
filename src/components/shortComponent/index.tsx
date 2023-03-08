import React, { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function ShortComponent(props: any) {
    const { openMenu } = useContext(MenuContext);

    return (
        <Container openMenu={openMenu}>
            <ImageBanner openMenu={openMenu} src={props.imageSrc} />
            <TitleContainer>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.views}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    );
};

export default ShortComponent;