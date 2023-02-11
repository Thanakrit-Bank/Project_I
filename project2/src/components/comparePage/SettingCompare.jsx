import { Modal, Radio } from 'antd';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import { InputNumber } from 'antd';
import './settingCompare.css'

const SettingCompare = (props) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [value1, setValue1] = useState(1);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  
  const draggleRef = useRef(null);
  
  const showModal = () => {
    setOpen(true);
  };
  
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  const onChange1 = (e) => {
    console.log('radio checked', e.target.value);
    setValue1(e.target.value);
  };
  const graphChange = (e) => {
    console.log('radio checked', e.target.value);
    props.setGraphType(e.target.value);
  };
  
  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  
  return (
    <>
      <Link onClick={showModal}>Setting</Link>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            <h3>Setting</h3>
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <p >Left Map</p>
        {/* Left Map */}
        <br />
        <p className="topic">Graph</p>
        <p className="sub-topic">
          Type: <Radio.Group onChange={graphChange} value={props.graphType}>
                  <Radio value="Linechart">Linechart</Radio>
                  <Radio value="Histrogram">Histrogram</Radio>
                </Radio.Group>
        </p>
        <p className="sub-topic">
          Data: <Radio.Group onChange={onChange1} value={value1}>
                  <Radio value={1}>Seasonal</Radio>
                  <Radio value={2}>Overall</Radio>
                </Radio.Group>
        </p>
        <br />
        <p className="topic">Grid opacity</p>
        <Slider min={0} max={10} />
        <br />
        <p className="topic">Legend</p>
        <br />
        <InputNumber
          prefix="Max:"
          style={{width: '49%'}}
        />
        <> </>
        <InputNumber
          prefix="Min:"
          style={{width: '49%'}}
        />
        <p>------------------------------------------------------------------------------------</p>

        {/* Center Map */}
        <p >Center Map</p>
        <br />
        <p className="topic">Graph</p>
        <p className="sub-topic">
          Type: <Radio.Group onChange={graphChange} value={props.graphType}>
                  <Radio value="Linechart">Linechart</Radio>
                  <Radio value="Histrogram">Histrogram</Radio>
                </Radio.Group>
        </p>
        <p className="sub-topic">
          Data: <Radio.Group onChange={onChange1} value={value1}>
                  <Radio value={1}>Seasonal</Radio>
                  <Radio value={2}>Overall</Radio>
                </Radio.Group>
        </p>
        <br />
        <p className="topic">Grid opacity</p>
        <Slider min={0} max={10} />
        <br />
        <p className="topic">Legend</p>
        <br />
        <InputNumber
          prefix="Max:"
          style={{width: '49%'}}
        />
        <> </>
        <InputNumber
          prefix="Min:"
          style={{width: '49%'}}
        />
        <p>------------------------------------------------------------------------------------</p>

        {/* Right Map */}
        <p >Right Map</p>
        <br />
        <p className="topic">Graph</p>
        <p className="sub-topic">
          Type: <Radio.Group onChange={graphChange} value={props.graphType}>
                  <Radio value="Linechart">Linechart</Radio>
                  <Radio value="Histrogram">Histrogram</Radio>
                </Radio.Group>
        </p>
        <p className="sub-topic">
          Data: <Radio.Group onChange={onChange1} value={value1}>
                  <Radio value={1}>Seasonal</Radio>
                  <Radio value={2}>Overall</Radio>
                </Radio.Group>
        </p>
        <br />
        <p className="topic">Grid opacity</p>
        <Slider min={0} max={10} />
        <br />
        <p className="topic">Legend</p>
        <br />
        <InputNumber
          prefix="Max:"
          style={{width: '49%'}}
        />
        <> </>
        <InputNumber
          prefix="Min:"
          style={{width: '49%'}}
        />
      </Modal>
    </>
  );
};
export default SettingCompare;