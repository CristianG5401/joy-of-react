//Agregar documentacion con jsdoc
/**
 * Renderiza un elemento de React en el DOM
 * @param {object} reactElement - El elemento de React a renderizar
 * @param {HTMLElement} containerDOMElement - El contenedor donde se va a renderizar el elemento
 * @returns {void}
 */
function render(reactElement, containerDOMElement) {
  // Crear un Elemento DOM
  const domElement = document.createElement(reactElement.type);
  // Agregarle los atributos al elemento
  for (const propName in reactElement.props) {
    domElement.setAttribute(propName, reactElement.props[propName]);
  }
  // Agregarle los hijos al elemento
  domElement.innerText = reactElement.children;

  // Agregar el elemento nuevo al DOM para que sea visible
  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://wikipedia.org/',
  },
  children: 'Read more on Wikipedia',
};

const containerDOMElement =
  document.querySelector('#root');

render(reactElement, containerDOMElement);