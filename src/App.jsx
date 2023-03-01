import './App.css';
import Places from './components/Places';

const App = () => {

  return (
    <div className="App">
    <h1 className='Head'>Places To Travel To</h1>
    <div className="container">
      <Places image="https://media.timeout.com/images/105237728/750/422/image.jpg" name="Cape Town" location="Africa"/>
      <Places image="https://cdn.britannica.com/70/20070-050-C2E2045C/Central-Park-Manhattan-New-York-City-apartment.jpg" name="New York" location="America"/>
      <Places image="https://lp-cms-production.imgix.net/features/2017/03/Shanghai_for_free-abe6e2eb510b.jpg" name="Shanghai" location="China"/>
      <Places image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/FotoJet93487jhfds.jpg" name="Berlin" location="Germany"/>
      <Places image="https://expertvagabond.com/wp-content/uploads/reykjavik-things-to-do-blog.jpg" name="Reykjavik" location="Iceland"/>
      <Places image="https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg" name="Toyko" location="Japan"/>
      <Places image="https://cdn.britannica.com/57/122157-050-21261E20/Side-view-Sphinx-Great-Pyramid-of-Khufu.jpg" name="Cairo" location="Egypt"/>
      <Places image="https://a.cdn-hotels.com/gdcs/production0/d1645/0c67ff64-cf54-4886-91dd-89aa601463af.jpg" name="Sydney" location="Australia"/>
      <Places image="https://cdn.britannica.com/61/154261-050-3E149111/view-dome-Vienna-St-Peters-pseudo-Gothic-Votive.jpg" name="Vienna" location="Austria"/>
      <Places image="https://www.miamiandbeaches.com/getmedia/0bc680b3-ab3a-4690-a1f4-4aa138f31fde/South-Beach-Fisher-Island-aerial-1440x900.jpg" name="Miami" location="America"/>
    </div>
    </div>
  )
}

export default App