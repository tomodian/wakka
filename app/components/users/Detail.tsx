import type { User } from '@prisma/client'
import useClippy from 'use-clippy'

type Props = {
  user: User
  customerPortalUrl: string
}

export default (props: Props) => {
  const [_, setClipboard] = useClippy()

  return (
    <main className="py-10 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
        <div className="flex items-center space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <img className="h-16 w-16 rounded-full" src={props.user.avatar_url!} />
              <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{props.user.name}</h1>
            <p className="text-sm font-medium text-gray-500">
              <span className="mr-2">登録日:</span>
              <span>{new Date(props.user.createdAt).toLocaleDateString()}</span>
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            編集
          </button>
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
          {/* Description list*/}
          <section aria-labelledby="applicant-information-title">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
                  プロフィール
                </h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">勤務先</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <p className="text-lg">{props.user.company}</p>
                      <span className="text-md mr-2">{props.user.department}</span>
                      <span className="text-md">{props.user.title}</span>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">メールアドレス</dt>
                    <dd className="mt-1 text-base text-gray-900">{props.user.email}</dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">管理者メモ</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                      pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">メンバーのサポート</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                        onClick={() => setClipboard(props.customerPortalUrl)}
                      >
                        Customer PortalのURLをコピー
                      </button>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
