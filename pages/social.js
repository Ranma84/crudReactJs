import Social from "components/Social";

const SocialPage = () => <Social />;

SocialPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "social"],
});

export default SocialPage;
