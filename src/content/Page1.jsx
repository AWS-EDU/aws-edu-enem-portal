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

function Page1() {
    return (
        <Container headingVariant='h4' title="Examples" subtitle="A list of key value pairs with empty value, string value, status indicator value and external link value">
            <Container headingVariant='h4' title='With items'>
                <MemoryRouter>
                    <BreadcrumbGroup items={[
                        { text: "first", href: "#first" },
                        { text: "second", href: "#second" },
                        { text: "last", href: "#last" }]}
                    />
                </MemoryRouter>
            </Container>
            <ColumnLayout>
                <Column key="column1">
                    <Stack>
                        <KeyValuePair label="Distribution Id" value="SLCCSMWOHOFUY0"></KeyValuePair>
                        <KeyValuePair label="Domain name" value="bbb.cloudfront.net"></KeyValuePair>
                        <KeyValuePair label="ARN" value={ExternalLink}></KeyValuePair>
                    </Stack>
                </Column>
                <Column key="column2">
                    <Stack>
                        <KeyValuePair label="Status" value={Status}></KeyValuePair>
                        <KeyValuePair label="Price class" value="Use only US, Canada, Europe, and Asia"></KeyValuePair>
                        <KeyValuePair label="CNAMEs"></KeyValuePair>
                    </Stack>
                </Column>
                <Column key="column3">
                    <Stack>
                        <KeyValuePair label="SSL certificate" value="Default CloudFront SSL certificate"></KeyValuePair>
                        <KeyValuePair label="Custom SSL client support"></KeyValuePair>
                        <KeyValuePair label="Logging" value="Off"></KeyValuePair>
                    </Stack>
                </Column>
            </ColumnLayout>
            <Container headingVariant='h4' title='Toggle default to checked status'>
                <Toggle label="Checked" checked={true} />
            </Container>
            <Container headingVariant='h4' title='Row'>
                <FormGroup row>
                    <Checkbox>Default checkbox</Checkbox>
                    <Checkbox checked={true}>Checked</Checkbox>
                    <Checkbox checked={false}>Unchecked</Checkbox>
                    <Checkbox disabled={true}>Disabled</Checkbox>
                    <Checkbox indeterminate={true}>Indeterminate</Checkbox>
                </FormGroup>
            </Container>
        </Container> 
    );
}

export default Page1;
