
let marks = 100;
function studentsScore() {
    switch (true) {
        
        case marks >=90: 
            console.log("Grade A")
            break;
            
        case marks >=80 && marks <90:
            console.log("Grade B")
            break;
            
        case marks >=70 && marks <80:
            console.log("Grade C")
            break;
        
        default:
            console.log("Grade D")
            break;
    
    }
    
}

studentsScore();
