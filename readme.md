# WiniPDF

<p align="center"><img src=".github/wini-logo-256.png" width="128" alt="WiniPDF"></p>

**EspaÃ±ol** | [English below](#english)

---

## Â¿QuÃ© es WiniPDF?

Un lector de documentos rÃ¡pido y ligero para Windows, con identidad visual
propia inspirada en el diseÃ±o moderno de Windows 11.

WiniPDF es un fork de **[SumatraPDF](https://github.com/sumatrapdfreader/sumatrapdf)**,
el mejor lector ligero de Windows, creado por **Krzysztof Kowalczyk** y su
comunidad. Todo el mÃ©rito del motor y dÃ©cadas de refinamiento es suyo â€” este
proyecto existe gracias a ellos y les estÃ¡ profundamente agradecido.

### Â¿Por quÃ© "la piedra de Ã¡mbar"?

> *El Ã¡mbar encapsula y deja ver sin alterar. Eso es un PDF.*

El Ã¡mbar preserva lo que atrapa durante millones de aÃ±os: visible, intacto,
intocable. Exactamente la promesa del formato PDF. Nuestro icono es una piedra
de Ã¡mbar estilizada con un pliegue de pÃ¡gina, y dentro, una hoja con la W de
WiniPDF â€” preservada, como todo lo que abras con este lector.

El dÃºo negro + amarillo es ademÃ¡s un homenaje a los colores de SumatraPDF.

<p align="center">
  <img src=".github/screenshots/wini-carbon.png" width="380" alt="Tema Wini (oscuro)">&nbsp;
  <img src=".github/screenshots/wini-amber.png" width="380" alt="Tema Wini Light">
</p>
<p align="center"><sub>Temas propios <b>Wini</b> y <b>Wini Light</b> â€” predeterminados segÃºn el modo claro/oscuro de Windows</sub></p>

### Lo que hereda de SumatraPDF

- Lectura de PDF, ePub, MOBI, XPS, DjVu, CHM, CBZ/CBR, FB2 y mÃ¡s
- Velocidad de apertura legendaria, sin esperas
- VersiÃ³n portable, sin instalaciÃ³n
- Interfaz en decenas de idiomas

### PrÃ³ximamente (roadmap)

- **Asistente IA integrado** (desactivado por defecto): resÃºmenes del documento,
  modo voz para accesibilidad, y proveedores conectables (elige tu IA)
- **Suite de ediciÃ³n de documentos** (desactivada por defecto): conversiÃ³n de
  formatos, anotaciones avanzadas, estilo iLovePDF
- **Temas de la comunidad**: importa y comparte tus propios temas (estilo
  Obsidian)
- **ModernizaciÃ³n visual Fluent**: pestaÃ±as estilo Windows 11, materiales Mica
- VersiÃ³n portable oficial y publicaciÃ³n en Microsoft Store

### El ecosistema Wini (visiÃ³n a futuro)

Si el proyecto crece, la misma filosofÃ­a Fluent + identidad propia llegarÃ¡ a:
un reproductor basado en VLC, un visor de fotos y videos moderno, y un cliente
de mÃºsica basado en YouTube Music sin anuncios. Cada app con su personalidad,
todas compartiendo alma.

Las funciones experimentales nunca se activan sin tu consentimiento explÃ­cito:
el rendimiento es la razÃ³n nÃºmero uno por la que existe este proyecto.

## CrÃ©ditos

Este proyecto fue llevado a cabo en **[opencode](https://opencode.ai)** con la
IA **Ox Alpha Free** como cofundadora tÃ©cnica: arquitectura del fork,
identidad visual, sistema de empaquetado, temas Wini, automatizaciÃ³n de builds
y esta pÃ¡gina son trabajo conjunto humano-IA. Sin ella, este proyecto no
existirÃ­a. Agradecemos a sus creadores y distribuidores por hacerla accesible.

**Base y corazÃ³n del motor**: [SumatraPDF](https://github.com/sumatrapdfreader/sumatrapdf)
por **Krzysztof Kowalczyk** y toda su comunidad de contribuidores, mÃ¡s los
autores de las librerÃ­as de terceros (MuPDF y demÃ¡s, ver AUTHORS). Este fork
existe parado sobre sus hombros.

Humano cofundador y diseÃ±o del icono: **Osvaldo** ([@osvrangel03-ranger](https://github.com/osvrangel03-ranger)).

## Dona para impulsar el ecosistema

Si WiniPDF te resulta Ãºtil, considera apoyar el proyecto: las donaciones se
destinan Ã­ntegramente a **costear las suscripciones de IA y herramientas de
agentes** que hacen posible el desarrollo de WiniPDF y los prÃ³ximos proyectos
del ecosistema Wini.

<p align="center">
  <a href="https://paypal.me/sald911">
    <img src="https://img.shields.io/badge/Dona-v%C3%ADa%20PayPal-ffb020?style=for-the-badge&logo=paypal&logoColor=white" alt="Dona vÃ­a PayPal">
  </a>
</p>

## Compilar

Requiere Visual Studio 2026 (carga de trabajo "Desarrollo para el escritorio
con C++") y [Bun](https://bun.sh):

```
bun cmd/build.ts -release
```

El ejecutable queda en `out/rel64/`.

## Licencia

GPLv3, heredada de SumatraPDF. Todos los crÃ©ditos del cÃ³digo base pertenecen a
Krzysztof Kowalczyk, los contribuidores de SumatraPDF y los autores de las
librerÃ­as de terceros (ver AUTHORS).

---

<a id="english"></a>

# WiniPDF (English)

A fast, lightweight document reader for Windows with its own visual identity
inspired by modern Windows 11 design.

WiniPDF is a fork of **[SumatraPDF](https://github.com/sumatrapdfreader/sumatrapdf)**
â€” the best lightweight reader for Windows, created by **Krzysztof Kowalczyk**
and its community. All credit for the engine and decades of polish belongs to
them; this project exists thanks to them.

**Why the amber stone?** *Amber encapsulates and lets you see without altering.
That is what a PDF is.* Our icon is a stylized amber stone with a page fold;
inside, a leaf with the WiniPDF W â€” preserved, like everything you open with
this reader. The black + yellow duo also honors SumatraPDF's colors.

<p align="center">
  <img src=".github/screenshots/wini-carbon.png" width="380" alt="Wini dark theme">&nbsp;
  <img src=".github/screenshots/wini-amber.png" width="380" alt="Wini Light theme">
</p>

Own **WiniCarbon** (dark) and **WiniAmber** (light) themes are the defaults, following your Windows light/dark mode.

**Coming soon**: built-in AI assistant (off by default, voice accessibility
mode, pluggable providers), document editing suite, Fluent visual
modernization, official portable build and Microsoft Store release.

**Build**: Visual Studio 2026 (C++ desktop workload) + [Bun](https://bun.sh):
`bun cmd/build.ts -release` â†’ `out/rel64/`.

**License**: GPLv3, inherited from SumatraPDF.
