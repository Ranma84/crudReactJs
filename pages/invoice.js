import Invoice from "components/Invoice";

const InvoicePage = () => <Invoice />;

InvoicePage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "invoice"],
});

export default InvoicePage;
