import { useFetch } from "../hooks/useFetch";

const PublicGists = () => {
  // Consumimos la caja negra. Renombramos 'data' a 'gists' para el componente.
  const {
    data: gists,
    loading,
    error,
  } = useFetch("https://api.github.com/gists/public");

  if (loading) return <p>Loading public gists...</p>;
  if (error) return <p>Error fetching gists: {error.message}</p>;

  return (
    <div>
      <h2>Public Gists</h2>
      <ul>
        {/* 'gists' es null inicialmente, por eso usamos cortocircuito o valor inicial en el Hook */}
        {gists &&
          gists.map((gist) => (
            <li key={gist.id}>
              <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
                {gist.description || "No description"}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PublicGists;
