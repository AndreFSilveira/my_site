import Head from 'next/head';
import React from 'react';
import Layout from './layout';

const MainClients = () => {
  return (
    <Layout>
      <Head>
      <title>Principais Clientes - CRM Minha Imobiliária</title>
      <meta name="description" content="Conheça alguns dos nossos principais clientes e suas experiências com o CRM Minha Imobiliária" />
      </Head>

      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Nossos Principais Clientes</h1>
      <p style={{ textAlign: 'center', marginBottom: '50px' }}>Abaixo estão alguns dos nossos principais clientes e seus depoimentos sobre a utilização do nosso CRM Minha Imobiliária:</p>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flexBasis: '30%', margin: '10px', padding: '10px', backgroundColor: '#eee', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
          <h3>João da Silva</h3>
          <p>Imobiliária ABC</p>
          <p>"O CRM Minha Imobiliária revolucionou a forma como gerenciamos nossos imóveis. Agora conseguimos ter um controle muito mais eficiente e aumentamos significativamente nossas vendas."</p>
        </div>

        <div style={{ flexBasis: '30%', margin: '10px', padding: '10px', backgroundColor: '#eee', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
          <h3>Maria Santos</h3>
          <p>Imobiliária XYZ</p>
          <p>"Com o CRM Minha Imobiliária conseguimos ter uma visão completa do nosso pipeline de vendas e agilizar nossos processos. Recomendo muito!"</p>
        </div>

        <div style={{ flexBasis: '30%', margin: '10px', padding: '10px', backgroundColor: '#eee', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
          <h3>Antônio Costa</h3>
          <p>Imobiliária DEF</p>
          <p>"O CRM Minha Imobiliária nos ajudou a fidelizar nossos clientes com um atendimento mais personalizado. Além disso, a integração com outras ferramentas nos permite ter um controle total da nossa operação."</p>
        </div>
      </div>
    </Layout>
  );
}

export default MainClients;