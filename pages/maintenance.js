import Maintenance from "components/Maintenance";

const MaintenancePage = () => <Maintenance />;

MaintenancePage.getInitialProps = async () => ({
  namespacesRequired: ["maintenance"],
});

export default MaintenancePage;
