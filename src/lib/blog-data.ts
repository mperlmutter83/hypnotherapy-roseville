export interface BlogPost { slug: string; title: string; date: string; category: string; excerpt: string; content: string; }

export const blogPosts: BlogPost[] = [
  { slug: 'what-to-expect-from-your-first-hypnotherapy-session', title: 'What to Expect From Your First Hypnotherapy Session', date: 'April 29, 2026', category: 'Getting Started', excerpt: 'Learn what happens during your first hypnotherapy session and how to prepare.', content: '<p>Your first hypnotherapy session is designed to make you feel comfortable and understood. We\'ll discuss your goals and begin the transformation process.</p>' },
  { slug: 'how-hypnotherapy-helps-with-anxiety', title: 'How Hypnotherapy Helps with Anxiety', date: 'April 4, 2026', category: 'Anxiety', excerpt: 'Discover how hypnotherapy can help you manage and overcome anxiety.', content: '<p>Anxiety affects millions of people, but hypnotherapy offers a powerful tool for managing symptoms and finding lasting relief.</p>' },
];

export function getPostBySlug(slug: string) { return blogPosts.find((p) => p.slug === slug); }
export function getAllPostSlugs() { return blogPosts.map((p) => p.slug); }
