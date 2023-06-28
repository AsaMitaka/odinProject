import { Aside, Footer, Header, InputTweet, Tweet } from '../components';

const Main = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Aside />
        </div>
        <main className="col-span-3 p-3">
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
