function nilaiMasuk() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telp = document.getElementById("telp").value;
    const list = document.getElementById("list");
    console.log(nama);

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
