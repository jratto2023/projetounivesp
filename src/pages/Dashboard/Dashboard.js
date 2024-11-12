import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../contexts/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  console.log(uid);
  console.log(posts);

  return (
    <div className={styles.dashboard}>
      <h2>Cadastrar Encomenda</h2>
       <p></p> 
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>&</p>
          <Link to="/posts/create" className="btn">
            Inserir
          </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
         <span>%</span>
         <span>%</span>  
        </div> 
      )}
{/* ALTERAÇÃO}
{ /* <form onSubmit={handleSubmit}> */ }
        <label>
          <span>Bloco:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Bloco do conjunto"
 //           onChange={(e) => setTitle(e.target.value)}
 //           value={title}
          />
        </label>
        <label>
          <span>Apartamento:</span>
          <input
            type="number"
            name="number"
            required
            placeholder="Insira número do apartamento"
   //         onChange={(e) => setImage(e.target.value)}
    //        value={image}
          />
        </label>
{ /* </form>  */  }

{/* fim alterção */ }


      {posts &&
        posts.map((post) => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
