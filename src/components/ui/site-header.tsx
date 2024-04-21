import Link from 'next/link'

import { buttonVariants } from '@/components/core/button'
import { Icons } from '@/components/ui/icons'
import { MainNav } from '@/components/ui/main-nav'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { siteConfig } from '@/config/site'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background border-primary'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav items={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-4'>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}
              >
                <Icons.gitHub className='size-5' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
