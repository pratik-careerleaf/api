# Widgets

## JobRoll 

JobRoll widget allows displaying filtered list of jobs anywhere on the page. It can be easily configured to display jobs relevant to the current page content by providing proper keywords in search parameters.

It is a javascript layer on top of [job search][job-search-api] public API. Format of input an output data is almost the same as for web service.

### Installation 

Include jobs widgets js file 

    <script src="http://*job-board-url*/static/dist/widgets/jobs.js"></script>


In the additional `<script></script>` create `JobRoll` js object with proper search parameters. 


Do not forget to include custom css rules. Job roll content is added dynamically to DOM and you have full control over styles.

### Basic usage

```js
    
    // configure widget by providing base url of the board to receive data from
     careerleaf.init({
        baseUrl: 'http://example.com'
     }); 
     
     // define search paramters, all properties are optional
     var search = {
        page_size: 5,
        page: 1,
        keywords: 'test', 
        location: {
            city: 'Toronto', 
            country: 'CA',
        }, 
        job_types: [{slug: 'contract'}, {slug: 'full_time'}],  
        companies: [{name: "Richmond Company"}], 
        categories: [{name: "Advertising"}]
     }

     // show jobs on the page, first paramter is a container: selector or DOM element
     var jobroll = new careerleaf.jobs.JobRoll('#jobs', search);
```

See full list of filtering options in [job-search][job-search-api] web service api.


### Events 

```js 
    jobroll.on('loaded', function(e){
        console.log('loaded')
    })

```

currently supported events are: 
- `loaded` - triggered when job roll is successfully loaded on the page
- `error` - triggered when service fails to load data 


### Custom Templte

It is possible to provide custom template 

```js
    var options = {
        template: function(data){
            // use your favorite template engine 
            return 'this is my custom template, total ' + data.jobs.length + ' jobs found' ;
        }
    }
     var jobroll2 = new careerleaf.jobs.JobRoll('#jobs2', search, options);

```

# Services

## JobSearchService 

service used by `JobRoll` widget to run search queries, can be used separately 

methods: 
`JobSearchService.prototype.search` 
accepts `search` object
returns - promise

```js 

var service = new careerleaf.jobs.JobSearchService();
service.search(search)
    .then(function(data){ 
        ///
    })
    .error(function(status){
        /// 
    })


```



[job-search-api]: https://github.com/careerleaf/api/blob/master/sections/job-search.md