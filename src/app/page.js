import styles from "./page.module.css";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";


const getPokemon = async () => {
  // Initial API fetch
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  // Fetch additional data for each Pokemon
  const pokemonData = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      if (!pokemonResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const pokemonData = await pokemonResponse.json();
      return {
        name: pokemon.name,
        types: pokemonData.types.map((type) => type.type.name),
      };
    })
  );

  return pokemonData;
};

const Home = async () => {
  const pokemons = await getPokemon();
  

  return (
    <div className={styles.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pokemon Names</TableCell>
            <TableCell>Pokemon Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon) => {
            return (
              <TableRow key={pokemon.name}>
                <TableCell>{pokemon.name}</TableCell>
                <TableCell>
                  {pokemon.types.map((type, index) => {
                    return <span key={index} >{type}</span>;
                  })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
