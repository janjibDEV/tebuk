import axios from "axios";

const getQuestion = async (item) => {
  let url = `https://api.quran.com/api/v4/quran/verses/uthmani?juz_number=${item}`;
  await axios.get(url).then((res) => {
    let result = res.data.verses;
    let nQuestion = Math.floor(Math.random() * result.length);
    return result[nQuestion]["text_uthmani"];
  });
};

export { getQuestion };
