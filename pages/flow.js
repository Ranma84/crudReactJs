import Flow from "components/Flow";

const FlowPage = () => <Flow />;

FlowPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default FlowPage;
