import type { User } from '@prisma/client'

import Footer from '../../Footer'

export type Props = {
  user: User
  portalUrl: string
}

export default (props: Props) => {
  return (
    <>
      <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0 pt-10">
        <a href="/member/settings" className="flex self-center">
          <img className="h-10 w-auto" src="/images/logo.blue.svg" />
        </a>
      </div>

      <div>
        <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
          <main className="flex-1">
            <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
              <div className="pt-10 pb-16">
                <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2">マイページ</h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-6">
                    <div className="lg:block">
                      <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                          <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                            イベントのお知らせ
                          </a>

                          <a href={props.portalUrl} className="border-transparent text-gray-500 hover:border-indigo-700 hover:text-indigo-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                            お支払い設定
                          </a>
                        </nav>
                      </div>
                    </div>

                    <div className="mt-10 divide-y divide-gray-200">
                      <div className="space-y-1">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">プロフィール</h3>
                      </div>
                      <div className="mt-6">
                        <dl className="divide-y divide-gray-200">
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">お名前</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">{props.user.name}</span>
                              <span className="ml-4 flex-shrink-0">
                                <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  更新
                                </button>
                              </span>
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">アイコン</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                <img className="h-8 w-8 rounded-full" src={props.user.avatar_url!} />
                              </span>
                              <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  更新
                                </button>
                              </span>
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-gray-500">メールアドレス</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">{props.user.email}</span>
                              <span className="ml-4 flex-shrink-0">
                                <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  更新
                                </button>
                              </span>
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                            <dt className="text-sm font-medium text-gray-500">所属</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <span className="mr-2">{props.user.company}</span>
                              <span className="mr-2">{props.user.department}</span>
                              <span className="mr-2 flex-grow">{props.user.title}</span>
                              <span className="ml-4 flex-shrink-0">
                                <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                  更新
                                </button>
                              </span>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <a href="/member/sign-in" className="text-indigo-600">
            サインアウト
          </a>
        </div>
      </div>

      <Footer />
    </>
  )
}
