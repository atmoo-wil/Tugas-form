

function nilaiMasuk() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let telp = document.getElementById("telp").value;
    console.log(nama);

    function edit() {
      return nama = prompt("Ganti nama");
    }

    document.getElementById("list-group").innerHTML+=
    `
    <ul class="list-group mt-4 ms-3" style="width: 30%; display:inline-block">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Nama: ${nama}
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Email: ${email}
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    No telp: ${telp}
  </li>
</ul>`
};
