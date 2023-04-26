let alertShow = false
setInterval(()=>{
    document.title =
    alertShow ? "calculadoraReloj"
              : "digitalHouse"
             
    alertShow = !alertShow          
}, 1000)

setInterval(() => {
    let clock = document.getElementById('clock')
    let daydisplay = document.getElementById('day')
    let month = document.getElementById('month')
    let year = document.getElementById('year')
  
    // Getting Time
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (minutes <= 9) {
      minutes = `0${minutes}`
    }
    let seconds = date.getSeconds()
    if (seconds <= 9) {
      seconds = `0${seconds}`
    }
  
    // Month & Year
    let cDate = date.getDate()
    let cMonth = date.getMonth() + 1
    let cYear = date.getFullYear()
    // Days
    let day = date.getDay()
  
    let daysName = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ];
  
    // Display AM or PM
    if (hours < 12) {
      document.getElementById('amOrpm').innerHTML = 'Am'
    } else {
      document.getElementById('amOrpm').innerHTML = 'Pm'
    }
  
    // Display Clock
    clock.innerHTML = `${hours}:${minutes}:${seconds} `
  
    // Display Day
    daydisplay.innerHTML = ` ${daysName[day]}  ${cDate}`
  
    // Display Month
    month.innerHTML = `${cMonth}`
  
    // Display Year
    year.innerHTML = `${cYear}`
  }, 1000)
  

function add(){
    let input1 = parseFloat(document.getElementById('input1').value)
    let input2 = parseFloat(document.getElementById('input2').value)
    let output = input1 + input2 
    document.getElementById('output').innerHTML=output
}

function res(){
    let input1 = parseFloat(document.getElementById('input1').value)
    let input2 = parseFloat(document.getElementById('input2').value)
    let output = input1 - input2 
    document.getElementById('output').innerHTML=output
}
function mul(){
    let input1 = parseFloat(document.getElementById('input1').value)
    let input2 = parseFloat(document.getElementById('input2').value)
    let output = input1 * input2 
    document.getElementById('output').innerHTML=output
}
function div(){
    let input1 = parseFloat(document.getElementById('input1').value)
    let input2 = parseFloat(document.getElementById('input2').value)
    let output = input1 / input2 
    document.getElementById('output').innerHTML=output
}
function rest(){
    let input1 = parseFloat(document.getElementById('input1').value)
    let input2 = parseFloat(document.getElementById('input2').value)
    let output = input1 % input2 
    document.getElementById('output').innerHTML=output
}
function reset(){
    let input1 = parseFloat((document.getElementById('input1').value=''))
    let input2 = parseFloat((document.getElementById('input2').value=''))
    document.getElementById('output').innerHTML=00
}
