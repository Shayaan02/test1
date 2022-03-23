const url = 'https://mogly-7708f-default-rtdb.europe-west1.firebasedatabase.app/.json'
fetch(url)
    .then(r=>r.json())
    .then(d=>{
        console.log('Listar alla produkter', d);
        
        for(const produkter in d){
            console.log(d[produkter].name);

            const h1 = document.createElement('h1');
            h1.innerText = d[produkter].name;
            document.body.append(h1);
            
    
            const img = document.createElement('img');
            img .src = d[produkter].image;
            document.body.append(img)
            
         
            const h2 = document.createElement('h2');
            h2.innerText = d[produkter].pris;
            document.body.append(h2);

            const h3 = document.createElement('h3');
            h3.innerText = d[produkter].modell;
            document.body.append(h3);
            
        }
    });

