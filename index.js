// Your code here

class Polygon{

     constructor(sides){
        this.sides=sides
        // this.count=this.sides.length
       }

        get countSides(){
            return this.sides.length
        }

        // get perimeter(){
        //     return this.sides.reduce((total, eachSide) => total + eachSide, 0)
        // }
     
        get perimeter() {
            // if (!Array.isArray(this.sides)) return;
            let sum = 0;
            for (let num of this.sides) {
              sum += num
            }
            return sum
          }


}

class Triangle extends Polygon{

    get isValid(){
        // if (this.sides===3){

        //   let side1=this.sides[0]
        //   let side2=this.sides[1]
        //   let side3=this.side3[2]
        // return (side1 +side2 >side3 && side1+side3 >side2 && side2 +side3 >side1)
        
        // } else if(this.sides !==3){
        //     console.warn('This is not a triangle')
        // }
    //......................................................................................
        // if (!Array.isArray(this.sides)) return; //checks if the array is an array
       
        if (this.sides.length !== 3) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
      
        
    }
}


class Square extends Polygon{

    get isArray() {
    // if (!Array.isArray(this.sides)) return;
    if (this.sides.length !== 4) return;
     let side1 = this.sides[0]
     let side2 = this.sides[1]
     let side3 = this.sides[2]
     let side4 = this.sides[3]
     return ((side1 === side2) && (side1 === side3) && (side1 === side4) && (side2 === side3) &&(side2=== side4) && (side3===side4))
  }

  get area() {
    // if (!Array.isArray(this.sides)) return;
    if (this.sides.length !== 4) return;
    return this.sides[0] * this.sides[0]
  }
     

}
