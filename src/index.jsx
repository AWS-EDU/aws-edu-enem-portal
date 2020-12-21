import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Building the layout
import AppLayout from 'aws-northstar/layouts/AppLayout';
import AWSHeader from './layout/AWSHeader';
import AWSNavigation from './layout/AWSNavigation';
import AWSHelp from './layout/AWSHelp';
import Box from 'aws-northstar/layouts/Box';
// Applying the themes
import NorthStarThemeProvider from 'aws-northstar/components/NorthStarThemeProvider';
import ThemeOverride from './layout/ThemeOverride';
// Content pages rendered in the central panel
import Page1 from './content/Page1';
import Page2 from './content/Page2';
import Page3 from './content/Page3';


ReactDOM.render(
    <BrowserRouter>
        <NorthStarThemeProvider theme={ThemeOverride}>
            <AppLayout
                header={AWSHeader}
                navigation={AWSNavigation}
                helpPanel={AWSHelp}>
                <Box bgcolor="white" width="100%" height="1000px">
                    <Switch>
                        <Route path="/" exact={true} component={Page1} />
                        <Route path="/page1" exact={true} component={Page1} />
                        <Route path="/page2" exact={true} component={Page2} />
                        <Route path="/page3" exact={true} component={Page3} />
                        <Route path="*" exact={true} component={Page1} />
                    </Switch>
                </Box>
            </AppLayout>
        </NorthStarThemeProvider >
    </BrowserRouter>,
    document.getElementById('root')
);
