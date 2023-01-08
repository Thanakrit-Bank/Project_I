import "./setting.css";
import { useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { Modal } from "./Modal";
import { CiSettings } from 'react-icons/ci';

export default function Setting() {
  const [isModalOpen, setModal] = useState(false);

  const handleClick = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="app">
        <div className="body">
          <button onClick={handleClick}>
            <CiSettings className="icon"/>
          </button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={setModal} />}

      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={100}
        blur={1.5}
      />
    </>
  );
}
