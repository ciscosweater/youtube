import { ButtonContainer, ButtonTitle, ButtonDiv, ButtonIcon } from "./styles";

function ShortsSideButton(props: any) {
    return (
        <ButtonDiv>
            <ButtonContainer>
                <ButtonIcon src={props.icon} />
            </ButtonContainer>
            <ButtonTitle>{props.title}</ButtonTitle>
        </ButtonDiv>
    );
};

export default ShortsSideButton;