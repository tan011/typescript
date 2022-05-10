class Animal {
    Sound: string;
    constructor(sound:string){
        this.Sound = sound
}

    }
    


class Aog extends Animal{
    Food:string;
    constructor(sound:string,food:string) {
        super(sound)
        this.Food = food;
        
    
    }
    display(): void{
    console.log('my bark'+this.Food)
    console.log('my bark'+this.Sound)
    }
    
}


let bj = new Aog('ham','bark');
bj.display()