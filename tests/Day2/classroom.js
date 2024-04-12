/*function launchBrowser() {
    let browserName = 'safari'

    if (browserName === 'chrome') {
        console.log('I am a chrome browser')
          }
    
    else if (browserName === 'firefox') {
        console.log('I am a firefox browser')
            }
    else if (browserName === 'safari') {
        console.log('I am a safari browser')
        
    }
    else {
        console.log('I am a browser')
        
    }

    
}
    launchBrowser();*/

    /**
     * 2. Exercise 
     */
function runTests() {

    switch (testType) {
        case "smoke":
        console.log("Smoke test is done")
            
            break;

        case "sanity":
        console.log("Sanity test is done")
            break;

        case "regression":
        console.log("Regression test is done")
            
            break;
            
           
        default:

        console.log("smoke test is done from default")


            break;
    }
    
}

let testType = 'smoke'
console.log(runTests())