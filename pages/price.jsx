import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useState } from 'react';

const plans = [
  {
    name: 'Plano Básico',
    price: 'R$ 19,99',
    description: 'Ideal para iniciantes',
    features: ['5GB de armazenamento', 'Atendimento 24/7', 'Sem limite de projetos'],
    image: 'https://images.unsplash.com/photo-1620142663953-52cc392fa223?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Plano Intermediário',
    price: 'R$ 49,99',
    description: 'Recomendado para projetos maiores',
    features: ['20GB de armazenamento', 'Atendimento 24/7', 'Sem limite de projetos', 'Integração com API'],
    image: 'https://images.unsplash.com/photo-1608207453821-2695df6eafaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Plano Avançado',
    price: 'R$ 99,99',
    description: 'Ideal para equipes grandes',
    features: ['50GB de armazenamento', 'Atendimento 24/7', 'Sem limite de projetos', 'Integração com API', 'Equipe dedicada'],
    image: 'https://images.unsplash.com/photo-1620142663583-369dc25a3da7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
];


export default function Price() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <style>
        .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
}

.plan-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.plan {
  border-radius: 8px;
  border: 2px solid #ddd;
  padding: 20px;
  flex-basis: calc(33.33% - 20px);
  transition: all 0.3s ease;
  cursor: pointer;
}

.plan:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.plan.selected {
  border-color: #0066ff;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 102, 255, 0.3);
}

.plan h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.plan h3 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  margin-bottom: 20px;
}

.features {
  list-style: none;
  margin: 0;
  padding: 0;
}

.features li {
  font-size: 16px;
  margin-bottom: 10px;
}

.selected-plan {
  margin-top: 40px;
}

.selected-plan h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.selected-plan h3 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

.image {
  margin: 40px 0;
  border-radius: 8px;
}

.button {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #0066ff;
  border-radius: 8px;
  border: none;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #0052cc;
} 
        </style>
         <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV7GHFL');`}} />

        <title>Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={{ margin: 0 }}>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WV7GHFL"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
        <main className={styles.main}>

          <div className="container">
      <h1 className="title">Escolha o plano ideal para você</h1>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <div
            className={`plan ${index === selectedPlanIndex ? 'selected' : ''}`}
            key={plan.name}
            onClick={() => setSelectedPlanIndex(index)}
          >
            <h2>{plan.name}</h2>
            <h3>{plan.price}</h3>
            <p className="description">{plan.description}</p>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="selected-plan">
        <h2>{plans[selectedPlanIndex].name}</h2>
        <h3>{plans[selectedPlanIndex].price}</h3>
        <p className="description">{plans[selectedPlanIndex].description}</p>
        <Image
          src={plans[selectedPlanIndex].image}
          alt={plans[selectedPlanIndex].name}
          width={800}
          height={500}
          className="image"
        />
        <button className="button">Assinar agora</button>
      </div>
    </div>
        </main>
      </body>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
