import fetchData from "./fetchData.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?");
  console.log("data :>> ", data);

  if(data){   
    data.forEach((item) => {
      console.log("item :>> ", item["Valor (R$)"]);
    });
  }
}

handleData();
