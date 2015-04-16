Careerleaf API
=============================

Looking to migrate your data to Careerleaf platform? We've got everything you need here. From sample code to detailed API documentation.


Authentication 
--------------
Authentication is impelemented by adding `Authentication` header to all incoming request, using following format:

    Authentication: CL <API_KEY>/<API_SECRET>

Authentication key/secret pair can be generated in admin panel under "API Settings"->"API Keys" seciton (you must have board admin account to access that page)


Making requests
---------------
You should be using url for your instance of Careerleaf powered job board. 

All requests can be tested with `curl`, but the actual migration logic should be implemented in programming language. We provide some examples in python.


```shell
# example, making requests
export auth_token=AKXXXXX/yyyyyyyyyy
export url=http://example-job-board.com

curl -H "Authentication: CL $auth_token" -X GET $url/app/api/v1/candidates
```

User friendly alternative of using command line is a browser extension, like [Advanced REST client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo)


### Pagination 
Some api endpoints return pagniated data (all lists). You can control page size with `page_size` query string parameter. The actual page is controlled with `page` parameter (1 by default).

`next` and `previous` values (if applicable) contain exact value for the request url to be fired at to get next or previous page (combine page and page_size parameters).


    curl -H "Authentication: CL $auth_token" -X GET $url/app/api/v1/employers/quick-list/?page_size=3

returns paginated

```json 
{
  "count": 1310,
  "next": "http://example-job-board.com/app/api/v1/employers/quick-list/?page=2&page_size=3",
  "previous": null,
  "results": [
    {
      "id": "54be99e3ae36ba1a6006efe2",
      "old_id": null,
      "name": "T Hosp",
      "created_on": "2015-01-20T18:09:39.791"
    },
    {
      "id": "54bf3d47ae36ba1a6006efe8",
      "old_id": null,
      "name": "Ash Tech",
      "created_on": "2015-01-21T05:46:47.150"
    },
    {
      "id": "54c02299ae36ba556c06efef",
      "old_id": null,
      "name": "ABC Medical Group",
      "created_on": "2015-01-21T22:05:13.941"
    }
  ]
}

```


API ready for use
-----------------
* [Candidates data](https://github.com/careerleaf/api/blob/master/sections/candidates.md)
* [Employers data](https://github.com/careerleaf/api/blob/master/sections/employers.md)



# Examples 

[Data Migration Examples](https://github.com/Careerleaf/data-migration-examples)