function registerProduct() {
  const name = document.getElementById('productName')
  const IMGURL = document.getElementById('productIMGURL')
  const amount = document.getElementById('productAmount')
  const price = document.getElementById('productPrice')

  const product = {
    name: name.value,
    IMGURL: IMGURL.value,
    amount: amount.value,
    price: price.value
  }
  localStorage.setItem('Produtos', JSON.stringify(product))
}
