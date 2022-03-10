import Chat from "components/Chat";

const ChatPage = () => <Chat />;

ChatPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "chat"],
});

export default ChatPage;
