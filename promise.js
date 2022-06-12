const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const Tixx = await promiseTheaterIXX();
    const Tvgc = await promiseTheaterVGC();

    const dataFilm = Tixx.concat(Tvgc);
    return dataFilm.filter((Count) => Count.hasil == emosi).length;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
