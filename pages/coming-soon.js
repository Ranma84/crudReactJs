import ComingSoon from "components/ComingSoon";

const ComingSoonPage = () => <ComingSoon />;

ComingSoonPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "coming-soon"],
});

export default ComingSoonPage;
