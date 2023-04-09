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
