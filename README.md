# Venta Sistematica Reporting

Este repositorio contiene la aplicación React con integración a Supabase para gestión de proveedores, afiliados, productos y ventas.

## Configuración

1. Clona el repositorio.
2. Crea un proyecto en Supabase y configura las tablas ejecutando el script SQL en `supabase/create_tables.sql`.
3. Configura las variables de entorno en un archivo `.env` en la raíz del proyecto con las siguientes credenciales reales:

```
VITE_SUPABASE_URL=https://
VITE_SUPABASE_ANON_KEY=
```

4. Instala las dependencias:

```bash
npm install
```

5. Ejecuta la aplicación en modo desarrollo:

```bash
npm run dev
```

## Despliegue

Puedes desplegar esta aplicación en cualquier servicio que soporte aplicaciones Vite/React.

## Notas

- La aplicación utiliza React Context para manejar el estado y se conecta a Supabase para persistencia de datos.
- Las tablas y políticas de acceso deben estar configuradas en Supabase para que la aplicación funcione correctamente.

## Scripts SQL

El script para crear las tablas y políticas básicas está en `supabase/create_tables.sql`.

---

Este repositorio está listo para usarse en un entorno real con Supabase.
