import { first, second, third, fourth } from '../assets'; // Correct the path as necessary

const Album = () => (
  <div className="album-grid">
    <div className="thumbnail first">
      <img src={first} alt="First" className="album-image"/>
      <div className="album-name">Album Title 1</div>
    </div>
    <div className="thumbnail second">
      <img src={second} alt="Second" className="album-image"/>
      <div className="album-name">Album Title 2</div>
    </div>
    <div className="thumbnail third">
      <img src={third} alt="Third" className="album-image" />
      <div className="album-name">Album Title 3</div>
    </div>
    <div className="thumbnail fourth">
      <img src={fourth} alt="Fourth" className="album-image"/>
      <div className="album-name">Album Title 4</div>
    </div>
  </div>
);

export default Album;
