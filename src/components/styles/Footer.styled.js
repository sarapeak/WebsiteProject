import styled from "styled-components"

export const Pic = styled.img`
    width: 86px;
    height: 100px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 40px;
    }
`

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.header};
    color: #000;
    padding: 100px 0 60px;
    ul {
        list-style-type: none;
    }
    ul li {
        margin-bottom: 20px;
    }
    p {
        text-align: right;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
        ul {
            padding: 0;
        }
        p {
            text-align: center;
        }
    }
`