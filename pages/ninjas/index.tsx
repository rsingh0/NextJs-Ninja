import Link from "next/link";
import styles from "../../styles/Jobs.module.css";

// NextJs inbuild function that invokes at buld time
// and makes prop available to components before the mounts
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

//ninjas available from getStaticProps props
const Ninjas = ({ ninjas }) => {
  console.log(ninjas);

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link href={`/ninjas/${ninja.id}`} className={styles.single} key={ninja.id}>
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
