import { Aside, Footer, Header, InputTweet, Tweet } from '../components';

const Main = () => {
  return (
    <>
      <Header />
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-3">
          <section>
            <InputTweet />
            <Tweet />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Main;
