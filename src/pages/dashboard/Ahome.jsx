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
import {
  getHome,
  postHome,
  editHome,
  deleteHome,
} from "../../utils/api/homeApi";
import IconImage from "../../utils/data/iconImage";
import ShowImage from "../../utils/data/showImage";
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
  const [newIcon, setNewIcon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchHomes();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (e) => {
    e.preventDefault();
    setState({ ...state }, clickSubmit());
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setState({ ...state, newHome: "" });
    setIsModalOpen(false);
  };

  const fetchHomes = () => {
    setState({ ...state, error: null });
    getHome()
      .then(({ data }) => setState({ ...state, homes: data, error: null }))
      .catch({ ...state, error: null });
  };

  // create home process
  const handleChange = (name, value, isEdit) => {
    if (isEdit) {
      if (name === "icon") {
        setNewIcon(value);
      } else if (name === "image") {
        setNewImage(value);
      }
      setState({
        ...state,
        error: null,
        homes: state?.homes?.map((home) => {
          if (home._id === state.newHome.id) {
            setState({
              ...state,
              error: null,
              newHome: { ...state.newHome, [name]: value },
            });
            return home;
          } else {
            return home;
          }
        }),
      });
    } else {
      setState({
        ...state,
        error: null,
        newHome: { ...state.newHome, [name]: value },
      });
    }
  };

  const clickSubmit = async () => {
    const { title, icon, image } = state.newHome;
    try {
      const response = await postHome(title, icon, image);
      setState({
        ...state,
        newHome: response?.data,
        error: null,
        modalVisible: false,
        homes: [...state.homes, response?.data],
      });
      message.success("Home Service added");
    } catch (error) {
      setState({
        ...state,
        error: error,
        modalVisible: false,
      });
      message.error("Error adding home service");
    }
  };

  //for edit home process

  const handleSubmit = (name, id, value) => {
    const newHomes = [...state.homes];
    const index = newHomes.findIndex((element) => element?._id === id);
    newHomes[index] = { ...newHomes[index], [name]: value }; //update the new value of element
    setState((prev) => {
      return { ...prev, homes: newHomes };
    });
  };

  const handleEditImageUpload = (id, title, icon, image) => {
    setState({ ...state, updateLoading: true });
    editHome(id, title, icon, image)
      .then((response) => {
        const updatedHomes = state?.homes?.map((home) => {
          if (home._id === id) {
            return response?.data;
          } else {
            return home;
          }
        });
        setState({
          ...state,
          homes: updatedHomes,
          updateLoading: false,
          modalVisible: false,
          newHome: {}, // reset the newHome object in state
        });
        message.success("Successfully updated service");
        setTimeout(() => {
          navigate("/api/dashboard/services");
        }, 1000);
      })
      .catch((error) => {
        setState({ ...state, updateLoading: false });
        message.error(error?.message || "Error updating service");
      });
  };

  //for delete process
  const confirm = (id) => {
    deleteHome(id)
      .then((home) => {
        message.success("Service deleted");
        setTimeout(() => {
          navigate("/api/dashboard/services");
        }, 1000);
      })
      .catch((error) => {
        setState({ ...state, error: error, loading: false });
        message.error(error?.message || "Error deleting service");
      });
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Delete cancelled");
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <h4>{text}</h4>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <p className="dashboard-paragraph">{text}</p>,
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (icon) => <div>{icon}</div>,
    },

    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <div>{image}</div>,
    },

    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_, _id) => (
        <>
          <Row
            style={{
              gap: "0.2rem",
            }}
          >
            <Space wrap>
              <Button
                style={{
                  border: "none",
                }}
                onClick={() => {
                  setState({
                    ...state,
                    newHome: {
                      ...state.newHome,
                      id: _id._id,
                    },
                    modalVisible: {
                      ...state.modalVisible,
                      [_id._id]: true,
                    },
                  });
                }}
              >
                <AiFillEdit
                  style={{
                    color: "#4eae98",
                  }}
                  size={18}
                />
              </Button>
              <Modal
                title="Edit Service"
                okText="Edit"
                style={{ top: 20 }}
                visible={state.modalVisible[_id._id]}
                okButtonProps={{ loading: state.updateLoading }}
                onOk={(e) => {
                  e.preventDefault();
                  const home = state?.homes?.find((el) => el._id === _id._id);
                  const { title, icon, image } = home;
                  handleEditImageUpload(
                    _id._id,
                    title,
                    newIcon || icon,
                    newImage || image
                  );
                  setState({ ...state, modalVisible: false });
                }}
                onCancel={() => setState({ ...state, modalVisible: false })}
              >
                <form>
                  <label>Title</label>
                  <TextArea
                    rows={2}
                    onChange={(e) =>
                      handleSubmit("title", _id._id, e.target.value)
                    }
                    value={
                      state?.homes?.find((el) => el._id === _id._id)?.title ||
                      ""
                    }
                    name="title"
                  />
                  <br />
                  <br />
                  <label>Icon</label>
                  <br />
                  <br />
                  <Upload
                    accept="image/*"
                    beforeUpload={(file) => {
                      handleChange("icon", file, true);
                      return false; // prevent Ant Design from automatically uploading the file
                    }}
                    name="icon"
                  >
                    <Button icon={<AiOutlineUpload />}>Upload Icon</Button>
                  </Upload>
                  <br />
                  <br />
                  <label>Image</label>
                  <br />
                  <br />
                  <Upload
                    accept="image/*"
                    beforeUpload={(file) => {
                      handleChange("image", file, true);
                      return false; // prevent Ant Design from automatically uploading the file
                    }}
                    name="image"
                  >
                    <Button icon={<AiOutlineUpload />}>Upload Image</Button>
                  </Upload>
                </form>
              </Modal>
            </Space>

            <Popconfirm
              title="Delete the service"
              description="Are you sure to delete this service?"
              onConfirm={() => confirm(_id._id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <AiFillDelete
                style={{
                  color: "#eb1d0f",
                  marginLeft: "15px",
                }}
                size={18}
              />
            </Popconfirm>
          </Row>
        </>
      ),
    },
  ];

  const mappedData = state?.homes?.map((item) => ({
    _id: item?._id,
    title: item?.title,
    icon: <IconImage services={item?.icon} url="uploads" />,
    image: <ShowImage services={item?.image} url="uploads" />,
  }));

  return (
    <section className="dashboard-container">
      <div className="mini-container">
        <div className="head-container">
          <div className="head-section">
            <h1>Home Services</h1>
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
          <h1>Action to your home-section</h1>
          <Button type="primary" onClick={showModal}>
            Add
          </Button>
          <Modal
            title="Add Home-Service"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <form>
              <label>Title</label>
              <TextArea
                type="text"
                placeholder="Service title"
                onChange={(e) => handleChange("title", e.target.value)}
                value={state.newHome.title}
                required
                rows={2}
                name="title"
              />
              <br />
              <br />
              <label>Icon</label>
              <br />
              <br />
              <Upload
                accept="image/*"
                listType="picture"
                beforeUpload={(file) => {
                  handleChange("icon", file);
                  return false; // prevent Ant Design from automatically uploading the file
                }}
                fileList={state.newHome.icon ? [state.newHome.icon] : []}
                name="icon"
              >
                <Button icon={<AiOutlineUpload />}>Upload Icon</Button>
              </Upload>
              <br />
              <br />
              <label>Image</label>
              <br />
              <br />
              <Upload
                accept="image/*"
                listType="picture"
                beforeUpload={(file) => {
                  handleChange("image", file);
                  return false; // prevent Ant Design from automatically uploading the file
                }}
                fileList={state.newHome.image ? [state.newHome.image] : []}
                name="image"
              >
                <Button icon={<AiOutlineUpload />}>Upload Image</Button>
              </Upload>
            </form>
          </Modal>
        </div>
      </div>
      <Table className="data-table" dataSource={mappedData} columns={columns} />
    </section>
  );
};

export default Ahome;
