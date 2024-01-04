
const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active"); 

  });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});




function showConfirmation(event) {
  event.preventDefault(); // Prevent the default link behavior
  
  var href = event.currentTarget.getAttribute('href'); // Get the href attribute from the clicked link
  var id = href.substring(href.indexOf('?id=') + 4); // Extract the ID from the href
  
  iziToast.question({
      overlay: true,
      toastOnce: true,
      color: 'green',
      id: 'question',
      message: 'Want to logout?',
      position: 'topRight',
      timeout:30000,
      buttons: [
          ['<button onclick="confirmAction(event, ' + id + ')">YES</button>', function (instance, toast) {
              instance.hide({ transitionOut: 'fadeOut' }, toast);
              confirmAction(event, id);
          }],
          ['<button onclick="cancelAction()">NO</button>', function (instance, toast) {
              instance.hide({ transitionOut: 'fadeOut' }, toast);
          }]
      ]
  });
  
  return false;
}

function confirmAction(event) {
  window.location.href = './logout.php';
}

function cancelAction() {
  console.log('cancelled');
  iziToast.warning({
      color: 'red',
      message: 'Logout Cancelled.',
      position: 'topRight', // Show the message at the top-right corner
      timeout: 2000 // Set the timeout to 5 seconds (5000 milliseconds)
  });
}