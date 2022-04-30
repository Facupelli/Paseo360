import { departamentos } from "assets/departamentos";
import s from "./PropertyFilter.module.scss";

export default function PropertyFilter() {
  return (
    <div className={s.container}>
      FILTROS
      <form>
        <div>
          <label htmlFor="type">Tipo: </label>
          <select id="type" defaultValue="All">
            <option value="all">Todos</option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="Terreno">Terreno</option>
            <option value="Local">Local</option>
            <option value="Quinta">Quinta</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="operation">Operacion: </label>
          <select id="operation" defaultValue="all">
            <option value="all" disabled>
              Todos
            </option>
            <option value="Alquiler">Alquiler</option>
            <option value="Venta">Venta</option>
          </select>
        </div>
        <div>
          <label htmlFor="departamento">Departamento: </label>
          <select id="departamento" defaultValue="all">
            <option value="all">Todos</option>
            {departamentos &&
              departamentos
                .sort((a, b) => a.nombre.localeCompare(b.nombre))
                .map((departamento) => (
                  <option key={departamento.id} value={departamento.nombre}>
                    {departamento.nombre}
                  </option>
                ))}
          </select>
        </div>
        <div>
          <label htmlFor="real_estate">Inmobiliaria: </label>
          <select id="real_estate" defaultValue="all">
            <option value="all">Todos</option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="price_start">Precio Desde: </label>
            <input type="text" id="price_start" />
          </div>
          <div>
            <label htmlFor="price_end">Precio Hasta: </label>
            <input type="text" id="price_end" />
          </div>
          <div>
            <select name="currency">
              <option>Pesos</option>
              <option>Dólares</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="garage">Año Construcción: </label>
        </div>
        <div>
          <label htmlFor="ambiences">Ambientes: </label>
        </div>
        <div>
          <label htmlFor="bedrooms">Dormitorios: </label>
        </div>
        <div>
          <label htmlFor="bathrooms">Baños: </label>
        </div>
        <div>
          <label htmlFor="garage">Garage: </label>
        </div>
        <div>
          <p>Superficie Total:</p>
          <div>
            <label htmlFor="total_area_start">Desde: </label>
            <input type="text" id="total_area_start" />
          </div>
          <div>
            <label htmlFor="total_area_end">Hasta: </label>
            <input type="text" id="total_area_end" />
          </div>
        </div>
        <div>
          <p>Superficie Cubierta:</p>
          <div>
            <label htmlFor="cover_area_start">Desde: </label>
            <input type="text" id="cover_area_start" />
          </div>
          <div>
            <label htmlFor="cover_area_end">Hasta: </label>
            <input type="text" id="cover_area_end" />
          </div>
        </div>
      </form>
    </div>
  );
}
