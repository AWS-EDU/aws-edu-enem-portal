import Table from 'aws-northstar/components/Table';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Container from 'aws-northstar/layouts/Container';


const columnDefinitions = [
    {
        id: 'id',
        width: 200,
        Header: 'Id',
        accessor: 'id'
    },
    {
        id: 'name',
        width: 200,
        Header: 'Name',
        accessor: 'name'
    },
    {
        id: 'accounts',
        width: 200,
        Header: '# Accounts',
        accessor: 'accounts.length'
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
                        return <StatusIndicator statusType='positive'>Active</StatusIndicator>;
                    case 'inactive':
                        return <StatusIndicator statusType='negative'>Inactive</StatusIndicator>;
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
        id: 'id0000001',
        name: 'Engagement one',
        accounts: [],
        status: 'active'
    },
    {
        id: 'id0000002',
        name: 'Engagement two',
        accounts: ['acc1', 'acc2'],
        status: 'active'
    },
    {
        id: 'id0000003',
        name: 'Engagement three',
        accounts: ['acc1', 'acc2'],
        status: 'inactive'
    },
    {
        id: 'id0000004',
        name: 'Engagement four',
        accounts: ['acc1', 'acc2', 'acc3'],
        status: 'inactive'
    },
    {
        id: 'id0000005',
        name: 'Engagement five',
        accounts: [],
        status: 'inactive'
    },
    {
        id: 'id0000006',
        name: 'Engagement six',
        accounts: [],
        status: 'active'
    },
    {
        id: 'id0000007',
        name: 'Engagement seven',
        accounts: [],
        status: 'active'
    },
    {
        id: 'id0000008',
        name: 'Engagement eight',
        accounts: [],
        status: 'active'
    },
    {
        id: 'id0000009',
        name: 'Engagement nine',
        accounts: [],
        status: 'active'
    },
    {
        id: 'id0000010',
        name: 'Engagement ten',
        accounts: [],
        status: 'active'
    },
    {
        id: 'id0000011',
        name: 'Engagement eleven',
        accounts: ['acc1', 'acc4', 'acc5', 'acc7'],
        status: 'active'
    }
];

function Page2() {
    return (
        <Container>
            <Table
                onSelectionChange={() => { }}
                tableTitle='Basic Table'
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
    );
}

export default Page2;
