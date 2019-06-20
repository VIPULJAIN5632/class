function person (name,age){
    this.firstname=name.split(" ")[0]
    this.lastname=name.split(" ")[1]
    this.isAdult=function(){
        return age >18
    }

}
let p=new person("jhon wick",34)
let h=new person("himal kahmid",17)
console.log(p)
console.log(h)
console.log(p.isAdult())
console.log(h.isAdult())


