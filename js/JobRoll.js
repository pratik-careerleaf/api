//This function creates the grid object and places it in the given body element.
     function grid(body)
     {
          console.log("creating grid");
          
          body.setAttribute("class", "page-template-default page page-id-4309 logged-in admin-bar wp-custom-logo theme-troma woocommerce-js " +
          		"listing-page-awsm_job_openings group-blog reduxon body-default-font heading-default-font visual-composer header-sticky wpb-js-composer js-comp-ver-6.0.4 vc_responsive cutomize-support");
          
          var site = document.createElement("div");
          var site_content = document.createElement("div");
          var content_inner = document.createElement("div");
          var content_container = document.createElement("div");
          var content_row = document.createElement("div");
          var content_area = document.createElement("div");
          var site_main = document.createElement("main");
          var article = document.createElement("article");
          
          site.setAttribute("class","site");
          site_content.setAttribute("class","site-content");
          content_inner.setAttribute("class", "content-inner");
          content_container.setAttribute("class", "container content-container");
          content_row.setAttribute("class", "row content-row");
          content_area.setAttribute("class", "content-area content-full-width col-12");
          site_main.setAttribute("class", "site-main");
          article.setAttribute("class", "post-4309 page type-page status-publish hentry");
          article.setAttribute("id", "post-4309");
          
          body.appendChild(site);
          site.appendChild(site_content);
          site_content.appendChild(content_inner);
          content_inner.appendChild(content_container);
          content_container.appendChild(content_row);
          content_row.appendChild(content_area);
          content_area.appendChild(site_main);
          site_main.appendChild(article);
          
          var jobWrap = document.createElement("div");
          //jobWrap.setAttribute("class", "awsm-job-wrap");
          jobWrap.setAttribute("style", "clear:both;content:'';display:table;");
          article.appendChild(jobWrap);

          var jobLists = document.createElement("div");
          jobLists.setAttribute("class", "awsm-job-listings awsm-row awsm-grid-col-3");
          jobLists.setAttribute("data-listings","9");
          
          jobWrap.appendChild(jobLists);
          return jobLists;
     }

     //This function adds a grid item to the grid box given the job details.
     function gridItem(gridBox, jobtitle, jobCats, shortDesc, location, salary, link, imgLink)
     {
          console.log("creating grid item");
          var aTag = document.createElement("a");
          gridBox.appendChild(aTag);
          aTag.classList.add("awsm-grid-item");
          aTag.setAttribute("onclick", "window.open(\""+link+"\");");

          var div1 = document.createElement("div");
          aTag.appendChild(div1);
          div1.classList.add("awsm-job-item");
          div1.setAttribute("style","cursor:pointer;");

          addImage(div1, imgLink);

          var div2 = document.createElement("div");
          div1.appendChild(div2);
          div2.classList.add("awsm-grid-left-col");

          var h = document.createElement("h2");
          div2.appendChild(h);
          h.classList.add("awsm-job-post-title");
          h.setAttribute("style","margin-bottom:10px;");
          h.innerHTML = jobtitle;

          var div3 = document.createElement("div");
          div1.appendChild(div3);
          div3.classList.add("awsm-grid-right-col");
          
          var div4 = document.createElement("div");
          div3.appendChild(div4);
          div4.classList.add("awsm-job-specification-wrapper");
          div4.setAttribute("style", "color: black;");
          
          var table = document.createElement("table");
          table.setAttribute("style", "width:100%;");
          div4.appendChild(table);

          var r1 = document.createElement("tr");
          table.appendChild(r1);

          var r1c1 = document.createElement("td");
          r1c1.setAttribute("valign","top");
          var r1c2 = document.createElement("td");
          r1c2.setAttribute("valign","top");

          r1.appendChild(r1c1);
          r1.appendChild(r1c2);

          var r2 = document.createElement("tr");
          table.appendChild(r2);

          var r2c1 = document.createElement("td");
          r2c1.setAttribute("valign","top");
          var r2c2 = document.createElement("td");
          r2c2.setAttribute("valign","top");

          r2.appendChild(r2c1);
          r2.appendChild(r2c2);

          var catStyle = "font-weight:bold;";
          var divCats = document.createElement("div");
          r1c1.appendChild(divCats);
          divCats.classList.add("awsm-job-specification-item");
          divCats.setAttribute("style",catStyle);
          var catSpan = document.createElement("span");
          catSpan.innerHTML="Categories: ";
          divCats.appendChild(catSpan);
          var i = 0;
          
          var divCats2 = document.createElement("div");
          r1c2.appendChild(divCats2);
          divCats2.setAttribute("style",catStyle);
          divCats2.classList.add("awsm-job-specification-item");
          for (i = 0;i<jobCats.length;i++)
          {
               var cat= document.createElement("span");
               divCats2.appendChild(cat);
               //cat.classList.add("awsm-job-specification-term");
               //divCats2.setAttribute("font-weight","bold");
               if (i<jobCats.length-1) cat.innerHTML = jobCats[i].name+", ";
               else cat.innerHTML = jobCats[i].name;
          }

          var divLoc = document.createElement("div");
          r2c1.appendChild(divLoc);
          divLoc.classList.add("awsm-job-specification-item");
          divLoc.setAttribute("style",catStyle);
          
          var loc= document.createElement("span");
          divLoc.appendChild(loc);
          loc.classList.add("awsm-job-specification-term");
          loc.innerHTML = "Location: ";

          var divLoc2 = document.createElement("div");
          r2c2.appendChild(divLoc2);
          divLoc2.classList.add("awsm-job-specification-item");
          divLoc2.setAttribute("style",catStyle);
          
          var loc2= document.createElement("span");
          divLoc2.appendChild(loc2);
          loc2.classList.add("awsm-job-specification-term");
          loc2.innerHTML = location.full_name;

          var divShort = document.createElement("div");
          divShort.setAttribute("style","margin-top: 15px;");
          div4.appendChild(divShort);
          divShort.classList.add("awsm-job-specification-item");
          
          var shortD= document.createElement("span");
          divShort.appendChild(shortD);
          shortD.classList.add("awsm-job-specification-term");
          shortD.innerHTML = shortDesc;

          var moreCont = document.createElement("div");
          moreCont.setAttribute("style","font-weight:bold;cursor:pointer;");
          div3.appendChild(moreCont);
          moreCont.classList.add("awsm-job-more-container");
          
          var more = document.createElement("span");
          moreCont.appendChild(more);
          moreCont.classList.add("awsm-job-more");
          moreCont.setAttribute("style","margin-top:10px;font-weight:bold;");
          more.innerHTML = "Learn More";

          console.log("finished creating grid item");
     }

     //Add thumbnail image to the element to represent the logo.
     function addImage(item, img)
     {
         var imgEl = document.createElement("img");
         imgEl.setAttribute("src", img);
         //imgEl.setAttribute("width", "25");
         //imgEl.setAttribute("height", "25");
         imgEl.setAttribute("style","width:100px;height:25px;margin-bottom:10px;");
         item.appendChild(imgEl);
     }

     //This function returns the url of given the page and the stringified search object.
function getURL(pageNum, search)
{
	return "https://workthenorth.com/app/api/v1/job-search?ctype=json&page="+pageNum+"&page_size=9&search="+search;
}

//Create a link tag given a url to a stylesheet.
function getStyleSheet(id, url)
{
	var head = document.getElementsByTagName("head")[0];
	var link = document.createElement( "link");
	head.appendChild(link);
    link.setAttribute("id", id);
    link.setAttribute("href", url);
    link.setAttribute("type","text/css");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("media", "all");
}

//Create a style element in the head.
function setStyle(content)
{
	 var head = document.getElementsByTagName("head")[0];
	 var style = document.createElement( "style");
	 head.appendChild(style);
	 style.innerHTML = content;
}

//Parameters for the job roll are an element (body) and search (JSON string of search object).
function JobRoll(body, search)
{
     var pageNum = 1;
     var request = new XMLHttpRequest();
     //var JSONarg = JSON.stringify({"companies":[{"name":"CyberCoders"}]});
     var url = getURL(pageNum, search);
     console.log(url);
     request.open("GET", url);
     
     //This code obtains the css that the page will use.
     getStyleSheet('awsm-jobs-general-css', 'https://canadianpayrollservices.com/wp-content/plugins/wp-job-openings/assets/css/general.min.css?ver=1.4.2');
     getStyleSheet('awsm-jobs-style-css', 'https://canadianpayrollservices.com/wp-content/plugins/wp-job-openings/assets/css/general.min.css?ver=1.4.2');
     getStyleSheet('rtotpg-css', 'https://canadianpayrollservices.com/st-ging/wp-content/plugins/the-post-grid/assets/css/thepostgrid.css?ver=2.3.1');
     getStyleSheet('dashicons-css','https://canadianpayrollservices.com/st-ging/wp-includes/css/dashicons.min.css?ver=5.2.3');
     getStyleSheet('admin-bar-css',"https://canadianpayrollservices.com/st-ging/wp-includes/css/admin-bar.min.css?ver=5.2.3");
     getStyleSheet('wp-block-library-css','https://canadianpayrollservices.com/st-ging/wp-includes/css/dist/block-library/style.min.css?ver=5.2.3');
     getStyleSheet('wc-block-style-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=2.3.0');
     getStyleSheet('cms-plugin-stylesheet-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/ctcore/assets/css/cms-style.css?ver=5.2.3');
     getStyleSheet('owl-carousel-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/ctcore/assets/css/owl.carousel.min.css?ver=5.2.3');
     getStyleSheet('rs-plugin-settings-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/revslider/public/assets/css/settings.css?ver=5.4.8');
     getStyleSheet('rt-tpg-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/the-post-grid/assets/css/thepostgrid.css?ver=2.3.1');
     getStyleSheet('ionicons-css','//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css?ver=5.2.3');
     getStyleSheet('widget-contacts-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/widget-contact-now/assets/css/widget-contacts.css?ver=5.2.3');
     getStyleSheet('font-awesome-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min.css?ver=6.0.4');
     getStyleSheet('woocommerce-layout-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=3.7.0');
     getStyleSheet('woocommerce-smallscreen-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=3.7.0');
     getStyleSheet('woocommerce-general-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=3.7.0');
     getStyleSheet('bootstrap-css','https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/assets/css/bootstrap.min.css?ver=4.0.0');
     getStyleSheet('font-material-icon-css','https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/assets/css/material-design-iconic-font.min.css?ver=2.2.0');
     getStyleSheet('flaticon-css','https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/assets/css/flaticon.css?ver=1.0.0');
     getStyleSheet('themify-icons-css','https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/assets/css/themify-icons.css?ver=1.0.0');
     getStyleSheet('font-etline-icon-css','https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/assets/css/et-line.css?ver=1.0.0');
     getStyleSheet('magnific-popup-css', 'https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/assets/css/magnific-popup.css?ver=1.0.0');
     getStyleSheet('troma-theme-css','https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/assets/css/theme.css?ver=1.1.2');
     getStyleSheet('troma-menu-css','https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/assets/css/menu.css?ver=1.1.2');
     getStyleSheet('troma-style-css','https://canadianpayrollservices.com/st-ging/wp-content/themes/troma/style.css?ver=5.2.3');
     getStyleSheet('troma-google-fonts-css','https://fonts.googleapis.com/css?family=Rubik%3A300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CPoppins%3A200%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C600%2C600i%2C700%2C700i&#038;subset=latin%2Clatin-ext&#038;ver=5.2.3');
     getStyleSheet('newsletter-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/newsletter/style.css?ver=6.2.1');
     getStyleSheet('js_composer_front-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=6.0.4');
     getStyleSheet('sccss_style-css','https://canadianpayrollservices.com/st-ging/?sccss=1&#038;ver=5.2.3');
     getStyleSheet('wpstg-admin-bar-css','https://canadianpayrollservices.com/st-ging/wp-content/plugins/wp-staging/apps/Backend/public/css/wpstg-admin-bar.css?ver=2.6.2');
     
     //Needed to override some css because it wasn't being applied on the page.
     setStyle(".awsm-grid-item{float:left;width:33.333% !important;padding:0 15px!important;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-flex-direction:column}");
     setStyle(".awsm-job-item{margin-bottom:30px;-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,.13);box-shadow:0 5px 15px 0 rgba(0,0,0,.13);border:1px solid #ececec;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-grow:1;-webkit-transition:all .3s ease;transition:all .3s ease}");
     setStyle(".awsm-grid-item .awsm-job-item:focus,.awsm-grid-item .awsm-job-item:hover{-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.23);box-shadow:0 5px 20px 0 rgba(0,0,0,.23)}");
     setStyle("h2.awsm-job-post-title{margin:0 0 15px;font-size:18px;text-align:left}.awsm-job-item h2.awsm-job-post-title a{font-size:18px}.awsm-grid-item .awsm-job-info{min-height:83px;margin-bottom:10px}.awsm-grid-item .awsm-job-info p{margin:0 0 8px}.awsm-job-wrap::after{clear:both;content:'';display:table}.awsm-filter-wrap{margin:0 -10px 30px}.awsm-filter-wrap .awsm-filter-item{display:inline-block;padding:0 10px}.awsm-jobs-none-container{padding:25px}.awsm-jobs-none-container p{margin:0;padding:5px}.awsm-row .awsm-load-more-main{padding:0 15px;width:100%}");
     setStyle(".awsm-job-item{background:#fff;padding:20px;font-size:14px}.awsm-grid-item .awsm-job-item{margin-bottom:30px;-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,.13);box-shadow:0 5px 15px 0 rgba(0,0,0,.13);border:1px solid #ececec;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-grow:1;-webkit-transition:all .3s ease;transition:all .3s ease}");
     setStyle(".awsm-job-item{border-bottom:1px solid rgba(0,0,0,.13)}");
     setStyle(".awsm-grid-item .awsm-job-info{min-height:83px;margin-bottom:10px}");
     setStyle(".awsm-grid-item{-webkit-box-shadow:none!important;box-shadow:none!important;border:none!important;margin:0!important;text-decoration:none!important}");
     setStyle(".awsm-grid-item .awsm-job-item:focus,.awsm-grid-item .awsm-job-item:hover{-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.23);box-shadow:0 5px 20px 0 rgba(0,0,0,.23)}.awsm-job-item h2.awsm-job-post-title{margin:0 0 15px;font-size:18px;text-align:left}.awsm-job-item h2.awsm-job-post-title a{font-size:18px}.awsm-grid-item .awsm-job-info{min-height:83px !important;margin-bottom:10px}.awsm-grid-item .awsm-job-info p{margin:0 0 8px}.awsm-job-wrap::after{clear:both;content:'';display:table}");
     setStyle(".awsm-row{margin:0 -15px;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;display:flexbox;-webkit-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.awsm-row,.awsm-row *,.awsm-row ::after,.awsm-row ::before{-webkit-box-sizing:border-box;box-sizing:border-box}");
     setStyle(".awsm-row .awsm-load-more-main{padding:0 15px;width:100%}");
     
     var gr = grid(body);
     //When the request page loads.
     request.onload= function () {
                var json = JSON.parse(request.responseText);
                console.log(json);
                
                var jobs = json.jobs;
                var i = 0;
                
                //Print message if no jobs are posted.
                if (jobs==null || jobs.length==0)
                {
                	gr.innerHTML = "Currently no jobs available. Check back later for updates.";
                	return;
                }
                
                //Create grid item for each job.
                for (i = 0;i<jobs.length;i++)
                {
                     var title = jobs[i].title;
                     var cats = jobs[i].categories;
                     var summ = jobs[i].summary;
                     var loc = jobs[i].location;
                     var sal = null;
                     var link = jobs[i].url;
                     var logo_url = jobs[i].logo_url;
                     gridItem(gr, title,cats,summ,loc,sal,link,logo_url);
                }

                var loadMore= document.createElement("button");
                loadMore.innerHTML="Load More";
                gr.parentElement.appendChild(loadMore);
                loadMore.setAttribute("type", "button");       
                var bStyle="height:60px;width:100%";
                loadMore.setAttribute("style", bStyle);

                //When the "Load More" button is clicked, this function is called.
                function changePage(forward)
                {
                    var change= new XMLHttpRequest();
                    var urlChange = getURL(pageNum, search);
                    console.log(urlChange);
                    change.open("GET", urlChange);
//Change to onreadystatechange?
                    change.onload = function() {
                         var changeJSON = JSON.parse(change.responseText);
                         console.log(changeJSON);
                         var changeJobs = changeJSON.jobs;
                         //There are no more jobs left, return. 
                         if (changeJobs.length==0)
                         {
                        	 //Undo page increment if pageNum > 1.
                             if (forward && pageNum>1) pageNum--;
                             return;
                         }
                         var j;
                         //Create a new grid item for every job.
                         for (j = 0;j<changeJobs.length;j++)
                         {
                             var title = changeJobs[j].title;
                             var cats = changeJobs[j].categories;
                             var summary = changeJobs[j].summary;
                             var loc = changeJobs[j].location;
                             var link = changeJobs[j].url;
                             var logo_url = changeJobs[j].logo_url;
                             gridItem(gr,title,cats,summary,loc, null, link, logo_url);
                         }
                    }
                    change.send();
                    
                }

                 loadMore.onclick = function() {
                	 //Increment the page and load the next page.
                      pageNum++;
                      changePage(false);
                 }
          };
request.send();

}
