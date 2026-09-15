import Link from 'next/link';
import HoursLines from '@/components/HoursLines';
export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div><h3 className="font-bold text-lg mb-4">Hypnotherapy Roseville</h3><p className="text-purple-200">Transform your mind, transform your life</p></div>
        <div><h4 className="font-bold mb-4">Contact</h4><a href="tel:+14153220298" className="text-purple-300">(415) 322-0298</a><p className="text-purple-200 mt-2">info@hypnotherapyroseville.com</p><p className="text-purple-200">Roseville, CA</p><p className="mt-3"><Link href="/looking-for-work" className="text-purple-300 hover:text-white">Looking for Work</Link></p></div>
        <div><h4 className="font-bold mb-4">Hours</h4><HoursLines className="text-purple-200" showClosed={false} /><p className="text-purple-200">Weekends: By appointment</p></div>
      </div>
    </footer>
  );
}
