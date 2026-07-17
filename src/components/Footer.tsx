export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div><h3 className="font-bold text-lg mb-4">Hypnotherapy Roseville</h3><p className="text-purple-200">Transform your mind, transform your life</p></div>
        <div><h4 className="font-bold mb-4">Contact</h4><a href="tel:+14153220298" className="text-purple-300">(415) 322-0298</a><p className="text-purple-200 mt-2">info@hypnotherapyroseville.com</p><p className="text-purple-200">Roseville, CA</p></div>
        <div><h4 className="font-bold mb-4">Hours</h4><p className="text-purple-200">Mon-Fri: 9am - 6pm</p><p className="text-purple-200">Sat: By appointment</p></div>
      </div>
    </footer>
  );
}
