var data = {
    "users": [{
        "id": 11,
        "name": "Nam Nguyen Hai",
        "email": "nam.nguyenhai@yuriqa.com",
        "password": "fsadfsadfsadffd",
        "created_at": "2019-06-26 13:33:46",
        "updated_at": "2019-06-26 13:33:46"
    }, {
        "id": 10,
        "name": "Ethyl Medhurst",
        "email": "noah.hand@example.org",
        "password": "$2y$10$GLfHbVK.\/jG2WD8QQ0.ZDOqqeJe7rz.hl827sKoHOhd9LLoXfyHHG",
        "created_at": "2019-03-26 04:55:04",
        "updated_at": "2019-03-26 04:55:04"
    }, {
        "id": 9,
        "name": "Eula Lebsack PhD",
        "email": "schroeder.sylvan@example.org",
        "password": "$2y$10$.vzCIUVX34GibJ3.ObFqYu5Bd.Ig8PqF3adoLHza78eq510mfhy9G",
        "created_at": "2019-03-26 04:55:03",
        "updated_at": "2019-03-26 04:55:03"
    }, {
        "id": 8,
        "name": "Mrs. Kathlyn Parisian DDS",
        "email": "ggrimes@example.net",
        "password": "$2y$10$N.DpYW9Sd0c8p3rSVjO0MeZ5e7idfPeKPZyOO77m8vNSEOnMws5O2",
        "created_at": "2019-03-26 04:55:03",
        "updated_at": "2019-03-26 04:55:03"
    }, {
        "id": 7,
        "name": "Jarrod Becker1",
        "email": "alyson.klein@example.net",
        "password": "$2y$10$nbNPDww9n5nwdgJSCuEdqOUZqhWT5hHr.F7wp2G57s2E9n698Tq0C",
        "created_at": "2019-03-26 04:55:03",
        "updated_at": "2019-06-26 13:34:34"
    }, {
        "id": 6,
        "name": "Quentin Reynolds I",
        "email": "spinka.reba@example.com",
        "password": "$2y$10$Vg6hanILLgl6kjI6wdMD\/eKM5oc5Xg7N2BI75Wy\/ESB1xXUIaqitO",
        "created_at": "2019-03-26 04:55:03",
        "updated_at": "2019-03-26 04:55:03"
    }]
}
console.log(data.users.length);


var tableBody = document.getElementById('table-body');
for (var i = 0; i < data.users.length; i++) {
    var tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    var td1 = document.createElement('td');
    td1.innerHTML = data.users[i].id;
    tableRow.appendChild(td1);
    var td2 = document.createElement('td');
    td2.innerHTML = data.users[i].name;
    tableRow.appendChild(td2);
    var td3 = document.createElement('td');
    td3.innerHTML = data.users[i].email;
    tableRow.appendChild(td3);
    var td4 = document.createElement('td');
    td4.innerHTML = data.users[i].password;
    tableRow.appendChild(td4);
    var td5 = document.createElement('td');
    td5.innerHTML = data.users[i].created_at;
    tableRow.appendChild(td5);
    var td6 = document.createElement('td');
    td6.innerHTML = data.users[i].updated_at;
    tableRow.appendChild(td6);