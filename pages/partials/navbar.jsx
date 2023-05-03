import Link from "next/link";

function Navbar() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </li>
        <li>
          <Link href="/precos">
            <a>Preços</a>
          </Link>
        </li>
        <li>
          <Link href="/servicos">
            <a>Serviços</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
