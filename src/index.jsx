import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Building the layout
import AppLayout from 'aws-northstar/layouts/AppLayout';
import AWSHeader from './layout/AWSHeader';
import AWSNavigation from './layout/AWSNavigation';
import Box from 'aws-northstar/layouts/Box';
// Applying the themes
import NorthStarThemeProvider from 'aws-northstar/components/NorthStarThemeProvider';
import ThemeOverride from './layout/ThemeOverride';
// Content pages rendered in the central panel
import Dashboard from './content/Dashboard';
import Questions from './content/Questions';
import About from './content/About';


ReactDOM.render(
    <BrowserRouter>
        <NorthStarThemeProvider theme={ThemeOverride}>
            <AppLayout
                header={AWSHeader}
                navigation={AWSNavigation}
            /*helpPanel={AWSHelp}*/
            >
                <Box bgcolor="white" width="100%" height="1000px">
                    <Switch>
                        <Route path="/" exact={true} component={About} />
                        <Route path="/dashboard" exact={true} component={Dashboard} />
                        <Route path="/questions" exact={true} component={Questions} />
                        <Route path="/about" exact={true} component={About} />
                        <Route path="*" exact={true} component={About} />
                    </Switch>
                </Box>
            </AppLayout>
        </NorthStarThemeProvider >
    </BrowserRouter>,
    document.getElementById('root')
);
