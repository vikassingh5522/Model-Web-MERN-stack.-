


function loginUser(username , callback){

    console.log("logging in user...");
        setTimeout ( () => {
            callback({username :"vikas" , id : 123})
        }, 2000)
};

function featchPermissions(id, callback){
     console.log("featching permissions for" ) ;
     setTimeout(() => {
        callback(['read' , 'delete']);
     },3000)
};

function lodDashboard(permissions, callback){
    console.log("loading dashboard with permissions ") ;      
    setTimeout ( () => {
        setTimeout ( () => {
            callback();
        })
    })

};


loginUser("vikas" , function(userData){
    featchPermissions(userData.id , function(Permissions){
        lodDashboard(Permissions , function(){
            console.log(" ✅ dashboard loaded");
        })
    })
    
})   

//   this all  is called callback hell