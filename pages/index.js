import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useQuery, gql } from '@apollo/client';

const USERS_COUNT = gql`{
  usersCount
}`;

export default function Home() {
  const { loading, error, data } = useQuery(USERS_COUNT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div className={styles.container}>
      <Head>
        <title>vdbacon</title>
      </Head>
      <div className={styles.main}>{data.usersCount}</div>
    </div>
  );
}
