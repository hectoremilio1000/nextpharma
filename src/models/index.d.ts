import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerSUBCATEGORIA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SUBCATEGORIA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly categoriaID: string;
  readonly INVENTARIOS?: (INVENTARIO | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySUBCATEGORIA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SUBCATEGORIA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly categoriaID: string;
  readonly INVENTARIOS: AsyncCollection<INVENTARIO>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SUBCATEGORIA = LazyLoading extends LazyLoadingDisabled ? EagerSUBCATEGORIA : LazySUBCATEGORIA

export declare const SUBCATEGORIA: (new (init: ModelInit<SUBCATEGORIA>) => SUBCATEGORIA) & {
  copyOf(source: SUBCATEGORIA, mutator: (draft: MutableModel<SUBCATEGORIA>) => MutableModel<SUBCATEGORIA> | void): SUBCATEGORIA;
}

type EagerCATEGORIA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CATEGORIA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly SUBCATEGORIAS?: (SUBCATEGORIA | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCATEGORIA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CATEGORIA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly SUBCATEGORIAS: AsyncCollection<SUBCATEGORIA>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CATEGORIA = LazyLoading extends LazyLoadingDisabled ? EagerCATEGORIA : LazyCATEGORIA

export declare const CATEGORIA: (new (init: ModelInit<CATEGORIA>) => CATEGORIA) & {
  copyOf(source: CATEGORIA, mutator: (draft: MutableModel<CATEGORIA>) => MutableModel<CATEGORIA> | void): CATEGORIA;
}

type EagerINVENTARIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly proveedor?: string | null;
  readonly costo: number;
  readonly precioVenta: number;
  readonly urlImagen?: string | null;
  readonly tipoMaterial?: string | null;
  readonly farmaciaID: string;
  readonly stock?: string | null;
  readonly subcategoriaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINVENTARIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INVENTARIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombreProducto?: string | null;
  readonly proveedor?: string | null;
  readonly costo: number;
  readonly precioVenta: number;
  readonly urlImagen?: string | null;
  readonly tipoMaterial?: string | null;
  readonly farmaciaID: string;
  readonly stock?: string | null;
  readonly subcategoriaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INVENTARIO = LazyLoading extends LazyLoadingDisabled ? EagerINVENTARIO : LazyINVENTARIO

export declare const INVENTARIO: (new (init: ModelInit<INVENTARIO>) => INVENTARIO) & {
  copyOf(source: INVENTARIO, mutator: (draft: MutableModel<INVENTARIO>) => MutableModel<INVENTARIO> | void): INVENTARIO;
}

type EagerGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly farmaciaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly farmaciaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GERENTE = LazyLoading extends LazyLoadingDisabled ? EagerGERENTE : LazyGERENTE

export declare const GERENTE: (new (init: ModelInit<GERENTE>) => GERENTE) & {
  copyOf(source: GERENTE, mutator: (draft: MutableModel<GERENTE>) => MutableModel<GERENTE> | void): GERENTE;
}

type EagerFARMACIA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FARMACIA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly INVENTARIOS?: (INVENTARIO | null)[] | null;
  readonly GERENTES?: (GERENTE | null)[] | null;
  readonly direction?: string | null;
  readonly cp?: string | null;
  readonly rfc?: string | null;
  readonly contactPhone?: string | null;
  readonly codSerial?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFARMACIA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FARMACIA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly INVENTARIOS: AsyncCollection<INVENTARIO>;
  readonly GERENTES: AsyncCollection<GERENTE>;
  readonly direction?: string | null;
  readonly cp?: string | null;
  readonly rfc?: string | null;
  readonly contactPhone?: string | null;
  readonly codSerial?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FARMACIA = LazyLoading extends LazyLoadingDisabled ? EagerFARMACIA : LazyFARMACIA

export declare const FARMACIA: (new (init: ModelInit<FARMACIA>) => FARMACIA) & {
  copyOf(source: FARMACIA, mutator: (draft: MutableModel<FARMACIA>) => MutableModel<FARMACIA> | void): FARMACIA;
}