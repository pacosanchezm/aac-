import React, { useState, useEffect, useContext, createContext } from "react";

/** @jsx jsx */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui";
import { Flex, Box, Button, Text, Image, Spinner, Grid, Input, Link as Link2 } from "@theme-ui/components";
import Theme from "../theme"

import { Router, Link } from "@reach/router";





let App;
const StateContext = createContext();

// -----------------------------------------------------

const useStateLocal = () => {
  return {
    Theme: useState(useContext(createContext(Theme))),
    LoadingSecc1: useState(useContext(createContext(false))),
  };
};

// ------------------

const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useStateLocal()}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StateContext.Provider>
  );
};

// ------------------------------------------------------
// ------------------------------------------------------



// -----------------------------------------------------------------------------

const MenuHeader21 = props => {
  const Estilo = useThemeUI().theme.styles;

  const [MenuSelected, setMenuSelected] = props.useContext.Menu.Selected
  const [onMenu, setonMenu] = props.useContext.Menu.onMenu


// -------------



const SubMenu3  = () => {

  return (
  
    <div
      sx={{
        width: "100%",
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: `repeat(auto-fit, minmax(64px, 1fr))`,
        height: "34px",
        alignItems: "center",
      }}>

      <Link sx={Estilo.menu1}
        to='/login' 
      >
        Iniciar Sesión
      </Link>

      <Link sx={Estilo.menu1}
        to='/acc/signup'
      >
        Registrarse
      </Link>
    
      <Link sx={Estilo.menu1}
        to='/acc/info'
      >
        Mis Datos
      </Link>
    
      <Link sx={Estilo.menu1}
        to='/orders'
      >
        Mis Causas
      </Link>
    
    </div>

  )

}

// ------------

const SubMenu2  = () => {

  return (
  
    <div
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: `repeat(auto-fit, minmax(64px, 1fr))`,
        height: "34px",
        alignItems: "center",
      }}>


      <Link sx={Estilo.menu1}
        to='/' 
      >
      </Link>



      <Link2 sx={Estilo.menu1}
        href='/orders'
      >
        Ver Pedidos
      </Link2>

      <Link2 sx={Estilo.menu1}
        href='/orderbook?opt=3'
        target='blank'
      >
        Nuevo Pedido
      </Link2>
    
      <Link sx={Estilo.menu1}
        to='/' 
      >
        
        </Link>



    </div>

  )

}

// ------------





const SubMenu0  = () => {

  return (
  
    <div
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: `repeat(auto-fit, minmax(64px, 1fr))`,
        height: "34px",
        alignItems: "center",
      }}>


    </div>

  )

}

// ------------


const SubMenuArmar  = (MenuSelected, onMenu) => {

  // if (MenuSelected===1 & onMenu) {return SubMenu1()}
  // if (MenuSelected===2 & onMenu) {return SubMenu2()}
  if (MenuSelected===3 & onMenu) {return SubMenu3()}

  return SubMenu0()
}

// ------------



// ------------
  try {

    return (
      <div>
        {SubMenuArmar(MenuSelected, onMenu)}
      </div>
    )

  } catch (e) {
    console.error(e);
  }
}




// -----------------------------------------------------------------------------


const Body = props => {
  const Estilo = useThemeUI().theme.styles;
  const [Loading, setLoading] = useContext(StateContext).LoadingSecc1;

  const [MenuSelected, setMenuSelected] = props.useContext.Menu.Selected
  const [onMenu, setonMenu] = props.useContext.Menu.onMenu



// ------------

// useEffect(() => {Loader(props) }, [])

// ------------
  try {

    return (
      
    <div
    sx={{ width: "100%" }}
    onMouseOver={() => { setonMenu(true)}}
    onMouseLeave={() => { 
      setonMenu(false)
      setMenuSelected(0)
    }}
  >
    <div
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: `repeat(auto-fit, minmax(64px, 1fr))`,
      }}
    >

      <Link sx={Estilo.menu1}
        to='/somos' 
        href='/somos'
        onMouseOver={() => { setMenuSelected(1)}}
      >
        Quienes Somos
      </Link>

      <Link sx={Estilo.menu1}
        to='/causas' 
        href='/causas'
        onMouseOver={() => { setMenuSelected(2)}}
       >
        Causas
      </Link>
    
      <Link2 sx={Estilo.menu1}
        to='/causas' 
        onMouseOver={() => { setMenuSelected(3)}}
       >
        Mi Cuenta
      </Link2>
    


      <Link2 sx={Estilo.menu1}
        href='/contacto'
        onMouseOver={() => { setMenuSelected(4)}}
       >
        Contacto
      </Link2>

    </div>

    <MenuHeader21 {...props} />

  </div>

    )
    
  } catch (e) {
    console.error(e);
  }
}

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export default (App = props => {
  return (
    <div>
      <ContextProvider>
        <Flex>
          <main sx={{width: "100%"}}>
            <Body {...props} />
          </main>
        </Flex>
      </ContextProvider>
    </div>
  );
});

// -------------------------------------------------------------------------------
