import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  fontSize: 15
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <button style={linkStyle}>Home</button>
      </Link>
      <Link href="/dashboard">
        <button style={linkStyle}>Dashboard</button>
      </Link>
      <Link href="/contactus">
        <button style={linkStyle}>Contactus</button>
      </Link>
      <Link href="/aboutus">
        <a style={linkStyle}>About Page</a>
      </Link>
    </div>
  );
};

export default Header;
