import { useContext } from 'react' 

import { Box, Typography, styled } from "@mui/material"
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation } from '../../../service/api'

const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer
`

const Image = styled('img')({
    height: 50,
    borderRadius: '50%',
    padding: '0 14px'
})

const Conversation  = ({user}) => {
    const { setPerson, account } = useContext(AccountContext) ;
    const getUser = async () => {
        setPerson(user) ;
        setConversation({senderId : account.sub, recieverId : user.sub}) ;
    }

    return (
        <Component onclick = {()=>getUser()}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation