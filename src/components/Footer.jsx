import React from "react";
import {
  FooterContainer,
  LogoContainer,
  Logo,
  Heading,
  InfoLinkContainer,
  TextInfo,
  TextLink,
  Link,
  Author,
} from "../global/styles/Footer";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export const Footer = () => (
  <FooterContainer>
    <InfoLinkContainer>
      <TextLink>
        <Link>Terms & Conditions</Link>
        <Link>Privacy Policy</Link>
        <Link>Editorial Policy - Key Highlights</Link>
        <Link>Notification to Vendors</Link>
      </TextLink>

      <TextInfo>
        <Link>
          <FaInstagram
            style={{
              fontSize: "30px",
            }}
          />
        </Link>
        <Link>
          <FaTwitter
            style={{
              fontSize: "30px",
            }}
          />
        </Link>
        <Link>
          <FaGithub
            style={{
              fontSize: "30px",
            }}
          />
        </Link>
      </TextInfo>
    </InfoLinkContainer>
    <LogoContainer>
      <Logo
        src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
        alt="logo"
      />
      <Heading>&copy; Inshorts —― United Kingdom</Heading>
    </LogoContainer>

    <Author>Built with ☕ by Muhammad Zourdy</Author>
  </FooterContainer>
);
