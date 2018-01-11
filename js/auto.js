export default class Auto {
    constructor( data ) {
        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    getTotal( taxRate ) {
        return this.price + ( this.price * taxRate );
    }

    getDetails() {
        return `${ this.year } ${ this.make } ${ this.model }`;
    }

    static myFunc() {
        console.log( "så kommer der en meget lang tekst her....." );
    }
}
