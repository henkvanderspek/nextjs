import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useQuery, gql } from '@apollo/client';
import Pluralize from 'pluralize';

const ARTWORKS_COUNT = gql`{
  artworksCount
}`;

export default function Home() {
  const { loading, error, data } = useQuery(ARTWORKS_COUNT);
  return (
    <div className={styles.container}>
      <Head>
        <title>vdbacon</title>
      </Head>
      <div className={styles.main}>
        {(() => {
          if (loading) {
            return 'Loading...';
          } else if (error) {
            return error.message;
          } else {
            return Pluralize(`Artworks`, data.artworksCount, true);
          }
        })()}
      </div>
    </div>
  );
}
