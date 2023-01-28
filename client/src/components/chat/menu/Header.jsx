import { useContext } from 'react' ;
import { AccountContext } from '../../../context/accountprovider';
import { Chat as MessageIcon } from '@mui/icons-material';
import { styled, Box } from '@mui/material'

// Components 
import HeaderMenu from './HeaderMenu';

const Component = styled(Box)`
    height : 44px ;
    background : #ededed ;
    padding : 8px 16px ;
    display: flex;
    align-items: center ;
` ;

const Wrapper = styled(Box)`
    margin-left : auto ;
    & > * {
        margin-left : 2px ;
        padding : 8px ;
        color : #000 ;
    }
    & : first-child {
        font-size : 22px ;
        margin-right : 8px ;
        margin-top: 3px ;
    }
` ;

const Image = styled('img')({
    height : 38,
    width : 38 ,
    borderRadius: '50%'
})

const Header = () => {

    const { account } = useContext(AccountContext) ;
    return(
        <>
            <Component>
                <Image src = {account.picture} alt = "dp" />
                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu />
                </Wrapper>
            </Component>
        </>
    )
}
export default Header ;