/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSUBCATEGORIA = /* GraphQL */ `
  mutation CreateSUBCATEGORIA(
    $input: CreateSUBCATEGORIAInput!
    $condition: ModelSUBCATEGORIAConditionInput
  ) {
    createSUBCATEGORIA(input: $input, condition: $condition) {
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
export const updateSUBCATEGORIA = /* GraphQL */ `
  mutation UpdateSUBCATEGORIA(
    $input: UpdateSUBCATEGORIAInput!
    $condition: ModelSUBCATEGORIAConditionInput
  ) {
    updateSUBCATEGORIA(input: $input, condition: $condition) {
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
export const deleteSUBCATEGORIA = /* GraphQL */ `
  mutation DeleteSUBCATEGORIA(
    $input: DeleteSUBCATEGORIAInput!
    $condition: ModelSUBCATEGORIAConditionInput
  ) {
    deleteSUBCATEGORIA(input: $input, condition: $condition) {
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
export const createCATEGORIA = /* GraphQL */ `
  mutation CreateCATEGORIA(
    $input: CreateCATEGORIAInput!
    $condition: ModelCATEGORIAConditionInput
  ) {
    createCATEGORIA(input: $input, condition: $condition) {
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
export const updateCATEGORIA = /* GraphQL */ `
  mutation UpdateCATEGORIA(
    $input: UpdateCATEGORIAInput!
    $condition: ModelCATEGORIAConditionInput
  ) {
    updateCATEGORIA(input: $input, condition: $condition) {
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
export const deleteCATEGORIA = /* GraphQL */ `
  mutation DeleteCATEGORIA(
    $input: DeleteCATEGORIAInput!
    $condition: ModelCATEGORIAConditionInput
  ) {
    deleteCATEGORIA(input: $input, condition: $condition) {
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
export const createINVENTARIO = /* GraphQL */ `
  mutation CreateINVENTARIO(
    $input: CreateINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    createINVENTARIO(input: $input, condition: $condition) {
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
export const updateINVENTARIO = /* GraphQL */ `
  mutation UpdateINVENTARIO(
    $input: UpdateINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    updateINVENTARIO(input: $input, condition: $condition) {
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
export const deleteINVENTARIO = /* GraphQL */ `
  mutation DeleteINVENTARIO(
    $input: DeleteINVENTARIOInput!
    $condition: ModelINVENTARIOConditionInput
  ) {
    deleteINVENTARIO(input: $input, condition: $condition) {
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
export const createGERENTE = /* GraphQL */ `
  mutation CreateGERENTE(
    $input: CreateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    createGERENTE(input: $input, condition: $condition) {
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
export const updateGERENTE = /* GraphQL */ `
  mutation UpdateGERENTE(
    $input: UpdateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    updateGERENTE(input: $input, condition: $condition) {
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
export const deleteGERENTE = /* GraphQL */ `
  mutation DeleteGERENTE(
    $input: DeleteGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    deleteGERENTE(input: $input, condition: $condition) {
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
export const createFARMACIA = /* GraphQL */ `
  mutation CreateFARMACIA(
    $input: CreateFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    createFARMACIA(input: $input, condition: $condition) {
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
export const updateFARMACIA = /* GraphQL */ `
  mutation UpdateFARMACIA(
    $input: UpdateFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    updateFARMACIA(input: $input, condition: $condition) {
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
export const deleteFARMACIA = /* GraphQL */ `
  mutation DeleteFARMACIA(
    $input: DeleteFARMACIAInput!
    $condition: ModelFARMACIAConditionInput
  ) {
    deleteFARMACIA(input: $input, condition: $condition) {
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
