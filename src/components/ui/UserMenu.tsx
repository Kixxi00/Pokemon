'use client';

import { User2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export const UserMenu = () => {
  const router = useRouter();

  const signOut = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST'
    });

    if (res.status === 200) router.push('/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative size-8 rounded-full">
          <Avatar className="size-10">
            <AvatarImage src="" alt="avatar" />
            <AvatarFallback className="border-background bg-primary">
              <User2 className="size-5" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-1 w-56 border-accent px-2 py-4 shadow transition-all duration-300 ease-in-out hover:border-primary/30 hover:shadow-primary/30"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <p className="font-bold leading-none">John Doe</p>
            <p className="text-xs font-semibold leading-none text-muted-foreground">
              john@doe.com
            </p>
            <p className="text-xs font-bold uppercase text-primary">role</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="my-2" />
        <Button
          onClick={signOut}
          className="w-full bg-primary/30 text-sm uppercase tracking-widest text-primary transition-all duration-300 ease-in-out hover:text-white"
        >
          signout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
