import styled from "styled-components";

export const HeaderDiv = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 3rem;
    }
`

export const Img = styled.img`
`


export const Btn = styled.a`
    color: #fff;
    border-radius: 24px;
    background: var(--teal-400, #2DD4BF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    display: flex;
    width: 130px;
    height: 35px;
    padding: 7px 11px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    &:hover {
        background: var(--teal-500, #1DA6A1);
        border-color: var(--teal-500, #1DA6A1);
    }
`


export const Logo = styled.p`
    color: #6518B4;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 500;
`

export const Nav = styled.nav``

export const NavList = styled.ul`
    display: flex;
    gap: 3.88rem;
    list-style: none;

    @media screen and (max-width: 768px) {
        gap: .88rem;
    }
`

export const NavItem = styled.li``
    
export const NavLink = styled.a`
    color: var(--gray-500, #6B7280);
    text-decoration: none;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    transition: .1s;

    &:hover{
        color: var(--teal-400, #2DD4BF);
        border-bottom: 2px solid var(--teal-400, #2DD4BF);
    }

    @media screen and (max-width: 768px) {
        font-size: .9rem;
    }
`