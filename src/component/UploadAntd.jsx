import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const UploadAntd = () => {
  const customRequestHandler = ({ file, onSuccess, onError }) => {
    // No action taken, simply call onSuccess to mark the file as uploaded
    onSuccess();
  };

  const props = {
    name: 'file',
    customRequest: customRequestHandler, // Use customRequest to prevent network request
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};

export default UploadAntd;
