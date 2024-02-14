import React,  { useState } from 'react';
import './Wrapper.css';
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import { event } from 'jquery';

const Wrapper = () => {
    let [num, setNum] = useState(0);
    let [oper, setOper] = useState(0);
    let [res, setRes] = useState(0);

    

    function onButtonClick(event) {
       // console.log("This button was clicked: " + event.target.innerHTML);
        setNum(event.target.innerHTML);
        let btn = event.target.innerHTML;
        
        const resetClickHandler = (btn) => {
            //console.log("in resetClickHandler");
            setNum(0);
            setOper(0);
            setRes(0);
        }

        const invertClickHandler = (btn) => {
            num = num * -1;
            setNum(num);
        }

        
        const percentClickHandler = (btn) => {
            num = parseInt(num.toString() + btn.toString());
            num = num / 100;
            setNum(num);
        }

        const operClickHandler = (btn) => {
            let currentNum = btn.toString();
            if (res === 0) {
                res = num;
                oper = currentNum;
                setRes(res);
                setOper(oper);
                setNum(0);
            }
            else if (res !== 0) {
                if (num !== 0) {
                    switch(oper) {
                        case "+":
                            res = res + num;
                            setRes(res);
                            break;
                        case "-":
                            res = res - num;
                            setRes(res);
                            break;
                        case "x":
                            res = res * num;
                            setRes(res);
                            break;
                        case "/":
                            res = res / num;
                            setRes(res);
                            break;
                    }
                    oper = currentNum;
                    setOper(oper);
                    setNum(0);
                }
            }
            

        
        }

        const equalClickHandler = (btn) => {
            num = parseInt(num.toString() + btn.toString());
            if (res !== 0) {
                switch(oper) {
                    case "+":
                        res = res + num;
                        setRes(res);
                        setNum(res);
                        break;
                    case "-":
                        res = res - num;
                        setRes(res);
                        setNum(res);
                        break;
                    case "x":
                        res = res * num;
                        setRes(res);
                        setNum(res);
                        break;
                    case "/":
                        res = res / num;
                        setRes(res);
                        setNum(res);
                        break;
                }
            }

        }

        const decClickHandler = (btn) => {
            num = parseInt(num.toString() + btn.toString());
            if (num.toString().indexOf(".") === -1) {
                num = num.toString() + ".";
                setNum(num);
            }
        }

        const numClickHandler = (btn) => {
            btn = parseInt(btn);
            console.log(btn);
            console.log(num);
            if(num.toString().length < 13){
            if (num === 0) {
                num = btn;
                setNum(num);
            }
            else{
                let numText = num.toString() + btn.toString();
                num = Number(numText);
                setNum(num); 
                console.log(numText);
                console.log("in numClickHandler");
                console.log(num);             
        }
    }else{
        setNum(num);
       // console.log("number is too big");
        //console.log(num);
    }
        
    }

        switch(btn) {
            case "C":
                resetClickHandler(btn);
                break;
            case "+-":
                invertClickHandler(btn);
                break;
            case "%":
                percentClickHandler(btn);
                break;
            case "/":
            case "x":
            case "-":
            case "+":
                operClickHandler(btn);
                break;
            case "=":
                equalClickHandler(btn);
                break;
            case ".":
                decClickHandler(btn);
                break;
            default:
                numClickHandler(btn);
                break;
        }

        console.log("after the handlers");
        console.log("num: " + num);
        console.log("oper: " + oper);
        console.log("res: " + res);
    
    }
    
    return(
        <div className="wrapper bg-dark-gray br3 pa3">
        <Screen value = {num ? num: res}/>
        <ButtonBox handleClick = {onButtonClick} />
        </div>
    );
};

export default Wrapper;