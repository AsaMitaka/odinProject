import { Aside, Footer, Header, Tweet } from '../components';

const TweetPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-3">
          <section>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TweetPage;
