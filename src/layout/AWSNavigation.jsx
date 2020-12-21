import SideNavigation, { SideNavigationItemType } from 'aws-northstar/components/SideNavigation';


const navigationItems = [
    { type: SideNavigationItemType.LINK, text: 'Microdados do ENEM', href: '/dashboard' },
    { type: SideNavigationItemType.LINK, text: 'Questões do ENEM', href: '/questions' }
];

const AWSNavigation = (
    <SideNavigation
        header={{ text: 'Explorar', href: '/' }}
        items={navigationItems}
    />
);

export default AWSNavigation;
