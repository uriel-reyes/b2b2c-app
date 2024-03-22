import apiRoot from "./BuildClient";


const getCustomers = () => {
    return apiRoot
    // .inStoreKeyWithStoreKeyValue({storeKey: 'data-model-uriel'})
    .customers()
    .get({queryArgs:{
        where: `stores(key="data-model-uriel")`
    }})
    .execute()
    .then(response=>{
        const customerResults = response.body
        console.log(customerResults);
    })      
};

export default getCustomers;
