'use strict';document.addEventListener('DOMContentLoaded',()=>{slideSwitcher(),serviceSwitcher(),writeUsButton()});function slideSwitcher(){const a=document.querySelector('.slider-control');a.addEventListener('click',b=>{const c=b.target.dataset.number;if(c&&switchSlide(c),'LI'===b.target.tagName){for(let d=0;d<a.children.length;d++){const e=a.children[d];e.className='slide-toggle'}b.target.className='slide-toggle-selected'}})}function switchSlide(a){const b=document.querySelector('.slider');for(let c=0;c<b.children.length;c++){const d=b.children[c];d.style.display='none';const e='slide'===d.classList[0]&&`slide-${a}`===d.classList[1];e&&(d.style.display='flex')}document.querySelector('.slider-control').style.display='block'}function serviceSwitcher(){const a=document.querySelector('.service-buttons');a.addEventListener('click',b=>{let c=b.target.classList[1];c&&(c=c.split('-')[2],switchService(c))})}function switchService(a){const b=document.querySelector('.service-slides');for(let d=0;d<b.children.length;d++){const e=b.children[d];e.style.display='none';const f=`service-${a}`===e.classList[1];f&&(e.style.display='block')}const c=document.querySelector('.service-buttons');for(let d=0;d<c.children.length;d++)c.children[d].className='',parseFloat(a)===d+1&&(c.children[d].className='selected-service')}function writeUsButton(){const a=document.querySelector('.modal-write-us'),b=document.querySelector('.write-us-button');b.addEventListener('click',d=>{d.preventDefault(),a.style.display='block'});const c=document.querySelector('.modal-close');c.addEventListener('click',()=>{a.style.display='none'})}