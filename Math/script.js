let arr = ["(", "(", "(", ")", "(", "(", ")", "(", ")", ")", ")", "("];   // input from the train conductor
let lgth = arr.length;    // finds how many elements are in the array
let output = "";    // helps up be able to output all the different elements into one string
let end = "";
let east = 0;
let west = 0;
let endNum = 0;

loop:
while(true) {
    for(let i = 0; i <= lgth; i++) {   // checks every single element inside the array
        if(arr[0] == "(") {            //checks to see what is the first direction
            if(arr[i] == "(") {         // if element is ( then it will
                output += "West, "      // add to the output that he went west
                west ++;
            }
            if(arr[i] == ")") {         // if the element isnt ( but is ) then it will
                output += "East, "      // add to the output that he went east
                east ++;
            }
        }
    }

    console.log(`He went East ${east} times.`);  // outputs how many times he went to the East
    console.log(`He went West ${west} times.`);  // outputs how many times he went to the West
    
    console.log(`From the start he went ${output}`); // W, W, W, E, W, W, E, W, E, E, E, W

    if(west < east) {  // finds which one is bigger then
        endNum = east - west;   // finds where he is at from the starting point
        console.log(`He went East ${endNum} from the starting point`)  // outputs the dirction and how many stations he went from the starting point
    }
    if(west > east) { // finds which one is bigger then
        endNum = west - east;   // finds where he is at from the starting point
        console.log(`He went west ${endNum} from the starting point`)  //outputs the dirction and how many stations he went from the starting point
    }
    break loop;   // ends the loop so that way it doesnt contine on forever
}