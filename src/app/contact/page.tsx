import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div>
      <section className="bg-purple-900 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">Contact Us</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded" />
            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border rounded" />
            <select className="w-full px-4 py-3 border rounded"><option>Select a Service</option><option>Anxiety & Stress Relief</option><option>Quit Smoking</option><option>Weight Loss</option><option>Confidence Building</option><option>Sleep Improvement</option><option>Phobia Treatment</option></select>
            <textarea placeholder="Tell us about your goals" rows={5} className="w-full px-4 py-3 border rounded"></textarea>
            <button type="submit" className="bg-purple-600 text-white px-6 py-3 font-bold hover:bg-purple-700">Book Free Consultation</button>
          </form>
          <div className="bg-purple-50 p-8 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Get in Touch</h2>
            <div className="mb-4"><h3 className="font-bold">Phone</h3><a href="tel:+14153220298" className="text-purple-600 text-xl font-bold">(415) 322-0298</a></div>
            <div className="mb-4"><h3 className="font-bold">Email</h3><a href="mailto:info@hypnotherapyroseville.com" className="text-purple-600">info@hypnotherapyroseville.com</a></div>
            <div><h3 className="font-bold">Location</h3><p className="text-gray-600">Roseville, CA</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
