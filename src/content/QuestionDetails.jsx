import React from 'react';
import Grid from 'aws-northstar/layouts/Grid';
import Container from 'aws-northstar/layouts/Container';
import api from '../services/api';
import { useLocation } from 'react-router-dom';
import Dashboard from '../components/QSDashboard';

function QuestionDetails() {
    /* START GET IMAGE */
    const dataQuestion = useLocation();
    const [imageUrl, setImageUrl] = React.useState();
    const filters = {
        pcor: dataQuestion.state.book,
        parea: dataQuestion.state.area,
        pquestao: dataQuestion.state.question
    }

    React.useEffect(() => {
        api.get('question_url', {
            params: {
                object_key: dataQuestion.state.object_key,
                bucket: dataQuestion.state.bucket
            }
        }).then((response) => {
            setImageUrl(response.data['presignedUrl']);
        });
    }, []);
    /* END GET IMAGE */

    return (
        <Container headingVariant='h1' title='Detalhamento da Questão'>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Dashboard dashboard_url='dd868f53-86dc-48a9-999f-29116c090a7c' sheets_disabled='true' sheet_id='dd868f53-86dc-48a9-999f-29116c090a7c_18a4f5d4-71be-4853-ad8b-9ea8f2eca02e' filters={filters} />
                </Grid>
                <Grid item xs={6}>
                    <img
                        style={{
                            height: 'auto',
                            width: '100%'
                        }}
                        src={imageUrl}
                        alt='Question'
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default QuestionDetails;