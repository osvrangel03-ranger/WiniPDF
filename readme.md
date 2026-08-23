# WiniPDF

<p align="center"><img src=".github/wini-logo-256.png" width="128" alt="WiniPDF"></p>

**Español** | [English below](#english)

---

## ¿Qué es WiniPDF?

Un lector de documentos rápido y ligero para Windows, con identidad visual
propia inspirada en el diseño moderno de Windows 11.

WiniPDF es un fork de **[SumatraPDF](https://github.com/sumatrapdfreader/sumatrapdf)**,
el mejor lector ligero de Windows, creado por **Krzysztof Kowalczyk** y su
comunidad. Todo el mérito del motor y décadas de refinamiento es suyo — este
proyecto existe gracias a ellos y les está profundamente agradecido.

### ¿Por qué "la piedra de ámbar"?

> *El ámbar encapsula y deja ver sin alterar. Eso es un PDF.*

El ámbar preserva lo que atrapa durante millones de años: visible, intacto,
intocable. Exactamente la promesa del formato PDF. Nuestro icono es una piedra
de ámbar estilizada con un pliegue de página, y dentro, una hoja con la W de
WiniPDF — preservada, como todo lo que abras con este lector.

El dúo negro + amarillo es además un homenaje a los colores de SumatraPDF.

<p align="center">
  <img src=".github/screenshots/wini-dark.png" width="380" alt="Tema Wini (oscuro)">&nbsp;
  <img src=".github/screenshots/wini-light.png" width="380" alt="Tema Wini Light">
</p>
<p align="center"><sub>Temas propios <b>Wini</b> y <b>Wini Light</b> — predeterminados según el modo claro/oscuro de Windows</sub></p>

### Lo que hereda de SumatraPDF

- Lectura de PDF, ePub, MOBI, XPS, DjVu, CHM, CBZ/CBR, FB2 y más
- Velocidad de apertura legendaria, sin esperas
- Versión portable, sin instalación
- Interfaz en decenas de idiomas

### Próximamente (roadmap)

- **Asistente IA integrado** (desactivado por defecto): resúmenes del documento,
  modo voz para accesibilidad, y proveedores conectables (elige tu IA)
- **Suite de edición de documentos** (desactivada por defecto): conversión de
  formatos, anotaciones avanzadas, estilo iLovePDF
- **Modernización visual Fluent**: pestañas estilo Windows 11, materiales Mica
- Versión portable oficial y publicación en Microsoft Store

Las funciones experimentales nunca se activan sin tu consentimiento explícito:
el rendimiento es la razón número uno por la que existe este proyecto.

## Compilar

Requiere Visual Studio 2026 (carga de trabajo "Desarrollo para el escritorio
con C++") y [Bun](https://bun.sh):

```
bun cmd/build.ts -release
```

El ejecutable queda en `out/rel64/`.

## Licencia

GPLv3, heredada de SumatraPDF. Todos los créditos del código base pertenecen a
Krzysztof Kowalczyk, los contribuidores de SumatraPDF y los autores de las
librerías de terceros (ver AUTHORS).

---

<a id="english"></a>

# WiniPDF (English)

A fast, lightweight document reader for Windows with its own visual identity
inspired by modern Windows 11 design.

WiniPDF is a fork of **[SumatraPDF](https://github.com/sumatrapdfreader/sumatrapdf)**
— the best lightweight reader for Windows, created by **Krzysztof Kowalczyk**
and its community. All credit for the engine and decades of polish belongs to
them; this project exists thanks to them.

**Why the amber stone?** *Amber encapsulates and lets you see without altering.
That is what a PDF is.* Our icon is a stylized amber stone with a page fold;
inside, a leaf with the WiniPDF W — preserved, like everything you open with
this reader. The black + yellow duo also honors SumatraPDF's colors.

<p align="center">
  <img src=".github/screenshots/wini-dark.png" width="380" alt="Wini dark theme">&nbsp;
  <img src=".github/screenshots/wini-light.png" width="380" alt="Wini Light theme">
</p>

Own **Wini** (dark) and **Wini Light** themes are the defaults, following your
Windows light/dark mode.

**Coming soon**: built-in AI assistant (off by default, voice accessibility
mode, pluggable providers), document editing suite, Fluent visual
modernization, official portable build and Microsoft Store release.

**Build**: Visual Studio 2026 (C++ desktop workload) + [Bun](https://bun.sh):
`bun cmd/build.ts -release` → `out/rel64/`.

**License**: GPLv3, inherited from SumatraPDF.
