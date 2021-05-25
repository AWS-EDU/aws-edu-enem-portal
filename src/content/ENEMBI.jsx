import React from 'react';
import Container from 'aws-northstar/layouts/Container';
import Dashboard from '../components/QSDashboard';

function ENEMBI() {
    return (
        <Container headingVariant='h1' title='Microdados do ENEM (Dashboard)'>
            <Dashboard dashboard_url='b190d1bc-b011-4542-a640-994e3f4d3ba5' sheets_disabled='false' sheet_id='b190d1bc-b011-4542-a640-994e3f4d3ba5_4315003c-beef-40f6-acbd-9ecddc3f500d' filters='{}' />
        </Container>
    );
}

export default ENEMBI;