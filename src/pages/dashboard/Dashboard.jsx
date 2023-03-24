import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/content/Content";
import { useEffect } from "react";
import CommonComponent from "../../components/common/CommonComponent";
import ModalInvoice from "../../components/content/ModalInvoice";

const Dashboard = () => {
  return (
    <>
      <CommonComponent pageTitle="Dashboard" backgroundStyle="#e7eef8" />
      <div className="wrapper">
        <Header />
        <Sidebar activePage="dashboard" />
        <Content />
        <ModalInvoice />
      </div>
    </>
  );
};
export default Dashboard;
