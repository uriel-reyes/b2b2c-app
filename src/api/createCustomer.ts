import apiRoot from "./BuildClient"

const createCustomer = () => {
    for (let i = 0; i < 10; i++) {
      // Generate a unique identifier for each customer
      const uniqueId = Date.now() + i;
  
      // Create the customer data with specific types
      const customerData = {
        email: `user${uniqueId}@test.com`, // Unique email with "@test.com" domain
        password: "123",
        isEmailVerified: true,
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        stores: [{
          key: "data-model-uriel",
          typeId: "store" as const // Ensure 'typeId' is of literal type '"store"'
        }]
      };
  
      // Post the customer data
      apiRoot
        .customers()
        .post({ body: customerData })
        .execute()
        .then(response => console.log(`Customer ${i + 1} created`, response))
        .catch(error => console.error(`Error creating customer ${i + 1}`, error));
    }
  };
  

export default createCustomer;