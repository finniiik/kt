import { Button } from '@/components/ui/button';
import styles from './Landing.module.css';
const notes = [
  { number: '01', title: 'Первое впечатление', label: 'Верхние ноты', text: 'Личи, апельсин и липовый цвет. Светлое, свежее начало с нежной фруктовой сладостью.' },
  { number: '02', title: 'Цветочное сердце', label: 'Ноты сердца', text: 'Пион, фрезия, иланг-иланг и гвоздика. Мягкий цветочный букет с тонким пряным акцентом.' },
  { number: '03', title: 'Тёплое послевкусие', label: 'Шлейф', text: 'Ирис, бобы тонка, амбра и дубовый мох. Пудровая глубина, которая завершает композицию.' },
];
export default function Features() {
 return <><section className={styles.features} id="notes"><div className={styles.sectionTop}><div><p className={styles.small}>Анатомия аромата</p><h2 className={styles.sectionTitle}>Нежность в трёх аккордах</h2></div><p>От свежего первого вдоха до мягкого пудрового шлейфа — Beauty Café раскрывается постепенно.</p></div><div className={styles.grid}>{notes.map(({number,title,label,text}) => <article className={styles.note} key={number}><div className={styles.noteTop}><span>{number}</span></div><h3>{title}</h3><small>{label}</small><p>{text}</p></article>)}</div></section><section className={styles.closing}><div><p className={styles.small}>Ваш момент, ваш аромат</p><h2 className={styles.sectionTitle}>Возьмите нежность с собой.</h2><p>Beauty Café · Парфюмерная вода · 30 мл</p></div><Button asChild className={styles.cta}><a href="https://ozon.ru/t/EIPCrwi" target="_blank" rel="noopener noreferrer">Посмотреть на Ozon</a></Button></section></>;
}