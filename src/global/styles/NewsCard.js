import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  margin-bottom: 25px;
  border-radius: 5px;
`;

export const CardText = styled.div`
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LowerNewsText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 10px 0;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #44444d;
`;

export const NewsImage = styled.img`
  object-fit: cover;
  width: 320px;
  height: 268px;
`;

export const Title = styled.span`
  font-size: 22px;
  line-height: 27px;
  font-family: "Times New Roman", Times, serif;
`;
export const Author = styled.span`
  font-size: 12px;
  font-weight: 300;
  line-height: 22px;
  color: #808290;
`;

export const Muted = styled.span`
  font-weight: 100;
`;

export const Readmore = styled.span`
  font-size: 12px;
  font-weight: 400;
  padding-top: 10px;
`;

export const Source = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;
