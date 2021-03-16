import Head from "../Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head
        title="News for you"
        description="An awesome website for you"
        author="Erik H"
        keywords="nextjs, news"
      />
      <Header content="News 4 you" />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
