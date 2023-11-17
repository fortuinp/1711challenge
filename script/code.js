//let heading= document.getElementById('heading')
heading.textContent= 'Javascript';
let paragraph= document.getElementsByClassName('paragraph')[0];
//or document.querySelector('.paragraph')
paragraph.textContent='This is a language I have mastered and I am proud of myself. I complished this because I believed in myself';
let Subheading=document.querySelector('h3');
Subheading.textContent="Things I've accomplished so far"
let sub2 = document.getElementsByTagName('p')[1];
sub2.textContent= 'I have discovered that I can accomplish anything I put my mind to'
//or shorter version :document.getElementsByTagName('p')[1].innerText = "I have discovered that I can accomplish anything I put my mind to"
let input1=document.querySelector('[data-firstMultiply]');
let input2=document.querySelector('data-secondMultiply');
let btnMultiply=document.querySelector('[data-calculate1]')
let span1=document.querySelector('[data-first]')
console.log(span1.textContent);