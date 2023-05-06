import { Box, InputBase, styled } from "@mui/material";
import {
  EmojiEmotionsOutlined,
  AttachFileOutlined,
  MicOutlined,
} from "@mui/icons-material";
import { useEffect } from "react";
import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const MessageBox = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFileOutlined)`
  transform: rotate(40deg);
`;

const Footer = ({ sendText, value, setValue, file, setFile, setImage }) => {

  useEffect(() => {
    const getImage = async () => {
      const data = new FormData()
      data.append("name", file.name)
      data.append("file", file)

      let response = await uploadFile(data)
      setImage(response.data)
    }
    getImage()
  }, [file, setImage])

  const onFileChange = (event) => {
    setFile(event.target.files[0])
    setValue(event.target.files[0].name)
  }

  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input type="file" id="fileInput" style={{ display: "none" }} onChange={(event) => onFileChange(event)} />
      <MessageBox>
        <InputField
          placeholder="Type a Message"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyPress={(event) => {
            sendText(event);
          }}
          value={value}
        />
      </MessageBox>
      <MicOutlined />
    </Container>
  );
};

export default Footer;
