import MainNav from "./main-nav";

const Navbar = () => {
  return (
    <nav className='flex h-16 w-full items-center justify-between px-8 space-x-4 lg:space-x-6 border-b'>
      <div>
        <p>Logo</p>
      </div>
      <MainNav />
    </nav>
  );
};

export default Navbar;
