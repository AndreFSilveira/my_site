import React from "react";
import Layout from "./layout";
import Head from "next/head";

const DiferenciaisPage = () => {
  return (
    <Layout>
      <Head>
      <title>Diferenciais do CRM Imobiliário - CRM Minha Imobiliária</title>
    <meta
      name="description"
      content="Conheça os principais diferenciais do nosso CRM imobiliário e veja como ele pode ajudar o seu negócio. Integração com portais, controle de visitas aos imóveis, gerenciamento de equipes e muito mais!"
    />
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Conheça os diferenciais do nosso CRM
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://www.example.com/images/diferenciais-crm.jpg"
          alt="Imagem de ilustração dos diferenciais do nosso CRM"
          style={{ width: "50%" }}
        />
      </div>
      <div style={{ maxWidth: "800px", margin: "50px auto" }}>
        <p>
          O nosso CRM imobiliário é o mais completo do mercado. Com ele, você
          terá todas as funcionalidades que precisa para gerenciar seus negócios
          imobiliários com eficiência e praticidade. Conheça abaixo alguns dos
          principais diferenciais do nosso sistema:
        </p>
        <ul>
          <li>Integração com portais imobiliários</li>
          <li>Controle de visitas aos imóveis</li>
          <li>Agendamento de tarefas e compromissos</li>
          <li>Gerenciamento de equipes de vendas e locações</li>
          <li>Relatórios de desempenho</li>
          <li>Personalização de campos e formulários</li>
          <li>Integração com redes sociais</li>
        </ul>
        <p>
          Além desses diferenciais, oferecemos um suporte técnico completo e
          especializado para garantir o melhor uso de todas as funcionalidades do
          nosso sistema.
        </p>
        <p>
          Não perca mais tempo e conheça agora mesmo todas as vantagens que o
          nosso CRM pode oferecer para o seu negócio imobiliário!
        </p>
      </div>
    </Layout>
  );
};

export default DiferenciaisPage;