const Message = document.getElementById("message");
const Message2 = document.getElementById("message")

const Button = document.getElementById("loadBtn");


const profile = document.getElementById("profile");
const grades = document.getElementById("grades");
const schedule = document.getElementById("schedule");
const Button2 = document.getElementById("Button2")



function loadMessage(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            
            let success = true

            if(success){
                    resolve("welcome to PDM")
                }else{
                    reject("failed to load")
                }
        }, 3000)
    })
}

Button.addEventListener("click", function(){
    Message.innerHTML = "loading..."

    loadMessage()

    .then(function(result){
        Message.innerHTML = result
        Message.style.color = "blue"

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Assets...")
            }, 3000)
        })
    })

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Resources...")
            }, 3000)
        })
    })
    
    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Welcome Neil Aaron!!")
            }, 3000)
        })
    })

    .then(function(result){
    Message.innerHTML = result
})
})


Button2.addEventListener("click", function(){

    Message.innerHTML = "Dashboard Loading..."

    profile.innerHTML = "Profile: Waiting..."
    grades.innerHTML = "Grades: Waiting..."
    schedule.innerHTML = "Schedule: Waiting..."




const profilePromise = new Promise(function(resolve){
    setTimeout(function(){
        profile.innerHTML = "Profile: Loaded";
        resolve();
    }, 1000);
});

const gradesPromise = new Promise(function(resolve){
    setTimeout(function(){
        grades.innerHTML = "Grades: Loaded"
        resolve()
    }, 2000);
})

const schedulePromise = new Promise(function(resolve){
    setTimeout(function(){
        schedule.innerHTML = "Schedule: Loaded"
        resolve()
    }, 3000);
})

Promise.all([profilePromise, gradesPromise, schedulePromise])

.then(function(){
    Message.innerHTML = "Dashboard Ready!!"
});
})