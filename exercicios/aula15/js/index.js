document.querySelector(".button").addEventListener('click',handleClick);
const date = new Date().getFullYear();

function handleClick(){
  const age = document.querySelector("#age"); 
  const gender = document.querySelectorAll("input.sex") 
  // sanitizeNumberInput(age);
  // getAge(sanitizeNumberInput(age));
  
  if((age.value).length < 4){
    alert("Por Favor Preencha os campos abaixo!");
  }else{
    if(age.value > date){
      alert("Data Inválida!")
    }else{
      getPeople(getSelectedGender(gender),getAge(sanitizeNumberInput(age)));
    }
  }

}

function sanitizeNumberInput(age){
  const newAge = Number(age.value);
  return newAge;
  
}

function getSelectedGender(gender){
  let genders = ['Um Homem','Uma Mulher']
  for(let i=0;i<gender.length;i++){
    if(gender[i].checked){
      let index = i;
      // console.log(genders[index]);
      // console.log(index);
      return genders[index];
    }
  }

}
function getAge(age){
    newAge = age;
    return date - newAge;
  
}
function getPeople(gender,age){
    genders = gender;
    newAge = age;

    let html = '<div class="html"></div>';
    html += verifyPerson(age,gender,html);
    html += `Detectamos ${genders} com ${newAge} anos`
    document.querySelector('.html').innerHTML = html;
  
}

function verifyPerson(age,gender,html){
  let image

  if(age >= 0 && age < 11){
    console.log("Criança")
    if(gender == "Um Homem"){
      console.log("Homem");
      image = "https://images.pexels.com/photos/7105798/pexels-photo-7105798.jpeg?auto=compress&cs=tinysrgb&w=600";
    }else{
      console.log("Mulher");
      image = "https://images.pexels.com/photos/14752730/pexels-photo-14752730.jpeg?auto=compress&cs=tinysrgb&w=600";
    }
  }

  if(age >= 11 && age < 18){
    console.log("Jovem")
    if(gender == "Um Homem"){
      console.log("Homem");
      image = "https://images.pexels.com/photos/9353444/pexels-photo-9353444.jpeg?auto=compress&cs=tinysrgb&w=600";
    }else{
      console.log("Mulher");
      image = "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600";
    }
  }

  if(age >= 18 && age < 30){
    console.log("Jovem Adulto")
    if(gender == "Um Homem"){
      console.log("Homem");
      image = "https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=600";
    }else{
      console.log("Mulher");
      image = "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600";
    }
  }

  if(age >= 30 && age < 60){
    console.log("Adulto")
    if(gender == "Um Homem"){
      console.log("Homem");
      image = "https://images.pexels.com/photos/4586676/pexels-photo-4586676.jpeg?auto=compress&cs=tinysrgb&w=600";
    }else{
      console.log("Mulher");
      image = "https://images.pexels.com/photos/11179656/pexels-photo-11179656.jpeg?auto=compress&cs=tinysrgb&w=600";
    }
  }

  if(age >= 60 && age < 120){
    console.log("Idoso")
    if(gender == "Um Homem"){
      console.log("Homem");
      image = "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600";
    }else{
      console.log("Mulher");
      image = "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=600";
    }
  }
  
  if(age >= 120){
    console.log("Morto")
    if(gender == "Um Homem"){
      console.log("Morto");
      image = "https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=600";
    }else{
      console.log("Morto");
      image = "https://images.pexels.com/photos/9740352/pexels-photo-9740352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    }
  }
  
  return html += `<img class="img" src=${image}><br>`
  
  

}


// handleClick()

