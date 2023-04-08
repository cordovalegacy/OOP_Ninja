class Ninja{
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`Ninja's Name: ${this.name}`)
        return this
    }

    showStats(){
        console.log(`${this.name}'s Stats\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`)
        
    }

    drinkSake(boost){
        this.health = this.health + boost
        return this
    }
}


const boost = 10
const ninja1 = new Ninja("Charles", 10)
ninja1.drinkSake(boost).sayName().showStats()

//You don't need to return this when you're just console logging and not actually returning a value...BUT
//in order to chain two methods that are not returning values, those methods need to return this. Otherwise, you'll get a TypeError because undefined doesn't have those methods.
// So, in this particular case, you need to modify the sayName() and showStats() methods to return this in order to chain them together.