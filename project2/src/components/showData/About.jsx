import { Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './about.css'

const About = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link onClick={showModal}>About</Link>
      <Modal title="About" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default About;