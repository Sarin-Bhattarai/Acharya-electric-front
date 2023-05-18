import React, { useState, useEffect } from "react";
// import Admin from "../../../resources/images/admin.jpg";
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

const Ahome = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    homes: [],
    error: null,
    newHome: { id: "", title: "", icon: null, image: null },
    modalVisible: false,
    updateLoading: false,
  });
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
    setState({ ...state, newHome: "" });
    setIsModalOpen(false);
  };
  return (
    <section className="dashboard-container">
      <div className="mini-container">
        <div className="head-container">
          <div className="head-section">
            <h1>Home Services</h1>
          </div>
          <div className="profile-section">
            <h4>Sailendra Acharya</h4>
            <img alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ahome;
