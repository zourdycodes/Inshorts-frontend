import { Container } from "@material-ui/core";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { NewsCard } from "./NewsCard";
import {
  Content,
  DownloadMessage,
  DownloadText,
  Loadmore,
} from "../global/styles/NewsContent";

export const NewsContent = ({
  content,
  newsResults,
  loadMore,
  setLoadMore,
}) => {
  return (
    <Container maxWidth="md">
      <Content>
        <DownloadMessage>
          <DownloadText>
            For the best experience use inshorts app on your smartphone
          </DownloadText>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </DownloadMessage>

        {content.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={uuidv4()} />
        ))}

        {loadMore <= newsResults && (
          <>
            <hr />
            <Loadmore onClick={() => setLoadMore(loadMore + 20)}>
              Load More
            </Loadmore>
          </>
        )}
      </Content>
    </Container>
  );
};
