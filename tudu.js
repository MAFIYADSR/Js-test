function tudu(event) {
    event.preventDefault();
    const todoname = document.getElementById('todoname').value;
    const description = document.getElementById('description').value;

    axios.post("https://crudcrud.com/api/590bf275b97c47c5afa423708b7b8a03/whatToDo", obj)
        .then((response) => {
            showUserOnscreen(response.data)
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/590bf275b97c47c5afa423708b7b8a03/whatToDo")
        .then((response) => {
            console.log(response)
            for(var i = 0; i<response.data.length; i++)
            {
                showUserOnscreen(response.data[i])
            }
        })
        .catch((error) => {
            console.log(error)
        })
})

function showUserOnscreen(obj){
    const parentElem = document.getElementById('listofitems');
    const childElem = `<li id= ${obj._id}> ${obj.todoname}- ${obj.description}
                          <button onclick=deleteUser('${obj._id}')> DeleteUser</button>
                        </li>`

    parentElem.innerHTML = parentElem.innerHTML + childElem;

    function deleteUser(userId)
    {
        axios.delete(`https://crudcrud.com/api/590bf275b97c47c5afa423708b7b8a03/whatToDo/${userId}`)
            .then((response) => {
                removeUserFromScreen(userId)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function removeUserFromScreen(userId)
    {
        const parentElem = document.getElementById('listofitems')
        const childNodeToBeDeleted = document.getElementById(userId);
        if (childNodeToBeDeleted) {
            parentElem.removeChild(childNodeToBeDeleted)
        }
    }
}
