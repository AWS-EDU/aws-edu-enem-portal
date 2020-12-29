import React from 'react';
import Container from 'aws-northstar/layouts/Container';
import api from '../services/api';
import { embedDashboard } from 'amazon-quicksight-embedding-sdk';

function Dashboard() {
    const dashboardRef = React.createRef();
    const embed = async () => {
        let options = {}
        await api.get('quicksight').then(
            response => {
                options = {
                    url: response.data['EmbedUrl'],
                    container: dashboardRef.current,
                    scrolling: "no",
                    height: "700px",
                    width: "100%",
                    locale: "pt-BR",
                    footerPaddingEnabled: true
                };
            }
        )
        embedDashboard(options)
    };

    React.useEffect(() => {
        embed();
    });

    return (
        <Container headingVariant='h1' title="Microdados do ENEM (Dashboard)">
            <div ref={dashboardRef} />
        </Container>
    );
}

export default Dashboard;