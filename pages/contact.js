import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './layout'

export default function Contact() {

  return (
    <Layout>
    <div className={styles.container}>
      <Head>

        <title>Entre em Contato | Empresa CRM Imobiliário</title>
        <meta name="description" content="Entre em contato conosco para obter mais informações sobre nossos serviços para o mercado imobiliário. Preencha o formulário ou envie um e-mail para a nossa equipe de atendimento." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
      <h1>Entre em Contato</h1>
      
      <p>A Empresa CRM Imobiliário é especializada em fornecer soluções de gerenciamento de relacionamento com o cliente para empresas do mercado imobiliário. Nossa equipe está comprometida em ajudar nossos clientes a alcançar o sucesso através de uma abordagem personalizada e focada no cliente.</p>

      <p>Nosso software de CRM pode ajudar você a gerenciar contatos, imóveis, propostas e transações, tudo em um só lugar. Nós fornecemos relatórios e análises para ajudá-lo a tomar decisões de negócios informadas, e nossa equipe de suporte está disponível para ajudá-lo a aproveitar ao máximo nosso software.</p>

      <p>Entre em contato conosco para saber mais sobre como podemos ajudá-lo a expandir seus negócios imobiliários com nossa tecnologia de CRM. Preencha o formulário abaixo ou envie um e-mail para a nossa equipe de atendimento em <a href="mailto:contato@empresacrmimobiliario.com">contato@empresacrmimobiliario.com</a>.</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <form style={{ width: '50%' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Nome:</label>
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>E-mail:</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Mensagem:</label>
            <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '10px', borderRadius: '5px' }}></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>Enviar</button>
        </form>
      </div>
    </div>
    </div>
</Layout>
  )
}
