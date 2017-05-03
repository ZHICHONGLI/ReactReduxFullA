 var app = angular.module('myApp', []);

 app.controller('loginCtrl', function($scope, $http){
    $scope.loadAlbums = () => {
        $http.get('/albums').success((res) => {
            $scope.albumsList = res;
            console.log($scope.albumsList);
        }).error(res => {
            console.log(res)
        })
    }
    
    $scope.loadAlbums();
    // sign up
    $scope.suName;
    $scope.suPw;

    $scope.signUp = ()=>{
    //    console.log($scope.suName);
    //    console.log($scope.suPw);
    let user = {
        'name': $scope.suName,
        'password': $scope.suPw
    }
        $http.post('/user/signup', user).success(res => {
            console.log(res);
            if (res == 'duplicate'){
                $scope.userDuplicate = true;
            }else{
                $scope.userDuplicate = false;
            }
        }).error(err => console.log(err));
        $scope.suPw = '';
        //console.log(user);
    }
    // sign in
    $scope.siName;
    $scope.siPw;
    $scope.signIn = ()=>{
        let user = {
            'name': $scope.siName,
            'password': $scope.siPw
        }
        $http.post('/user/signin',user).success(res => {
            console.log(res);
            if (res == 'wrongpw'){
                $scope.loginInvalid = true
            }else{
                $scope.loginInvalid = false
            }
        }).error(err => console.log(err));
        $scope.siPw = '';
    }

    $scope.getSession = () => {
        $http.get('/user/getsession').success(res => {
            console.log(res);
        }).error(err => console.log(err));
    }

    $scope.logOut = () => {
        $http.get('/user/logout').success(res => {
            console.log(res);
        }).error(err => console.log(err));
    }

 })
