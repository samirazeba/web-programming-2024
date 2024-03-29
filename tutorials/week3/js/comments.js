getCommentsList = (baseUrl) => {
    fetch(baseUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const tableBody = document.querySelector("#comments-table tbody");

        data.map((row) => {
            const tableRow = document.createElement("tr");
            tableRow-innerHTML = `
                <td><a target="_blank" href="${baseUrl + "/" + row.postId}">${row.postId}</a></td>
                <td>${row.id}</td>
                <td>${row.name}</td>
                <td>${row.email}</td>
                <td>${row.body}</td> 
            `;
            tableBody.append(tableRow);           
        })
    })
    .catch((error) => {
        alert("PROBLEM HAPPENED");
    })
}
getCommentsList("https://jsonplaceholder.typicode.com/todos");