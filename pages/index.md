# Swagger Petstore - OpenAPI 3.0
This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

## Version: 1.0.11

### Terms of service
http://swagger.io/terms/

**Contact information:**  
apiteam@swagger.io  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

[Find out more about Swagger](http://swagger.io)
### /user/{username}

#### PUT
##### Summary:

Update user

##### Description:

This can only be done by the logged in user.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| username | path | name that need to be deleted | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| default | successful operation |

{% callout title="CHARGED WITH EXPANDED CUSTOMER" desc="abc" icon="note" %}
​
import stripe \
stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc" \
​
stripe.Customer.retrieve( \
  'cu_19YMK02eZvKYlo2CPhsoQ2Pa', \
  expand=['customer', 'invoice.subscription']
)
Charge with expanded customer, invoice, and subscription
​
{% /callout %}
​
​
​
​
​
​
​
​
{% table %}
​
---
​
​
​
​
​
* Row 1 Cell 1
​
​
​
​
​
​
    
* Row 1 Cell 2
---
​
{% /table %}