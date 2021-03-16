import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>About page</h1>
        <p>Welcome to the about page!</p>
      </div>
    </Layout>
  );
}
