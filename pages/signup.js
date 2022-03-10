import Signup from "components/Signup";

const SignupPage = () => <Signup />;

SignupPage.getInitialProps = async () => ({
  namespacesRequired: ["signup"],
});

export default SignupPage;
