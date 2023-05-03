import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './layout'

export default function Service() {
  
  return (
    <Layout>
      <head>
        <title>CRM Imobiliário - Serviços</title>
        <meta name="description" content="Descubra como nosso CRM pode ajudar sua empresa imobiliária a aumentar a produtividade e a eficiência!" />
      </head>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <p style={{fontSize: '1.2rem', textAlign: 'justify'}}>
          Com nosso sistema, você pode gerenciar todas as etapas do processo imobiliário, desde a prospecção de clientes até a assinatura do contrato. Nosso CRM foi projetado especificamente para atender às necessidades do setor imobiliário, com recursos como:
        </p>
        <ul>
          <li style={{fontSize: '1.1rem'}}>Gerenciamento de leads: acompanhe todos os seus clientes em potencial em um só lugar</li>
          <li style={{fontSize: '1.1rem'}}>Agenda integrada: organize seus compromissos e não perca mais nenhuma visita ou reunião</li>
          <li style={{fontSize: '1.1rem'}}>Automação de marketing: envie campanhas personalizadas para seus clientes e aumente as conversões</li>
          <li style={{fontSize: '1.1rem'}}>Relatórios detalhados: tenha uma visão completa do desempenho do seu negócio e tome decisões mais informadas</li>
        </ul>
        <p style={{fontSize: '1.2rem', textAlign: 'justify'}}>
          Além disso, nossa equipe de suporte está sempre pronta para ajudá-lo em todas as etapas do processo, desde a configuração inicial até o treinamento dos usuários. Se você quer aumentar a eficiência e a produtividade da sua empresa imobiliária, entre em contato conosco hoje mesmo e descubra como nosso CRM pode ajudá-lo a alcançar seus objetivos.
        </p>
      </div>
    </Layout>
  )
}
