import React from 'react';
import Layout from '../layout';
import Head from 'next/head';

const History = () => {
  return (
    <Layout>
      <Head>
        <title>Conheça a história do nosso CRM imobiliário líder de mercado | Nome da Empresa</title>
        <meta name="description" content="Descubra como nossa empresa se tornou líder de mercado com nosso CRM imobiliário inovador. Conheça nossa trajetória e saiba mais sobre nossa visão para o futuro." />
      </Head>
      <div style={{ 
      background: '#f2f2f2',
      padding: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#333'
      }}>Nossa história</h1>
      <p style={{
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#666'
      }}>Nossa empresa foi fundada em 2005 por um grupo de empreendedores visionários com experiência em desenvolvimento de software e no mercado imobiliário. Nós acreditamos que poderíamos transformar a indústria imobiliária por meio da tecnologia e assim nasceu o nosso CRM imobiliário.</p>
      <p style={{
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#666'
      }}>Nos primeiros anos, tivemos que trabalhar duro para conquistar nossa posição no mercado, mas com a ajuda de nossos primeiros clientes, pudemos melhorar e desenvolver um produto cada vez melhor. Hoje, somos líderes de mercado, com milhares de clientes satisfeitos em todo o mundo.</p>
      <p style={{
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#666'
      }}>Nosso compromisso é continuar a inovar e fornecer a nossos clientes as melhores ferramentas possíveis para que possam ter sucesso em seus negócios imobiliários.</p>
    </div>
    </Layout>
  );
};

export default History;





