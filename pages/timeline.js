import Timeline from "components/Timeline";

const TimelinePage = () => <Timeline />;

TimelinePage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default TimelinePage;
