document.querySelector(".button").addEventListener('click',handleClick);


function handleClick(){
  let age = document.querySelector("#age"); 
  let gender = document.querySelectorAll("input.sex") 
  let date = new Date().getFullYear();

  // sanitizeNumberInput(age);
  // getAge(sanitizeNumberInput(age));
  
  if((age.value).length < 4){
    alert("Por Favor Preencha os campos abaixo!");
  }else{
    if(age.value > date){
      alert("Data Inválida!")
    }else{
      verifyPerson(getAge(sanitizeNumberInput(age)),getSelectedGender(gender));
      getPeople(getSelectedGender(gender),getAge(sanitizeNumberInput(age)));
    }
  }
  


}

function sanitizeNumberInput(age){
  let newAge = Number(age.value);
  let checkAge = newAge;
  return newAge;
  
}

function getSelectedGender(gender){

  let genders = ['Um Homem','Uma Mulher']
  for(i=0;i<gender.length;i++){
    if(gender[i].checked){
      let index = i;
      // console.log(genders[index]);
      // console.log(index);
      return genders[index];
    }
  }

}
function getAge(age){
  let date = new Date().getFullYear();
    newAge = age;
    return date - newAge;
  
  
}
function getPeople(gender,age){
    genders = gender;
    newAge = age;

    let html = '<div class="html"></div>';
    html += `<img src=>`
    html += `Detectamos ${genders} com ${newAge} anos`
    document.querySelector('.html').innerHTML = html;
  

}

function verifyPerson(age,gender){

  if(age >= 0 && age < 11){
    console.log("Criança")
    if(gender == "Um Homem"){
      console.log("Homem")
    }else{
      console.log("Mulher")
    }
  }

  if(age >= 11 && age < 18){
    console.log("Jovem")
    if(gender == "Um Homem"){
      console.log("Homem")
    }else{
      console.log("Mulher")
    }
  }
  if(age >= 18 && age < 30){
    console.log("Jovem Adulto")
    if(gender == "Um Homem"){
      console.log("Homem")
    }else{
      console.log("Mulher")
    }
  }
  if(age >= 30 && age < 60){
    console.log("Adulto")
    if(gender == "Um Homem"){
      console.log("Homem")
    }else{
      console.log("Mulher")
    }
  }
  if(age >= 60){
    console.log("Idoso")
    if(gender == "Um Homem"){
      console.log("Homem")
    }else{
      console.log("Mulher")
    }
  }
  drawImage();
  

}

function drawImage(){
  

}

// handleClick()

