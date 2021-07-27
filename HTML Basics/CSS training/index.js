function openPage(pageName,elemt,color){
    var i,tabcontent,tablinks;
    tabcontent=document.getElementsByClassName('tabcontent');
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName('tablink');
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor="";
    }
    document.getElementById(pageName).style.display="block";
    elemt.style.backgroundColor=color;
}

function onKeyDownFunction(){
    let z="",x=null,y;
    console.log(x==z);
    console.log(z==y);
    console.log(x==y);


    let a=3;
    a=a+1;
    console.log(a);


}

function changeColor(){
    let ele = document.getElementsByClassName("change-color");

    for(i in ele){
        if(ele[i].style)
            ele[i].style.backgroundColor="white";
    }
}

function changeColor1(){
    let ele = document.getElementsByClassName("change-color1");

    for(i in ele){
        if(ele[i].style)
            ele[i].style.backgroundColor="red";
    }
}

function loadFunction(){
    document.getElementById("defaultOpen").click();
    let btn = document.getElementById("BUTTON_1");
    btn.addEventListener("click", (e)=>{
        e.stopPropagation()
    } );
}

function onInputFocus(){
    let dropdown = document.getElementById("OPTION-DROPDOWN");
    if(dropdown.style.display ==="none")
        dropdown.style.display="block";
    else   
        dropdown.style.display="none";
}

function onButtonClick(){
    alert("button Clicked")
}

function onDivClick(){
    alert("div clicked")
}

function greeting(name){
    alert("Welcome "+name)
}

function onKeyDownFunction(callback){
    let userName = document.getElementById("USERNAME").value;
    callback(userName);
}

function onInputChange(){
    onKeyDownFunction(greeting);    
}

function Test(a1,a2,a3){
    this.a1=a1;
    this.a2=a2;
    this.a3=a3;
    this.a4 = () =>{
        return "hello "+a1;
    }
    return a1+" "+a2+" "+a3;
}

function onKeyDownFunction(){
    // let TestConst = new Test("first","second","third");
    // console.log(TestConst)
    // console.log(TestConst.a4())
    let a=[1,2,3,4,5,6,7,8];

    let Array3 = arr.filter( e => {
        if(e%2==0)
            return e;
    })    
    console.log(Array3);
}


function advancedJS(){
    let arr = [
    {key:"1", value:"test1"},
    {key:"2", value:"test2"},
    {key:"3", value:"test3"},
    {key:"3", value : "test4"}
    ]

    let Array = arr.find( e => e.value == "test2")
    let Array2 = arr.map( e => e.key == "1")
    let Array3 = arr.filter( e => e.key=="3")

    console.log(Array)
    console.log(Array2)
    console.log(Array3)

}