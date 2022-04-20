import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       {'Searching for your robot? Try our search engine'}
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Just a search machine, filtering robot {'-->'} if searched charachter is included in name</FooterLink>

          </Column>
          <Column>
            <Heading>Contact Us</Heading>
                <FooterLink href="#">+385 91 111 1111</FooterLink>
                <FooterLink href="https://www.outlook.com">{'fkvesi00@fesb.hr'}</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;