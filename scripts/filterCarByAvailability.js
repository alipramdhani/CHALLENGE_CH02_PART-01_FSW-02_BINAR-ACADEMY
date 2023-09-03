function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // 1) kita melakukan looping untuk mengecheck data dalam array
  for(let i = 0; i < cars.length; i++) 
  {
    // 2) di check data yang available true
    if(cars[i].available === true) 
    {
      console.log(cars[i].available)
      // 3. masukkan data yang sudah di filter
      result.push(cars[i])
    }
  }
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
