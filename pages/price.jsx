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
    <div className={styles.container}>
      <h2 className={styles.titulo}>Escolha o seu plano</h2>
      <div className={styles.cardsContainer}>
        {precos_list.map((preco) => (
          <PrecoCard key={preco.plano} {...preco} />
        ))}
      </div>
    </div>
  );
};

export default Precos
