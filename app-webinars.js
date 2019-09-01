var app = angular.module("MyApp", []);

app.config(function($compileProvider){ // Remove unsafe link from javascript:void();
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
});

app.controller("MyCtrl", function($scope) {

    $scope.options =['webinarTitle', 'category', 'date']; // Sorting options
    $scope.webinars = [
        {
            webinarTitle: "",
            category: "",
			"date": new Date(2018, 8, 18),
            description: "",
            purchaseLink: "",
            downloadLink: "",
            speakerid: "",
            img: "",
            firstname: "",
            lastname: "",
            speakerTitle: "",
            company: "",
            bio: "",
            speaker2display: "",
        },
  ];

  $scope.filterFunction = function(element) {
		return element.name.match(/^Ma/) ? true : false;
  };
  
  $scope.setOrder = function(val) {
		if(val != null) {
			return val;
		}
		else 
			return 'category';
  };

});