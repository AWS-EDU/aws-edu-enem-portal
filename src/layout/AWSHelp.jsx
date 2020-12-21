import HelpPanel from 'aws-northstar/components/HelpPanel';
import Link from 'aws-northstar/components/Link';
import Text from 'aws-northstar/components/Text';
import Heading from 'aws-northstar/components/Heading';


const AWSHelp = (
    <HelpPanel
        header="Help Section"
        learnMoreFooter={[
            <Link href="/docs">Link to internal documentation</Link>,
            <Link href="https://www.yoursite.com">Link to external documentation</Link>,
        ]}
    >
        <Text variant="p">
            This is a paragraph with some <b>bold text</b> and also some <i>italic text.</i>
        </Text>
        <Heading variant="h4">h4 section header</Heading>
        <Heading variant="h5">h5 section header</Heading>
    </HelpPanel>
);

export default AWSHelp;
