import SideNavigation, { SideNavigationItemType } from 'aws-northstar/components/SideNavigation';


const navigationItems = [
    { type: SideNavigationItemType.LINK, text: 'Microdados do ENEM (Dashboard)', href: '/enembi' },
    { type: SideNavigationItemType.LINK, text: 'Questões do ENEM', href: '/questions' },
    { type: SideNavigationItemType.LINK, text: 'Sobre', href: '/about' }
];

const AWSNavigation = (
    <SideNavigation
        header={{ text: 'Explorar', href: '/about' }}
        items={navigationItems}
    />
);

export default AWSNavigation;
