# Samuel Piedrahita — Portafolio Profesional Premium

Este repositorio contiene el rediseño completo del portafolio web personal de **Samuel Piedrahita**, enfocado en destacar su perfil estratégico en Economía, Negocios Internacionales y Consultoría Estratégica. El proyecto proyecta una identidad digital seria, tecnológica y de alta gama, alejándose de las plantillas genéricas.

---

## 🎨 Sistema de Diseño (Cobalt Editorial & Obsidian Navy)

La interfaz utiliza una paleta de colores sofisticada inspirada en firmas fintech y de consultoría estratégica corporativa:
*   **Fondo Principal (Obsidian Navy):** Negro profundo con matiz marino (`#080B11`).
*   **Contenedores y Tarjetas:** Gris azulado oscuro (`#121824`) con bordes finos traslúcidos.
*   **Acento Principal (Cobalt Accent):** Azul cobalto eléctrico vibrante (`#2B66FF`).
*   **Acento Secundario (Ice Accent):** Celeste glacial pálido (`#8ECAFF`).
*   **Tipografía:** `Plus Jakarta Sans` para títulos y cuerpo (un look editorial moderno); y `JetBrains Mono` para etiquetas y detalles tipo sistema.

---

## 📂 Arquitectura de Archivos y Estructura Modular

El proyecto sigue una estructura limpia, modular y fácil de mantener:

```bash
├── index.html          # Estructura principal y contenido de las secciones
├── style.css           # Gateway principal (importa las hojas modulares)
├── script.js           # Lógicas de interacción, parallax y animaciones
├── .gitignore          # Exclusión de archivos basura y configuraciones locales
├── css/                # Hojas de estilo divididas por componentes
│   ├── variables.css   # Variables CSS (:root) y fuentes web
│   ├── global.css      # Resets, ambient glows, tipografía y botones globales
│   ├── navbar.css      # Navbar tipo cápsula flotante y menú móvil
│   ├── hero-profile.css# Hero asimétrico y el bloque de presentación "Sobre Mí"
│   ├── metrics.css     # Filas de métricas con números gigantes y mockups
│   ├── products.css    # Grid de productos (tarjetas interactivas con hover)
│   └── other-sections.css # Pills de servicios, cita, gratis, referidos y contacto
└── *.png               # Assets gráficos reales (mockups y retrato de Samuel)
```

### 🔹 Explicación del CSS Dividido
Para evitar hojas de estilos monolíticas e inmanejables, los estilos se dividieron en el directorio `css/`. El archivo raíz `style.css` actúa únicamente como puerta de enlace importando las hojas modulares mediante `@import url('css/filename.css')`. Esto permite a los navegadores descargar los estilos de manera organizada y facilita a los desarrolladores ubicar y editar estilos específicos sin romper otras secciones.

---

## ⚡ Interacciones y Animaciones de Alta Gama

El portafolio incorpora múltiples micro-interacciones y efectos dinámicos avanzados:

1.  **Contador Progresivo (*Count-Up Counter*):**
    Los números gigantes de la sección de métricas (`20` y `75d`) inician en `0` y realizan un conteo ascendente fluido con una curva de desaceleración (*Ease-out Quad*) utilizando `IntersectionObserver` y `requestAnimationFrame` en JS apenas entran en el viewport.
2.  **Entradas Horizontales de Desplazamiento (*Slide-In*):**
    Las filas de métricas se revelan de forma asimétrica (el texto entra desde la izquierda y las imágenes desde la derecha) mediante las clases CSS `.reveal-left` y `.reveal-right`. Cuenta con un *fallback* responsivo que las transforma en desplazamientos verticales limpios en móviles para evitar problemas de desbordamiento de pantalla.
3.  **Scroll Parallax Vertical:**
    Las maquetas de dispositivos (`.mockup-img`) y las tarjetas de texto tienen asignadas velocidades relativas de desplazamiento (`data-speed`). A medida que el usuario hace scroll, se trasladan verticalmente a distintos ritmos generando un efecto de profundidad tridimensional.
4.  **Efecto de Relleno al Pasar el Cursor (*Text-Fill Hover*):**
    Palabras clave específicas dentro de los párrafos y los títulos principales tienen un fondo de cápsula azul cobalto que se expande horizontalmente al pasar el cursor encima, destacando los conceptos más importantes de forma interactiva.
5.  **Tarjetas de Productos Inteligentes (*Hover-Reveal*):**
    Los 5 productos se organizan en un grid asimétrico. Inicialmente muestran información mínima (índice, título, precio). Al pasar el cursor:
    *   La tarjeta se eleva y proyecta sombra.
    *   La imagen de fondo (con mockups en P1 y P2) hace un efecto de zoom y desenfoque.
    *   El centro de la tarjeta se expande verticalmente revelando la lista de características incluidas y el botón circular con flecha diagonal (`↗`).
    *   **Estabilidad:** La altura de las tarjetas está fija en `550px` en escritorio, por lo que expandir los detalles internos no altera el tamaño del contenedor ni descoloca a las tarjetas vecinas del Grid.

---

## 🛠️ Instrucciones de Uso y Despliegue

### 1. Visualización Local
Para ver el proyecto en tu máquina local:
*   Abre el archivo `index.html` directamente en tu navegador favorito (ej. Chrome, Safari, Brave), o utiliza la extensión Live Server en VSCode para una recarga en tiempo real.

### 2. Guardar y Desplegar en Git
El repositorio local está inicializado y conectado con la rama principal en GitHub. Para sincronizar tus cambios locales con la nube, ejecuta:
```bash
git add .
git commit -m "docs: crear README.md y modularizar estructura de estilos CSS"
git push origin main
```
