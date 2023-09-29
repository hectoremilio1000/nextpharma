// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SUBCATEGORIA, CATEGORIA, INVENTARIO, GERENTE, FARMACIA } = initSchema(schema);

export {
  SUBCATEGORIA,
  CATEGORIA,
  INVENTARIO,
  GERENTE,
  FARMACIA
};