import Head from 'next/head';
import Layout from '../layout';

const Aluguel = () => {
  return (
    <Layout>
      <Head>
        <title>Aluguel de Imóveis - Empresa CRM Imobiliário</title>
        <meta name="description" content="Conheça nossos serviços de aluguel de imóveis. Temos uma ampla variedade de opções para você encontrar o imóvel ideal." />
      </Head>
      <div style={{ backgroundColor: '#F0F0F0', padding: '50px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Serviço de Aluguel de Imóveis</h1>
          <p style={{ textAlign: 'justify', fontSize: '18px', marginTop: '30px' }}>
            Nosso serviço de aluguel de imóveis oferece uma ampla variedade de opções para que você encontre o imóvel ideal. Com anos de experiência no mercado imobiliário, nossa empresa é capaz de oferecer um serviço de qualidade, que vai além das suas expectativas.
          </p>
          <p style={{ textAlign: 'justify', fontSize: '18px', marginTop: '30px' }}>
            Trabalhamos com imóveis de diversas categorias, que atendem às necessidades de diferentes públicos. Desde apartamentos e casas até salas comerciais, temos a opção perfeita para você. Nossa equipe de corretores está sempre pronta para ajudar, seja para encontrar o imóvel dos seus sonhos ou para esclarecer qualquer dúvida.
          </p>
          <p style={{ textAlign: 'justify', fontSize: '18px', marginTop: '30px' }}>
            Além disso, nossa empresa preza pela transparência e pela segurança em todas as negociações. Todas as informações sobre os imóveis são claras e precisas, para que você possa tomar a melhor decisão. Além disso, nossos contratos são elaborados de forma clara e objetiva, garantindo a segurança de ambas as partes.
          </p>
          <p style={{ textAlign: 'justify', fontSize: '18px', marginTop: '30px' }}>
            Não perca mais tempo procurando o imóvel dos seus sonhos. Entre em contato conosco e conheça nossos serviços de aluguel de imóveis. Temos certeza de que podemos ajudar você a encontrar o imóvel ideal.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Aluguel;