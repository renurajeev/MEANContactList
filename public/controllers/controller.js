var myApp = angular.module('myApp', []); myApp.controller('AppCtrl',['$scope','$http',function($scope, $http) { 
    console.log("Hello World from controller");
var refresh=function(){

$http.get('/contactlist').success(function(response){
console.log("Got the data requested");
$scope.contactlist=response;
$scope.contact="";



});
};
refresh();

$scope.addContact=function(){
console.log($scope.contact);
$http.post('/contactlist',$scope.contact).success(function(response){
console.log(response);
refresh();
});



};


/*person1={
name:'renuka',
email:'renuka@example.com',
number:'(111)111-1111'
};

person2={
name:'rajeev',
email:'rajeev@example.com',
number:'(222)333-3333'
};

person3={
name:'omna',
email:'omna@example.com',
number:'(333)333-3333'
};*
 var contactlist=[person1,person2,person3];
$scope.contactlist=contactlist;*/
}
]);
