async function obtainData(){

    let link='https://www.coursehubiitg.in/api/codingweek/contributions';
    try{
        let response=await fetch(link);
        return await response.json();
    }

catch(error)
{
    console.log(error);
}
}

async function Display()
{
let data=await obtainData();
console.log(data);
var size=0;
for (let x in data)
{   
    size=size+1;
}
let a=[];
for (let i=0;i<size;i++)
{
    a.push([]);
    a[i].push(parseInt(data[i].points,10));
    a[i].push(data[i].name);
    a[i].push(data[i].avatar);
}
a=a.sort(function(x,y)
{
    return x[0]-y[0];
})

let a_length=a.length;
for (let i=0;i<a_length-4;i++)
{
    console.log((a[i][2]));
}
a.reverse();
console.log(data);

document.getElementById('c2').style.backgroundImage="url('" + a[0][2] + "')";
document.getElementById('c1').style.backgroundImage="url('" + a[1][2] + "')";
document.getElementById('c3').style.backgroundImage="url('" + a[2][2] + "')";
document.getElementById('p1').innerHTML = a[1][1];
document.getElementById('p2').innerHTML = a[0][1];
document.getElementById('p3').innerHTML = a[2][1];
document.getElementById('s1').innerHTML = a[1][0];
document.getElementById('s2').innerHTML = a[0][0];
document.getElementById('s3').innerHTML = a[2][0];


for (var i=0;i<(a_length-3);i++){
    
let st = i.toString();
let y1 = 580+155*i;
let y2 = 605+155*i;
let y3 = 590+155*i;

const para1 = document.createElement("span");
para1.setAttribute("id","para1"+st);
document.getElementById("div").appendChild(para1);
document.getElementById("para1"+st).style.position ='absolute';
document.getElementById("para1"+st).style.width = '100%';
document.getElementById("para1"+st).style.height='145px';
document.getElementById("para1"+st).style.left='0px';
document.getElementById("para1"+st).style.background='#D2D4F2';
document.getElementById("para1"+st).style.top = y1.toString()+'px';
console.log(document.getElementById("para1"+st).style);

const para2 = document.createElement("span");
para2.setAttribute("id","para2"+st);
document.getElementById("div").appendChild(para2);
document.getElementById("para2"+st).style.position ='absolute';
document.getElementById("para2"+st).style.width = '100px';
document.getElementById("para2"+st).style.height='100px';
document.getElementById("para2"+st).style.left='80px';
document.getElementById("para2"+st).style.borderRadius = '50%';
document.getElementById("para2"+st).style.display = 'inline-block';
document.getElementById("para2"+st).style.background = '#BABEFF';
document.getElementById("para2"+st).style.borderStyle= 'solid';
document.getElementById("para2"+st).style.borderWidth= '8px';
document.getElementById("para2"+st).style.borderColor= '#FFFFFF';
document.getElementById("para2"+st).style.backgroundImage="url('" + a[i+3][2] + "')";
document.getElementById("para2"+st).style.top = y2.toString()+'px';
console.log(document.getElementById("para2"+st).style);

const para3 = document.createElement("p");
para3.setAttribute("id","para3"+st);
const node3 = document.createTextNode("" + a[i+3][1] + "" + "");
para3.appendChild(node3);
document.getElementById("div").appendChild(para3);
document.getElementById("para3"+st).style.position ='absolute';
document.getElementById("para3"+st).style.left='270px';
document.getElementById("para3"+st).style.fontFamily= 'Inter';
document.getElementById("para3"+st).style.fontStyle= 'normal';
document.getElementById("para3"+st).style.fontWeight= '400';
document.getElementById("para3"+st).style.fontSize= '45px';
document.getElementById("para3"+st).style.lineHeight='39px';
document.getElementById("para3"+st).style.color= '#1E1E1E';
document.getElementById("para3"+st).style.top = y3.toString()+'px';
console.log(document.getElementById("para3"+st).style);

const para4 = document.createElement("p");
para4.setAttribute("id","para4"+st);
const node4 = document.createTextNode("" + a[i+3][0] + "");
para4.appendChild(node4);
document.getElementById("div").appendChild(para4);
document.getElementById("para4"+st).style.position ='absolute';
document.getElementById("para4"+st).style.left='1450px';
document.getElementById("para4"+st).style.fontFamily= 'Inter';
document.getElementById("para4"+st).style.fontStyle= 'normal';
document.getElementById("para4"+st).style.fontWeight= '400';
document.getElementById("para4"+st).style.fontSize= '45px';
document.getElementById("para4"+st).style.lineHeight='39px';
document.getElementById("para4"+st).style.color= '#000000';
document.getElementById("para4"+st).style.top = y3.toString()+'px';
console.log(document.getElementById("para4"+st).style);

}
}

Display();


