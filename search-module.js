
/*
//module의 예시
module.exports = function searching(array, name){
    for(let i = 0; i < studentList.length; i++){
        if(studentList[i] === name){
            console.log(i);
        }else{
            console.log("해당순서는 ${name}씨가 아닙니다.");
        }
     }  
 }


 export default function searching(array, name){
    for(let i = 0; i < studentList.length; i++){
        if(studentList[i] === name){
            console.log(i);
        }else{
            console.log("해당순서는 ${name}씨가 아닙니다.");
        }
     }  
 }
 */


 const studentList = [
    "강지민",
    "곽윤호",
    "권예준",
    "김동주",
    "김은아",
    "김종윤",
    "김지섭",
    "김형진",
    "노수민",
    "류은이",
    "박달재",
    "박수연",
    "박준형",
    "성해경",
    "이경택",
    "이세민",
    "이재권",
    "임지성",
    "장루빈",
    "정성철",
    "정지은",
    "정희은",
    "최대건",
    "한유진",
    "허진",
  ];

  class User{
    constructor(order,name){
        this.order = order;
        this.name = name;
    }
    set order(order){
        if(typeof(order) === 'number'){
            this._order = order;
        }
    }
  }

  let test = [];
  studentList.forEach((student,index) => {
    test.push(new User(index, student));
  });

  console.log(test);


/*
const example = {
    order : 0,
    name : "강지민"
}

//? 생성자 함수 방식
//객체를 찍어낸다
function makeObject(order,name){
        this.order = order;
        this.name = name;

        function order(order){
            if(typeof(order) === 'number'){
                return this._order;
            }
        }
    
}

//? 객체 리턴 방식
//객체를 만들어낸다
function makeObject(order, name){
    return {
        order : order,
        name : name
    }
}

//?객체 리턴 방식2
function makeObject(order,name){
        if(typeof(order) === number){
            return {
                order : order,
                name : name
            }
    }else{
        console.log('order는 숫자여야 합니다.');
    }
}


let a = makeObject(0, studentList[0]);
*/