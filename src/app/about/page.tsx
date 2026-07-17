import { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div>
      <section className="bg-purple-900 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">About Us</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-gray-600 mb-4">At Hypnotherapy Roseville, we believe in the transformative power of the subconscious mind. Our certified hypnotherapist uses proven techniques to help clients overcome challenges and achieve their personal goals.</p>
          <p className="text-gray-600 mb-4">With years of experience and a passion for helping others, we create a safe, comfortable environment where positive change can happen naturally.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What is Hypnotherapy?</h2>
          <p className="text-gray-600">Hypnotherapy is a therapeutic technique that uses guided relaxation and focused attention to achieve a heightened state of awareness. In this state, you can explore thoughts, feelings, and memories that may be hidden from your conscious mind.</p>
        </div>
      </section>
    </div>
  );
}
