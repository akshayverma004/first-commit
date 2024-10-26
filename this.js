// function showName() {
//     console.log(this.name);
// }

// const user = { name: 'Bob' };

// showName.call(user); // Logs "Bob"

var hello={
    a:45,
    b:null,
    c:undefined,
    func1:function(){
        console.log(this)
    }
}
hello.func1()// here this shows where is it created