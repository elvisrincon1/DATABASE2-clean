const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [ventas, setVentas] = useState<Venta[]>([]);

  // Fetch data from Supabase on mount
  useEffect(() => {
    fetchProveedores();
    fetchAfiliados();
    fetchProductos();
    fetchVentas();
  }, []);

  const fetchProveedores = async () => {
    const { data, error } = await supabase.from('proveedores').select('*');
    if (!error && data) setProveedores(data);
  };

  const fetchAfiliados = async () => {
    const { data, error } = await supabase.from('afiliados').select('*');
    if (!error && data) setAfiliados(data);
  };

  const fetchProductos = async () => {
    const { data, error } = await supabase.from('productos').select('*');
    if (!error && data) setProductos(data);
  };

  const fetchVentas = async () => {
    const { data, error } = await supabase.from('ventas').select('*');
    if (!error && data) setVentas(data);
  };

  const addProveedor = async (proveedor: Proveedor) => {
    const { data, error } = await supabase.from('proveedores').insert([proveedor]);
    if (!error && data) setProveedores([...proveedores, data[0]]);
  };

  const updateProveedor = async (proveedor: Proveedor) => {
    const { data, error } = await supabase
      .from('proveedores')
      .update(proveedor)
      .eq('id', proveedor.id);
    if (!error && data) {
      setProveedores(proveedores.map(p => (p.id === proveedor.id ? proveedor : p)));
    }
  };

  const deleteProveedor = async (id: string) => {
    const { error } = await supabase.from('proveedores').delete().eq('id', id);
    if (!error) {
      setProveedores(proveedores.filter(p => p.id !== id));
    }
  };

  const addAfiliado = async (afiliado: Afiliado) => {
    const { data, error } = await supabase.from('afiliados').insert([afiliado]);
    if (!error && data) setAfiliados([...afiliados, data[0]]);
  };

  const updateAfiliado = async (afiliado: Afiliado) => {
    const { data, error } = await supabase
      .from('afiliados')
      .update(afiliado)
      .eq('id', afiliado.id);
    if (!error && data) {
      setAfiliados(afiliados.map(a => (a.id === afiliado.id ? afiliado : a)));
    }
  };

  const deleteAfiliado = async (id: string) => {
    const { error } = await supabase.from('afiliados').delete().eq('id', id);
    if (!error) {
      setAfiliados(afiliados.filter(a => a.id !== id));
    }
  };

  const addProducto = async (producto: Producto) => {
    const { data, error } = await supabase.from('productos').insert([producto]);
    if (!error && data) setProductos([...productos, data[0]]);
  };

  const updateProducto = async (producto: Producto) => {
    const { data, error } = await supabase
      .from('productos')
      .update(producto)
      .eq('id', producto.id);
    if (!error && data) {
      setProductos(productos.map(p => (p.id === producto.id ? producto : p)));
    }
  };

  const deleteProducto = async (id: string) => {
    const { error } = await supabase.from('productos').delete().eq('id', id);
    if (!error) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  const addVenta = async (venta: Venta) => {
    const { data, error } = await supabase.from('ventas').insert([venta]);
    if (!error && data) setVentas([...ventas, data[0]]);
  };

  const getProductoById = (id: string) => productos.find(p => p.id === id);
  
  const getAfiliadoById = (id: string) => afiliados.find(a => a.id === id);
  
  const getProveedorById = (id: string) => proveedores.find(p => p.id === id);

  return (
    <DataContext.Provider
      value={{
        proveedores,
        afiliados,
        productos,
        ventas,
        addProveedor,
        updateProveedor,
        deleteProveedor,
        addAfiliado,
        updateAfiliado,
        deleteAfiliado,
        addProducto,
        updateProducto,
        deleteProducto,
        addVenta,
        getProductoById,
        getAfiliadoById,
        getProveedorById
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
