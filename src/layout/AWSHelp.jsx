import HelpPanel from 'aws-northstar/components/HelpPanel';
import Link from 'aws-northstar/components/Link';
import Text from 'aws-northstar/components/Text';
import Heading from 'aws-northstar/components/Heading';


const AWSHelp = (
    <HelpPanel
        header="Ajuda"
        learnMoreFooter={[
            <Link href="https://github.com/aws-samples/aws-edu-exam-analytics">National Education Exam - Analytics Lab</Link>,
            <Link href="https://github.com/AWS-EDU/aws-edu-question-reader/tree/main">AWS EDU Question Reader</Link>,
        ]}
    >
        <Heading variant="h4">Sobre</Heading>
        <Text variant="p">
            Este portal <b>não é um site oficial AWS</b>. O objetivo deste portal é compartilhar estudos relacionados ao dados do <i>ENEM</i> com o intuito de compartilhar informação e possibilidades para o ensino Brasileiro, utilizando serviços de <i>Analytics</i> e <i>AI/ML</i> na AWS.
        </Text>

        <Text variant="p">
            Todo conteúdo demonstrado no portal é <b>open-source</b>. Veja abaixo como replicar.
        </Text>
    </HelpPanel>
);

export default AWSHelp;
