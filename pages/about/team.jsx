import Head from 'next/head';
import Layout from '../layout';

const Team = () => {
  return (
    <Layout>
      <Head>
        <title>Nosso time - CRM Imobiliário Líder de Mercado</title>
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
        
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Nossa Equipe</h1>
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            maxWidth: '1000px', 
            width: '90%', 
            marginBottom: '40px' 
          }}>
          <div style={{ marginRight: '20px' }}>
            <img src="/img/team.jpg" alt="Nossa Equipe" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <p style={{ flex: '1' }}>
            Nossa equipe é formada por profissionais altamente capacitados e experientes no mercado imobiliário. Estamos sempre atualizados com as últimas tendências e tecnologias para oferecer o melhor serviço aos nossos clientes.
            <br /><br />
            Acreditamos que o sucesso do nosso negócio é o sucesso dos nossos clientes, por isso trabalhamos em equipe para garantir a satisfação e o crescimento de cada um deles.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Team;