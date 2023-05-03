import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import styles from "./precos.module.css";

const PrecoCard = ({ plano, preco, recursos, imagem }) => {
  return (
    <div className={styles.card}>
      <h3>{plano}</h3>
      <img src={imagem} alt={plano} />
      <p className={styles.preco}>{preco}</p>
      <ul className={styles.recursos}>
        {recursos.map((recurso) => (
          <li key={recurso}>{recurso}</li>
        ))}
      </ul>
      <button className={styles.botao}>Escolher</button>
    </div>
  );
};

const precos_list = [
  {
    plano: "Básico",
    preco: "R$ 19,99/mês",
    recursos: ["1 usuário", "10GB de armazenamento", "Suporte por e-mail"],
    imagem:
      "https://images.unsplash.com/photo-1573497493484-03a4cfa5f3d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY4MzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5NjkxNjE&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    plano: "Padrão",
    preco: "R$ 49,99/mês",
    recursos: [
      "10 usuários",
      "100GB de armazenamento",
      "Suporte por e-mail e telefone",
    ],
    imagem:
      "https://images.unsplash.com/photo-1580917837826-1f4fe9f29d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY4MzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5Njk0MjE&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    plano: "Premium",
    preco: "R$ 99,99/mês",
    recursos: [
      "Usuários ilimitados",
      "Armazenamento ilimitado",
      "Suporte 24/7 por e-mail, telefone e chat",
    ],
    imagem:
      "https://images.unsplash.com/photo-1562003381-dc3b3b6f897d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY4MzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTU5Njk0NDk&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

const Precos = () => {
  return (
    <>
      <head>
        <title>Planos de Assinatura do CRM para Imobiliárias: Gerencie seus clientes e propriedades de forma eficiente e eficaz</title>
        <meta name="description" content="Descubra nossos planos de assinatura mensal do CRM para imobiliárias e gerencie seus clientes e propriedades de forma mais eficiente e eficaz. Com recursos avançados e serviços exclusivos, nossos planos são projetados para atender às necessidades de sua imobiliária.">
      </head>
      <div className={styles.container}>
        <h1>Planos de Assinatura Mensal do CRM para Imobiliárias</h1>
        <p className="descricao">Apresentamos nossos planos de assinatura mensal para atender às necessidades das imobiliárias que desejam maximizar seus resultados. Cada plano inclui recursos avançados e serviços exclusivos para ajudar nossos clientes a gerenciar seus clientes, propriedades e vendas de maneira mais eficiente e eficaz.</p>
        <h2 className={styles.titulo}>Escolha o seu plano</h2>
        <div className={styles.cardsContainer}>
          {precos_list.map((preco) => (
            <PrecoCard key={preco.plano} {...preco} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Precos
