import useStore from "../Store";
import "../Styles/Grid.css";
import "../Styles/Navbar.css";

const ListImage = () => {
  const { data } = useStore();
  console.log(data);
  return (
    <div className="grid">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img className="card__img" src={item.largeImageURL} />
          <h2 className="card__title">{item.tags}</h2>
          <div className="card__icons">
            <span className="card__icons-likes icons"><i className="fa-solid fa-thumbs-up"></i> {item.likes}</span>
            <span className="icons"><i className="fa-solid fa-eye"></i> {item.views}</span>
            <span className="icons"><i className="fa-solid fa-comment"></i> {item.comments}</span>
          </div>
          <a href={item.pageURL} target="_blank" className="card__button">
          <i className="fa-solid fa-eye"></i> view
          </a>
        </div>
      ))}
      {data.length === 0 ? <h3>No Hay Datos Para Mostrar</h3> : ""}
    </div>
  );
};

export default ListImage;
