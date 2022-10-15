function nilaiMasuk() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telp = document.getElementById("telp").value;
    const list = document.getElementById("list");
    console.log(nama);

    list.innerHTML+=
    `<li>
        <p>${nama}</p>
        <p>${email}</p>
        <p>${telp}</p>
        </li>`;
}

