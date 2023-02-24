# React Basic

Aprender conceptos basicos de React

## React

React puede ser muy útil para el desarrollo de aplicaciones web modernas e interactivas. React es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario (UI) interactivas y de una sola página. Fue creado por Facebook y lanzado en 2013. React se ha convertido en una de las herramientas más populares para la creación de aplicaciones web modernas y escalables, especialmente aquellas que manejan grandes cantidades de datos y requieren actualizaciones frecuentes. La principal ventaja de React es su capacidad para manejar y actualizar la interfaz de usuario en tiempo real sin tener que recargar la página completa. Utiliza un enfoque basado en componentes, lo que significa que las interfaces de usuario se descomponen en componentes pequeños y reutilizables, lo que facilita la creación y el mantenimiento de aplicaciones complejas. React también se integra fácilmente con otras bibliotecas y frameworks de JavaScript, como Redux y Angular. Esto permite a los desarrolladores construir aplicaciones personalizadas para satisfacer las necesidades específicas de su proyecto.

## Componentes de React

Los componentes son la piedra angular de React y son la forma principal en que se construyen las interfaces de usuario en React. Los componentes son como piezas de lego que se pueden ensamblar para crear una interfaz de usuario completa. En React, los componentes se pueden dividir en dos tipos: componentes funcionales y componentes de clase. Ambos tipos de componentes se crean con JavaScript y JSX (una extensión de sintaxis de JavaScript que permite escribir código HTML como código JavaScript). Los componentes funcionales son funciones que toman algunas propiedades (props) y devuelven elementos de React. Son más simples y fáciles de entender que los componentes de clase, pero no tienen estado propio (state) ni métodos de ciclo de vida. Los componentes de clase son clases de JavaScript que extienden la clase base React.Component. Estos componentes tienen estado propio y pueden tener métodos de ciclo de vida.

## Crear proeycto en React

1. Se requiere Node.js: React se ejecuta en Node.js, por lo que necesitas tener Node.js instalado en tu máquina. Puedes descargar la última versión de Node.js desde su sitio web oficial: https://nodejs.org. NPM (Node Package Manager): NPM es un gestor de paquetes de Node.js que se utiliza para instalar y administrar las dependencias de React. NPM se instala automáticamente cuando instalas Node.js.
2. Un editor de código: Necesitarás un editor de código para escribir y editar tu código de React. Hay muchos editores de código disponibles, como Visual Studio Code, Atom, Sublime Text, etc.
3. Instalar la herramienta: $ npm install -g create-react-app. Se puede verificar la version de la herramienta con: $ create-react-app --version
4. Crear el proeycto: $ create-react-app mi-aplicacion

## Comandos principales para crea un proyecto en React

- npm start: Este comando inicia el servidor de desarrollo y abre la aplicación en tu navegador predeterminado en http://localhost:3000. Cada vez que realices cambios en los archivos, la aplicación se recargará automáticamente.

- npm run build: Este comando crea una versión optimizada para producción de tu aplicación en la carpeta "build". Este proceso incluye la optimización del código, la creación de un archivo index.html y la copia de todos los archivos estáticos necesarios para la aplicación.

- npm test: Este comando ejecuta las pruebas de la aplicación utilizando el marco de prueba Jest.

- npm run eject: Este comando te permite expulsar tu aplicación de Create React App y proporciona acceso completo a la configuración y herramientas de construcción. Este comando es irreversible y no se recomienda a menos que sepas lo que estás haciendo.
