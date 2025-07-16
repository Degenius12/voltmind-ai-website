import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>VoltMind AI - The AI Upgrade Your Business Needs</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              VoltMind AI
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              The AI Upgrade Your Business Needs
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
