import { useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import CommonComponent from "../../components/common/CommonComponent";

function Member() {
  return (
    <>
      <CommonComponent pageTitle="Member" backgroundStyle="#e7eef8" />
      <div className="wrapper">
        <Header />
        <Sidebar activePage="member" />
      </div>
    </>
  );
}

export default Member;
