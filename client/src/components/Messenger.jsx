import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";

const Header = styled(AppBar)({
    height: "200px",
    backgroundColor: "#00b5a5",
    boxShadow: "none",
})
// Alternate Way
// `
//     height: 200px;
//     background-color: #00b5a5;
//     box-shadow: none;
// `
// Box is used as a wrapper like div or span

const Component = styled(Box)`
    background: #dcdcdc;
    height: 100vh;
`

const Messenger = ()=>{
    return (
        <Component>
            <Header>
                <Toolbar>
                </Toolbar>
            </Header>
            <LoginDialog />
        </Component>
    )
}

export default Messenger;