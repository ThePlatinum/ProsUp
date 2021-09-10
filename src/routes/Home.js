import '../App.scss';
import Banner from '../components/banner';
import Recents from '../components/recent';
import Submission from '../components/submission';
import Mission from '../components/mission';
import Services from '../components/services';

function Home() {
  return (
    <div>
      <Banner />
      <Recents />
      <Submission />
      <Mission />
      <Services />
    </div>
  );
}

export default Home;
