export default () => {
  return (
    <div className="h-full bg-gray-100" style={{ width: '100vw', height: '100vh' }}>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src="/images/logo.blue.svg" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">メンバー サインイン</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <p className="text-gray-600 text-center">メンバー専用のサインインページです。</p>

            <div className="mt-6">
              <a
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href="/member/settings"
              >
                Googleでサインイン
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
