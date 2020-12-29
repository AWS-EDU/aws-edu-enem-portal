import Table from 'aws-northstar/components/Table';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Container from 'aws-northstar/layouts/Container';
import FormGroup from 'aws-northstar/components/FormGroup';
import { ButtonDropdown } from 'aws-northstar';


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

const data = [
    {
        question_id: 23,
        book: 'Azul',
        year: 2019,
        page: 10,
        area: 'LC',
        image: 'Abrir',
        dashboard_filter: 'Filtrar',
        status: 'active'
    },
];

function Questions() {
    return (
        <Container headingVariant='h1' title='Questões do ENEM'>
            <Container headingVariant='h4' title='Filtros'>
                <FormGroup row>
                    <ButtonDropdown>Teste</ButtonDropdown>
                    <ButtonDropdown></ButtonDropdown>
                    <ButtonDropdown></ButtonDropdown>
                    <ButtonDropdown></ButtonDropdown>
                    <ButtonDropdown></ButtonDropdown>
                    <ButtonDropdown></ButtonDropdown>
                </FormGroup>
            </Container>
            <Container headingVariant='h4' title='Resultados'>
                <Table
                    onSelectionChange={() => { }}
                    columnDefinitions={columnDefinitions}
                    items={data}
                    disableGroupBy={true}
                    disableSettings={true}
                    disablePagination={true}
                    disableFilters={true}
                    disableRowSelect={true}
                    disableSortBy={true}
                />
            </Container>
        </Container >
    );
}

export default Questions;

// TODO: Adicionar filtro por área de conhecimento (Adicionar redação como área de conhecimento temporariamente)
// TODO: Adicionar filtro por competência de área
// TODO: Adicionar filtro por página
// TODO: Adicionar filtro por questão
// TODO: Adicionar filtro por cor
// TODO: Adicionar filtro por ano