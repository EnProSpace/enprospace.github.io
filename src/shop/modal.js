import Swal from "sweetalert2";
import Droppable from "droppable"
import "sweetalert2/dist/sweetalert2.css"
import products from "./../products.json";

export default async function (product) {
  if (!await Swal.fire({
    width: 640,
    title: products[product].name + (products[product].microText ? (" " + products[product].microText) : ""),
    imageUrl: products[product].img,
    text: products[product].description,
    confirmButtonText: "Заказать",
    cancelButtonText: "Отмена",

    showCloseButton: true,
    showCancelButton: true,
  })) return;

  const { value: nick } = await Swal.fire({
    title: 'Как вас называть',
    input: 'text',
    showCancelButton: true,
    inputValidator: (value) => {
      return !value && 'Введите хоть что-нибудь'
    }
  });
  if (!nick) return;

  const { value: email } = await Swal.fire({
    title: 'Введите ваш адресс электронной почты',
    input: 'email'
  })

  let file = "none"
  if (products[product].needFile) {
    let dropper;
    await Swal.fire({
      title: "Выберете файл",
      html:
        '<div id="fileselectdialog" style="width:300px;height:100px;">Выберете файл</div>',

      onOpen: function () {
        dropper = new Droppable({
          element: document.querySelector('#fileselectdialog')
        })
        dropper.onFilesDropped(function (files) {
          const reader = new FileReader();
          dropper.destroy();
          reader.onload = function (e) { 
            Swal.close()
            file = e.target.result
          };
          reader.readAsDataURL(files[0]);
        })
      }
    })
  }

  if (!email) return;

  console.log(nick, email, file.substr(0, 20))
}