"use strict";

function changeTabs(tab)
{
    var htmlContent = '';
    switch(tab){
        case 'home':
           htmlContent = '/html/home.html';
           break;        
        case 'projects':
          htmlContent = '/html/projects.html';
          break;
        case 'experience':
          htmlContent = '/html/experience.html';
          break;         
    }
    $('#personalContent').load(htmlContent); 
}

document.addEventListener('DOMContentLoaded', function() {
    $('#personalContent').load('/html/home.html');   
}, false);


