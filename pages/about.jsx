import Head from 'next/head';
import Layout from './layout';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Sobre nós - CRM Imobiliário Líder de Mercado</title>
        <meta name="description" content="Conheça mais sobre a nossa empresa, líder em soluções de CRM para o mercado imobiliário." />
      </Head>
      <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          paddingTop: '80px', 
          paddingBottom: '80px', 
          backgroundColor: '#f5f5f5' 
        }}>
        <h1 style={{ fontSize: '36px', marginBottom: '40px' }}>Sobre nós</h1>
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            maxWidth: '1000px', 
            width: '90%', 
            marginBottom: '40px' 
          }}>
          <div style={{ marginRight: '20px' }}>
            <img src="/img/about-us.jpg" alt="Sobre nós" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <p style={{ flex: '1' }}>
            Somos a empresa líder em soluções de CRM para o mercado imobiliário. Com anos de experiência e milhares de clientes satisfeitos, sabemos como ajudar a sua imobiliária a crescer e se destacar no mercado.
            <br /><br />
            Nossa equipe de especialistas está sempre trabalhando para oferecer as melhores soluções e ferramentas para otimizar o seu negócio. Nossos serviços incluem desde o acompanhamento de leads até a gestão completa do ciclo de vendas.
            <br /><br />
            Além disso, valorizamos a transparência e a honestidade em todos os nossos relacionamentos com os clientes. Acreditamos que o sucesso do nosso negócio é o sucesso dos nossos clientes.
          </p>
        </div>

      </div>
    </Layout>
  );
}

export default About;