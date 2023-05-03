import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "./layout";

export default function Home() {

  return (
    <Layout>
    <div className={styles.container}>
      <head>
        <title>CRM para Imobiliárias - Gestão Inteligente de Vendas e Clientes</title>
        <meta name="description" content="O CRM para imobiliárias é a solução ideal para gerenciar vendas e clientes de forma eficiente. Conheça nossos serviços e otimize seus resultados." />
      </head>
      <div className="hero">
        <div className="hero-content">
          <h1>CRM para Imobiliárias</h1>
          <p>Gestão Inteligente de Vendas e Clientes</p>
          <a href="/price" className="btn btn-primary">Planos e Preços</a>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <img src="/img/feature-1.png" alt="Integração com Portais Imobiliários" />
          <h2>Integração com Portais Imobiliários</h2>
          <p>Acompanhe todos os seus anúncios em um só lugar e receba automaticamente os leads gerados nos portais imobiliários.</p>
        </div>
        <div className="feature">
          <img src="/img/feature-2.png" alt="Agendamento de Visitas" />
          <h2>Agendamento de Visitas</h2>
          <p>Organize suas visitas de forma eficiente e não perca nenhuma oportunidade de venda.</p>
        </div>
        <div className="feature">
          <img src="/img/feature-3.png" alt="Acompanhamento de Negociações" />
          <h2>Acompanhamento de Negociações</h2>
          <p>Acompanhe o status de todas as negociações em tempo real e não deixe nenhuma oportunidade passar.</p>
        </div>
      </div>
      <div className="cta">
        <h2>Experimente agora mesmo</h2>
        <a href="/price" className="btn btn-secondary">Conheça nossos Planos e Preços</a>
      </div>
      <style>
      .hero {
  height: 500px;
  background-image: url('/img/hero.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
}

.hero-content h1 {
  font-size: 5rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 2rem;
  margin-bottom: 50px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2}
      </style>
    </>
    </div>
</Layout>
  )
}
