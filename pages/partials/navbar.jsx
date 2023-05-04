import Head from 'next/head';

function Navbar() {
  return (
    <>
    <Head>
    <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV7GHFL');`}} />

      <link rel="stylesheet" href="/menu_styles.css" />

    </Head>
<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WV7GHFL"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre nós</a>
            <ul>
              <li><a href="/about/history">História</a></li>
              <li><a href="/about/values">Valores</a></li>
              <li><a href="/about/team">Equipe</a></li>
            </ul>
          </li>
          <li><a href="/service">Serviços</a>
            <ul>
              <li><a href="/service/sales">Vendas</a></li>
              <li><a href="/service/location">Locação</a></li>
              <li><a href="/service/adm">Administração</a></li>
            </ul>
          </li>
          <li><a href="/crm">CRM Imobiliário</a></li>
          <li><a href="/clients">Clientes</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
