import Components from "components/Components";

const ComponentsPage = () => <Components />;

ComponentsPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "components"],
});

export default ComponentsPage;
