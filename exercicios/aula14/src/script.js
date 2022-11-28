function getAge()
{

  var data = new Date()
  var ano = data.getFullYear()
  var age = document.querySelector("input#age")
  nowAge = Number(age.value)  
  var male = document.querySelector("input#male")
  var female = document.querySelector("input#female")
  res = document.querySelector("div.image")

  

  if(nowAge == 0 || nowAge == ano)
  {
    window.alert("error")
  }else
  {
    var radsex = document.getElementsByName("radsex")
    var fAge = nowAge - ano 
  }

}