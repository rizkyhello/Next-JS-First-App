import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home(props : any) {
  const {dataUser} = props;

  return (
    <div>
      <Header />
      <h1 className="title"> List User </h1>
      <hr />
      <div>
      {dataUser.map((item : any, index : any) => {
        return (
          <div key={index}>
            <div>
              <p className={styles.titlehome}> {index + 1}. {item.name} </p>
              <span className={styles.titleDesc}> {item.username} </span> | 
              <span className={styles.titleDesc}> {item.email} </span> |
              <span className={styles.titleDesc}> {item.phone} </span> |
              <span className={styles.titleDesc}> {item.website} </span>
            </div> <hr />
          </div>
        )
      })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUser = await res.json();

  return {
    props: {
      dataUser: dataUser,
    },
  };
}
