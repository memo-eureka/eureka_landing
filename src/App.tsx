import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Eureka</h1>
        <p className="text-lg md:text-2xl mb-6">閃いた瞬間을 바로 기록하세요</p>
        <a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Google Play에서 다운로드
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard title="즉시 메모" desc="잠금화면/알림창에서 바로 메모를 작성할 수 있어요." />
          <FeatureCard title="오프라인 저장" desc="인터넷 없이도 메모를 저장하고, 나중에 동기화할 수 있어요." />
          <FeatureCard title="실시간 동기화" desc="여러 기기에서 메모를 실시간으로 동기화할 수 있어요." />
          <FeatureCard title="블록 기반 편집" desc="아이디어를 블록 단위로 구성해 체계적으로 정리할 수 있어요." />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6">
        © 2025 Eureka | Made with 💡 by 도연 조
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
