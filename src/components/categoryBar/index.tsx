import React, { useState } from 'react';
import { CategoryItem, Container, ItemContainer } from "./styles";

function CategoryBar() {
    const [activeItem, setActiveItem] = useState(1);

    const items = [
        {
            title: "Tudo",
            id: 1
        },
        {
            title: "Ao vivo",
            id: 2
        },
        {
            title: "Jogos",
            id: 3
        },
        {
            title: "Música",
            id: 4
        },
        {
            title: "Mixes",
            id: 5
        },
        {
            title: "Trailer",
            id: 6
        },
        {
            title: "Nintendo",
            id: 7
        },
        {
            title: "Counter-Strike",
            id: 8
        },
        {
            title: "Detonado",
            id: 9
        },
        {
            title: "The Legend of Zelda",
            id: 10
        }
    ]

    return (
        <Container>
            <ItemContainer>
                {items.map((item) => (
                    <CategoryItem
                        key={item.id}
                        isActive={activeItem === item.id ? true : false}
                        onClick={() => setActiveItem(item.id)}>
                        <span>{item.title}</span>
                    </CategoryItem>
                ))}
            </ItemContainer>
        </Container>
    );
};

export default CategoryBar;