








var data=[
		{id:1,
		 title:"新列表1",
		 color:"#C970E3",
         todo:[

            {t:"中午演讲",
              done:false
            },
            {t:"中午演讲",
              done:false
            },
            {t:"中午演讲",
              done:false
            },
            {t:"下午演讲",
             done:true
        		}
         
         ] 
		},
		{id:2,
		 title:"新列表2",
		 color:"#6CDC30",
         todo:[

            {t:"中午演讲",
              done:false
            },
            {t:"xie午演讲",
              done:false
            },
            {t:"中午演讲",
              done:false
            },
            {t:"下午演讲",
             done:true
        		}
         
         ]
         
		}

]


var color=['#C970E3','#6CDC30','#3FACF9','#F3CC00','#9F855C','#F82368','#FA9600']

var app=angular.module("app",[]);

app.controller("c",function($scope){
      $scope.data=data;
      $scope.index=0;
      $scope.color=color;
      $scope.lefts=function(i){
          $scope.index=i;
      }
       $scope.show=false;
      $scope.xuan=function(){
         $scope.changetitle=$scope.data[$scope.index].title;
         $scope.changecolor=$scope.data[$scope.index].color;
      	$scope.show=!$scope.show;

      }
      $scope.add=function(){
      	var len=$scope.data.length+1;
      	// $scope.index=0;
      	$scope.data.push({
      		id:len,
      		title:"新列表"+len,
      		color:$scope.color[($scope.data.length)%7],
      		todo:[]
      	})
      	$scope.index=$scope.data.length-1;
      }
      $scope.finish=function(){
           $scope.data[$scope.index].title=$scope.changetitle;
           $scope.show=false;
          $scope.data[$scope.index].color=$scope.changecolor;
      }
      $scope.del=function(){
      	$scope.data.splice($scope.index,1);
      	 $scope.show=false;
      	 $scope.index=0;
      }
      $scope.colorclick=function(v){
         $scope.changecolor=v;
      }
      $scope.adds=function(){
      	$scope.data[$scope.index].todo.push(
      		{
      			t:"",
      			done:false
      		}
      		)

      	
      }
      $scope.save=function(ev,v){
          v.t=ev.target.innerText;
          console.log(v.t)    
      }

      $scope.huoqu=function(){
         $scope.style.borderColor=$scope.data[$scope.index].color;
      }
      $scope.tiao=function(v){
            console.log(v)
           v.done=true;
     }
      $scope.down=function(v){
           v.done=false;
     }

       $scope.shows=false;
     $scope.cdown=function(){
         $scope.shows=!$scope.shows;
     }
         $scope.showss=false;
 


})
