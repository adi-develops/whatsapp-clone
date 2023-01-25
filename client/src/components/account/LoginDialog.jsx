import { useContext } from 'react'
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { AccountContext } from '../../context/accountprovider';
import jwt_decode from "jwt-decode"

const dialogStyle = {
  height: "95%",
  width: "60%",
  marginTop: "12%",
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
};

const Component = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  position: 'relative'
})

const TextContainer = styled(Box)({
  padding: "56px 0 56px 56px",
});

const Title = styled(Typography)({
  fontSize: "26px",
  color: "#525252",
  fontWeight: "300",
  fontFamily: "inherit",
  marginBottom: "26px",
});

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const LoginDialog = () => {

  const { setAccount } = useContext(AccountContext) ;

  function onLoginSuccess(res) {
    const decoded = jwt_decode(res.credential) ;
    setAccount(decoded) ;
  }
  
  function onLoginError(res) {
    console.log(res)
  }

  return (
    <Dialog 
      open={true} 
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop = {true}
    >
      <Component>
        <TextContainer>
          <Title>To use Whatsapp on your Computer:</Title>
          <StyledList>
            <ListItem>1. Login with your Google account.</ListItem>
            <ListItem>2. Enjoy the seamless chatting experience.</ListItem>
          </StyledList>
        </TextContainer>

        <Box sx={{position: 'absolute', right: '10%'}}>
        <GoogleLogin
          onSuccess={onLoginSuccess}
          onError={onLoginError}
        />
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
