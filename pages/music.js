import Music from "components/Music";

const MusicPage = () => <Music />;

MusicPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "music"],
});

export default MusicPage;
