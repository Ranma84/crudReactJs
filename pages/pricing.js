import Pricing from "components/Pricing";

const PricingPage = () => <Pricing />;

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "pricing"],
});

export default PricingPage;
