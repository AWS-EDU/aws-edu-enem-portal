import React from 'react';
import { embedDashboard } from 'amazon-quicksight-embedding-sdk';
import api from '../services/api';

function Dashboard(props) {
    /* START GET DASHBOARD */
    const dashboard_url = props.dashboard_url
    const sheets_disabled = props.sheets_disabled
    const sheet_id = props.sheet_id
    const filters = props.filters 

    let dashboard = ''

    function onDashboardLoad(payload) {
        console.log(payload);
    }

    function onError(payload) {
        console.log(payload);
    }

    const embed = async () => {
        let options = {}
        await api.get('quicksight', {
            params: {
                dashboard_url: dashboard_url
            }
        }).then(
            response => {
                console.log(filters);

                options = {
                    url: response.data['EmbedUrl'],
                    container: document.getElementById("embeddingContainer"),
                    parameters: filters,
                    scrolling: "no",
                    height: "700px",
                    width: "100%",
                    locale: "pt-BR",
                    footerPaddingEnabled: true,
                    sheetTabsDisabled: sheets_disabled,
                    printEnabled: false,
                    sheetId: sheet_id
                };
            }
        )
        dashboard = embedDashboard(options);
        dashboard.on("error", onError);
        dashboard.on("load", onDashboardLoad);
    };

    React.useEffect(() => {
        embed();
    }, []);
    /* END GET DASHBOARD */

    return (
        <div id="embeddingContainer">
        </div>
    );
}

export default Dashboard;