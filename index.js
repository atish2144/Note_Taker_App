let myarr = [];

const textAreaEl = document.getElementById("textArea-el");
const inputBtn = document.getElementById("input-btn");
const Notes = document.getElementById("notes");
const areaEl = document.getElementsByClassName("area-el");
const P1 = document.getElementById("p1");

let ls = JSON.parse(localStorage.getItem("myarr"));

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
display();

//add notebtn
inputBtn.addEventListener("click", function () {
  let a = "";

  myarr.push(textAreaEl.value);

  console.log(myarr);
  textAreaEl.value = "";

  localStorage.setItem("myarr", JSON.stringify(myarr));
  display();
});

//display
function display() {
  a = "";
  for (let i = 0; i < myarr.length; i++) {
    a += `
        <div class="area-el" id="xyz">
        Note ${i + 1}: ${myarr[i].slice(0, 10)}...
        <button onclick="deleteVal('${i}')">x</button>
        <br>
        <button id="show" class="xyz1" onclick="displayBlock('${
          myarr[i]
        }')">Show content</button>        
</div>
        `;
  }
  Notes.innerHTML = a;
}

// delete a particular Note
function deleteVal(val) {
  for (let i = 0; i < myarr.length; i++) {
    if (i == val) {
      myarr.splice(i, 1);
      //      alert("are you sure to delete");
      localStorage.setItem("myarr", JSON.stringify(myarr));
      display();
    }
  }
}

function displayBlock(val) {
  document.getElementById("p1").innerText = val;
  modal.style.display = "block";
}

// When the user clicks on the button, open the modal
// function displayBlock(val) {
//   //console.log(areaEl[val]);
//   P1.textContent = areaEl[val].textContent;
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
