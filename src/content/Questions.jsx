import Table from 'aws-northstar/components/Table';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Container from 'aws-northstar/layouts/Container';
import FormGroup from 'aws-northstar/components/FormGroup';
import Checkbox from 'aws-northstar/components/Checkbox';

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
        id: 'question_id',
        width: 200,
        Header: 'Número',
        accessor: 'question_id'
    },
    {
        id: 'category',
        width: 200,
        Header: 'Categoria',
        accessor: 'category'
    },
    {
        id: 'image',
        width: 200,
        Header: 'Imagem',
        accessor: 'image'
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
        category: 'Matemática',
        image: 'Abrir',
        status: 'active'
    },
];

function Questions() {
    return (
        <Container headingVariant='h1' title='Questões do ENEM'>
            <Container headingVariant='h4' title='Filtros'>
                <FormGroup row>
                    <Checkbox>Default checkbox</Checkbox>
                    <Checkbox checked={true}>Checked</Checkbox>
                    <Checkbox checked={false}>Unchecked</Checkbox>
                    <Checkbox disabled={true}>Disabled</Checkbox>
                    <Checkbox indeterminate={true}>Indeterminate</Checkbox>
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
        </Container>
    );
}

export default Questions;
