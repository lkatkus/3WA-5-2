let s = "apple is red and tasty";

// let r2 = /(red).*(tasty)/;
let r2 = /(\w*) (\w*)/;

if(s.search(r2) >= 0){
    console.log("YRA");
}else{
    console.log("NERA");
}

// match and exec returns the same
console.log(s.match(r2));
console.log(r2.exec(s));

s = s.replace (r2,"$2 $1");
console.log(s);
