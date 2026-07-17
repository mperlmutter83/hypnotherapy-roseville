import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  const services = [
    { name: 'Anxiety & Stress Relief', desc: 'Learn techniques to manage anxiety and find calm in stressful situations.', price: '$150/session' },
    { name: 'Quit Smoking', desc: 'Our smoking cessation program helps you break free from nicotine addiction.', price: '$300 (2 sessions)' },
    { name: 'Weight Loss Hypnotherapy', desc: 'Reprogram your eating habits and relationship with food.', price: '$150/session' },
    { name: 'Confidence & Self-Esteem', desc: 'Build lasting confidence and overcome self-doubt.', price: '$150/session' },
    { name: 'Sleep Improvement', desc: 'Overcome insomnia and enjoy restful sleep.', price: '$150/session' },
    { name: 'Phobia Treatment', desc: 'Face and overcome irrational fears.', price: '$150/session' },
  ];
  return (
    <div>
      <section className="bg-purple-900 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">Our Services</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-purple-50 p-6 rounded-lg flex justify-between items-start">
              <div><h3 className="font-bold text-gray-900 mb-2">{s.name}</h3><p className="text-gray-600 text-sm">{s.desc}</p></div>
              <span className="text-purple-600 font-bold whitespace-nowrap ml-4">{s.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
