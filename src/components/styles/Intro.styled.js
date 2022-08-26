import styled from "styled-components";

export const StyledIntro = styled.header`
    background-color: ${({theme}) => theme.colors.intro};
    padding: 40px 0;
`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;
    box-shadow: 17px 17px 5px rgba(0, 0, 0, 0.15);

    @media(max-width: ${({theme}) => theme.mobile}) {
        margin: 40px 0 30px;
    }
`