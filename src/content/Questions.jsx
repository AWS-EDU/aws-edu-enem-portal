import React from 'react'
import Table from 'aws-northstar/components/Table';
import Container from 'aws-northstar/layouts/Container';
import Inline from 'aws-northstar/layouts/Inline';
import Alert from 'aws-northstar/components/Alert';
import Button from 'aws-northstar/components/Button';
import { Link } from "react-router-dom";

import api from '../services/api';
import './styles/questions.css';

function Questions() {
    /* START TABLE */

    const columnDefinitions = [
        {
            id: 'book',
            width: 200,
            Header: 'Caderno',
            accessor: 'book'
        },
        {
            id: 'year',
            width: 200,
            Header: 'Ano',
            accessor: 'year'
        },
        {
            id: 'page',
            width: 200,
            Header: 'Página',
            accessor: 'page'
        },
        {
            id: 'question',
            width: 200,
            Header: 'Número',
            accessor: 'question'
        },
        {
            id: 'area',
            width: 200,
            Header: 'Área',
            accessor: 'area'
        }
    ];

    const tableActions = (
        <Inline>
            <Button variant='primary'>
                <Link to="/questions/teste">Detalhar</Link>
            </Button>
        </Inline>
    );

    /* END TABLE */

    /* START TABLE DATA */
    const [data, setData] = React.useState();

    React.useEffect(() => {
        api.get('questions').then(
            response => {
                const dataEnem = []
                response.data['items'].forEach((item, index) => {
                    dataEnem.push(
                        {
                            question: item['question_num']['S'],
                            book: item['color']['S'],
                            year: 2019,
                            page: item['page_number']['S'],
                            area: item['exam_area']['S']
                        }
                    )
                });
                setData(dataEnem)
            }
        )
    }, []);
    /* END TABLE DATA */

    return (
        <Container headingVariant='h1' title='Questões do ENEM'>
            <Alert type="info" dismissable={true}>
                Para visualizar mais informações sobre a questão clique em <b>Detalhes</b>.
            </Alert>
            <br></br>
            <Table
                onSelectionChange={() => { }}
                columnDefinitions={columnDefinitions}
                actionGroup={tableActions}
                items={data}
                multiSelect={false}
                disableGroupBy={true}
                disableSettings={false}
                disablePagination={false}
                disableFilters={false}
                disableRowSelect={false}
                disableSortBy={false}
            />
        </Container >
    );
}

export default Questions;