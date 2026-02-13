// Immediately Invoked Function Expression (IIFE) : global scope ki vajah se jo pollution create hota h usse hatane ke liye use hota h iife function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})
();

// () ()  // it denoted like this and ; ye jarur lagao end me to terminate

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) (`hitesh`)