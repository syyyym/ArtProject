console.log("hello");

localStorage.setItem('name','Bob');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');


sessionStorage.setItem('name', 'John');
sessionStorage.setItem('name', 'Bob');
console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');

document.cookie = 'name=Kyle;expires=' + new Date(Date.now() + 60 * 1000).toString();
// document.cookie = 'name=Kyle;expires=' + new Date(2020,1,1).toString();

document.cookie = 'lastName=Smith;expires=' + new Date(2021, 11, 24).toString();

document.cookie = 'test=Hello;expires=' + new Date(9999, 11, 24).toString();

document.cookie = 'person=Mark;expires=' + new Date(9999, 11, 24).toString() + '; path=/';

console.log(document.cookie);

//delete cookie
document.cookie = 'test=Hello;expires=' + new Date(1999, 11, 24).toString();