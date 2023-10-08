/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSUBCATEGORIA = /* GraphQL */ `
  subscription OnCreateSUBCATEGORIA(
    $filter: ModelSubscriptionSUBCATEGORIAFilterInput
  ) {
    onCreateSUBCATEGORIA(filter: $filter) {
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
export const onUpdateSUBCATEGORIA = /* GraphQL */ `
  subscription OnUpdateSUBCATEGORIA(
    $filter: ModelSubscriptionSUBCATEGORIAFilterInput
  ) {
    onUpdateSUBCATEGORIA(filter: $filter) {
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
export const onDeleteSUBCATEGORIA = /* GraphQL */ `
  subscription OnDeleteSUBCATEGORIA(
    $filter: ModelSubscriptionSUBCATEGORIAFilterInput
  ) {
    onDeleteSUBCATEGORIA(filter: $filter) {
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
export const onCreateCATEGORIA = /* GraphQL */ `
  subscription OnCreateCATEGORIA(
    $filter: ModelSubscriptionCATEGORIAFilterInput
  ) {
    onCreateCATEGORIA(filter: $filter) {
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
export const onUpdateCATEGORIA = /* GraphQL */ `
  subscription OnUpdateCATEGORIA(
    $filter: ModelSubscriptionCATEGORIAFilterInput
  ) {
    onUpdateCATEGORIA(filter: $filter) {
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
export const onDeleteCATEGORIA = /* GraphQL */ `
  subscription OnDeleteCATEGORIA(
    $filter: ModelSubscriptionCATEGORIAFilterInput
  ) {
    onDeleteCATEGORIA(filter: $filter) {
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
export const onCreateINVENTARIO = /* GraphQL */ `
  subscription OnCreateINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onCreateINVENTARIO(filter: $filter) {
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
export const onUpdateINVENTARIO = /* GraphQL */ `
  subscription OnUpdateINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onUpdateINVENTARIO(filter: $filter) {
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
export const onDeleteINVENTARIO = /* GraphQL */ `
  subscription OnDeleteINVENTARIO(
    $filter: ModelSubscriptionINVENTARIOFilterInput
  ) {
    onDeleteINVENTARIO(filter: $filter) {
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
export const onCreateGERENTE = /* GraphQL */ `
  subscription OnCreateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onCreateGERENTE(filter: $filter) {
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
export const onUpdateGERENTE = /* GraphQL */ `
  subscription OnUpdateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onUpdateGERENTE(filter: $filter) {
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
export const onDeleteGERENTE = /* GraphQL */ `
  subscription OnDeleteGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onDeleteGERENTE(filter: $filter) {
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
export const onCreateFARMACIA = /* GraphQL */ `
  subscription OnCreateFARMACIA($filter: ModelSubscriptionFARMACIAFilterInput) {
    onCreateFARMACIA(filter: $filter) {
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
export const onUpdateFARMACIA = /* GraphQL */ `
  subscription OnUpdateFARMACIA($filter: ModelSubscriptionFARMACIAFilterInput) {
    onUpdateFARMACIA(filter: $filter) {
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
export const onDeleteFARMACIA = /* GraphQL */ `
  subscription OnDeleteFARMACIA($filter: ModelSubscriptionFARMACIAFilterInput) {
    onDeleteFARMACIA(filter: $filter) {
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
