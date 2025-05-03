export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <a
                    href="/"
                    className="inline-flex items-center px-4 py-2 mb-8 text-coral-500 hover:text-coral-600 border-b-2 border-coral-500 hover:border-coral-600 transition-colors duration-200"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    返回首頁
                </a>

                <h1 className="text-5xl font-bold mb-12 text-black text-center border-b-4 border-coral-500 pb-4">關於我們</h1>

                <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-semibold mb-6 text-black flex items-center">
                        <span className="w-2 h-8 bg-coral-500 mr-4"></span>
                        公司簡介
                    </h2>
                    <p className="text-gray-800 leading-relaxed text-lg">
                        我們是一家致力於提供創新解決方案的科技公司。自成立以來，我們一直秉持著追求卓越的理念，為客戶提供最優質的服務和產品。
                    </p>
                </section>

                <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-semibold mb-6 text-black flex items-center">
                        <span className="w-2 h-8 bg-coral-500 mr-4"></span>
                        我們的使命
                    </h2>
                    <p className="text-gray-800 leading-relaxed text-lg">
                        我們的使命是通過技術創新，為社會創造價值，改善人們的生活品質。我們相信，科技的力量可以讓世界變得更美好。
                    </p>
                </section>

                <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-semibold mb-6 text-black flex items-center">
                        <span className="w-2 h-8 bg-coral-500 mr-4"></span>
                        核心價值
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
                        <li className="flex items-start">
                            <span className="text-coral-500 mr-2">•</span>
                            <div>
                                <h3 className="font-semibold text-lg">創新</h3>
                                <p className="text-gray-700">持續追求技術突破</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-coral-500 mr-2">•</span>
                            <div>
                                <h3 className="font-semibold text-lg">誠信</h3>
                                <p className="text-gray-700">以誠信為本，建立信任</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-coral-500 mr-2">•</span>
                            <div>
                                <h3 className="font-semibold text-lg">專業</h3>
                                <p className="text-gray-700">提供專業的解決方案</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-coral-500 mr-2">•</span>
                            <div>
                                <h3 className="font-semibold text-lg">合作</h3>
                                <p className="text-gray-700">重視團隊合作精神</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="bg-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-semibold mb-6 text-black flex items-center">
                        <span className="w-2 h-8 bg-coral-500 mr-4"></span>
                        聯繫我們
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-coral-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p>台北市信義區信義路五段7號</p>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-coral-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <p>02-1234-5678</p>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-coral-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}