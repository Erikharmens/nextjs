import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";

export default function LatestNews() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Latest news</h1>
        <p>Welcome to the news page!</p>
        <h2>Headline ...!</h2>
      </div>
    </Layout>
  );
}
