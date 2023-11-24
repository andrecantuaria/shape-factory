'use strict';

//import { onEvent, select } from "./uf.js";
//import { Shape } from './classes.js';



// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    getInfo() {
        return `Shape: ${this._name}, Color: ${this._color}`;
    }
}

// Main Cod
const shape = select('.shape');
const color = select('.color');
const createBtn = select('.create');
const disableBtn = select('.disable-btn');
const output = select('.output');
const info = select('.info');

createBtn.addEventListener('click', createShape);

const shapes = [];

function createShape() {
    const selectedShape = shape.value;
    const selectedColor = color.value;

    const newShape = new Shape(selectedShape, selectedColor);
    shapes.push(newShape);

    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${selectedShape}`;
    shapeDiv.style.backgroundColor = selectedColor;
    output.appendChild(shapeDiv);

    checkCapacity();
}

function checkCapacity() {
    if (shapes.length >= 30) {
        createBtn.style.display = 'none';
        disableBtn.style.display = 'block';
        let infoText = 'The container is full. Refresh your page to empty it.';
        info.textContent = infoText;
    } else {
        createBtn.style.display = 'block';
        disableBtn.style.display = 'none';

        info.textContent = 'Choose the shape and color of the element to fill the container.';
    }
}


checkCapacity();