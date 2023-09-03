function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  //menggunakan bubble-sort
  const n = result.length; // n = 3
  // perulangan luar untuk mengulang pengurutan sebanyak "n-1".
  for (let i = 0; i < n - 1; i++)
  {
    // perulangan dalam untuk membandingkan elemen berpasangan dalam array.
    for (let j = 0; j < n - i - 1; j++) 
    {
      // kondisi untuk menukarkan tahun dari yang lebih tua ke tahun yang lebih muda
      if (result[j].year > result[j + 1].year)
      {
        // proses penukaran elemen menggunakan variabel sementara 'temp'
        const temp = result[j];
        result[j] = result [j + 1];
        result[j + 1] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
