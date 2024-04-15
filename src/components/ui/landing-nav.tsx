import { GetUser } from '@/lib/database';
import { Link } from 'lucide-react';
import NextJsLogo from './NextJsLogo';
import LogoutButton from './LogoutButton';
import { redirect } from 'next/navigation';

const LandingNav = async () => {
  const user = await GetUser();
  if (!GetUser()) redirect('login');

  return (
    <nav className="w-full flex justify-center border-b border-gray-800 h-16">
      <div className="w-full flex justify-between items-center p-3 text-sm">
        <Link href="/" className="font-semibold text-lg font-serif italic">
          OptiBus
        </Link>
        {/* <NextJsLogo /> */}
        {user ? (
          <div className="flex items-center gap-4">
            Hey, {user.email && user?.email.toString().split('@')[0]}!
            <LogoutButton />
          </div>
        ) : (
          <Link
            href="/login"
            className="py-2 px-4 rounded-md no-underline bg-tremor-brand hover:bg-tremor-brand-subtle"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default LandingNav;
