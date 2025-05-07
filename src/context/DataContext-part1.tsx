import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../integrations/supabase/clientCustom';

export type Proveedor = {
  id: string;
  nombre: string;
  contacto: string;
  telefono: string;
  email: string;
};

export type Afiliado = {
  id: string;
  nombre: string;
  identificacion: string;
  contacto: string;
};

export type Producto = {
  id: string;
  nombre: string;
  precioCompra: number;
  precioVenta: number;
  proveedor1Id: string;
  proveedor2Id?: string;
};

export type Venta = {
  id: string;
  fecha: string;
  afiliadoId: string;
  productoId: string;
  cantidad: number;
  precioVenta: number;
  precioCompra: number;
};

interface DataContextType {
  proveedores: Proveedor[];
  afiliados: Afiliado[];
  productos: Producto[];
  ventas: Venta[];
  addProveedor: (proveedor: Proveedor) => Promise<void>;
  updateProveedor: (proveedor: Proveedor) => Promise<void>;
  deleteProveedor: (id: string) => Promise<void>;
  addAfiliado: (afiliado: Afiliado) => Promise<void>;
  updateAfiliado: (afiliado: Afiliado) => Promise<void>;
  deleteAfiliado: (id: string) => Promise<void>;
  addProducto: (producto: Producto) => Promise<void>;
  updateProducto: (producto: Producto) => Promise<void>;
  deleteProducto: (id: string) => Promise<void>;
  addVenta: (venta: Venta) => Promise<void>;
  getProductoById: (id: string) => Producto | undefined;
  getAfiliadoById: (id: string) => Afiliado | undefined;
  getProveedorById: (id: string) => Proveedor | undefined;
}
