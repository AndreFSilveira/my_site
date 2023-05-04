import React from "react";
import Layout from "../layout";

const ValoresPage = () => {
  return (
    <Layout>
      <head>
        <title>Valores | Empresa CRM Imobiliário</title>
        <meta
          name="description"
          content="Conheça os valores da Empresa CRM Imobiliário e como eles guiam nossas decisões e relacionamentos com nossos clientes e parceiros."
        />
      </head>
      <body>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          Nossos Valores
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div style={{ flex: "1", marginRight: "50px" }}>
            <h2>Transparência</h2>
            <p>
              Acreditamos que a transparência é a base para uma relação duradoura
              e saudável com nossos clientes e parceiros. Por isso, sempre
              buscamos ser claros em nossas negociações e processos.
            </p>
          </div>
          <div style={{ flex: "1", marginLeft: "50px" }}>
            <h2>Inovação</h2>
            <p>
              Sabemos que o mercado imobiliário está em constante evolução e por
              isso, estamos sempre em busca de novas soluções e tecnologias que
              possam ajudar nossos clientes a alcançarem seus objetivos.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div style={{ flex: "1", marginRight: "50px" }}>
            <h2>Comprometimento</h2>
            <p>
              Nos comprometemos a entregar sempre o melhor para nossos clientes e
              parceiros. Trabalhamos de forma árdua para alcançar nossos objetivos
              e superar as expectativas de quem confia em nós.
            </p>
          </div>
          <div style={{ flex: "1", marginLeft: "50px" }}>
            <h2>Integridade</h2>
            <p>
              Prezamos pela ética e integridade em todas as nossas ações e
              decisões. Buscamos sempre agir de forma justa e honesta, mantendo
              nossos valores e princípios.
            </p>
          </div>
        </div>
      </body>
    </Layout>
  );
};

export default ValoresPage;