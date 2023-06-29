function test(event) {
    event.preventDefault();
    const todo = document.getElementById('todo').value;
    const description = document.getElementById('description').value;


    // var user = localStorage.setItem("username", username);
    // var em = localStorage.setItem("email", email);
    // var pass = localStorage.setItem("password", password);

    const obj = {
        todo,
        description
    }
    // localStorage.setItem(obj.email, JSON.stringify(obj));
    axios.post("https://crudcrud.com/api/f4bae4ce1893414897a071ac3aee314a/tuDo", obj)
        .then((response) => {
            showUserOnScreen(response.data);
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    // showUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/f4bae4ce1893414897a071ac3aee314a/tuDo")
        .then((response) => {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i]);
            }
        })
        .catch((err) => {
            console.log(err);
        })

})
function showUserOnScreen(obj) {
    // document.getElementById('username').value = '';
    // document.getElementById('email').value = '';
    // document.getElementById('password').value = '';

    const parentNode = document.getElementById('listofitems');
    const childHTML = `<li id= ${obj._id}> ${obj.todo} - ${obj.description}
                            <button onclick= deleteUser('${obj._id}')> Delete User </button>
                        </li>`;

    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

function deleteUser(userId)
{
    axios.delete(`https://crudcrud.com/api/f4bae4ce1893414897a071ac3aee314a/tuDo/${userId}`)
        .then((response) => {
            removeUserFromScreen(userId)
        })
        .catch((err) => {
            console.log(err);
        })
}

// function editUser(todo, description, userId)
// {
//         document.getElementById('todo').value = todo;
//         document.getElementById('description').value =description;

//         deleteUser(userId);
// }

function removeUserFromScreen(userId)
{
    const parentNode = document.getElementById('listofitems');
    const childNodeToBeDeleted = document.getElementById(userId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}

// {/* <button onclick= editUser('${obj.todo}','${obj.description}','${obj._id}')> Edit User </button> */}
