/*
адание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

inputRef.selectionEnd === 6
    ? (inputRef.id = "validation-input_valid")
    : (inputRef.id = "validation-input_invalid");
#validation-input_valid {
  border-color: #4caf50;
}

#validation-input_invalid {
  border-color: #f44336;
}

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/


const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", () => {
  if (inputRef.selectionEnd === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
  console.log(
    "Потеря фокуса",
    inputRef,
    "Длина строки",
    inputRef.selectionEnd
  );
});
