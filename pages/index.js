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
    if (mockData[codigo] && cantidad) {
      setSalidas([...salidas, { codigo, ...mockData[codigo], cantidad }]);
      setCodigo('');
      setCantidad('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Registro de Salidas</h1>
      <input 
        placeholder="Código del producto"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      {mockData[codigo] && (
        <div>
          <img src={mockData[codigo].image} alt={mockData[codigo].name} width={50} />
          <p>{mockData[codigo].name} ({mockData[codigo].unit})</p>
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
