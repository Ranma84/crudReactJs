import Forgot from "components/Forgot";

const ForgotPage = () => <Forgot />;

Forgot.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "forgot"],
});

export default ForgotPage;
