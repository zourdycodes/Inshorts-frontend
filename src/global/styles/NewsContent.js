import styled from "styled-components";

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DownloadMessage = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  background: #f44336;
  height: 48px;
  padding: 0 40px;
  margin: 20px 0 35px 0;
  color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  @media (max-width: 995px) {
    display: none;
  }
`;

export const DownloadText = styled.span`
  flex: 1;
`;

/* --------------------------------------------------- */

export const Loadmore = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 7px 25px;
  font-size: 13px;
  margin-top: -20px;
`;
