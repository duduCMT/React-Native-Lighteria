import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export function toReal(valor){
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}