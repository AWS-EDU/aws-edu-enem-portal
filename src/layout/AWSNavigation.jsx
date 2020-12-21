import SideNavigation, { SideNavigationItemType } from 'aws-northstar/components/SideNavigation';
import Badge from 'aws-northstar/components/Badge';


const navigationItems = [
    { type: SideNavigationItemType.LINK, text: 'Open Data', href: '/page1' },
    { type: SideNavigationItemType.LINK, text: 'Public Sources', href: '/page2' },
    { type: SideNavigationItemType.LINK, text: 'Custom URLs', href: '/page3' },
    { type: SideNavigationItemType.DIVIDER },
    {
        type: SideNavigationItemType.LINK,
        text: 'Passing Jobs: ',
        href: '#',
        info: <Badge color="green" content="29/32"></Badge>,
    },
    {
        type: SideNavigationItemType.LINK,
        text: 'Failing Jobs: ',
        href: '#',
        info: <Badge color="red" content="03/32"></Badge>,
    },
    {
        type: SideNavigationItemType.LINK,
        text: 'Documentation',
        href: 'https://docs.aws.amazon.com',
    }
];

const AWSNavigation = (
    <SideNavigation
        header={{ text: 'Dashboard', href: '/' }}
        items={navigationItems}
    />
);

export default AWSNavigation;
