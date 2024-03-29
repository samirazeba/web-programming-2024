getTodosListItems = (baseUrl) => {
    fetch(baseUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const tableBody = document.querySelector("#todods-table tbody");

        data.map((row) => {
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td><a target = "_blank" href = "${baseUrl + "/" + row.id}">${row.id}</a></td>
                <td>${row.userId}</td>
                <td>${row.title}</td>
                <td>${row.completed}</td>
            `;
            tableBody.append(tableRow);
        })
    })
    .catch((error) => {
        alert("PROBLEM HAPPENED ", error);
    })
}

getTodosListItems("https://jsonplaceholder.typicode.com/todos");