  var userEmail=document.querySelector('#email');
  var userPassword=document.querySelector('#password');
  var userName=document.querySelector('#name');
  var btnLogin=document.querySelector('#login');
  var btnSignUP=document.querySelector('#btnSignUP')
  var signUP=document.querySelector('#signUP')
  var incorrect=document.querySelector('#incorrect');
var loginPage=document.querySelector('#loginPage');
var logoutPage=document.querySelector('#logoutPage');
var btnlogOut =document.querySelector('#logOut');
var welcome=document.querySelector('#welcome');
var invalidName=document.querySelector('#invalidName');
var invalidEmail=document.querySelector('#invalidEmail')
var requiredInputs=document.querySelector('#requiredInputs');

  var storeData=[];




  userName.addEventListener('input',function(){
    validateName();
  })
 userEmail.addEventListener('input',function(){
   validateEmail();
  })


  signUP.addEventListener('click',function(e){
    incorrect.classList.replace('d-block','d-none')
    e.preventDefault();
    userName.classList.replace('d-none','d-block')
    document.querySelector('#haveACC').innerHTML=`<p id="p" class="text-white">have an account?    <a href="" class="text-white text-decoration-none" id="signUP">Sign in </a> </p> `
    btnSignUP.classList.replace('d-none','d-block');
    btnLogin.classList.add('d-none')
    
  })
 
  btnSignUP.addEventListener('click',function(){
    incorrect.classList.replace('d-block','d-none')

    if(validateName())
    {
      addUser()
      clearForm();
    }
   
   
  })
  
  
  btnLogin.addEventListener('click',function(){

  if(storeData=JSON.parse(localStorage.getItem("data"))==null)
  {
    incorrect.classList.replace('d-none','d-block')
  }
  else
  {
    if(Login())
    {
  
      
      loginPage.classList.add('d-none');
      logoutPage.classList.replace('d-none','d-block')
   
    }
    else
    {
      
        incorrect.classList.replace('d-none','d-block')
      
        
    }
  }
    
    
  
  }) 
  btnlogOut.addEventListener('click',function(e){
  e.preventDefault;
  logoutPage.classList.replace('d-block','d-none');
  loginPage.classList.replace('d-none','d-block')
  })
 
 
  function addUser()
  {
    storeData=[];
    var userData=
       { 
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
       }
      storeData.push(userData);
      localStorage.setItem('data',JSON.stringify(storeData))
      console.log('added');
  }
  
  function clearForm()
  {
    userName.value='';
    userEmail.value='';
    userPassword.value='';
  }
  
  
  function Login()
  {
    
    var storedEmail=[];
    var StoredPassword=[];
    var storedName=[];
   

    if(userEmail.value !='' &userPassword.value!='')
    {
      
      storeData=JSON.parse(localStorage.getItem("data"));
     
      for(var i=0;i<storeData.length;i++)
      {
        storedEmail.push(storeData[i].email);
        StoredPassword.push(storeData[i].password)
       storedName.push(storeData[i].name);
      
       if(storedEmail[i].includes(userEmail.value) && StoredPassword[i].includes(userPassword.value))
       {
           
           welcome.innerHTML=`Welcome ${storedName[i]}`;
           
       return true
       break;
       }
      
      }
    }
    else
   {
    incorrect.classList.replace('d-none','d-block');
   }
    
   
    }
       
     
       
      
        
  function validateName()
  {
    var regex=/^[A-Z][a-z]{2,9}$/;

    if(regex.test(userName.value))
    {
      invalidName.classList.replace('d-block','d-none')
      userName.classList.replace('is-invalid','is-valid')
      return true
    }
    else
    {
      invalidName.classList.replace('d-none','d-block')
      userName.classList.add('is-invalid')
      return false
      
    }
  }
  
  function validateEmail()
  {
    var regex=/([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+[a-zA-z0-9_.+-]/;
    if(regex.test(userEmail.value))
    {
      invalidEmail.classList.replace('d-block','d-none');
      userEmail.classList.replace('is-invalid','is-valid')
      return true
    }
    else
    {
      invalidEmail.classList.replace('d-none','d-block');
      userEmail.classList.add('is-invalid')
      return false

    }
  }











