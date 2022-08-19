function clicked(obj){
    if (obj.classList.contains("clicked"))
    obj.classList.remove("clicked")
    else
    obj.classList.add("clicked")
}

 function over (obj) {
    obj.classList.add("hover")
}
 function out(obj) {
    obj.classList.remove("hover")
}

function message(state){
    let html_elements=`<div style="position: absolute; top: 0; right: 0;" class="toast show">
    <div class="toast-header">
      İşlem Mesajı
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      ${state}
    </div>
    </div>`
    toast_area.innerHTML=html_elements
}


let toast_area=document.querySelector("#toast_area")
let ekle_button = document.querySelector("#ekle_button")
ekle_button.addEventListener("click",function() {
    let input = document.querySelector("#input")
    let value = input.value
    if(value.trim()!=""){
        
    let new_li = document.createElement("li")

    new_li.classList.add("li", "p-3", "list-group-item", "alert", "alert-warning", "alert-dismissible", "fade", "show")
    new_li.setAttribute("role", "alert")
    new_li.setAttribute("onclick","clicked(this)")
    new_li.setAttribute("onmouseover","over(this)")
    new_li.setAttribute("onmouseout","out(this)")
    
    new_li.innerHTML = value

    new_button = document.createElement("button")
    new_button.classList.add("btn-close", "btn-sm")
    new_button.setAttribute("type", "button")
    new_button.setAttribute("data-bs-dismiss", "alert")
    new_button.setAttribute("aria-label", "Close")
    new_li.appendChild(new_button)

    let ulDOM = document.querySelector("#list")    
    ulDOM.appendChild(new_li)
    input.value=""
    message("Başarıyla eklendi :)")
    }
    else{
        message("Boş ekleme yapılamaz!!!")
        input.value=""
    }

} )

