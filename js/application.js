var img_dimensions = function(klass) {
  var image_url = $('.' + klass).css('background-image'),
      image,
      width,
      height,
      res;

  // Remove url() or in case of Chrome url("")
  image_url = image_url.match(/^url\("?(.+?)"?\)$/);

  if (image_url[1]) {
      image = new Image();
      image_url = image_url[1];
      // just in case it is not already loaded
      image.src = image_url;
      // res = $(image).load(function() {
      width = image.width;
      height = image.height;
      return([width, height]);
      // });
      // alert("res is " + res)
      // return res
  }
};

var Home = {
  setup: function() {
    // $('.splash img.fadeIn').fadeIn(500, function() {
    $('.splash .initially-hidden').delay(200).fadeToggle(400);
    // });
    $('.container .initially-hidden').delay(500).fadeToggle(400);
  }
}

var MesaTest = {
  setup: function() {
    MesaTest.make_checkboxes();
    $('.add-on').popover({
      trigger: "hover",
      title: function() {
        return $(this).find('td').first().text();
      },
      placement: 'bottom'
    });
  },
  platformFilters: {
    'python': true,
    'ruby': true,
    'fortran': true,
    'otherPlatform': true
  },
  usageFilters: {
    'plotting': true,
    'io': true,
    'utility': true,
    'runStarExtras': true,
    'otherUsage': true
  },
  platformIdClasses: ['python', 'ruby', 'fortran', 'otherPlatform'],
  usageIdClasses: ['plotting', 'io', 'utility', 'runStarExtras', 'otherUsage'],
  make_checkboxes: function () {
    // insert checkboxes below the faculty profiles. Do this here so that
    // if user has no javascript enabled, this never shows up
    var new_html = '';
    new_html += '<div class="row">';
    new_html += '<div class="col-xs-12">';
    new_html += '<p>Select or deselect platforms to only show add-ons that ';
    new_html += 'use the selected language. Similarly, select or deselet ';
    new_html += 'different usage categories to see add-ons pertinent to that ';
    new_html += 'scenario. Select at least one platform' ;
    new_html += ' and at least one usage. ' ;
    new_html += 'To learn more about ';
    new_html += 'an individual add-on, click on their table name.';
    new_html += '</p>';
    new_html += '</div>';
    new_html += '</div>';
    new_html += '<div class="row" id="filter">';
    new_html += '<div class="col-xs-12 col-md-6">';
    new_html += '<h4> Platforms </h4>';
    new_html += '<form class="form-inline">';
    new_html += '<div class="form-group">';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="python" checked>Python</label>';
    new_html += '</div>';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="ruby" checked>Ruby</label>';
    new_html += '</div>';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="fortran" checked>Fortran</label>';
    new_html += '</div>';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="otherPlatform" checked>Other</label>';
    new_html += '</div>';
    new_html += '</div>';
    new_html += '</form>';
    new_html += '</div>';
    new_html += '<div class="col-xs-12 col-md-6">';
    new_html += '<h4> Usages </h4>';
    new_html += '<form class="form-inline">';
    new_html += '<div class="form-group">';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="plotting" checked>Plotting</label>';
    new_html += '</div>';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="io" checked>I/O</label>';
    new_html += '</div>';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="utility" checked>Utility</label>';
    new_html += '</div>';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="runStarExtras" checked>run_star_extras</label>';
    new_html += '</div>';
    new_html += '<div class="checkbox">';
    new_html += '<label><input type="checkbox" id="otherUsage" checked>Other</label>';
    new_html += '</div>';
    new_html += '</div>';
    new_html += '</form>';
    new_html += '</div>';
    new_html += '</div>';
    // wrap this in jQuery magic and actually insert into DOM
    new_html = $(new_html);
    new_html.insertBefore('#before-add-ons');

    // Set up handlers for each checkbox
    // This is really repetitive... couldn't figure out a better way, though
    $('#python').change(function() {
      var key = 'python';
      MesaTest.platformFilters[key] = !MesaTest.platformFilters[key];
      MesaTest.updateAddons();
    });
    $('#ruby').change(function() {
      var key = 'ruby';
      MesaTest.platformFilters[key] = !MesaTest.platformFilters[key];
      MesaTest.updateAddons();
    });
    $('#fortran').change(function() {
      var key = 'fortran';
      MesaTest.platformFilters[key] = !MesaTest.platformFilters[key];
      MesaTest.updateAddons();
    });
    $('#otherPlatform').change(function() {
      var key = 'otherPlatform';
      MesaTest.platformFilters[key] = !MesaTest.platformFilters[key];
      MesaTest.updateAddons();
    });
    $('#plotting').change(function() {
      var key = 'plotting';
      MesaTest.usageFilters[key] = !MesaTest.usageFilters[key];
      MesaTest.updateAddons();
    });
    $('#io').change(function() {
      var key = 'io';
      MesaTest.usageFilters[key] = !MesaTest.usageFilters[key];
      MesaTest.updateAddons();
    });
    $('#utility').change(function() {
      var key = 'utility';
      MesaTest.usageFilters[key] = !MesaTest.usageFilters[key];
      MesaTest.updateAddons();
    });
    $('#runStarExtras').change(function() {
      var key = 'runStarExtras';
      MesaTest.usageFilters[key] = !MesaTest.usageFilters[key];
      MesaTest.updateAddons();
    });
    $('#otherUsage').change(function() {
      var key = 'otherUsage';
      MesaTest.usageFilters[key] = !MesaTest.usageFilters[key];
      MesaTest.updateAddons();
    });
  },

  // "Hide" all faculty profiles and then show only those who have at least one
  // of the selected methodologies and at least one of the subfields
  updateAddons: function() {
    var platformWhitelist = [];
    var usageWhitelist = [];
    for (var i = 0; i < MesaTest.platformIdClasses.length; i++) {
      var key = MesaTest.platformIdClasses[i];
      if (MesaTest.platformFilters[key] & key !== undefined) {
        platformWhitelist.push(key);
      }      
    }
    // alert("whitelist: " + platformWhitelist);
    for (var i = 0; i < MesaTest.usageIdClasses.length; i++) {
      var key = MesaTest.usageIdClasses[i];
      if (MesaTest.usageFilters[key] & key !== undefined) {
        usageWhitelist.push(key);
      }      
    }
    // require at least one pair of method-subfield to be present
    var showSelector = '';
    for (i = 0; i < platformWhitelist.length; i++) {
      for (var j = 0; j < usageWhitelist.length; j++) {
        showSelector += '.add-on.' + platformWhitelist[i] + '.' + 
        usageWhitelist[j] + ', ';
      }
    }
    // alert("showSelector: " + showSelector);
    // strip off last comma and space from selector
    showSelector = showSelector.substring(0, showSelector.length-2);
    $('#add-ons .add-on').hide();
    $(showSelector).show();
  }
};

var Papers = {
  setup: function() {
    if ($('#publications').length){
      Papers.place_panel();
      Papers.get_papers();
      Papers.add_content();
    }
  },
  place_panel: function() {
    var content = '<div class="row" id="ads"><div class="col-sm-12">' +
      '<div class="card">' +
      '<div class="card-header bg-primary text-white"><h3 class="card-title">Recent Papers using '+
      'MESA</h3></div><div id="ads-content">' +
      '<h3 class="text-center">Querying ADS for recent papers...</h3>' +
      '</div></div></div></div>';
    $(content).insertAfter('#publications');
  },
  papers: [],
  // FOR DEVELOPMENT
  // proxy_url: 'http://localhost:5000/',
  // FOR DEPLOYMENT
  proxy_url: 'https://mesa-ads.herokuapp.com/',
  api_url: 'https://api.adsabs.harvard.edu/v1/search/query',
  // search_query: {
  //   q: ("citations(bibcode:2011ApJS..192....3P)+OR+" +
  //       "citations(bibcode:2013ApJS..208....4P)+OR+" +
  //       "citations(bibcode:2015ApJS..220...15P)"),
  //   fl: "title,author,bibcode",
  //   fq: "property:refereed",
  //   rows: "10",
  //   sort: "pubdate+desc"
  // },
  search_query: "?q=" +
    // papers that cite any of the instrument papers
    "citations(bibcode:2011ApJS..192....3P)" +
    "+OR+citations(bibcode:2013ApJS..208....4P)" +
    "+OR+citations(bibcode:2015ApJS..220...15P)" +
    "+OR+citations(bibcode:2018ApJS..234...34P)" +
    "+OR+citations(bibcode:2019ApJS..243...10P)" +
    "+OR+citations(bibcode:2022arXiv220803651J)"
    // get the titles, authors, and bibcodes of matching papers
    "&fl=title,author,bibcode" + 
    // restrict search to refereed articles
    // "&fq=property:refereed" +
    // only get 10 articles
    "&rows=10" + 
    // sort by publication date
    "&sort=entry_date+desc",
  search_url: function() {
    return Papers.proxy_url + Papers.api_url + Papers.search_query;
  },
  get_papers: function() {
    console.log(Papers.search_url());
    $.ajax({
      url: Papers.search_url(),
      success: function(json) { 
        Papers.papers=json.response.docs;
        Papers.add_content();
      },
      error: function(xhr, stat, err) {alert("Error getting papers: " + err);},
      cache: false
    });
  },
  url: function(paper) {
    return "https://ui.adsabs.harvard.edu/#abs/" + paper.bibcode + '/abstract'
  },
  format_authors: function(paper) {
    var authors = paper.author
    if (authors.length == 1) {
      return authors[0]
    } else if (authors.length == 2) {
      return authors[0] + ' and ' + authors[1]
    } else if (authors.length == 3) {
      return authors[0] + ', ' + authors[1] + ', and ' + authors[2]
    } else {
      return authors[0] + ', ' + authors[1] + ', ' + authors[2] + ' et al.'
    }
  },
  paper_html: function() {
    // var content = '<div class="row" id="ads"><div class="col-sm-12">' +
    //   '<a id="papers"></a><div class="panel panel-primary no-height-fix">' +
    //   '<div class="panel-heading"><h3 class="panel-title">Recent Papers using '+
    //   'MESA</h3></div><div class="panel-content">' +
    var content = '<ul class="list-group" id="papers-content">';
    for (var i = 0; i < Papers.papers.length; i++) {
      var paper = Papers.papers[i];
      content += '<a href=' + Papers.url(paper) + 
        ' class="list-group-item paper"><h4>' +
        paper.title + '</h4>' + Papers.format_authors(paper) + '</a>';
    }
    content += '</ul>';
    // content += '<ul></div><a href=#papers><div class="panel-footer ' +
    //   'text-center expandable"><span class="glyphicon glyphicon-chevron-down">'+
    //   '</span></div></a></div></div></div>';
    return $(content)
  },
  add_content: function() {
    $('#ads-content').html(Papers.paper_html());
    // $(Papers.paper_html()).insertAfter('#publications')
  }
};

var KITPPapers = {
  setup: function() {
    if ($('#kitp-publications').length){
      KITPPapers.place_panel();
      KITPPapers.get_papers();
      KITPPapers.add_content();
    }
  },
  place_panel: function() {
    var content = '<div class="row" id="ads"><div class="col-sm-12">' +
      '<div class="card card-primary no-height-fix">' +
      '<div class="card-header bg-primary text-white my-0"><h3 class="my-0">Recent Papers from '+
      'the KITP <small class="text-light font-italic">(Powered by ADS)</small></h3></div><div class="card-text" id="ads-content">' +
      '<h3 class="text-center">Querying ADS for recent papers...</h3>' +
      '</div></div></div></div>';
    $(content).insertAfter('#kitp-publications');
  },
  papers: [],
  // FOR DEVELOPMENT
  // proxy_url: 'http://localhost:5000/',
  // FOR DEPLOYMENT
  proxy_url: 'https://mesa-ads.herokuapp.com/',
  api_url: 'https://api.adsabs.harvard.edu/v1/search/query',
  // search_query: {
  //   q: ("citations(bibcode:2011ApJS..192....3P)+OR+" +
  //       "citations(bibcode:2013ApJS..208....4P)+OR+" +
  //       "citations(bibcode:2015ApJS..220...15P)"),
  //   fl: "title,author,bibcode",
  //   fq: "property:refereed",
  //   rows: "10",
  //   sort: "pubdate+desc"
  // },
  search_query: "?q=" +
    // papers that acknowledge KITP grants
    'ack:"PHY-1748958"' + '+OR+ack:"PHY17-48958"' + 
    '+OR+ack:"R25GM067110"' + '+OR+ack:"2919.02"' + '+OR+ack:"2919.01"' +
    '+OR+ack:"PHY11-25915"' + '+OR+ack:"PHY-1125915"' +
    // get the titles, authors, and bibcodes of matching papers
    "&fl=title,author,bibcode,pubdate,pub" + 
    // restrict search to refereed articles
    "&fq=property:refereed" +
    // only get 10 articles
    "&rows=10" + 
    // sort by publication date
    "&sort=pubdate+desc",
  search_url: function() {
    return KITPPapers.proxy_url + KITPPapers.api_url + KITPPapers.search_query;
  },
  get_papers: function() {
    $.ajax({
      url: KITPPapers.search_url(),
      success: function(json) { 
        KITPPapers.papers=json.response.docs;
        KITPPapers.add_content();
      },
      error: function(xhr, stat, err) {alert("Error getting papers: " + err);},
      cache: false
    });
  },
  url: function(paper) {
    return "https://ui.adsabs.harvard.edu/#abs/" + paper.bibcode + '/abstract'
  },
  format_authors: function(paper) {
    var authors = paper.author
    if (authors.length == 1) {
      return authors[0]
    } else if (authors.length == 2) {
      return authors[0] + ' and ' + authors[1]
    } else if (authors.length == 3) {
      return authors[0] + ', ' + authors[1] + ', and ' + authors[2]
    } else {
      return authors[0] + ', ' + authors[1] + ', ' + authors[2] + ' et al.'
    }
  },
  paper_html: function() {
    // var content = '<div class="row" id="ads"><div class="col-sm-12">' +
    //   '<a id="papers"></a><div class="panel panel-primary no-height-fix">' +
    //   '<div class="panel-heading"><h3 class="panel-title">Recent Papers using '+
    //   'MESA</h3></div><div class="panel-content">' +
    var content = '<div class="list-group" id="papers-content">\n';
    for (var i = 0; i < KITPPapers.papers.length; i++) {
      var paper = KITPPapers.papers[i];
      content += '  <a href=' + KITPPapers.url(paper) + '>\n';
      content += '    <div class="list-group-item list-group-item-action text-dark">\n';
      content += '      <div class="d-flex w-100 justify-content-between">\n';
      content += '        <h4 class="text-reset">' + paper.title + '</h4>\n';
      var year = paper.pubdate.slice(0,4)
      var month = paper.pubdate.slice(5,7)
      switch (month) {
        case '01':
          month = 'January';
          break
        case '02':
          month = 'February';
          break
        case '03':
          month = 'March';
          break
        case '04':
          month = 'April';
          break
        case '05':
          month = 'May';
          break
        case '06':
          month = 'June';
          break
        case '07':
          month = 'July';
          break
        case '08':
          month = 'August';
          break
        case '09':
          month = 'September';
          break
        case '10':
          month = 'October';
          break
        case '11':
          month = 'November';
          break
        case '12':
          month = 'December';
          break
        default:
          month = month;
      }
      content += '        <small class="text-right">' + month + ' ' + year + '</small>\n';
      content += '      </div>\n';
      content += '      <p class="mb-1">' + KITPPapers.format_authors(paper) + '</p>\n';
      content += '      <small>\n'
      content += '        <span class="text-muted">Published in</span>\n';
      content += '       ' + paper.pub + '\n';
      content += '      </small>\n';
      content += '    </div>\n';
      content += '  </a>\n';
    }
    content += '</div>';
    // content += '<ul></div><a href=#papers><div class="panel-footer ' +
    //   'text-center expandable"><span class="glyphicon glyphicon-chevron-down">'+
    //   '</span></div></a></div></div></div>';
    return $(content)
  },
  add_content: function() {
    $('#ads-content').html(KITPPapers.paper_html());
    // $(Papers.paper_html()).insertAfter('#publications')
  }
};

$( document ).ready(function() {
 //  var bckgrd_options = ['bckgrd-1', 'bckgrd-2', 'bckgrd-3', 'bckgrd-4',
 //                        'bckgrd-5'];
 //  var bckgrd_number = Math.floor(Math.random() * bckgrd_options.length);
 //  var bckgrd_class;
	// var splash = $(".splash");
 //  bckgrd_class = bckgrd_options[bckgrd_number];
 //  splash.toggleClass(bckgrd_class);
  
  // var image_url = $('.' + bckgrd_class).css('background-image'),
  //     image,
  //     width,
  //     height,
      
  // Remove url() or in case of Chrome url("")
  // image_url = image_url.match(/^url\("?(.+?)"?\)$/);
  // if (image_url[1]) {
  //   var speed = 2.0;
  //
  //   image = new Image();
  //   image_url = image_url[1];
    
    // just in case it is not already loaded
    // image.src = image_url;
    //
    // $(image).load(function() {
    //   width = image.width
    //   height = image.height
    //   $(window).scroll(function () {
        // alert("background_width = " + width)
        // var aspect_ratio = splash.width() / width;
        // var scaled_height = aspect_ratio * height;
        // var yPos = -$(window).scrollTop() / speed;
        // var pos = "50% " + yPos + "px";
        // alert("scaled height = " + scaled_height);
        // if (yPos * speed + scaled_height > splash.height()) {
          // alert(yPos + scaled_height + " > " + splash.height())
  //         splash.css('background-position', pos);
  //       };
  //     });
  //
  //   });
  // };
    
  // var dimensions = img_dimensions(bckgrd_class);
  // var background_width = dimensions[0];
  // var background_height = dimensions[1];
  // alert("width = " + background_width + "; height = " + background_height)
  MesaTest.setup();
  Papers.setup();
  KITPPapers.setup();
  Home.setup();
}); 

