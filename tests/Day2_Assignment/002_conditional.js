/**
 * conditional statements:
 * 1. if    - if statement is used to execute a block of code only if the condition is true
 * 2. else  - else statement is used to execute a block of code if the same condition is false      
 * 3. else if - else if statement is used to specify a new condition if the first condition is false    
 * */

//if statement
/**function getBrowserName() {
    if (browser === 'edge') {
        return 'Supported browser'
    }
    else {
        return 'Unsupported browser'
    }
}
let browser = 'edge'
console.log (getBrowserName())*/

/**function getBrowserVersion(){
    if (browserName === 'chrome'){
        return 'version of chrome'
    }

    else if (browserName === 'edge')
    {
        return 'version of edge'
    }
    else if (browserName === 'opera'){
        return 'version of Opera'
    }

    else {
        return 'data is unavailable'
    }


}
let browserName = 'opera'
console.log(getBrowserVersion());*/

function learningSwitch(){
    switch (browser) {
        case 'chrome':
            return 123
            break;

        case 'edge':
            return 324

        case 'opera':
            return 489

    
        default:
            return 'unsupported browser'
            break;
    }
}

browser = 'edge';
let functionName = learningSwitch();
console.log(functionName);




