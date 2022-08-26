import styled from "styled-components";

export const StyledBody = styled.div`
    background-color: ${({ theme }) => theme.colors.body};
    padding: 40px 0;
`

export const StyledButton = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    margin-bottom: 40px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Header = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;

    border-radius: 30px;
    border: none;
    box-shadow: 0 0 10px rbga(0, 0, 0, 0.15);
    font-size: 16px;
    font-weight: 700;
    padding: 15px;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};
`

export const StyledScroll = styled.div`
    background-color: ${({ theme }) => theme.colors.header};
    box-sizing: border-box;
`

export const Area = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const Scroll = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid ${({ theme }) => theme.colors.intro};
`

export const Cover = styled.div`
    Cover::before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        z-index: 99;
        height: 100%;
        width: 150px;
        background-image: linear-gradient(90deg, black, transparent);
    }

    Cover::after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        z-index: 99;
        height: 100%;
        width: 150px;
        background-image: linear-gradient(-90deg, black, transparent);
    }
`

export const ScrollImages = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
    align-items: center;
    overflow: auto;
    position: relative;
    scroll-behavior: smooth;
`

export const Child = styled.div`
    min-width: 600px;
    height: 450px;
    margin: 1px 10px;
    cursor: pointer;
    border: 1px solid black;
    overflow: hidden;

    img {
        width: 50%;
        height: 50%;
    }
`