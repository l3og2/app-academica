# 🚀 App Académica | Dev Portfolio - FinnovaVzla

![Ionic](https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Una aplicación móvil híbrida desarrollada como portafolio interactivo, demostrando la fusión entre la lógica de negocios financieros/contables y el desarrollo de software escalable.

## 🧠 Sobre el Proyecto

Este proyecto nace de la necesidad de presentar un perfil profesional de alto valor. Desarrollada por **Leonardo Gonzalez** (TSU en Informática y estudiante de Ingeniería), la app destaca el ecosistema de **YI Technology GV13** y **FinnovaVzla**, combinando más de 15 años de experiencia en administración pública/privada con el desarrollo Full Stack moderno.

## 🏗️ Arquitectura y Buenas Prácticas

A diferencia de las aplicaciones Angular tradicionales, este proyecto fue construido utilizando los últimos estándares de la industria:

- **Standalone Components:** Cero dependencias de `NgModules`. Cada página y componente es una isla independiente que importa estrictamente lo que necesita, mejorando el *Tree Shaking* y el tiempo de carga.
- **Enrutamiento Funcional:** Uso de `loadComponent` en `app.routes.ts` para implementar *Lazy Loading* (carga perezosa) nativo y optimizado.
- **Control Flow Moderno:** Implementación de la nueva sintaxis `@for` y `@if` de Angular 17+ directamente en los templates HTML, dejando atrás directivas estructurales pesadas como `*ngFor`.
- **UI/UX (Mobile First):** Interfaz construida con Ionic Framework, implementando el patrón *Side Menu* (Menú Lateral), grillas responsivas y diseño adaptativo.

## 📱 Estructura de Navegación

La aplicación cuenta con 3 módulos principales:

1. **🏠 Inicio (`/inicio`):** Landing page tipo "Hero" que expone la visión de marca, integrando conceptos Fintech y soluciones de infraestructura IT.
2. **👤 Información Personal (`/info-personal`):** Un currículum interactivo que detalla el Stack Tecnológico (MERN, Angular, Linux) y la formación académica usando componentes visuales avanzados (Badges, Avatars, Cards).
3. **✉️ Contacto (`/contacto`):** Vista de interacciones que incluye información de localización y un formulario UI limpio para la captación de requerimientos.

## 🛠️ Instalación y Despliegue Local

Para correr este proyecto en tu máquina, necesitas tener instalado [Node.js](https://nodejs.org/) y la [CLI de Ionic](https://ionicframework.com/docs/cli).

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd app-academica