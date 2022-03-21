import React from "react";
import { StyledHeader, Nav, NavIcon,Image } from "../styles/Navbar.style";
import { Container } from "../styles/Container.style";
import { Button } from "../styles/Button.style";
import {Flex} from "../styles/Flex.style"

const Navbar = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <NavIcon src="./images/logo.svg" alt="" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>lorem10</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo minima ut placeat vel quisquam, dolore dolorem sit unde
              natus. Alias recusandae ex ab qui illo, ut cumque est perspiciatis
              aliquid!
            </p>
            <Button bg="#ff0099" color="#fff">Get Started For Free</Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Navbar;
