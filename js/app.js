var app=angular.module("MyApp",[]);
app.controller("NeContro",["$scope",function($scope){
var words=["cat","mat","bat","rat","deep","goal","kill","hen"];
$scope.incorrectLetterChosen=[];
$scope.correctLetterChosen=[];
$scope.guesses=6;
$scope.displayWord="";
$scope.input={
letter :""
}
var selectRandomWord=function(){
    var index= Math.round(Math.random() * words.length);
    return words[index];
}
var newGame = function () {
    $scope.incorrectLetterChosen=[];
    $scope.correctLetterChosen=[];
    $scope.guesses=6;
    $scope.displayWord="";
    selectedWord=selectRandomWord();
    var tempDisplayWord="";
    for(var i=0;i<selectedWord.length;i++){
        tempDisplayWord+='*';
    }
    $scope.displayWord=tempDisplayWord;
}
$scope.letterChosen=function(){
    for(var i=0;i<$scope.correctLetterChosen.length;i++){
        if($scope.correctLetterChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
            $scope.input.letter="";
            return ;
        }
    }
    for(var i=0;i<$scope.incorrectLetterChosen.length;i++){
        if($scope.incorrectLetterChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
            $scope.input.letter="";
            return ;
        }
    }
    var correct=false;
    for (var i = 0; i < selectedWord.length; i++) {
        if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
            $scope.displayWord=$scope.displayWord.slice(0,i) + $scope.input.letter.toLowerCase() +$scope.displayWord.slice(i+1);
            correct=true;
        }
        
    }
    if(correct){
        $scope.correctLetterChosen.push($scope.input.letter.toLowerCase());
        $('.correct').animate(
            {
                'top': '200px'
            }, 750, function() {
                $('.correct').animate({
                    'top' : "-10px"
            }, 700)
                    });
        console.log("correct"+$scope.correctLetterChosen);
    }
    else{
        $scope.guesses-=1;
        $scope.incorrectLetterChosen.push($scope.input.letter.toLowerCase());
        $('.incorrect').animate(
            {
                'top': '200px'
            }, 750, function() {
                $('.incorrect').animate({
                    'top' : "-10px"
            }, 700)
                    });
        console.log("incoreect"+$scope.incorrectLetterChosen);
    }
    $scope.input.letter='';
    if($scope.guesses==0){
        alert("you lost");
    }
    if($scope.displayWord.indexOf("*")==-1){
        alert("you won");
    }
}
newGame();
}]);