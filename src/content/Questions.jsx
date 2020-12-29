import React from 'react'
import Table from 'aws-northstar/components/Table';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Container from 'aws-northstar/layouts/Container';
import Select from 'aws-northstar/components/Select';
import Inline from 'aws-northstar/layouts/Inline';
import Alert from 'aws-northstar/components/Alert';
import Button from 'aws-northstar/components/Button';

import './styles/questions.css';

function Questions() {
    /* BOOK FILTER */
    const filterBookOptions = [
        { label: 'Azul', value: '1' },
        { label: 'Branco', value: '2' },
        { label: 'Amarelo', value: '3' },
        { label: 'Rosa', value: '4' },
        { label: 'Laranja', value: '5' },
        { label: 'Cinza', value: '6' }
    ];

    const [selectedBookOption, setSeletedBookOption] = React.useState();
    const onBookChange = (event) => {
        setSeletedBookOption(filterBookOptions.find(o => o.value === event.target.value));
    };

    /* YEAR FILTER */
    const filterYearOptions = [
        { label: '2019', value: '2019' }
    ];

    const [selectedYearOption, setSeletedYearOption] = React.useState();
    const onYearChange = (event) => {
        setSeletedYearOption(filterYearOptions.find(o => o.value === event.target.value));
    };

    /* AREA FILTER */
    const filterAreaOptions = [
        { label: 'Ciências da Natureza e suas Tecnologias', value: 'CN' },
        { label: 'Linguagens, Códigos e suas Tecnlogias', value: 'LC' },
        { label: 'Ciências Humanas e suas Tecnologias', value: 'CH' },
        { label: 'Matemática e suas Tecnologias', value: 'M' },
        { label: 'Redação', value: 'R' },
    ];

    const [selectedAreaOption, setSeletedAreaOption] = React.useState();
    const onAreaChange = (event) => {
        setSeletedAreaOption(filterAreaOptions.find(o => o.value === event.target.value));
    };

    /* TABLE */
    const [loading, setLoading] = React.useState(false);

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
            id: 'question_id',
            width: 200,
            Header: 'Número',
            accessor: 'question_id'
        },
        {
            id: 'area',
            width: 200,
            Header: 'Área',
            accessor: 'area'
        },
        {
            id: 'image',
            width: 200,
            Header: 'Imagem',
            accessor: 'image'
        },
        {
            id: 'dashboard_filter',
            width: 200,
            Header: 'Dashboard',
            accessor: 'dashboard_filter'
        },
        {
            id: 'status',
            width: 200,
            Header: 'Status',
            accessor: 'status',
            Cell: ({ row }) => {
                if (row && row.original) {
                    const status = row.original.status;
                    switch (status) {
                        case 'active':
                            return <StatusIndicator statusType='positive'>Revisada</StatusIndicator>;
                        case 'inactive':
                            return <StatusIndicator statusType='negative'>Não revisada</StatusIndicator>;
                        default:
                            return null;
                    }
                }
                return row.id;
            }
        }
    ];

    /* DATA EXAMPLE:
        {
            question_id: 23,
            book: 'Azul',
            year: 2019,
            page: 10,
            area: 'LC',
            image: 'Abrir',
            dashboard_filter: 'Filtrar',
            status: 'active'
        }
    */
    const data = [];

    return (
        <Container headingVariant='h1' title='Questões do ENEM'>
            <Container headingVariant='h4' title='Filtros'>
                <Inline spacing='l'>
                    <Select
                        placeholder="Caderno"
                        options={filterBookOptions}
                        selectedOption={selectedBookOption}
                        onChange={onBookChange}
                    />
                    <Select
                        placeholder="Ano"
                        options={filterYearOptions}
                        selectedOption={selectedYearOption}
                        onChange={onYearChange}
                    />
                    <Select
                        placeholder="Área"
                        options={filterAreaOptions}
                        selectedOption={selectedAreaOption}
                        onChange={onAreaChange}
                    />
                    <Button
                        variant="primary"
                        icon="refresh"
                        loading={loading}
                        onClick={() => setLoading(true)}
                    >
                        Filtrar
                    </Button>
                </Inline>
            </Container>
            <Container headingVariant='h4' title='Resultados'>
                <Table
                    onSelectionChange={() => { }}
                    columnDefinitions={columnDefinitions}
                    items={data}
                    disableGroupBy={true}
                    disableSettings={false}
                    disablePagination={false}
                    disableFilters={false}
                    disableRowSelect={true}
                    disableSortBy={true}
                />
                <Alert type="info" dismissable={true}>
                    Para visualizar todas as informações da tabela, arraste para o lado.
                </Alert>
            </Container>
        </Container >
    );
}

export default Questions;