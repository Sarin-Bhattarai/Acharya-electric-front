import React, { useState, useEffect } from "react";
import Admin from "../../resources/images/admin.JPG";
import {
  Row,
  Button,
  Modal,
  Table,
  message,
  Space,
  Input,
  Upload,
  Popconfirm,
} from "antd";
import { AiFillEdit, AiFillDelete, AiOutlineUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const Aservices = () => {
  const [newImage, setNewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (e) => {
    e.preventDefault();
    //  setState({ ...state }, clickSubmit());
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    //  setState({ ...state, newHome: "" });
    setIsModalOpen(false);
  };
  return (
    <section className="dashboard-container">
      <div className="mini-container">
        <div className="head-container">
          <div className="head-section">
            <h1>Services</h1>
          </div>
          <div className="profile-section">
            <h4>Sailendra Acharya</h4>
            <img src={Admin} alt="profile" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          className="content-container"
        >
          <h1>Action to your service-section</h1>
          <Button type="primary" onClick={showModal}>
            Add
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Aservices;
