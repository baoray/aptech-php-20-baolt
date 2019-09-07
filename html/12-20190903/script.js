function loadDoc() {
    var bao = new XMLHttpRequest();
    bao.onreadystatechange = function() {
        if (bao.readyState == 4 && bao.status == 200) {
            var data = bao.responseText;
            var dlsP = JSON.parse(data);
            var tableBody = document.getElementById('table-body');
            for (var i = 0; i < dlsP.users.length; i++) {
                var tableRow = document.createElement('tr');
                tableBody.appendChild(tableRow);
                var td1 = document.createElement('td');
                td1.innerHTML = dlsP.users[i].id;
                tableRow.appendChild(td1);
                var td2 = document.createElement('td');
                td2.innerHTML = dlsP.users[i].name;
                tableRow.appendChild(td2);
                var td3 = document.createElement('td');
                td3.innerHTML = dlsP.users[i].email;
                tableRow.appendChild(td3);
                var td4 = document.createElement('td');
                td4.innerHTML = dlsP.users[i].password;
                tableRow.appendChild(td4);
                var td5 = document.createElement('td');
                td5.innerHTML = dlsP.users[i].created_at;
                tableRow.appendChild(td5);
                var td6 = document.createElement('td');
                td6.innerHTML = dlsP.users[i].updated_at;
                tableRow.appendChild(td6);
            }

        }
    }

    bao.open('GET', 'https://namcoi.com/projects/users-crud-laravel/public/api/users', true);
    bao.send();
}