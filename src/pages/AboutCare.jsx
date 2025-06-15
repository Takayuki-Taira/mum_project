// src/pages/AboutCare.jsx
import React from 'react';

export default function AboutCare() {
  return (
    <main className="px-4 py-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">ケアマネージャーとは？</h1>
      <p>
        ケアマネージャー（介護支援専門員）は、介護を必要とする方のために、最適なサービス計画（ケアプラン）を作成し、
        各サービス提供者との連携・調整を行う専門職です。
      </p>
      <p>
        介護保険制度の仕組みや制度改正なども踏まえ、ケアマネージャーは本人・家族・施設・行政の間をつなぎ、
        誰もが安心して老後を迎えられる社会を支える要となります。
      </p>
      <p>
        ご関心のある方は、以下のリンクもぜひご覧ください。
      </p>
      <a
        href="https://www.tsumugukai.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600 hover:text-blue-800"
      >
        ケアマネージャーをつなぐ会（外部リンク）
      </a>
    </main>
  );
}
