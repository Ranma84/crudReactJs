import Faq from "components/Faq";

const FaqPage = () => <Faq />;

FaqPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "faq"],
});

export default FaqPage;
