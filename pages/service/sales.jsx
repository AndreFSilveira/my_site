import React from 'react';
import Layout from '../layout';

const Servicos = () => {
  return (
    <Layout>
      <head>
        <title>Serviços de Venda de Imóveis | Empresa CRM Imobiliário</title>
        <meta name="description" content="Conheça os serviços de venda de imóveis oferecidos pela nossa empresa CRM Imobiliário, com tecnologia inovadora e muitos clientes satisfeitos." />
      </head>
      <div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Serviços de Venda de Imóveis</h1>
        <p>Com o CRM Imobiliário da nossa empresa, você pode contar com uma série de serviços para a venda de imóveis de forma mais eficiente e com maior chance de sucesso. Conheça alguns dos nossos serviços:</p>
        <ul>
          <li>Sistema de gestão de leads</li>
          <li>Integração com portais imobiliários</li>
          <li>Ferramentas de automação de marketing</li>
          <li>Gerenciamento de visitas e negociações</li>
          <li>Relatórios de desempenho e análise de resultados</li>
        </ul>
        <p>Nossa tecnologia inovadora e a experiência no mercado imobiliário nos permite oferecer serviços de qualidade para nossos clientes. Entre em contato conosco e saiba mais sobre como podemos ajudá-lo na venda de imóveis.</p>
      </div>
    </Layout>
  );
};

export default Servicos;
