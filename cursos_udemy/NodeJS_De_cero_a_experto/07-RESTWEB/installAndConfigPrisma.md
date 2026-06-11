# Prisma 7 + PostgreSQL + TypeScript

Guía de instalación y configuración de Prisma 7 usando PostgreSQL, TypeScript y Node.js con arquitectura organizada y centralización de `PrismaClient`.

---

# 1. Instalar dependencias

Instalar Prisma CLI:

```bash
npm install prisma --save-dev
```

Instalar Prisma Client:

```bash
npm install @prisma/client
```

Instalar dependencias para PostgreSQL:

```bash
npm install pg @prisma/adapter-pg
```

---

# 2. Inicializar Prisma

```bash
npx prisma init --datasource-provider postgresql
```

Esto crea:

```text
prisma/
├── schema.prisma

prisma.config.ts
```

---

# 3. Configurar variables de entorno

Archivo `.env`

```env
POSTGRES_URL=postgresql://postgres:123456@localhost:5432/TODO
```

---

# 4. Configurar prisma.config.ts

Archivo:

```text
prisma.config.ts
```

Contenido:

```ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.POSTGRES_URL,
  },
});
```

---

# 5. Configurar schema.prisma

Archivo:

```text
prisma/schema.prisma
```

Contenido base:

```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
}
```

---

# 6. Crear modelos

Ejemplo:

```prisma
model Todo {
  id          Int      @id @default(autoincrement())
  text        String
  isCompleted Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

---

# 7. Crear migración

```bash
npx prisma migrate dev --name init
```

Este comando:

- Crea la migración.
- Actualiza PostgreSQL.
- Sincroniza la base de datos.

---

# 8. Generar Prisma Client

```bash
npx prisma generate
```

Se genera la carpeta:

```text
src/
└── generated/
    └── prisma/
```

---

# 9. Centralizar PrismaClient

Estructura:

```text
src/
└── data/
    └── postgres/
        └── index.ts
```

Contenido:

```ts
import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error('POSTGRES_URL no está definida');
}

const adapter = new PrismaPg({
  connectionString,
});

export const prisma = new PrismaClient({
  adapter,
});
```

---

# 10. Usar Prisma en la aplicación

Ejemplo:

```ts
import { prisma } from '../../data/postgres/index.js';

const todos = await prisma.todo.findMany();

console.log(todos);
```

---

# Comandos útiles

## Crear una migración

```bash
npx prisma migrate dev --name nombre_migracion
```

Ejemplo:

```bash
npx prisma migrate dev --name add_user_table
```

---

## Generar cliente nuevamente

```bash
npx prisma generate
```

---

## Validar schema

```bash
npx prisma validate
```

---

## Abrir Prisma Studio

```bash
npx prisma studio
```

---

## Resetear base de datos

⚠️ Elimina todas las tablas y registros.

```bash
npx prisma migrate reset
```

---

# Flujo de trabajo recomendado

Cuando agregues o modifiques modelos:

1. Modificar `schema.prisma`

2. Crear migración

```bash
npx prisma migrate dev --name descripcion_del_cambio
```

3. Prisma actualizará la base de datos.

4. Prisma regenerará automáticamente el cliente.

---

# Estructura final recomendada

```text
src/
├── data/
│   └── postgres/
│       └── index.ts
│
├── generated/
│   └── prisma/
│
├── domain/
├── infrastructure/
├── presentation/
│
└── app.ts

prisma/
├── migrations/
└── schema.prisma

prisma.config.ts
.env
```

---

### Nota importante: 
Cada vez que modifiques schema.prisma, ejecuta:
`npx prisma migrate dev --name nombre_del_cambio`

### Nota: Migrar a otro entorno de base de datos
Cunado quieras pasarte a una base de datos en la nube o local donde aun no se a creado la base de datos es decir nada, luego de haber configurado la conexión y las credenciales ejecuta el siguiente comando para realizar la migración a esa entorno y te cree la base de dato:
`npm run prisma:migrate:prod`

