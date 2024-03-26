let inputs = document.querySelectorAll('.valor');

let url =
  'https://openexchangerates.org/api/latest.json?app_id=1a301baa34d44b7aa7360ea6b1353526';
fetch(url)
  .then((r) => r.json())
  .then((data) => {
    document.querySelector('#COP').dataset.cambio = data.rates.COP;
    document.querySelector('#EUR').dataset.cambio = data.rates.EUR;
    document.querySelector('#MXN').dataset.cambio = data.rates.MXN;

    inputs.forEach((input) => {
      input.value = input.dataset.cambio;
    });
  })
  .catch((error) => console.error(error));

function valorCambiado(input) {
  let factor = input.value / input.dataset.cambio;
  inputs.forEach((campo) => {
    campo.value = (campo.dataset.cambio * factor).toFixed(1);
  });
}
