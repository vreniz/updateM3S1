// ============================================================
// GLOBAL VARIABLES
// ============================================================
const users = [];      // Array to store user objects
let idCounter = 0;     // Counter for auto-incremental IDs

// References to DOM elements
const tbody      = document.getElementById('table_body');
const emptyState = document.getElementById('empty-state');
const userCount  = document.getElementById('user-count');
const toast      = document.getElementById('toast');


// TRANSITION: WELCOME → MAIN PAGE

const startApp = () => {
  document.getElementById('welcome-page').style.display = 'none';
  document.getElementById('main-page').style.display    = 'block';
};



// TRANSITION: MAIN PAGE → WELCOME (and reset everything)

const resetApp = () => {
  // Clear the array and reset the ID counter
  users.length = 0;
  idCounter    = 0;

  // Clear the table rows and show the empty state again
  tbody.innerHTML          = '';
  emptyState.style.display = 'block';
  userCount.textContent    = '0';

  // Go back to the welcome page
  document.getElementById('main-page').style.display    = 'none';
  document.getElementById('welcome-page').style.display = 'flex';

  console.log('System reset. Users array:', users);
};



// MAIN FUNCTION: ADD USER

const addUser = () => {
  

  // Capture name with prompt
  const userName = prompt("Welcome! What is your name?");

  // If the user cancels the prompt, exit without doing anything
  if (userName === null) {
    return;
  }

  const userAge = Number(prompt(`Hi!! ${userName} How old are you?`));

  // Validate: age must be a number and greater than 0
  if (isNaN(userAge) || userAge <= 0|| !Number.isInteger(userAge)) {
    console.error("Error: Please enter a valid age in numbers.");
    showToast();
    return;
  }

  // Show dynamic message based on age
  if (userAge < 18) {
    const mensajeMenor = `Hi ${userName}, you are a minor. Keep learning and enjoying coding!`;
    alert(mensajeMenor);
    console.log(mensajeMenor);
  } else {
    const mensajeMayor = `Hi ${userName}, get ready for great opportunities in the world of programming!`;
    alert(mensajeMayor);
    console.log(mensajeMayor);
  }

  // Save user to the array
  users.push({ id: idCounter, name: userName, age: userAge, state: true });
  console.log(users);

  // Render the new row in the table
  renderRow(idCounter, userName, userAge);
  idCounter++;

  // Update visible counter and hide empty state
  userCount.textContent    = users.length;
  emptyState.style.display = 'none';

};


// RENDER A ROW IN THE TABLE
// Includes: ID, Name, Age, Category badge, Status badge, Delete button
const renderRow = (id, name, age) => {
  const tr = document.createElement('tr');

  // Determine category based on age
  const isMinor    = age < 18;
  const category   = isMinor ? 'Minor'  : 'Adult';
  const badgeClass = isMinor ? 'badge-menor' : 'badge-mayor';

  tr.innerHTML = `
    <td>#${String(id).padStart(3, '0')}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td><span class="${badgeClass}">${category}</span></td>
    <td><span class="badge">Active</span></td>
    <td>
      <button class="btn-delete" onclick="deleteRow(this, ${id})">
        ✕ Delete
      </button>
    </td>
  `;

  tbody.appendChild(tr);
};


// DELETE A ROW FROM THE TABLE
// Removes the row visually and from the users array
const deleteRow = (btn, id) => {
  // Find the <tr> that contains the clicked button
  const row = btn.closest('tr');

  // Add the CSS exit animation class
  row.classList.add('removing');

  // Wait for the animation to finish, then remove the element from the DOM
  setTimeout(() => {
    row.remove();

    // Remove the user from the array by matching the ID
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) users.splice(index, 1);

    // Update the visible counter
    userCount.textContent = users.length;

    // If no users remain, show the empty state again
    if (users.length === 0) {
      emptyState.style.display = 'block';
    }

    console.log(`User #${String(id).padStart(3,'0')} deleted. Remaining:`, users);
  }, 300); // 300ms matches the CSS transition duration
};



// SHOW ERROR TOAST ON SCREEN

const showToast = () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
};
