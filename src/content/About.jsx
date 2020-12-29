import Container from 'aws-northstar/layouts/Container';
import Text from 'aws-northstar/components/Text';
import Heading from 'aws-northstar/components/Heading';
import Link from 'aws-northstar/components/Link';

import './styles/about.css';

function About() {
    return (
        <Container headingVariant='h1' title="Sobre">
            <div className="text-wrapper">
                <Heading variant="h4">ENEM</Heading>
                <Text variant="p">
                    O Exame Nacional do Ensino Médio (Enem) foi instituído em 1998, com o objetivo de avaliar o desempenho escolar dos estudantes ao término da educação básica. O exame aperfeiçoou sua metodologia e, em 2009, passou a ser utilizado como mecanismo de acesso à educação superior, por meio do Sistema de Seleção Unificada (Sisu), do Programa Universidade para Todos (ProUni) e de convênios com instituições portuguesas. Os participantes do Enem também podem pleitear financiamento estudantil em programas do governo, como o Fundo de Financiamento Estudantil (Fies). Os resultados do Enem continuam possibilitando o desenvolvimento de estudos e indicadores educacionais.
                </Text>
            </div>
            <div className="text-wrapper">
                <Heading variant="h4">O Portal</Heading>
                <Text variant="p">
                    Este portal <b>não é um site oficial AWS</b>. O objetivo deste portal é compartilhar estudos relacionados aos dados do ENEM com o intuito de demonstrar novas possibilidades para o ensino Brasileiro, utilizando serviços de <i>Analytics</i> e <i>AI/ML</i> na AWS.
                </Text>
            </div>
            <div className="text-wrapper">
                <Heading variant="h4">GitHub</Heading>
                <Text variant="p">
                    Todo conteúdo demonstrado no portal é <b>open-source</b>. Veja abaixo como replicar:
                </Text>
                <ul>
                    <li>
                        <Link href="https://github.com/aws-samples/aws-edu-exam-analytics">National Education Exam - Analytics Lab</Link>
                    </li>

                    <li>
                        <Link href="https://github.com/AWS-EDU/aws-edu-question-reader/tree/main">AWS EDU Question Reader</Link>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default About;