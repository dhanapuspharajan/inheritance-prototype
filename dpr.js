// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent = {
   
    age:50,
    name:"parent",
    ar:[],
    showName:function(){
        console.log(this.name);
    },
    Rname :function(){
       
        let  keys = [];
        for (let key in this){
         keys.push(key)
        };
    return keys;
         
    },
    sum:function(){

        return this.ar.reduce((acc,cur) => acc+cur,0);
    }    
}

const child = Object.create(parent);
child.ar =[1,2,3,4,5];
 child.name ="child";
 child.height =5.7;

// 2. Write code to explain prototype chaining

const obj_1 ={ // here we create an prototype of object
    name:"first obj",

    getName: function(){ // function to log the object's name.
        console.log(this.name);
    }
}

const obj_2 =Object.create(obj_1); //here we create an obj named obj_2 with the prototype obj_1. And we can access the function of obj_1 Prototype in obj_2.

obj_2.name = "ram"; 

//through obj_2 inherited by Obj_1,we can call the getName function in obj_2.

console.log(obj_2.getName()); // here it prints the obj_2's name by using the function of prototype(Obj_1) inherited in it.

obj_2.greet =function(){
    console.log("hi mr "+this.name);
}; // created an function greet to print in obj_2.


const obj_3 = Object.create(obj_2); //here we create obj_3 with the Obj_2 as prototype & inherite obj_2 & obj_1's properties and functions.

obj_3.name ="dpr";
console.log(obj_3.greet());
console.log(obj_3.getName()); //here its a prototype chaining where obj2 uses obj1's function and obj3 uses obj2's & obj1.




// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
console.log(child.sum());


const grandchild =Object.create(child);
grandchild.name ="grand child";
grandchild.ar =[5,5,4,5];
grandchild.hobby ="music";
console.log(grandchild.sum());



// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

 let gc = grandchild.Rname();
 console.log(gc);



