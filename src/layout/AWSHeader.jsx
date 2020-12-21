import Header from 'aws-northstar/components/Header';
import Box from 'aws-northstar/layouts/Box';
import NotificationButton from 'aws-northstar/advanced/NotificationButton';
import ButtonDropdown from 'aws-northstar/components/ButtonDropdown';


const menuItems = [
    { text: 'My account', onClick: () => console.log('My account') },
    { text: 'Sign Out', onClick: () => console.log('Sign out') }
];

const rightContent = (
    <Box display="flex" alignItems='center'>
        <NotificationButton onDismissNotification={console.log} />
        <ButtonDropdown content='Administrator' items={menuItems} darkTheme />
    </Box>
);

const AWSHeader = (
    <Header
        title='A Precious Service'
        rightContent={rightContent}
        logoPath='logo500.png'
    />
);

export default AWSHeader;
