import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 30px;
  padding: 50px;

  background-color: #323232;
`;

export const InfoLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40rem;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 5rem;
    font-size: 20px;
  }
`;

export const TextLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:hover {
    transition: all 0.2s ease;
    color: orangered;
  }

  @media (max-width: 800px) {
    text-align: center;
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 90px;
`;

export const Heading = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const Link = styled.a`
  color: white;
  cursor: pointer;
`;

export const Author = styled.span`
  color: white;
  font-size: 15px;
  margin-top: 20px;
  @media (max-width: 800px) {
    margin-top: 80px;
  }
`;

export const AuthorLink = styled.a`
  color: #777777 !important;

  &:hover {
    text-decoration: underline !important;
    color: white !important;
    transition: all 0.2s ease;
  }
`;
