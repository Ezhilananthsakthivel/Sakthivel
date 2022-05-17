//to create custom type

type colorData = "Red" | "Yellow" | "Blue" | "Green"
class Circle{
    radius : number = 1.0
    color: colorData = "Red"

    constructor(radius?:number, color?:colorData){
        if(typeof(radius)!=="undefined") { this.radius = radius }
        if(typeof(color)!=="undefined") { this.color = color }
    }
    
    getRadius():number{
        return this.radius
    }

    setRadius(radius:number){
        this.radius = radius
    }

    getColor():colorData{
        return this.color
    }

    setColor(color:colorData){
        this.color = color
    }

    toString():String{
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    getArea():number{
        return ((Math.PI)*this.radius*this.radius)
    }

    getCircumference():number{
        return (2*(Math.PI)*this.radius)
    }
}

let c1 = new Circle()
console.log("Constructor with no params: "+ c1.toString())

let c2 = new Circle(3.5)
console.log("Constructor with one param: "+ c2.toString())

let c3 = new Circle(2.2, 'Yellow')
console.log("getRadius: "+c3.getRadius())
c3.setRadius(3.3)
console.log("Radius value after setRadius: " +c3.getRadius())
console.log("getColor: "+c3.getColor())
c3.setColor("Blue")
console.log("Color Value after setColor: " + c3.getColor())
console.log(c3.toString())
console.log("Area: "+c3.getArea())
console.log("Circumference: "+c3.getCircumference())