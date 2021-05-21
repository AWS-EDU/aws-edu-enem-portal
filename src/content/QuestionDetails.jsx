import React from 'react';
import Grid from 'aws-northstar/layouts/Grid';
import Placeholder from 'aws-northstar/components/Placeholder';
import Container from 'aws-northstar/layouts/Container';
import api from '../services/api';
import { embedDashboard } from 'amazon-quicksight-embedding-sdk';

function QuestionDetails() {
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
        <Container headingVariant='h1' title="Detalhamento da Questão">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div ref={dashboardRef} />
                </Grid>
                <Grid item xs={6}>
                    <Placeholder />
                </Grid>
            </Grid>
        </Container>
    );
}

export default QuestionDetails;