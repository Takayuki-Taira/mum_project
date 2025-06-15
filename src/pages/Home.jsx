// src/pages/Home.jsx
import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>産業ケアマネ</h1>
          <h2>木村 翠希</h2>
        </div>
        <div className="hero-photo">顔写真</div>
      </section>

      <section className="section beige">
        <h1 className="title">木村翠希｜産業ケアマネ</h1>
        <p className="center-text">
          認知症の母と4人の孫の面倒を見ながら、現役ケアマネジャーとして活動中。明るく、元気に、前向きに！がモットー。
        </p>
        <p className="center-text">
          介護の始まりと終わりに寄り添うべく「企業の介護保健室」を目指して産業ケアマネとして独立。ThunderVoltチャプター所属。
        </p>
      </section>

      <section className="section white">
        <h2 className="subtitle">専門領域と活動内容</h2>
        <ul className="list">
          <li>介護相談、離職防止、パフォーマンス低下防止の企業内研修・個別相談</li>
          <li>2025年4月から義務化された育児介護休業法対応のコンサルティング</li>
          <li>社内アンケートの設計・実施・分析を通じて経営戦略に貢献</li>
        </ul>
      </section>

      <section className="section beige">
        <h2 className="subtitle">他にない強み</h2>
        <ul className="list">
          <li>現役ケアマネならではの“生きた事例”を多数保有</li>
          <li>「まだ始まっていない介護」にも備えられる行動アドバイスが可能</li>
        </ul>
      </section>

      <section className="section white">
        <h2 className="subtitle">こんな企業・個人を支援できます</h2>
        <ul className="list">
          <li>従業員5人以上の企業（人事労務・経営者向け）</li>
          <li>在宅勤務者、エッセンシャルワーカー、時間拘束型業種</li>
          <li>介護業界に関わる起業・コンサル・士業・開発関係者</li>
        </ul>
      </section>

      <section className="section beige">
        <h2 className="subtitle">ご紹介のトーク例</h2>
        <div className="talk-list">
          <p>「従業員が辞めてしまう」「採用も困ってる」</p>
          <p>↓「社内アンケートをやってみたら？離職の原因がわかるかもよ？」</p>
          <p>↓「無料でアンケートの実施から集計、分析まで丸ごとやってくれるところがあるよ」</p>
          <p>↓「話だけでも聞いてみる？」→「お願いしようかな♪」</p>
        </div>
      </section>

      <section className="section white center-text">
        <a
          href="https://www.tsumugukai.net/"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶︎ ケアマネージャーをつなぐ会
        </a>
      </section>
    </main>
  );
}