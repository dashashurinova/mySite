
let run = document.querySelector('.algo__sort_enter-button');

run.addEventListener('click', function () {
   let arr = document.getElementById('arr__enter').value; 
    console.log(arr)
    let array = arr.split(/\s+/);
    array = array.map(e => +e); 
    console.log(arr)
    document.getElementById('answer__arr').innerHTML= quicksort(array)
    document.getElementById('answer__min').innerHTML= findSmallest(array)
    document.getElementById('answer__max').innerHTML= max(array)
    document.getElementById('answer__summ').innerHTML= sumArr(array)
    document.getElementById('answer__ammount').innerHTML= elemArr(array)
    console.log(document.getElementById('answer__arr').value)

})

function quicksort(arr){
    if (arr.length<=1){
        return arr;
    }
        const less =[];
        const more=[];
        const pivot = arr[arr.length-1];
        
        console.log("arr "+  arr)
        for (let i=0; i<arr.length-1; i++){
            if (arr[i]<pivot){
                less.push(' '+ arr[i])
                console.log("less "+  less)
            }
            else{more.push(' '+arr[i])
            console.log("more "+  more)
            }
        }
    return [...quicksort(less) , pivot ,  ...quicksort(more)]
}

function sumArr(arr){
    if (arr.length===0){
        return 0}
    else {
        sum=arr[0]+sumArr(arr.slice(1))
        console.log("summa "+ sum)
        return sum}
}

function max(arr){
    
    if (arr.length===2){
        if (arr[0]>arr[1]) {console.log(arr[0])
            return arr[0]} 
        else {console.log(arr[1])
                return arr[1]}
    }
    else {
        let submax= max(arr.slice(1))
        if (arr[0]>submax){
            console.log(arr[0])
            return arr[0]}
        else {return submax}
    }
}

function elemArr(arr){
    if (arr.length===0){
        return 0}
    else {
        sum=1+ elemArr(arr.slice(1))
        console.log("elementov "+sum)
        return sum}
}

function findSmallest(arr){
    let smallest = arr[0]
    let smInd = 0
    let i
    for (i=0; i<arr.length; i++)
        {if (arr[i]<smallest)
            {smallest=arr[i]
            smInd=i}
        }
        return smallest
}


// opening the description

let descriptionButtons= document.querySelectorAll('.algo__discription_item_title');
let descriptions= document.querySelectorAll('.algo__discription_item_text');

descriptionButtons.forEach((unit,item)=>{
    unit.addEventListener('click', function () {
    descriptions[item].classList.toggle('description__visibility');
})})
   

