import logo from './logo.svg';
import './App.css';
import './composants/tag.jsx';
import Tag from './composants/tag.jsx';
import Thumb from './composants/thumb';
import CollapseList from './composants/collapseList';
import CollapseInfo from './composants/collapseInfo';
import Header from './composants/header';
import HomeSlogan from './composants/homeSlogan';
import AboutSlogan from './composants/aboutSlogan';
import Stars from './composants/stars';
import Host from './composants/host';
import Title from './composants/title';
import Tags from './composants/tags';
import Gallery from './composants/gallery';




let apparts = require('./logements/logements.json');

const test = apparts[7];


// import Space from './composants/space';

const CollapseListElms = ["Climatisation", "Wi-Fi", "Cuisine", "Espace de travail", "Fer à repasser", "Sèche-cheveux Cintres"];

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit here
        </a>
      </header>
      {/* <div className='App-body'>
        
      </div> */}
      <Tag title="Murphy" />
      <Thumb title="Titre de la location" />
      <CollapseList title="Equipements" list={CollapseListElms} />
      <CollapseInfo title="Fidélité" message="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Tag title="Murphy" />
      <Header />
      <HomeSlogan text="Chez vous, partout et ailleurs" />
      <AboutSlogan />
      <Stars qtite={3} />
      <Host host={test.host} />
      <Title title={test.title} location={test.location} />
      <Tags tags={test.tags} id={test.id} />
      <Gallery nbImages={test.pictures.length} pictures={test.pictures} />

      {/* <Space /> */}
    </div>
  );
}

export default App;
