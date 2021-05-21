import React, { useState } from 'react';
import Grid from 'aws-northstar/layouts/Grid';
import Container from 'aws-northstar/layouts/Container';
import api from '../services/api';
import { embedDashboard } from 'amazon-quicksight-embedding-sdk';
import { useLocation } from "react-router-dom";

function QuestionDetails() {
    /* START GET DASHBOARD 
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
    }, []);
    /* END GET DASHBOARD */

    /* START GET IMAGE */
    const dataQuestion = useLocation();
    const [imageUrl, setImageUrl] = React.useState();

    React.useEffect(() => {
        api.get('question_url', {
            params: {
                object_key: dataQuestion.state.object_key,
                bucket: dataQuestion.state.bucket
            }
        }).then((response) => {
            setImageUrl(response.data['presignedUrl'])
        });
    }, []);
    /* END GET IMAGE */

    return (
        <Container headingVariant='h1' title="Detalhamento da Questão">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    {/* <div ref={dashboardRef} /> */}
                </Grid>
                <Grid item xs={6}>
                    <img
                        style={{
                            height: 'auto',
                            width: '100%'
                        }}
                        src={imageUrl}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default QuestionDetails;