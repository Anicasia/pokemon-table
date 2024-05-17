import OptionsTableCell from "@/components/OptionsTableCell";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import "./styles.css";
import getPokemon from "../utils/api";

const Home = async () => {
  const pokemons = await getPokemon();

  return (
    <div className="tableContainer">
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
                <OptionsTableCell types={pokemon.types} />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
