# Widgets

## JobRoll 

JobRoll widget allows displaying filtered list of jobs anywhere on the page. It can be easily configured to display jobs relevant to the current page content by providing proper keywords in search parameters.

It is a javascript layer on top of [job search][job-search-api] public API. Format of input an output data is almost the same as for web service.

### Installation 

Include jobs widgets js file 

    <script src="http://*job-board-url*/static/dist/widgets/jobs.js" ></script>

*note*: `async` make it more efficient rendering, especially on mobile devices, you must use onload handler in if async is used


In the additional inline `<script></script>` or another js file in onload callback create `JobRoll` js object with proper search parameters. 


Do not forget to include custom css rules. Job roll content is added dynamically to DOM and you have full control over styles. You can start with [basic jobroll css styling][jobroll-css].

### Basic usage

```js


function initJobRoll(){
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
}

/// attach to onload handler

/// on document load
document.addEventListener("DOMContentLoaded", initJobRoll);
// or simply  or jQuery.ready 
// window.onload = initJobRoll;


```

See full list of filtering options in [job-search][job-search-api] web service api.
For `job_types, companies and categories` exception will be thrown if matching filtering option cannot be found using information provided.


### Events 

```js 
    jobroll.on('loaded', function(e){
        if(e.data.total == 0){
            $("#jobroll-container").hide();
        }
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
[jobroll-css]: https://github.com/careerleaf/api/blob/master/js/jobroll-css.md

#Deployment In Website

## In Wordpress

The job roll widget takes a DOM element and a JSON search object and adds the job roll widget to the bottom of the body.
Download, install, and activate the Shortcoder plugin (https://wordpress.org/plugins/shortcoder/). Create a new 
shortcode and name it "JobRoll". Copy and paste the code of the JobRoll.js file into the shortcode within a <script> 
element. Add the following code to the <script>  element:

var article = document.getElementsByTagName('body')[0];
var JSONarg = JSON.stringify({"companies":[{"name":"CyberCoders"}]});
new JobRoll(article, JSONarg);

In the above code, you can change the object within the JSON.stringify call to modify the search parameters according 
to the following format:

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

You may need to update the grid function to place the grid in a different location. If the page already has an element 
that spans the whole page, then the grid needs to be placed within that element.

In Wordpress admin, go into the "Careers" page where you want to deploy the job roll. Edit the textbox where you want 
the job roll widget to appear and and the tag [sc name="JobRoll"]. Save and update.


