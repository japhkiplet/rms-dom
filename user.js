document.addEventListener('DOMContentLoaded', function() { 
    const list = document.querySelector('#register ul');
    const forms = document.forms;
   
       // delete user
       list.addEventListener('click', (e) => {
           if (e.target.className == 'delete') {
               const li = e.target.parentElement;
               li.parentNode.removeChild(li);
           }
       });
   
       // add user
       const addForm = forms['add-user'];
       addForm.addEventListener('submit', function(e) { 
           e.preventDefault();
   
           // create elements
            const usernameInput = document.getElementById("username");
            const idNoInput = document.getElementById("id-number");
            const countryInput = document.getElementById("country");
            const languageInput = document.getElementById("language");
            const deleteBtn = document.getElementById("add");
            
           // add text content
           username.textContent = value;
           idNoInput.textContent = value;
           countryInput.textContent = value;
           languageInput.textContent = value;
           deleteBtn.textContent = 'delete';
   
           // add classes
           username.classList.add('name');
           deleteBtn.classList.add('delete');
   
           // append to DOM
           li.appendChild(username);
           li.appendChild(deleteBtn);
           list.appendChild(li);
   
           // clear input
           addForm.querySelector('input[type="text"]').value = '';
           
       })

   function AllUsers(){
    const storedUsers = JSON.parse(localStorage.getItem('allusers'));
    for (let user of storedUsers){
        console.log(user)
        forms = document.createElement('li');
        for (const[ key, value] of Object.entries(user)){
            const tableData = document.createElement('li');
            tableData.innerText = value;
        forms.appendChild(ul);
        }
        forms.appendChild(li)
    }
    // return storedUsers;
}
// console.log(usersArray)
AllUsers();
   });
