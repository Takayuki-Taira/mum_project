// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <main className="px-4 py-10 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">お問い合わせ</h1>
      <p className="text-center text-gray-600">
        ご相談・講演・研修などに関するご連絡は、以下のフォームよりお願いいたします。
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">お名前</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="例：山田 太郎" />
        </div>
        <div>
          <label className="block text-sm font-medium">メールアドレス</label>
          <input type="email" className="w-full border p-2 rounded" placeholder="example@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium">内容</label>
          <textarea className="w-full border p-2 rounded" rows="5" placeholder="お問い合わせ内容を記入してください"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          送信
        </button>
      </form>
    </main>
  );
}
