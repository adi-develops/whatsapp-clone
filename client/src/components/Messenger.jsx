import { useContext } from 'react' ;
import { AccountContext } from '../context/AccountProvider';
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog'

const LoginHeader = styled(AppBar)({
    height: "200px",
    backgroundColor: "#00b5a5",
    boxShadow: "none",
})

const Header = styled(AppBar)({
    height: "115px",
    backgroundColor: "#00A884",
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

    const { account } = useContext(AccountContext) ;

    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar>
                        </Toolbar>
                    </Header>
                    <ChatDialog/>
                </>
                
                :
                <>
                    <LoginHeader>
                        <Toolbar>
                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
            
        </Component>
    )
}

export default Messenger;