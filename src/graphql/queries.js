/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSUBCATEGORIA = /* GraphQL */ `
  query GetSUBCATEGORIA($id: ID!) {
    getSUBCATEGORIA(id: $id) {
      id
      name
      categoriaID
      INVENTARIOS {
        items {
          id
          nombreProducto
          proveedor
          costo
          precioVenta
          urlImagen
          tipoMaterial
          farmaciaID
          stock
          subcategoriaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSUBCATEGORIAS = /* GraphQL */ `
  query ListSUBCATEGORIAS(
    $filter: ModelSUBCATEGORIAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSUBCATEGORIAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categoriaID
        INVENTARIOS {
          items {
            id
            nombreProducto
            proveedor
            costo
            precioVenta
            urlImagen
            tipoMaterial
            farmaciaID
            stock
            subcategoriaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSUBCATEGORIAS = /* GraphQL */ `
  query SyncSUBCATEGORIAS(
    $filter: ModelSUBCATEGORIAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSUBCATEGORIAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        categoriaID
        INVENTARIOS {
          items {
            id
            nombreProducto
            proveedor
            costo
            precioVenta
            urlImagen
            tipoMaterial
            farmaciaID
            stock
            subcategoriaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const sUBCATEGORIASByCategoriaID = /* GraphQL */ `
  query SUBCATEGORIASByCategoriaID(
    $categoriaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSUBCATEGORIAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sUBCATEGORIASByCategoriaID(
      categoriaID: $categoriaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        categoriaID
        INVENTARIOS {
          items {
            id
            nombreProducto
            proveedor
            costo
            precioVenta
            urlImagen
            tipoMaterial
            farmaciaID
            stock
            subcategoriaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCATEGORIA = /* GraphQL */ `
  query GetCATEGORIA($id: ID!) {
    getCATEGORIA(id: $id) {
      id
      name
      SUBCATEGORIAS {
        items {
          id
          name
          categoriaID
          INVENTARIOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listCATEGORIAS = /* GraphQL */ `
  query ListCATEGORIAS(
    $filter: ModelCATEGORIAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCATEGORIAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        SUBCATEGORIAS {
          items {
            id
            name
            categoriaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCATEGORIAS = /* GraphQL */ `
  query SyncCATEGORIAS(
    $filter: ModelCATEGORIAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCATEGORIAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        SUBCATEGORIAS {
          items {
            id
            name
            categoriaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getINVENTARIO = /* GraphQL */ `
  query GetINVENTARIO($id: ID!) {
    getINVENTARIO(id: $id) {
      id
      nombreProducto
      proveedor
      costo
      precioVenta
      urlImagen
      tipoMaterial
      farmaciaID
      stock
      subcategoriaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listINVENTARIOS = /* GraphQL */ `
  query ListINVENTARIOS(
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listINVENTARIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombreProducto
        proveedor
        costo
        precioVenta
        urlImagen
        tipoMaterial
        farmaciaID
        stock
        subcategoriaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncINVENTARIOS = /* GraphQL */ `
  query SyncINVENTARIOS(
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncINVENTARIOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombreProducto
        proveedor
        costo
        precioVenta
        urlImagen
        tipoMaterial
        farmaciaID
        stock
        subcategoriaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const iNVENTARIOSByNombreProducto = /* GraphQL */ `
  query INVENTARIOSByNombreProducto(
    $nombreProducto: String!
    $sortDirection: ModelSortDirection
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iNVENTARIOSByNombreProducto(
      nombreProducto: $nombreProducto
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombreProducto
        proveedor
        costo
        precioVenta
        urlImagen
        tipoMaterial
        farmaciaID
        stock
        subcategoriaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const iNVENTARIOSByFarmaciaID = /* GraphQL */ `
  query INVENTARIOSByFarmaciaID(
    $farmaciaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iNVENTARIOSByFarmaciaID(
      farmaciaID: $farmaciaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombreProducto
        proveedor
        costo
        precioVenta
        urlImagen
        tipoMaterial
        farmaciaID
        stock
        subcategoriaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const iNVENTARIOSBySubcategoriaID = /* GraphQL */ `
  query INVENTARIOSBySubcategoriaID(
    $subcategoriaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelINVENTARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    iNVENTARIOSBySubcategoriaID(
      subcategoriaID: $subcategoriaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombreProducto
        proveedor
        costo
        precioVenta
        urlImagen
        tipoMaterial
        farmaciaID
        stock
        subcategoriaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getGERENTE = /* GraphQL */ `
  query GetGERENTE($id: ID!) {
    getGERENTE(id: $id) {
      id
      nombres
      userName
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      farmaciaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listGERENTES = /* GraphQL */ `
  query ListGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGERENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        userName
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        farmaciaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGERENTES = /* GraphQL */ `
  query SyncGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGERENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombres
        userName
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        farmaciaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const gERENTESByFarmaciaID = /* GraphQL */ `
  query GERENTESByFarmaciaID(
    $farmaciaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gERENTESByFarmaciaID(
      farmaciaID: $farmaciaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombres
        userName
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        farmaciaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getFARMACIA = /* GraphQL */ `
  query GetFARMACIA($id: ID!) {
    getFARMACIA(id: $id) {
      id
      nombre
      createdBy
      INVENTARIOS {
        items {
          id
          nombreProducto
          proveedor
          costo
          precioVenta
          urlImagen
          tipoMaterial
          farmaciaID
          stock
          subcategoriaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      GERENTES {
        items {
          id
          nombres
          userName
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          farmaciaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      direction
      cp
      rfc
      contactPhone
      codSerial
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listFARMACIAS = /* GraphQL */ `
  query ListFARMACIAS(
    $filter: ModelFARMACIAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFARMACIAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        createdBy
        INVENTARIOS {
          items {
            id
            nombreProducto
            proveedor
            costo
            precioVenta
            urlImagen
            tipoMaterial
            farmaciaID
            stock
            subcategoriaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            farmaciaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFARMACIAS = /* GraphQL */ `
  query SyncFARMACIAS(
    $filter: ModelFARMACIAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFARMACIAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        createdBy
        INVENTARIOS {
          items {
            id
            nombreProducto
            proveedor
            costo
            precioVenta
            urlImagen
            tipoMaterial
            farmaciaID
            stock
            subcategoriaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            farmaciaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
