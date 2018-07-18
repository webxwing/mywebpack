import _ from 'lodash';
import './style.css';
import Icon from './imgTest.jpg';
function component() {
    var element = document.createElement('div');
    //Loadash,now imported by this script
    element.innerHTML=_.join(['Hello','webpack'],'');
    element.classList.add('hello');

    //将图像添加至现有的div
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());