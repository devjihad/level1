

let btn1 = document.getElementById('Andres')
btn1.addEventListener('click',function(){
    let value = document.getElementById('and').innerText
    // let valueText = value.innerText
    let list = document.getElementById('list')
    let li = document.createElement("li")
    li.innerText= value
    list.appendChild(li)
    btn1.disabled = true;
})

let btn2 = document.getElementById('eden')
btn2.addEventListener('click',function(){
    let value = document.getElementById('edenValue')
    let valueText = value.innerText
    let list = document.getElementById('list')
    let li = document.createElement("li")
    li.innerText=valueText
    list.append(li)
    btn2.disabled = true;
})

let btn3 = document.getElementById('mbappe')
btn3.addEventListener('click',function(){
    let value = document.getElementById('mbappeValue')
    let valueText = value.innerText
    let list = document.getElementById('list')
    let li = document.createElement("li")
    li.innerText=valueText
    list.append(li)
    btn3.disabled = true;
})

let btn4= document.getElementById('mene')
btn4.addEventListener('click',function(){
    let value = document.getElementById('meneValue')
    let valueText = value.innerText
    let list = document.getElementById('list')
    let li = document.createElement("li")
    li.innerText=valueText
    list.append(li)
    btn4.disabled = true;
})
let btn5 = document.getElementById('messi')
btn5.addEventListener('click',function(){
    let value = document.getElementById('messiValue')
    let valueText = value.innerText
    let list = document.getElementById('list')
    let li = document.createElement("li")

    li.innerText=valueText
    list.append(li)
    btn5.disabled = true;
})

let btn6 = document.getElementById('pogba')
btn6.addEventListener('click',function(){
    let value = document.getElementById('pogbaValue')
    let valueText = value.innerText
    let list = document.getElementById('list')
    let li= document.createElement("li")
    li.innerText=valueText
    list.append(li)
    console.log(list)
    btn6.disabled = true;
})
// AI KHANE ARO KAJ BAKI ACHE
let calculate = document.getElementById('playerCalculate')
calculate.addEventListener('click', function(){
    let player = document.getElementById('playerBudget')
    let playerBudgetValue = document.getElementById('playerBudgetValue')
    let playerBudget= player.value
    let playerBudgetin = parseInt(playerBudget) 
    
    playerBudgetValue.innerText=playerBudgetin *5
    
})

// CALCULATOR 2
let calculator2 = document.getElementById('calculator2')
calculator2.addEventListener('click', function(){
    let manager =document.getElementById('manager')
    let coach = document.getElementById('coach')
    let total = document.getElementById('total')
    let playerBudgetValue = document.getElementById('playerBudgetValue')
    let playerBudget =playerBudgetValue.innerText
    let player = parseInt(playerBudget)
    let managerr = manager.value;
    let manegervalue = parseInt(managerr)
    let coachh = coach.value
    let coachvalue = parseInt(coachh)
    total.innerText= player + manegervalue + coachvalue

})