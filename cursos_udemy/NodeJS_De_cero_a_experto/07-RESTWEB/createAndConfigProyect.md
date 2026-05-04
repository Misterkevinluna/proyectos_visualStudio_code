# 🚀 Forma moderna de configurar un proyecto de Node con TypeScript con un esquema ES Modules (ESM) usando TSX. (2026)

> Luego de crear tu carpeta donde irá el contenido del proyecto con sus archivos, ejecuta los siguientes pasos.

---

## Tabla de Contenido

- [Inicializar el proyecto](#-inicializar-el-proyecto)
- [Instalación de dependencias](#-instalación-de-dependencias)
- [Creación del tsconfig.json](#️-creación-del-archivo-tsconfigjson)
- [Configuración del tsconfig.json](#️-configuración-del-archivo-tsconfigjson)
- [Estructura recomendada](#-estructura-recomendada-del-proyecto)
- [Eliminamos nodemon](#-eliminamos-nodemon)
- [Configuración del package.json](#-configuración-del-archivo-packagejson)
- [Scripts explicados](#️-scripts-explicados)
- [Tip importante](#-tip-importante-que-muchos-cursos-no-mencionan)
- [Importante sobre módulos](#️-importante-sobre-módulos)
- [Ejemplo básico](#-ejemplo-básico-para-probar-el-proyecto)
- [Conclusión](#-conclusión)
- [Flujo completo desde cero](#-flujo-completo-desde-cero)

---

## 📦 Inicializar el proyecto

```bash
npm init -y
```

Esto creará el archivo `package.json`.

---

## 📦 Instalación de dependencias

Instala TypeScript y las herramientas necesarias para desarrollo:

```bash
npm i -D typescript @types/node tsx rimraf
```

---

## ⚙️ Creación del archivo `tsconfig.json`

```bash
npx tsc --init --outDir dist --rootDir src
```

---

## 🛠️ Configuración del archivo `tsconfig.json`

Dentro del archivo `tsconfig.json`, es recomendable configurar los atributos `include` y `exclude`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "types": ["node"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "exclude": ["node_modules"],
  "include": ["src/**/*"]
}
```

### 📌 `include`

Le dice a TypeScript que **solo compile archivos dentro de `src`**.

Ejemplo de archivos incluidos:

```
src/app.ts
src/controllers/user.ts
src/services/math.ts
```

> El patrón `**/*` significa todos los archivos dentro de `src` y sus subcarpetas.

### 📌 `exclude`

Le dice a TypeScript que **ignore ciertas carpetas**:

```json
"exclude": ["node_modules"]
```

> Esto es importante porque `node_modules` puede contener miles de archivos.

### ⚠️ ¿Qué pasa si no configuras `include` / `exclude`?

TypeScript intenta inferir qué archivos compilar. En proyectos grandes puede:

- Analizar archivos innecesarios
- Tardar más en compilar
- Incluir cosas que no quieres compilar

### ⚠️ Nota importante sobre `rootDir`

Si usas:

```json
"rootDir": "src"
```

**Todos tus archivos `.ts` deben estar dentro de `src`.**

---

## 📁 Estructura recomendada del proyecto

```
project/
│
├── src/
│   └── app.ts
│
├── dist/
├── package.json
└── tsconfig.json
```

---

## 🚫 Eliminamos nodemon

En esta configuración **NO usamos nodemon**. Por lo tanto:

- ❌ No necesitas instalar `nodemon`
- ❌ No necesitas archivo `nodemon.json`
- ❌ No necesitas scripts adicionales para nodemon

---

## 📦 Configuración del archivo `package.json`

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/app.js",
  "scripts": {
    "dev": "clear && tsx watch src/app.ts",
    "build": "rimraf dist && tsc",
    "start": "node dist/app.js"
  }
}
```

---

## ▶️ Scripts explicados

### 🔹 `dev`

```bash
npm run dev
```

- ✅ Ejecuta el proyecto en modo desarrollo
- ✅ Reinicia automáticamente cuando detecta cambios
- ✅ Usa `ts-node-dev`

### 🔹 `build`

```bash
npm run build
```

- ✅ Elimina la carpeta `dist`
- ✅ Compila TypeScript a JavaScript

### 🔹 `start`

```bash
npm run start
```

- ✅ Ejecuta el proyecto ya compilado desde `dist`

---


> Esto mejora el rendimiento en desarrollo.

---

## 💡 Tip importante que muchos cursos no mencionan

Cuando usas `"rootDir": "src"`, es buena práctica que **todos** los archivos `.ts` estén dentro de `src`.

> Si colocas archivos fuera de `src`, TypeScript puede lanzar errores de compilación.

---

## ⚠️ Importante sobre módulos

Para evitar problemas con `ts-node-dev`, debes usar una configuración consistente de módulos:

**En `package.json`:**

```json
"type": "commonjs"
```

**En `tsconfig.json`:**

```json
"module": "CommonJS"
```

> Esto garantiza compatibilidad total entre ambos archivos.

---

## 🧪 Ejemplo básico para probar el proyecto

**1.** Crea el archivo `src/app.ts` con el siguiente contenido:

```typescript
console.log("Proyecto funcionando 🚀");
```

**2.** Ejecuta el proyecto:

```bash
npm run dev
```

**3.** Si todo está bien configurado, verás el mensaje en consola:

```
Proyecto funcionando 🚀
```

---

## ✅ Conclusión

Con esta configuración tienes:

| Característica | Detalle |
|---|---|
| ✅ Recarga automática | Sin necesidad de nodemon |
| ✅ Mejor rendimiento | Gracias a `ts-node-dev` |
| ✅ Configuración limpia | Simple y sin archivos innecesarios |
| ✅ Base sólida | Para proyectos backend en Node.js con TypeScript |

---

## 🎯 Flujo completo desde cero

```bash
# 1. Inicializar el proyecto
npm init -y

# 2. Instalar dependencias
npm i -D typescript @types/node ts-node-dev rimraf

# 3. Generar tsconfig.json
npx tsc --init --outDir dist --rootDir src

# 4. Crear la carpeta fuente
mkdir src
```

Luego configuras los archivos `tsconfig.json` y `package.json` según esta guía, y ejecutas:

```bash
npm run dev
```

---

*Guía actualizada para 2026 ✨*
