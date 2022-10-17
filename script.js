
// function nilaiMasuk() {
//     const nama = document.getElementById("nama").value;
//     const email = document.getElementById("email").value;
//     const telp = document.getElementById("telp").value;
//     console.log(nama);
//     document.getElementById("list-group").innerHTML+=
//     `
//     <ul class="list-group mt-4 ms-3" style="width: 30%; display:inline-block">
//   <li class="list-group-item d-flex justify-content-between align-items-center">
//     Nama: ${nama}
//   </li>
//   <li class="list-group-item d-flex justify-content-between align-items-center">
//     Email: ${email}
//   </li>
//   <li class="list-group-item d-flex justify-content-between align-items-center">
//     No telp: ${telp}
//   </li>
// </ul>`
// };


// cara mentor
  const table = document.getElementById('listnama');
  const nama = document.getElementById('nama');
  const email = document.getElementById('email');
  const telp = document.getElementById('telp');
  const submitBtn = document.getElementById('submitBtn');
  let i =1;
  let editMode = false;
  let updateId = "";

  addEventListener('submit', (event) =>{
    event.preventDefault();

    // validasi data input
    if (nama.value === "") {
      return alert('Masukkan Nama !');
    } else if (email.value === ""){
      return alert ('Masukkan email');
    }else if (telp.value === ""){
      return alert ('Masukkan no.telp');
    }

    // fungsi untuk update
    if (editMode) {
      const nama1 = document.getElementById(`nama-${updateId}`);
      const email1 = document.getElementById(`email-${updateId}`);
      const telp1 = document.getElementById(`telp-${updateId}`);

      nama1.innerText = nama.value;
      email1.innerText = email.value;
      telp1.innerText = telp.value;
      submitBtn.innerText = "Tambah";
      editMode = false;
      nama.value ="";
      email.value = "";
      telp.value = "";
    }else{
      const generateID = Math.random();
      const tableContent = `
      <tr id ="${generateID}">
            <th scope="row">${i++}</th>
            <td id = "nama-${generateID}">${nama.value}</td>
            <td id = "email-${generateID}">${email.value}</td>
            <td id = "telp-${generateID}">${telp.value}</td>
          <td>
          <button type="button" class="btn btn-primary" onClick='update(${generateID})'>Edit</button>
          <button type="button" class="btn btn-danger" onClick='remove(${generateID})'>Delate</button>
          </td>
          </tr>`
          
          table.innerHTML+= tableContent;
          nama.value ="";
          email.value = "";
          telp.value = "";
    }

  });

  const update =(id) =>{
    editMode = true;
    submitBtn.innerText = "Update";
    updateId = id;
    const nama1 = document.getElementById(`nama-${id}`).innerText;
    const email1 = document.getElementById(`email-${id}`).innerText;
    const telp1 = document.getElementById(`telp-${id}`).innerText;  
  
    nama.value = nama1;
    email.value = email1;
    telp.value = telp1;
  }

    // menghapus data
    const remove = (id) =>{
      if (editMode) {
        alert("Selesaikan proses edit terlebih dahulu")
      }else{
        const value = document.getElementById(id);
        value.remove();
      }
    }