interface NavigationItem {
  name: string
  href: string
}

const navigation: NavigationItem[] = [
  // These items will become header items.
  { name: 'メンバー', href: '/admin/users' },
]

export default () => {
  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <img className="h-10 w-auto" src="/images/logo.white.svg" />
            </a>

            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="ml-10 space-x-4">
            <a href="/admin/sign-in" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
              サインアウト
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
