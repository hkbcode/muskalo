import { Button } from "antd";
import {CaretUpOutlined, SyncOutlined } from '@ant-design/icons';



const index = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>Build Nextjs apps with Antdesign faster...</p>
      <Button type="primary">Start Coding <SyncOutlined spin /></Button>
      <CaretUpOutlined />


    </div>
  );
};

export default index;
