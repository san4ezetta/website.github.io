const modal = document.getElementById('modal')
const btns = document.getElementsByClassName('openModal');
const span = document.getElementById('close');
const form = document.getElementById("modalForm");
const successMessage = document.getElementById('successMessage');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        modal.style.display = 'block';
    };
}

span.onclick = function(){
    modal.style.display = 'none';
}


window.onclick = function(event){
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    printData: function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

form.addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращает стандартное поведение формы

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        comment: document.getElementById('comment').value
    };

    if (!formData.name || !formData.email || !formData.comment) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    if (!/^\+?\d+$/.test(formData.phone)) {
        alert('Телефон должен содержать только цифры и может начинаться с "+".');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert('Введите корректный e-mail.');
        return;
    }

    formData.printData = function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    };

    formData.printData();
    modal.style.display = 'none';
});