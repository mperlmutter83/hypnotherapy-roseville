import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    { name: 'Anxiety & Stress Relief', desc: 'Learn to manage anxiety and find inner peace through proven hypnotherapy techniques.' },
    { name: 'Quit Smoking', desc: 'Break free from nicotine addiction with our specialized smoking cessation program.' },
    { name: 'Weight Loss', desc: 'Reprogram your relationship with food and achieve lasting weight management.' },
    { name: 'Confidence Building', desc: 'Overcome self-doubt and unlock your full potential.' },
    { name: 'Sleep Improvement', desc: 'End insomnia and enjoy restful, rejuvenating sleep.' },
    { name: 'Phobia Treatment', desc: 'Overcome fears that have been holding you back.' },
  ];
  return (
    <div>
      <section className="relative min-h-[500px] flex items-center">
        <Image src="/images/hero.jpg" alt="Peaceful scene" fill className="object-cover" />
        <div className="absolute inset-0 bg-purple-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-white">
          <p className="text-purple-300 tracking-widest">Transform Your Mind</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">Hypnotherapy Roseville</h1>
          <p className="text-xl mb-6 max-w-2xl">Professional hypnotherapy services helping you overcome challenges and achieve your goals through the power of your subconscious mind.</p>
          <Link href="/contact" className="inline-block bg-purple-600 px-8 py-3 font-medium hover:bg-purple-700">Book Free Consultation</Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We offer a range of hypnotherapy services tailored to help you achieve lasting positive change.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-purple-50 p-6 rounded-lg"><h3 className="font-bold text-gray-900 mb-2">{s.name}</h3><p className="text-gray-600 text-sm">{s.desc}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-purple-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
        <p className="mb-6">Book your free consultation today and take the first step toward positive change.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-purple-900 px-8 py-3 font-bold hover:bg-gray-100">Book Now</Link>
          <a href="tel:+14153220298" className="border-2 border-white px-8 py-3 font-bold hover:bg-white/10">(415) 322-0298</a>
        </div>
      </section>
    </div>
  );
}
