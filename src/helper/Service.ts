class ApiService {
    public static instance:ApiService;

    public static getApiServiceInstance(): ApiService {
        if(ApiService.instance) return ApiService.instance;

        ApiService.instance = new ApiService();
        return ApiService.instance;
    }

    async makeGETRequest(path:string, payload={}, options={}) : Promise<any> {
        let url = `https://jsonplaceholder.typicode.com/${path}?`;
        url += new URLSearchParams(payload);  
        
        options = {
            ...options,
            method:'get'
        }

        let response = await fetch(url, options);

        if(!response.ok)
        {
            const message = `Error with status : ${response.status}`;
            throw new Error(message);
        }

        let json = await response.json();

        return json;
    }

    async makePostRequest(path:string, payload={}, options={}): Promise<any> {
        let url = `https://jsonplaceholder.typicode.com/${path}?`;
        
        options = {
            ...options,
            method:'post',
            headers: { 'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(payload)
        }

        let response = await fetch(url, options);

        if(!response.ok)
        {
            const message = `Error with status : ${response.status}`;
            throw new Error(message);
        }

        let json = await response.json();

        return json;
    }
}

const ApiServiceInstance = ApiService.getApiServiceInstance();
export default ApiServiceInstance;


async function makeGetRequest( path:string, params={}, options={} ) {

    let url = `https://jsonplaceholder.typicode.com/${path}?`;
    url += new URLSearchParams(params);    


    let response = await fetch(url, options);

    if(!response.ok) {
        const message = "Error with status code: "+response.status
        throw new Error(message)
    }

    return await response.json();


    // try {
    //     let response = await fetch(`${url}`, options);

        
    //     if(!response.ok) {
            // const message = "Error with status code: "+response.status
            // throw new Error(message)
    //     }

    //     response = await response.json();
    //     return response;

    // } catch(error) {
    //     return error;
    // }
}

async function fetchWIthTimeout( resource:string, options:any = {} ) {

    const { timeout = 500 } = options;
  
    let controller = new AbortController();

    const id =  setTimeout(() => controller.abort() , timeout);

    options = {
        ...options,
        signal: controller.signal
    }

    let response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`, options);
       
    console.log(response);
    
    clearTimeout(id);

    if(!response.ok)
    {
        // console.log('Error in status code '+response.status);
        // return [];
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);

    }

    let result = await response.json();

    return result;

}


export { makeGetRequest, fetchWIthTimeout }