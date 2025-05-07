-- Crear tabla proveedores
create table if not exists proveedores (
  id text primary key,
  nombre text not null,
  contacto text,
  telefono text,
  email text
);

-- Crear tabla afiliados
create table if not exists afiliados (
  id text primary key,
  nombre text not null,
  identificacion text not null,
  contacto text
);

-- Crear tabla productos
create table if not exists productos (
  id text primary key,
  nombre text not null,
  precioCompra numeric not null,
  precioVenta numeric not null,
  proveedor1Id text not null references proveedores(id),
  proveedor2Id text references proveedores(id)
);

-- Crear tabla ventas
create table if not exists ventas (
  id text primary key,
  fecha timestamp not null,
  afiliadoId text not null references afiliados(id),
  productoId text not null references productos(id),
  cantidad integer not null,
  precioVenta numeric not null,
  precioCompra numeric not null
);

-- Políticas básicas para permitir acceso anónimo (ajustar según necesidades)

-- Habilitar acceso anónimo para proveedores
alter table proveedores enable row level security;
create policy "Allow all" on proveedores for all using (true);

-- Habilitar acceso anónimo para afiliados
alter table afiliados enable row level security;
create policy "Allow all" on afiliados for all using (true);

-- Habilitar acceso anónimo para productos
alter table productos enable row level security;
create policy "Allow all" on productos for all using (true);

-- Habilitar acceso anónimo para ventas
alter table ventas enable row level security;
create policy "Allow all" on ventas for all using (true);
