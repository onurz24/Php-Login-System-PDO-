async function postData() {
  const formData = new FormData();
  formData.append('username', 'max.mustermann');
  formData.append('password', '123456');

  try {
    const response = await fetch('https://www.example.com/api', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

postData();



/* ODER MIT FORMULAR */

/*
<form id="myForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <br>
  <button type="submit">Submit</button>
</form>


async function postData() {
  const form = document.querySelector('#myForm');

  try {
    const response = await fetch('https://www.example.com/api', {
      method: 'POST',
      body: new FormData(form)
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

postData();




*/
