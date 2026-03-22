# Product Requirements Document (PRD)
## SnippedCode

**Versión:** 1.0.0  
**Fecha:** 2026-03-22  
**Estado:** Draft  
**Autor:** Equipo de Producto  

---

## 1. Resumen Ejecutivo

SnippedCode es una aplicación web cliente que permite a los usuarios pegar fragmentos de código y generar capturas de pantalla estilizadas de estos. El objetivo es brindar una herramienta minimalista, rápida y completamente del lado del cliente, sin necesidad de backend, para compartir código de forma visual y atractiva.

---

## 2. Problema

Los desarrolladores frecuentemente necesitan compartir fragmentos de código en presentaciones, redes sociales, documentación o foros. Las capturas de pantalla manuales son inconsistentes y poco estilizadas. No existe una herramienta simple, sin registro y sin backend, que genere capturas de código de alta calidad directamente en el navegador.

---

## 3. Objetivos del Producto

- Proveer una herramienta ligera y sin fricción para generar capturas de código.
- Ofrecer detección automática del lenguaje de programación.
- Permitir personalización básica mediante temas claro y oscuro.
- Garantizar una experiencia de usuario minimalista y responsiva.
- Operar completamente del lado del cliente (sin dependencias de servidor).

---

## 4. Usuarios Objetivo

- Desarrolladores de software que comparten código en redes sociales o documentación.
- Educadores y creadores de contenido técnico.
- Estudiantes que desean presentar fragmentos de código de forma visual.

---

## 5. Alcance

### 5.1 Dentro del Alcance (In Scope)

- Interfaz para pegar o escribir fragmentos de código.
- Detección automática del lenguaje de programación.
- Previsualización en tiempo real de la captura generada.
- Soporte para múltiples temas de syntax highlighting (Claro, Oscuro, Monokai, etc.).
- Botón de descarga de la captura de pantalla en formato de imagen.
- Diseño responsivo (mobile, tablet, desktop).
- UI/UX minimalista con paleta de colores grises para la interfaz.

### 5.2 Fuera del Alcance (Out of Scope)

- Autenticación o cuentas de usuario.
- Almacenamiento o historial de capturas.
- Compartir directamente a redes sociales.
- Backend o procesamiento del lado del servidor.
- Soporte para múltiples fragmentos simultáneos.

---

## 6. Requerimientos Funcionales

### RF-01 · Editor de Código

- El usuario puede pegar o escribir un fragmento de código en un área de texto dedicada.
- El área de entrada debe soportar múltiples líneas y respetar tabulaciones y espacios.

### RF-02 · Detección de Lenguaje

- La aplicación debe detectar automáticamente el lenguaje de programación del fragmento ingresado.
- La detección debe usarse para aplicar el resaltado de sintaxis (syntax highlighting) correcto en la previsualización.
- El usuario debe poder ver qué lenguaje fue detectado.

### RF-03 · Previsualización en Tiempo Real

- La aplicación debe mostrar una previsualización actualizada de la captura cada vez que el usuario modifique el código o las configuraciones.
- La previsualización debe reflejar fielmente el resultado final de la imagen descargada.

### RF-04 · Cambio de Tema

- La aplicación debe ofrecer un selector para alternar entre diferentes temas de syntax highlighting.
- Al menos se debe soportar: Light, Dark y Monokai.
- El cambio de tema debe aplicarse tanto al editor como a la previsualización.

### RF-05 · Descarga de Captura

- Debe existir un botón que permita al usuario descargar la previsualización como imagen (PNG).
- La imagen descargada debe tener una resolución adecuada para uso en presentaciones y redes sociales.

### RF-06 · Diseño Responsivo

- La interfaz debe adaptarse correctamente a resoluciones de pantalla móvil (≥ 320px), tablet (≥ 768px) y desktop (≥ 1280px).

---

## 7. Requerimientos No Funcionales

### RNF-01 · Rendimiento

- La previsualización debe actualizarse en menos de 300ms tras cada cambio del usuario.
- La carga inicial de la aplicación debe completarse en menos de 3 segundos en una conexión estándar.

### RNF-02 · Compatibilidad

- La aplicación debe ser compatible con los navegadores modernos: Chrome, Firefox, Safari y Edge (últimas 2 versiones mayores).

### RNF-03 · Privacidad

- Todo el procesamiento ocurre del lado del cliente. Ningún dato del usuario es enviado a un servidor externo.

### RNF-04 · Accesibilidad

- Los controles interactivos deben ser accesibles mediante teclado.
- Se deben respetar contrastes mínimos de color según WCAG 2.1 nivel AA.

---

## 8. Diseño y Experiencia de Usuario

### 8.1 Principios de Diseño

- **Minimalismo:** Interfaz limpia, sin elementos superfluos. Cada componente visible cumple una función.
- **Claridad:** El usuario siempre sabe qué acción realizar a continuación.
- **Inmediatez:** La previsualización refleja los cambios al instante.

### 8.2 Paleta de Colores

La UI utiliza exclusivamente una paleta de grises, con variaciones para estados interactivos:

| Token               | Claro      | Oscuro     |
|---------------------|------------|------------|
| Background          | `#F5F5F5`  | `#1A1A1A`  |
| Surface             | `#FFFFFF`  | `#242424`  |
| Border              | `#E0E0E0`  | `#3A3A3A`  |
| Text Primary        | `#1A1A1A`  | `#F0F0F0`  |
| Text Secondary      | `#6B6B6B`  | `#9A9A9A`  |
| Interactive (Hover) | `#D4D4D4`  | `#4A4A4A`  |
| Accent              | `#505050`  | `#BFBFBF`  |

### 8.3 Tipografía

- **UI General:** `Inter` o `system-ui`, tamaño base 14px.
- **Editor / Previsualización:** Fuente monoespaciada (`JetBrains Mono`, `Fira Code` o `monospace`).

### 8.4 Layout General

```
┌─────────────────────────────────────────────┐
│  SnippedCode                    [☀/🌙 Tema] │
├───────────────────┬─────────────────────────┤
│                   │                         │
│   Editor de       │    Previsualización     │
│   Código          │    en Tiempo Real       │
│                   │                         │
│                   │                         │
├───────────────────┴─────────────────────────┤
│  Lenguaje detectado: TypeScript    [⬇ Descargar] │
└─────────────────────────────────────────────┘
```

En resoluciones móviles, el layout cambia a una columna única: editor arriba, previsualización abajo.

---

## 9. Arquitectura Técnica

### 9.1 Stack Tecnológico

| Capa              | Tecnología                          |
|-------------------|-------------------------------------|
| Framework         | React 18+                           |
| Lenguaje          | TypeScript                          |
| Bundler           | Vite                                |
| Syntax Highlight  | `highlight.js` o `shiki`            |
| Detección Lenguaje| `highlight.js` (autodetect) o `linguist` |
| Captura de imagen | `html2canvas` o `dom-to-image-more` |
| Testing           | Vitest + React Testing Library      |
| Estilos           | CSS Modules o Tailwind CSS          |

### 9.2 Estructura de Carpetas

```
snipped-code/
├── public/
├── src/
│   ├── components/
│   │   ├── CodeEditor/
│   │   │   ├── CodeEditor.tsx
│   │   │   └── CodeEditor.css
│   │   ├── CodePreview/
│   │   │   ├── CodePreview.tsx
│   │   │   └── CodePreview.css
│   │   ├── DownloadButton/
│   │   │   └── DownloadButton.tsx
│   │   ├── LanguageBadge/
│   │   │   └── LanguageBadge.tsx
│   │   └── ThemeToggle/
│   │       └── ThemeToggle.tsx
│   ├── hooks/
│   │   ├── useLanguageDetection.ts
│   │   └── useTheme.ts
│   ├── utils/
│   │   ├── captureImage.ts
│   │   └── detectLanguage.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tests/
│   ├── components/
│   │   ├── TestCodeEditor.tsx
│   │   ├── TestCodePreview.tsx
│   │   ├── TestDownloadButton.tsx
│   │   ├── TestLanguageBadge.tsx
│   │   └── TestThemeToggle.tsx
│   ├── hooks/
│   │   ├── TestUseLanguageDetection.ts
│   │   └── TestUseTheme.ts
│   └── utils/
│       ├── TestCaptureImage.ts
│       └── TestDetectLanguage.ts
├── index.html
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
└── package.json
```

> **Convención de tests:** Cada archivo en `src/` tiene su test espejo en `tests/`, manteniendo la misma estructura de subcarpetas. Por ejemplo, `src/components/CodeEditor/CodeEditor.tsx` → `tests/components/TestCodeEditor.tsx`.

---

## 10. Componentes Principales

### `CodeEditor`
Área de texto donde el usuario ingresa el código. Emite el valor actual al estado global en cada cambio.

### `CodePreview`
Renderiza el fragmento de código con syntax highlighting aplicado. Es el elemento que se captura para la descarga.

### `LanguageBadge`
Muestra el lenguaje detectado automáticamente. Se actualiza reactivamente.

### `ThemeToggle`
Botón/switch que alterna entre tema claro y oscuro. Persiste la preferencia en `localStorage`.

### `DownloadButton`
Dispara la captura del `CodePreview` y descarga la imagen resultante en formato PNG.

### `useLanguageDetection` (Hook)
Recibe el string de código y retorna el lenguaje detectado. Llama al motor de detección con debounce.

### `useTheme` (Hook)
Gestiona el estado del tema (light/dark) y aplica la clase CSS correspondiente al `document.body`.

---

## 11. Plan de Testing

### 11.1 Estrategia

- **Unit Tests:** Cada componente, hook y utilidad tiene su propio test file en `tests/`.
- **Framework:** Vitest + React Testing Library.
- **Cobertura mínima objetivo:** 80% de líneas.

### 11.2 Casos de Prueba Principales

| Módulo                   | Caso de Prueba                                                   |
|--------------------------|------------------------------------------------------------------|
| `CodeEditor`             | Renderiza correctamente; emite cambios al escribir.              |
| `CodePreview`            | Muestra el código con highlighting; refleja el tema activo.      |
| `LanguageBadge`          | Muestra el lenguaje correcto; muestra fallback si no se detecta. |
| `ThemeToggle`            | Alterna entre light y dark; persiste en localStorage.            |
| `DownloadButton`         | Invoca la función de captura al hacer click.                     |
| `useLanguageDetection`   | Retorna el lenguaje correcto para inputs conocidos.              |
| `useTheme`               | Inicializa desde localStorage; aplica clase al body.             |
| `detectLanguage` (util)  | Detecta lenguajes comunes: JS, TS, Python, Rust, etc.            |
| `captureImage` (util)    | Genera un Blob/URL de imagen a partir de un elemento DOM.        |

---

## 12. Criterios de Aceptación

| ID   | Criterio                                                                                      | Prioridad |
|------|-----------------------------------------------------------------------------------------------|-----------|
| CA-01 | El usuario puede pegar código y ver la previsualización actualizada en tiempo real.          | Alta      |
| CA-02 | El lenguaje detectado se muestra correctamente para los 10 lenguajes más comunes.             | Alta      |
| CA-03 | El botón de descarga genera un archivo PNG válido que coincide con la previsualización.       | Alta      |
| CA-04 | El toggle de tema cambia la apariencia de editor y previsualización sin recargar la página.  | Alta      |
| CA-05 | La interfaz es completamente funcional en pantallas de 320px de ancho.                        | Alta      |
| CA-06 | Todos los tests de Vitest pasan con `npm run test`.                                           | Alta      |
| CA-07 | La aplicación se construye sin errores con `npm run build`.                                   | Alta      |
| CA-08 | No se realizan peticiones de red durante el uso normal de la aplicación.                      | Media     |

---

## 13. Configuración de Proyecto

### `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### `vitest.config.ts`

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
    include: ['tests/**/*.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
    },
  },
})
```

### Scripts (`package.json`)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## 14. Riesgos y Mitigaciones

| Riesgo                                       | Probabilidad | Impacto | Mitigación                                                   |
|----------------------------------------------|--------------|---------|--------------------------------------------------------------|
| Detección de lenguaje imprecisa              | Media        | Medio   | Permitir selección manual como fallback.                     |
| `html2canvas` con fuentes externas no renderiza bien | Media | Alto  | Incluir las fuentes como assets locales o usar fuentes del sistema. |
| Rendimiento en fragmentos de código muy largos | Baja       | Medio   | Aplicar debounce al highlighting y limitar longitud máxima. |
| Compatibilidad del API de descarga en Safari | Media        | Medio   | Usar polyfill o método alternativo para iOS.                 |

---

## 15. Glosario

| Término             | Definición                                                              |
|---------------------|-------------------------------------------------------------------------|
| Syntax Highlighting | Coloración del código fuente según la gramática del lenguaje.           |
| Captura de pantalla | Imagen generada a partir del DOM renderizado de la previsualización.    |
| Cliente             | Navegador web del usuario, sin intervención de un servidor.             |
| Debounce            | Técnica para retrasar la ejecución de una función hasta que el usuario deje de escribir. |

---

*Documento generado para el proyecto SnippedCode — Versión 1.0.0*