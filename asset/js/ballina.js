function Bright_night() {
     var t = new Date().getHours();
            if (t > 6 || t < 18) {
                document.body.style.backgroundColor="#294525";
            } else if (t > 18 || t < 6) {
                document.body.style.backgroundColor="#C1BDC3";
        } 
    }

function singup(e){
    event.preventDefault();
     console.log('working');

    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;

    var user = {
        email: email,
        name: name,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    console.log('Perdoruesi u shtua');
    window.location.href = 'login.html';   

    var name = localStorage.getItem('name');
    localStorage.setItem(name);
    document.getElementById('filani').innerHTML=name;
}

function loginFunc(e){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('error'); 
    var user = localStorage.getItem(name);
    var data = JSON.parse(user);
    console.log(data);

    if (name == data.name && pass == data.password){
        result.innerHTML = 'Sapo u kyçet, tani do te vazhdoni ne faqen kryesore...';
        setTimeout(function() {
             window.location.href = 'Ballina.html';
        }, 2500);

    }else if(name == data.name && pass != data.password) {
        result.innerHTML = 'Password i gabuar';
    }
    else if (name == null ) {
        result.innerHTML = 'Ky user nuk ekziston';
    }
 }

