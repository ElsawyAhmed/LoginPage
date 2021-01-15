var users = [], userN, userP, userM;
var user = { userN, userP, userM };
user = {
    userN: "Ahmed", userP: "123", userM: "elsawyahmed@gmail.com"
};
users.push(user);
    function valiatePassword(){
        var password = document.geteElementById("pass").value;
        
    }
        
    function authenticate() {
        var currn = document.getElementById("name").value;
        var currp = document.getElementById("pass").value;
        var i;

        for (i = 0; i < users.length; i++) {
            if (currn == users[i].userN) {
                if (currp == users[i].userP)
                    document.getElementById("msg").innerHTML = "Successful login >> Your Mail is : </br>" + users[i].userM + " ";
                else
                    document.getElementById("msg").innerHTML = "Failed to login Wrong Password";

            }
            else
                document.getElementById("msg").innerHTML = "Failed to login Wrong User";

        }
    }
function add() {
    var currn = document.getElementById("name").value;
    var currp = document.getElementById("pass").value;
    var currm = document.getElementById("email").value;
    var newuser = {
        userN: currn, userP: currp, userM: currm
    }
    users.push(newuser);
    console.log(users.length);
    document.getElementById("msg").innerHTML = "User Added Successfully ";

}
