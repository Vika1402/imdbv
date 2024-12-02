const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjAyODY4YmVjZDEyNmI1ZTFmOWM5ZThlYWQ2MWM2YSIsIm5iZiI6MTcwODk3ODUyNC4yMiwic3ViIjoiNjVkY2YxNWM5MDNjNTIwMTdjYmI0YjY2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.rooRC4vesnZi-ycWo6lnGWT8Tdj7_KGJCH7DSpd1dYc'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));