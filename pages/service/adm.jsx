import React from 'react';
import Layout from '../layout';
import Head from 'next/head';

const AdminArea = () => {
  return (
    <Layout>
      <Head>
      <title>Área Administrativa - CRM Minha Imobiliária</title>
        <meta name="description" content="Saiba como funciona a área administrativa do nosso CRM imobiliário e como ela pode te ajudar a gerenciar seus negócios de forma mais eficiente." />
      </Head>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Área Administrativa - CRM Minha Imobiliária</h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Nosso sistema administrativo é projetado para simplificar a gestão do seu negócio imobiliário. Com o CRM Minha Imobiliária, você tem uma visão completa das atividades de vendas, marketing e atendimento ao cliente em uma única plataforma.
      </p>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Nossa plataforma é fácil de usar e acessível de qualquer dispositivo. Ele ajuda você a organizar e gerenciar todos os seus contatos, atividades, negócios e muito mais. Além disso, o CRM Minha Imobiliária possui recursos avançados de automação de marketing para ajudá-lo a gerar mais leads e aumentar as vendas.
      </p>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Recursos da Área Administrativa</h2>
      <ul style={{ fontSize: '18px', marginBottom: '20px' }}>
        <li>Gerenciamento de contatos</li>
        <li>Gestão de vendas e negociações</li>
        <li>Automação de marketing</li>
        <li>Relatórios personalizados</li>
        <li>Gerenciamento de equipe</li>
        <li>Acesso móvel</li>
        <li>E muito mais...</li>
      </ul>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Nossos recursos avançados de automação de marketing incluem campanhas de e-mail, formulários de geração de leads, páginas de destino e muito mais. Além disso, o CRM Minha Imobiliária é integrado com as principais plataformas de marketing, como o Facebook Ads e o Google Ads, para que você possa gerenciar todas as suas campanhas de publicidade em um só lugar.
      </p>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Com o CRM Minha Imobiliária, você pode se concentrar no que faz de melhor - fechar negócios. Deixe-nos cuidar da gestão do seu negócio imobiliário. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços.
      </p>
    </Layout>
  );
};

export default AdminArea;