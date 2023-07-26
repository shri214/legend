const Pui: React.FC<any> = ({ prod }) => {
  return (
    <div key={prod.id}>
      <h1>{prod.title}</h1>
      <img
        src={prod.image}
        alt={prod.id}
        style={{ width: '100px', height: '100px' }}
      />
    </div>
  );
};
export default Pui;
