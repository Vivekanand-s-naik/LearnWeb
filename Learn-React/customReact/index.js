
function insertReactElement(reactElem, DOMElement){
    //create element and then add its porpery and at the end update the DOM 
    const newElem = document.createElement(reactElem.type);
    newElem.innerHTML = reactElem.children;
    for (const prop in reactElem.props) {
        if (prop === 'chaildren') continue;
        newElem.setAttribute(prop, reactElem.props[prop]);
    }
    DOMElement.insertAdjacentElement('beforeend', newElem);
}


const rootElem = document.getElementById('root');

const reactElem = {
    type:'a',
    props: {
        href: 'https://www.google.com/',
        target : '_parent'
    },
    children : 'Click Here To Redirect To Google'
} 
insertReactElement(reactElem, rootElem);