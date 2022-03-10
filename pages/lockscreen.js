import Lockscreen from "components/Lockscreen";

const LockscreenPage = () => <Lockscreen />;

LockscreenPage.getInitialProps = async () => ({
  namespacesRequired: ["lockscreen"],
});

export default LockscreenPage;
