export class View {

    constructor(selector) {
        
        this._elem = document.querySelector(selector);
    }

    update(model) {
        
        this._elem.innerHTML = this.template(model);
    }

    template(model) {
        
        throw new Error('You have to implement the template method.');
    }
}