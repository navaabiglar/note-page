let i = 1
const Create_note = document.getElementById("button")
const note = document.getElementById("note")



window.addEventListener("load", () => {

    const Notes = localStorage.getItem("wanted_note");
    if(Notes){
        note.innerHTML = Notes
        console.log(note)
        
        // new_part is not here yet
        // const remove_icon = new_part.querySelector(".fa-trash");
        const remove_icon = note.querySelectorAll(".fa-trash");
        //اینجا باید فورایچ برنم چون nodelist
        remove_icon.forEach(icon => {
            icon.addEventListener("click", () => {
                // new_part.remove()
                // note.remove(new_part)
                icon.parentElement.remove();
                localStorage.setItem("wanted_note", note.innerHTML)
            })
        })
        const input_fields = note.querySelectorAll("input");

        input_fields.forEach(input_field => {
            input_field.addEventListener("input", () => {
            localStorage.setItem("wanted_note", note.innerHTML);
            });
            localStorage.setItem("wanted_note", note.innerHTML);

        });
       
    }
});
Create_note.addEventListener("click",async function () {
    const new_part = document.createElement("div");
    new_part.innerHTML = `<div class="note_box">
                            <input type="text" placeholder="this is note ${i}">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </div>`
    note.append(new_part)
    // فقط یکیش کار می کنه
    // const remove_icon = document.getElementById("remove")
    const remove_icon = new_part.querySelector(".fa-trash");
    remove_icon.addEventListener("click",async function() {
        new_part.remove()
        // note.remove(new_part)
        localStorage.setItem("wanted_note", note.innerHTML);

    })
    // const input_field = new_part.querySelector("input");
    // input_field.addEventListener("input", () => {
    //     localStorage.setItem("wanted_note", note.innerHTML);
    // });
    const input_field = new_part.querySelector("input");
    input_field.addEventListener("input", () => {
        // Update the `value` attribute of the input field in the HTML content
        input_field.setAttribute('value', input_field.value);
        localStorage.setItem("wanted_note", note.innerHTML);
    });
    i++
    // // output :[object HTMLDivElement]
    // localStorage.setItem("wanted_note", note)
    localStorage.setItem("wanted_note", note.innerHTML)
})
        


