import { createFileRoute } from '@tanstack/react-router';
import Header from '@/components/perfume/Header';
import Hero from '@/components/perfume/Hero';
import Features from '@/components/perfume/Features';
import Footer from '@/components/perfume/Footer';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'Beauty Café — парфюмерная вода Faberlic, 30 мл' },
  { name: 'description', content: 'Beauty Café: цветочно-пудровый аромат Faberlic для женщин. Ноты личи, пиона и ириса. Флакон 30 мл.' },
  { property: 'og:title', content: 'Beauty Café — маленький ритуал нежности' },
  { property: 'og:description', content: 'Откройте цветочно-пудровый аромат Faberlic Beauty Café, 30 мл.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }), component: Index,
});
function Index() { return <><Header /><main><Hero /><Features /></main><Footer /></>; }
