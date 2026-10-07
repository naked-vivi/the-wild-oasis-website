import Navigation from '@/app/_components/navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className='relative z-10 px-4 py-4 sm:px-8 sm:py-5'>
      <div className='flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-6 items-center max-w-7xl mx-auto'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
