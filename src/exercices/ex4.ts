import { fetchAPI } from "../api/fakeApi"

// Il semblerait qu'une API renvoi un status 'ERROR' avec une description en plus des status 'OK' et 'NOT_FOUND'
// 1) Ajouter le nouveau status au type
// 2) Ajouter un case dans la fonction manageAPIResponse pour retourner 2

type APIResponse = {
    status: 'OK',
    title: string,
    message: string,
    date: string,
} | {
    status: 'NOT_FOUND',
} | {
    status: 'ERROR',
    description : string
}


function manageAPIResponse(response : APIResponse) : number {

    switch(response.status) {
        case 'OK':
            return 0;
        case 'NOT_FOUND':
            return 1;
        case 'ERROR':
            console.log("good")
            console.log(response.description)
            return 2;
        default:
            console.log(response)
            throw 'status unknown';
    }
}

export default function ex4() {
    fetchAPI<APIResponse>()
        .then(manageAPIResponse)
        .catch(console.error);
}