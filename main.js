let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(k,j){
    for(let i=0; i< dog_names.length; i++){
        let j = dog_names[i].toLowerCase();
        let k = dog_string.toLowerCase();
        if(k.includes(j)){
            console.log("Matched dog_names");
        }
        else{
            console.log("No Matches")
        };
    };
};

console.log(findWords(dog_string, dog_names));

function findWords(dogS, dogA){

    for(i of dogA){
        if (dogS.toLowerCase().includes(i.toLowerCase())){
            console.log("Matched dog_names")
        }
        else{
            console.log("No Matches");
        };
    };
};

console.log(findWords(dog_string, dog_names));

let array = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
let arr = [];
function replaceEvens(){
    for(let i=2; i< (array.length+2); i++){
        if (i % 2 === 0){
            arr.push("even index");
        }
        else{
            arr.push(array[i-2]);
        };
    };
    console.log(arr);
};
replaceEvens();