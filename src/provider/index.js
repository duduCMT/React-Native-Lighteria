import React, { useState } from 'react'

export const DataContext = React.createContext();

export default function Provider({children}){
  const [itensCheckout, setItensCheckout] = useState([])
  
  return (
    <DataContext.Provider value={{
      itensCheckout,
      adicionarItem: (novoItem) => {
        let copiaItensCheckout = [...itensCheckout]
        let itemFiltrado = copiaItensCheckout.find(
          item => item.id === novoItem.id
        )
        if(itemFiltrado){
          itemFiltrado.quantidade = itemFiltrado.quantidade + 1
        } else {
          novoItem.quantidade = 1;
          copiaItensCheckout = [...copiaItensCheckout, novoItem]
        }
        setItensCheckout(copiaItensCheckout)
      }
    }}
    >
      {children}
    </DataContext.Provider>
  )
}