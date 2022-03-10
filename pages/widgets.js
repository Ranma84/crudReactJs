import Widgets from "components/Widgets";

const WidgetsPage = () => <Widgets />;

WidgetsPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "widgets"],
});

export default WidgetsPage;
