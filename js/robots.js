//assign two variables: directions and robots,
var directions = '^^VV<>';
var robots = 'robbie, jane, bob';
//create a main function to deliver presents
function robotMain(){
     var robotsObj=[];//this array will later include arrays of robot names, and x y coordinates  
     var robotsArr = robots.split(',');//split the string of robots to keep track of how many robots in the string and then add the robots names into an arry
    // looping through the robots names to later push them into a multidimensional array 
    for (i = 0; i < robotsArr.length; i++){
        var arr = [];
        //create a list of objects that are going to be robots
        arr.push(robotsArr[i]);//
        arr.push(0);//x-coordinate
        arr.push(0);//y-coordinate
        robotsObj.push(arr);//push the new array of robots and coordinates into robotsObj
    }
    
  //convert directions string into an array using the split function
  var directionsArr = directions.split('');
  //run a loop to assign directions to each robot
  var robotCount = 0;//keeping track of the position of the robot in the command key
  var deliveredHouses = [[0,0]]; // start position to all robots
    
  for (var i = 0; i < directionsArr.length; i++){
     robotsObj[robotCount]= convertDirection(directionsArr[i], robotsObj[robotCount]);
     console.log(robotsObj[robotCount][0]);
     console.log(directionsArr[i]);//spit out through directionsArr
     console.log(robotsObj[robotCount][1] + "," + robotsObj[robotCount][2]);//spit out both coordinates
      var temp = [];
      temp.push(robotsObj[robotCount][1]);//
      temp.push(robotsObj[robotCount][2]);//
      var hasBeenDelivered = false;
      for(j=0; j < deliveredHouses.length; j++){//go through all of the delivered house to see if someone has been there already
        if (temp[0] == deliveredHouses[j][0] && temp[1] == deliveredHouses[j][1]){//comparing both values if match then someone has been there
            hasBeenDelivered = true;
        }
      
     }
      if (hasBeenDelivered == false){
          deliveredHouses.push(temp);
      }else{
          console.log("someone has been there already");
      }
     robotCount++;
     if(robotCount > robotsArr.length-1){
      robotCount = 0;
    }
  }
    
    
}

//translating the direction characters into a value and either increases or decreases the value by 1
function convertDirection(direction, robot){
    if(direction == '^'){
        robot[2] = robot[2]+1;  //increase y value by 1
    }else if(direction == 'V' || direction == 'v'){
        robot[2]= robot[2]-1; //decrease y value by 1
    }else if(direction == '>'){
        robot[1] = robot[1]+1; //increase x value by 1
    }else if(direction == '<'){
          robot[1] = robot[1]-1;//decrease y value by 1
}else{
        console.log('Not a valid direction');
    };
return (robot);
};
robotMain();

