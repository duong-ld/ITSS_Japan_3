const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-start">
        <a className="navbar-brand" href="/">
          <b>Home</b>
        </a>
        <a className="navbar-brand" href="/spendings">
          Spendings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
