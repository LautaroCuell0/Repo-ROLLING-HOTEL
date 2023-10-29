
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Presentacion from './PaginaPrincipal/presentacion';
import BotonWsp from './Componentes/ButtonWsp/botonWsp';
import Servicio from './Componentes/Servicios/servicios';
import Footer from './Componentes/Footer/footer';
import Carrusels from './Componentes/Carusel/carrusel';
import {slides} from './Componentes/Carusel/carrouselData.json'
import CardHabitacionInicio from './Componentes/Carta-Habitacion-Inicio/Carta-habitacion-Inicio';
import SOBRENOSOTROS from './Componentes/SobreNosotros/sobrenosotros';
import NavBar from './Componentes/Navbar/navbar';

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/SobreNosotros" element={<SOBRENOSOTROS/>} />
          <Route path="/" element={<>
            <BotonWsp />
            <div className="back-img">
            <Presentacion />
            </div>
            <CardHabitacionInicio />
            <Carrusels data={slides}/>
            <Servicio/>
          </>
          }/>
          {/* <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Habitaciones-inicio" element={<HabitacionesInicio/>} />
          <Route path="/detalle-hab" element={<DetalleHab/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
