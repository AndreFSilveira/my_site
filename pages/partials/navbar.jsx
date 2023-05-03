import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <>
    <Head>
    <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV7GHFL');`}} />
    </Head>
<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WV7GHFL"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contato</a>
          </Link>
        </li>
        <li>
          <Link href="/price">
            <a>Preços</a>
          </Link>
        </li>
        <li>
          <Link href="/service">
            <a>Serviços</a>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
