import AboutContent from './AboutContent'
import AboutInfo from './AboutInfo';
import AboutStats from './AboutStats';
const About = () => {
  return (
    <div className="bg-white p-4 rounded-xl mb-4">
      <AboutContent />
      <AboutStats />
      <AboutInfo />
    </div>
  );
};

export default About;
