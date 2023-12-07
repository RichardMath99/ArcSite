import { Container } from "../../Global";
import { HeaderDiv, Logo, Nav, NavItem, NavLink, NavList, Img, Btn } from "./styles";

import arcLogo from '../../assets/images/arc-logo.png';
import btnWpp from '../../assets/images/btn-wpp.png';

export default function Header() {
    return (
        <Container>
            <HeaderDiv>
                <Logo>
                    <Img src={arcLogo} alt="Logo" />
                </Logo>
                <Nav>
                    <NavList>
                        <NavItem><NavLink href="/">Home</NavLink></NavItem>
                        <NavItem><NavLink href="/#about">Sobre mim</NavLink></NavItem>
                        <NavItem><NavLink href="/#experience">Experiência</NavLink></NavItem>
                        <NavItem><NavLink href="/#projects">Projetos</NavLink></NavItem>
                    </NavList>
                </Nav>

                <Btn>
                    Whatsapp 
                    <Img src={btnWpp} alt="Logo" />

                </Btn>
            </HeaderDiv>
        </Container>
    )
}