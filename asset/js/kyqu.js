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
  const form = document.getElementById('form')
  const errorElement = document.getElementById('error')
  var nameRegex = /^[A-Z][a-z]{2,5}/;
  
 
  form.addEventListener('submit', (e)=>{
    var name = document.getElementById("name").value
      let messages=[]
      try{
      if(nameRegex.test(name) == false) throw "me shkronje te madhe";
     
      }
      catch(err) {
        let result = name.replace(name, function (x) {
          return x.charAt(0).toUpperCase()+ x.slice(1); 
        });
        messages.push('Emri duhet te filloj '+ err+' per shembull: \" ' + result +" \"");
      }
      try{
       if(password.value.length<6) throw "me i gjate se 6 karaktere!";
       if(password.value.length>=20) throw "me i shkurte se 20 karaktere!";
      }
      catch(err) {
        messages.push('Password duhet te jete '+ err);
      }
      try {
       if(password.value==='Password') throw "Password nuk mund te jete \n \"Password\"!";
      }
       catch(err) {
        messages.push(''+ err);
      }
      if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join('\n')
        }
        
  })
}