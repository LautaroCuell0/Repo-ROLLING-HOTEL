
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import CardHab from "./Components/Seccion-Hab/Card-Hab"
import ButtonWsp from "./Components/botonWsp/botonWsp"
import Carrusel from "./Components/carrusel/carrusel"
import {slides} from "./Components/carrusel/carrouselData.json"
import Footer from "./Components/Footer/footer"
import NavbarMain from "./Components/Navbar/navbar"
import Servicios from "./Components/Servicios/servicios"
import SobreNosotros from "./Components/SobreNosotros/SobreNosotros"
import Contacto from "./Components/Contacto/Contacto";
import HabitacionesInicio from "./Components/Habitaciones/Habitaciones-inicio";
import DetalleHab from "./Components/Detalles-hab/detalle-hab";
import './App.css'
import Presentacion from "./PaginaPrincipal/presentacion";

function App() {


  return (
    <>
      <BrowserRouter>
      <NavbarMain />
      
        <Routes>
          <Route path="/SobreNosotros" element={<SobreNosotros/>} />
          <Route path="/" element={<>
            <ButtonWsp />
            <div className="back-img">
            <Presentacion />
            </div>
            <CardHab />
            <Carrusel data={slides}/>
            <Servicios />
          </>
          }/>
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Habitaciones-inicio" element={<HabitacionesInicio/>} />
          <Route path="/detalle-hab" element={<DetalleHab/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
