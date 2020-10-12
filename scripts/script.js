//My API Key
var apikey = {
    key: 'b983673f-3e09-476d-8305-fded76e2b97c'
}
//GET FETCH Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
        apikey.key)
        .then((response) => {
            if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
            return response.json();
        })
        .then((api) => {

            var texto = `<div class="container" width="100%">
            <div class="row">
                <div class="col-md-2">
                    Name
                </div>
                <div class="col-md-2">
                    Simbol
                </div>
                <div class="col-md-8">
                    First Historical Data
                </div>
            </div>`;
            //Get 10 coins and symbols
            for(let i = 0; i < 10; i++){
                //Show API Information
                //var d = new Date("2017-03-16T17:46:53.677");
                //console.log( d.toLocaleString() );

                texto = texto + `
                <div class="row">
                    <div class="col-md-2">
                        ${api.data[i].name}
                    </div>
                    <div class="col-md-2">
                        ${api.data[i].symbol}
                    </div>
                    <div class="col-md-8">
                        ${new Date(api.data[i].first_historical_data).toLocaleString()}
                    </div>
                </div>`;

                document.getElementById("coins").innerHTML = texto;
            }
            texto = texto + `</div>`;
        })
        .catch((error) => {
            console.error(error.message);
        });