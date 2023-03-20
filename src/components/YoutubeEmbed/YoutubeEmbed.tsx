import React from "react";
import PropTypes from "prop-types";
import styles from "./YoutubeEmbed.module.scss";

type Props = {
  embedId: string;
};
const YoutubeEmbed = ({ embedId }: Props) => (
  <iframe
    className={styles.iframe}
    width="600"
    height="400"
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    frameBorder="0"
    title="Embedded youtube"
/>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
