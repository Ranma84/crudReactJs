import Messages from "components/Messages";

const MessagesPage = () => <Messages />;

MessagesPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default MessagesPage;
