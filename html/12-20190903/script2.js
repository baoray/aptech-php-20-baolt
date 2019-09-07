function loadDoc() {
    var bao = new XMLHttpRequest();
    bao.onreadystatechange = function() {
        if (bao.readyState == 4 && bao.status == 200) {
            var data = bao.responseText;
            var dlsP = JSON.parse(data);
            var row = document.createElement('row');
            row.classList.add("row");
            for (var i = 0; i < 3; i++) {
                var us = dlsP[i];
                console.log(us);
                console.log(us.categories.length);
                var div = document.createElement('div');
                div.classList.add("card");
                var img = document.createElement('img');
                img.setAttribute('src', us.image_url);
                img.classList.add("img");
                div.appendChild(img);
                var h1 = document.createElement('h1');
                h1.innerHTML = us.title;
                div.appendChild(h1);
                h1.classList.add("h1");
                var p = document.createElement('p');
                p.innerHTML = us.description;
                div.appendChild(p);
                p.classList.add("p");
                var d1 = document.createElement('div');
                d1.classList.add('div');
                if (us.categories.length >= 1) {
                    for (var l = 0; l < us.categories.length; l++) {

                        var bd = document.createElement('badge');
                        bd.classList.add('badge');
                        bd.innerHTML = us.categories[l].name;
                        d1.appendChild(bd);
                        div.appendChild(d1);
                    }
                };
                row.appendChild(div);
            }
            document.body.appendChild(row);
            var row = document.createElement('row');
            row.classList.add("row");
            for (var i = 3; i < 6; i++) {
                var us = dlsP[i];
                console.log(us);
                var div = document.createElement('div');
                div.classList.add("card");
                var img = document.createElement('img');
                img.setAttribute('src', us.image_url);
                img.classList.add("img");
                div.appendChild(img);
                var h1 = document.createElement('h1');
                h1.innerHTML = us.title;
                div.appendChild(h1);
                h1.classList.add("h1");
                var p = document.createElement('p');
                p.innerHTML = us.description;
                div.appendChild(p);
                p.classList.add("p");
                var d1 = document.createElement('div');
                d1.classList.add('div');
                if (us.categories.length >= 1) {
                    for (var l = 0; l < us.categories.length; l++) {

                        var bd = document.createElement('badge');
                        bd.classList.add('badge');
                        bd.innerHTML = us.categories[l].name;
                        d1.appendChild(bd);
                        div.appendChild(d1);
                    }
                };
                row.appendChild(div);
            }
            document.body.appendChild(row);
            var row = document.createElement('row');
            row.classList.add("row");
            for (var i = 6; i < 9; i++) {
                var us = dlsP[i];
                console.log(us);
                var div = document.createElement('div');
                div.classList.add("card");
                var img = document.createElement('img');
                img.setAttribute('src', us.image_url);
                img.classList.add("img");
                div.appendChild(img);
                var h1 = document.createElement('h1');
                h1.innerHTML = us.title;
                div.appendChild(h1);
                h1.classList.add("h1");
                var p = document.createElement('p');
                p.innerHTML = us.description;
                div.appendChild(p);
                p.classList.add("p");
                var d1 = document.createElement('div');
                d1.classList.add('div');
                if (us.categories.length >= 1) {
                    for (var l = 0; l < us.categories.length; l++) {

                        var bd = document.createElement('badge');
                        bd.classList.add('badge');
                        bd.innerHTML = us.categories[l].name;
                        d1.appendChild(bd);
                        div.appendChild(d1);
                    }
                };
                row.appendChild(div);
            }
            document.body.appendChild(row);
            var row = document.createElement('row');
            row.classList.add("row");
            for (var i = 9; i < 10; i++) {
                var us = dlsP[i];
                console.log(us);
                var div = document.createElement('div');
                div.classList.add("card");
                var img = document.createElement('img');
                img.setAttribute('src', us.image_url);
                img.classList.add("img");
                div.appendChild(img);
                var h1 = document.createElement('h1');
                h1.innerHTML = us.title;
                div.appendChild(h1);
                h1.classList.add("h1");
                var p = document.createElement('p');
                p.innerHTML = us.description;
                div.appendChild(p);
                p.classList.add("p");
                var d1 = document.createElement('div');
                d1.classList.add('div');
                if (us.categories.length >= 1) {
                    for (var l = 0; l < us.categories.length; l++) {

                        var bd = document.createElement('badge');
                        bd.classList.add('badge');
                        bd.innerHTML = us.categories[l].name;
                        d1.appendChild(bd);
                        div.appendChild(d1);
                    }
                };
                row.appendChild(div);
            }
            document.body.appendChild(row);
        }
    }
    bao.open('GET', './show.js', true);
    bao.send();
}