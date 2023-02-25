import { FloatButton, Modal } from 'antd';
import { useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
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
        <FloatButton
            icon={<QuestionCircleOutlined />}
            type="default"
            onClick={showModal}
            className='about'
        />
        <Modal title="About" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
        </Modal>
    </>
  );
};

export default About;