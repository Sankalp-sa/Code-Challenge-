// Navbar Web Component

const template1 = document.createElement("template");
template1.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="/index.html">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul id="nav-ul" class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
</div>
</nav>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
`;

class Nav extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode:"open"});
    let clone = template1.content.cloneNode(true);
    this.root.append(clone);

    const str = this.getAttribute('elements');
    const strArr = str.split(" ");

    const route = this.getAttribute('route');
    const routeArr = route.split(" ");

    console.log(strArr);
    console.log(routeArr);
    
    this.createElement(strArr, routeArr);
  }

  createElement(strArr, routeArr){
    const navUl = this.root.getElementById('nav-ul');
    console.log(navUl)
    for (let index = 0; index < strArr.length; index++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = routeArr[index];
        li.classList.add("nav-item");
        a.classList.add("nav-link");
        a.textContent = strArr[index];
        li.appendChild(a);
        navUl.appendChild(li);
    }
  }

}

window.customElements.define("my-nav", Nav);

// UserCard Web Component

const template = document.createElement("template");
template.innerHTML = `
<style>
@import "userCard.css";
</style>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <div class="card" style="width: 80%;">
        <img class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <div class="card-text">
                <p><slot name="email"/></p>
                <p><slot name="phone"/></p>
                <p id="about-info"><slot class="info" name="about"/></p>
            </div>
            <button class="btn btn-primary" id="toggle-info">Hide Info</button>
        </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode:"open"});
    let clone = template.content.cloneNode(true);
    this.root.append(clone);

    let btn = this.root.getElementById("toggle-info");
    let desc = this.root.getElementById('about-info');
        
    btn.addEventListener('click',toggleinfo);

    function toggleinfo(){
      if(btn.textContent == "Hide Info"){
          btn.textContent = "Show Info";
          desc.style.display = 'none'
      }
      else{
          btn.textContent = "Hide Info";
          desc.style.display = 'block';
      }
    }
  }

  static get observedAttributes(){
    return ["name","image","color"]
  }

  attributeChangedCallback(attributeVal, oldvalue, newValue){
    if(attributeVal === "name"){
      this.root.querySelector('.card-title').innerText = newValue 
    } 
    if(attributeVal === "image") {
      this.root.querySelector('img').src = newValue 
    }
    if(attributeVal === "color") {
      this.root.querySelector('.card-body').style.backgroundColor = newValue 
    }
  }


}

window.customElements.define("user-card", UserCard);

// Table web component :

const template2 = document.createElement("template");
template2.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<table class="table table-dark">
<thead>
  <tr>
    <th scope="col">Sr. No.</th>
  </tr>
</thead>
<tbody>
</tbody>
</table>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
`;

class Table extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({mode:"open"});
      let clone = template2.content.cloneNode(true);
      this.root.append(clone);

      const col = this.getAttribute('col');
      const colArr = col.split(" ");

      for (let index = 0; index < colArr.length; index++) {
        
        const coli = colArr[index];
        let colhead = this.root.querySelector("thead tr");
        let th = document.createElement("th");
        th.scope = "col";
        th.innerText = coli;
        colhead.appendChild(th);
        
      }

      const rowArr = [];

      for (let index = 0; index < colArr.length; index++) {
        const row = this.getAttribute(`row${index+1}`);
        rowArr.push(row);
      }

      const tbody = this.root.querySelector("tbody");

      for (let index = 0; index < rowArr.length; index++) {
        
        const row = rowArr[index];
        const subRowArr = row.split(" ");

        // console.log(subRowArr)

        const tBodytr = document.createElement("tr");
        const th = document.createElement("th");
        th.scope = "row";
        th.innerText = subRowArr[0];
        tBodytr.appendChild(th);

        for (let j = 1; j < subRowArr.length; j++) {
            
            const td = document.createElement("td");
            td.innerText = subRowArr[j];

            tBodytr.appendChild(td);

        }

        tbody.appendChild(tBodytr);

      }

      console.log(rowArr)

      
    }
} 
  
window.customElements.define("my-table", Table);

