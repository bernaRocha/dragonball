export const Api = {
    
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

    authorization: 'mrochabernardo@gmail.com',

    readAllUrl: () => Api.baseUrl + '/',
    readSingleUrl: id => Api.baseUrl + '/' + id, 
    createUrl: () => Api.baseUrl + '/',
    updateUrl: id => Api.baseUrl + '/' + id,
    deleteUrl: id => Api.baseUrl + '/' + id,
    deleteAllUrl: () => Api.baseUrl + '/',

        // PEGAR TUDO
    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                Authorization: Api.authorization
            })
        })
    },

        // CRIAR UM ITEM/PERSONAGEM
    buildApiPostRequest: (url, body) => {
        return fetch(url, {
            method: 'POST', 
            headers: new Headers({
                Authorization: Api.authorization,
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(body)
        }) 
    },

    // ALTERAR um item 
    buildApiPutRequest: (url, body) => {
        return fetch(url, {
            method: 'PUT',
            headers: new Headers({
                Authorization: Api.authorization,
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(body)
        })
    },


            // DELETAR TUDO OU UM ITEM
        buildApiDeleteRequest: url => {
            return fetch(url, {
                method: 'DELETE',
                headers: new Headers({
                    Authorization: Api.authorization
                  })
                })
              }
            
            }