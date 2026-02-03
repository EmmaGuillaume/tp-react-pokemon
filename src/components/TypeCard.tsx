
type TpokemonTypeProps = {
  name: string;
  image: string;
  index: number;
};

function Type(props: TpokemonTypeProps) {
  return (
    <img
      className="size-8"
      key={props.index}
      src={props.image}
      alt={`Image ${props.name}`}
      title={props.name}
    />
  );
}
export default Type;
