import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Card.module.css';

export default function Card({ pokemon }) {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="120"
          height="120"
          alt={pokemon.name}
        />
        <p>#{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
        <Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>
          Detalhes
        </Link>
      </div>
    </>
  );
}
