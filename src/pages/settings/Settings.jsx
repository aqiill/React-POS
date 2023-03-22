import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Settings() {
  return (
    <>
      <CommonComponent pageTitle={"Settings"} backgroundStyle="#e7eef8" />
      <div className="wrapper">
        <Header />
        <Sidebar activePage="settings" />
      </div>
    </>
  );
}

export default Settings;
