const string =`
*{box-sizing: border-box; margin: 0;padding: 0;}
*::after,*::before{
  box-sizing: border-box;
}
body{
  background: #d4ecf9;
}
.head{
  border: 3px solid black;
  width: 200px;
  height: 200px;
  position: relative;
  top: 100px;
  left: 50%;
  margin-left: -100px;
  border-radius: 50%;
  background: #35a1c9;
}
.head .face{
  border: 3px solid black;
  position: absolute;
  width: 170px;
  height: 170px;
  left: 50%;
  top: 14px;
  margin-left: -85px;
  border-radius: 50%;
  background: white;
}
.head .face .eye{
  border: 1px solid black;
  width: 48px;
  height: 48px;
  position: absolute;
  left: 50%;
  margin-left: -24px;
  border-radius: 50%;
  background: white;
}
.head .face .eye.left::before{
  content: "";
  width: 15px;
  height: 23px;
  position: absolute;
  top: 10px;
  left: 24px;
  border: 1px solid black;
  display: block;
  border-radius: 50%;
  background: black;
}
.head .face .eye.left .yuan1{
  width: 3px;
  height: 6px;
  position: absolute;
  top: 18px;
  left: 32px;
  border: 1px solid white;
  border-radius: 50%;
  background: white;
}
.head .face .eye.right::before{
  content: "";
  width: 15px;
  height: 23px;
  position: absolute;
  top: 10px;
  left: 10px;
  border: 1px solid black;
  display: block;
  border-radius: 50%;
  background: black;
}
.head .face .eye.right .yuan2{
  width: 3px;
  height: 6px;
  position: absolute;
  top: 18px;
  left: 13px;
  border: 1px solid white;
  border-radius: 50%;
  background: white;
}
.head .face .eye.left{
  transform: translateX(-24px);
}
.head .face .eye.right{
  transform: translateX(24px);
}
.head .face .nose{
  border: 1px solid black;
  width: 34px;
  height: 34px;
  position: absolute;
  left: 50%;
  top: 40px;
  margin-left: -17px;
  border-radius: 50%;
  background: #b11735;
}
.head .face .nose::before{
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  top: 8px;
  left: 8px;
  display: block;
  border-radius: 50%;
  background: white;
}
.head .face .nose::after{
  content: "";
  border: 1.2px solid black;
  width: 2px;
  height: 15px;
  position: absolute;
  top: 33px;
  left: 50%;
  margin-left: -1px;
  display: block;
  background: black;
}
.head .face .mouth{
  border: 1px solid red;
  position: absolute;
  width: 140px;
  height: 70px;
  top: 85px;
  left: 50%;
  margin-left: -70px;
  border-radius: 0 0 140px 140px;
  background: #B11635;
  overflow: hidden;
}
.head .face .mouth::before{
  content: "";
  width: 56px;
  height: 92px;
  position: absolute;
  top: 15px;
  left: 35px;
  display: block;
  border-radius: 50%;
  transform: rotate(-50deg);
  background: #ca2533;
}
.head .face .mouth::after{
  content: "";
  width: 56px;
  height: 92px;
  position: absolute;
  top: 15px;
  left: 45px;
  display: block;
  border-radius: 50%;
  transform: rotate(50deg);
  background: #ca2533;

}
.head .face .beard{
  position: absolute;
  border: 1px solid black;
  width: 62px;
  height: 2px;
  top: 60px;
  left:50%;
  background: black;
  margin-left: -31px;
}
.head .face .beard.left{ 
  transform: translateX(-60px);
}
.head .face .beard.left::before{
  content: "";
  position: absolute;
  border: 1px solid black;
  display: block;
  width: 60px;
  height: 2.5px;
  top: -9px;
  left:2px;
  background: black;
  transform: rotate(15deg);
  transform-origin: right;
}
.head .face .beard.left::after{
  content: "";
  position: absolute;
  border: 1px solid black;
  display: block;
  width: 62px;
  height: 2.5px;
  top: 8px;
  left:0;
  background: black;
  transform: rotate(-15deg);
  transform-origin: right;
}
.head .face .beard.right{ 
  transform: translateX(60px);
}
.head .face .beard.right::before{
  content: "";
  position: absolute;
  border: 1px solid black;
  display: block;
  width: 60px;
  height: 2.5px;
  top: 8px;
  left:-2px;
  background: black;
  transform: rotate(15deg);
  transform-origin: left;
}
.head .face .beard.right::after{
  content: "";
  position: absolute;
  border: 1px solid black;
  display: block;
  width: 62px;
  height: 2.5px;
  top: -9px;
  left:-2px;
  background: black;
  transform: rotate(-15deg);
  transform-origin: left;
}
.neck{
  border: 1px solid black;
  position: relative;
  width: 100px;
  height: 50px;
  left: 50%;
  top: 310px;
  margin-left: -50px;
  border-radius: 50%;
  background: #a1172e;
}
.neck .bell{
  border: 2px solid black;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 40px;
  left: 50%;
  margin-left: -17.5px;
  border-radius: 50%;
  background: #f19629;
}
.neck .bell::before{
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  top: 15px;
  left: 50%;
  margin-left: -4px;
  display: block;
  border-radius: 50%;
  background: black;
}
.neck .bell::after{
  content: "";
  width: 15px;
  height: 2px;
  position: absolute;
  top: 24px;
  left: 50%;
  margin-left: -7.5px;
  display: block;
  background: black;
}
.uplimb{
  width: 300px;
  height: 200px;
  position: relative;
  top: 250px;
  left: 50%;
  margin-left: -150px;
  float: left;
}
.uplimb .arm{
border: 3px solid black ;
width: 100px;
height: 55px;
position: absolute;
top: 30px;
left: 50%;
margin-left: -50px;
border-radius: 50%;
background: #35a1c9;
}
.uplimb .arm.left{
  transform: translateX(-80px) rotate(45deg);
}
.uplimb .arm.right{
  transform: translateX(80px) rotate(-45deg);
}
.uplimb .arm.left .hand{
  border: 3px solid black;
  width: 65px;
  height: 65px;
  position: absolute;
  top: -20px;
  left: -35px;
  border-radius: 50%;
  background: white;
}
.uplimb .arm.right .hand{
  border: 3px solid black;
  width: 65px;
  height: 65px;
  position: absolute;
  top: -20px;
  left: 63px;
  border-radius: 50%;
  background: white;
}
.uplimb .body{
  border: 3px solid black;
  width: 142px;
  height: 172px;
  position: absolute;
  left: 50%;
  margin-left: -71px;
  border-radius: 150px/140px;
  background: #35a1c9;
}
.uplimb .body::before{
  content: "";
  width: 100px;
  height: 60px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -50px;
  display: block;
  border-radius: 50%;
  background: white;
}
.uplimb .body::after{
  content: "";
  border: 3px solid black;
  width: 60px;
  height: 30px;
  position: absolute;
  top: 115px;
  left: 50%;
  margin-left: -30px;
  display: block;
  border-radius: 0 0 60px 60px;
}
.uplimb .foot{
  border: 3px solid black;
  position: absolute;
  width: 55px;
  height: 85px;
  top: 115px;
  left: 50%;
  margin-left: -27.5px;
  border-radius: 50%;
  background: white;
}
.uplimb .foot.left{
  transform: translateX(-27px);
}
.uplimb .foot.right{
  transform: translateX(27px);
}
.fly{
  border: 2px solid black;
  width: 2px;
  height: 10px;
  position: relative;
  top: -110px;
  left: 50%;
  margin-left: -1px;
}
.fly .a{
  border: 3px solid black;
  width: 20px;
  height: 10px;
  position: absolute;
  top: -10px;
  left: -10px;
  border-radius: 20px 20px 0 0;
  background: #bd8d22;
}
.fly .b{
  border: 2px solid black;
  width: 80px;
  height: 2px;
  position: absolute;
  top: -2px;
  left: -40px;
  animation: wave 240ms infinite linear;
  transform-origin: center
}
@keyframes wave{
  0%{transform: rotateY(0deg);}
  33%{transform: rotateY(180deg);}
  66%{transform: rotateY(270deg);}
  100%{transform: rotateY(360deg);}
}`

export default string;