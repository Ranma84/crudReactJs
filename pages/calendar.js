import Calendar from "components/Calendar";

const CalendarPage = () => <Calendar />;

CalendarPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "calendar"],
});

export default CalendarPage;
