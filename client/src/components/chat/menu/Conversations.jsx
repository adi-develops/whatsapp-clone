import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
// Components
import { Box, Divider, styled } from "@mui/material";
import Conversation from "./Conversation"
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background: #e9edef;
    opacity: 0.6;
`

const Conversations = () => {

    const [users, setUsers] = useState([])
    
    const { account } = useContext(AccountContext)

    const fetchData = async () => {
        let response = await getUsers();
        setUsers(response)
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                    <Conversation user={user} />
                    <StyledDivider />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations;
