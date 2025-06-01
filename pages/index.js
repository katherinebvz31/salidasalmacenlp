import { useState } from "react";

const mockData = {
  "A001": { name: "Martillo", unit: "Unidad", image: "https://via.placeholder.com/50" },
  "A002": { name: "Destornillador", unit: "Unidad", image: "https://via.placeholder.com/50" },
  "A003": { name: "Llave Inglesa", unit: "Unidad", image: "https://via.placeholder.com/50" },
};

export default function Home() {
  const [codigo, setCodigo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [salidas, setSalidas] = useState([]);

  const handleAgregar = () => {
    const codigoUpper = codigo.toUpperCase();
    if (mockData[codigoUpper] && cantidad) {
      setSalidas([...salidas, { codigo: codigoUpper, ...mockData[codigoUpper], cantidad }]);
      setCodigo('');
      setCantidad('');
    }
  };

  const producto = mockData[codigo.toUpperCase()];

  return (
    <div style={{ padding: 20 }}>
      <h1>Registro de Salidas</h1>

      <input 
        placeholder="Código del producto"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />

      {producto && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <img src={producto.image} alt={producto.name} width={50} />
          <p>{producto.name} - Unidad: {producto.unit}</p>
        </div>
      )}

      <input 
        placeholder="Cantidad"
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      <button onClick={handleAgregar}>Agregar</button>

      <h2>Salidas Registradas</h2>
      <ul>
        {salidas.map((item, index) => (
          <li key={index}>
            {item.name} ({item.unit}) - Cantidad: {item.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
}
