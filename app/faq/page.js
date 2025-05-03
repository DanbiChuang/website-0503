export default function FAQ() {
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

                <h1 className="text-5xl font-bold mb-12 text-black text-center border-b-4 border-coral-500 pb-4">常見問題</h1>
            </div>
        </div>
    );
} 