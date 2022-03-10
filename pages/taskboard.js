import Taskboard from "components/Taskboard";

const TaskboardPage = () => <Taskboard />;

TaskboardPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default TaskboardPage;
