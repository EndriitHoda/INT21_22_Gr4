function Ora() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = Cakoren(m);
    s = Cakoren(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(Ora, 1000);
  }
  
  function Cakoren(i) {
    if (i < 10) {i = "0" + i};  // vendos 0 para numrave <10
    return i;
  }
  function login(){
  const password = document.getElementById('password')
  const password1 = document.getElementById('password1')
  const form = document.getElementById('form')
  const errorElement = document.getElementById('error')
  var nameRegex = /^[A-Z][a-z]{2,5}/;
  var emailRegex = /^\w+[._-]?\w+@[A-Za-z]+[-]?[A-Za-z]+\.[A-Za-z]{2,3}/;
 
  form.addEventListener('submit', (e)=>{
    var name = document.getElementById("name").value
    var email =  document.getElementById("email").value;
      let messages=[]
     if(password.value.length<=6){
        messages.push('Passwordi duhet te jete me i gjate se  6 karaktere')
      }
     if(password.value.length>=20){
        messages.push('Password nuk duhet te jete me i gjate se 20 karaktere')
        }
    if(password.value==='Passowrd'){
        messages.push('Password nuk guxon te jete Password')
        }
    if(nameRegex.test(name) == false){
       messages.push('Shkronja e pare e emir duhet te jete e madhe')
      }
    if(password.value!=password1.value){
      messages.push('Rishkruani fjalekalimin')
    }
    if(emailRegex.test(email) == false){
      messages.push('Email eshte dhene gabim')
     }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join('\n')
        }
        
  })
}
