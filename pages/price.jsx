import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useState } from 'react';

const plans = [
  {
    name: 'Plano Básico',
    price: 'R$ 19,99',
    features: ['5GB de armazenamento', 'Atendimento 24/7', 'Sem limite de projetos']
  },
  {
    name: 'Plano Intermediário',
    price: 'R$ 49,99',
    features: ['20GB de armazenamento', 'Atendimento 24/7', 'Sem limite de projetos', 'Integração com API']
  },
  {
    name: 'Plano Avançado',
    price: 'R$ 99,99',
    features: ['50GB de armazenamento', 'Atendimento 24/7', 'Sem limite de projetos', 'Integração com API', 'Equipe dedicada']
  },
];


export default function Price() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        
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

          <div>
      <h1>Preços</h1>
      <p>Escolha o plano que melhor atende às suas necessidades.</p>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <div
            className={`plan ${index === selectedPlanIndex ? 'selected' : ''}`}
            key={plan.name}
            onClick={() => setSelectedPlanIndex(index)}
          >
            <h2>{plan.name}</h2>
            <h3>{plan.price}</h3>
            <ul>
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
        <p>{plans[selectedPlanIndex].description}</p>
        <Image
          src="https://cdn.example.com/plans/${plans[selectedPlanIndex].imageFileName}"
          alt={plans[selectedPlanIndex].name}
          width={800}
          height={500}
        />
        <button>Assinar agora</button>
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
