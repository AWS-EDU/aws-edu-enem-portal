import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import Link from 'aws-northstar/components/Link';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Stack from 'aws-northstar/layouts/Stack';
import Toggle from 'aws-northstar/components/Toggle';
import FormGroup from 'aws-northstar/components/FormGroup';
import Checkbox from 'aws-northstar/components/Checkbox';
import BreadcrumbGroup from 'aws-northstar/components/BreadcrumbGroup';
import { MemoryRouter } from 'react-router';


const ExternalLink = (
    <Link href="https://www.amazon.com" target="_blank">
        Value with external link
    </Link>
);

const Status = <StatusIndicator statusType="positive">Available</StatusIndicator>;

function Dashboard() {
    return (
        <Container headingVariant='h1' title="QuickSight Dashboard">
        </Container>
    );
}

export default Dashboard;
