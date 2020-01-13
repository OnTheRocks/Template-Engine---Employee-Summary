function MainHTML (profiles)
{ return `<!DOCTYPE html>
<html lang="en">
<head>
  <script type="text/javascript" src="./generateHTML.js"></script>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
  <title>The Team</title>
</head>
<style type="text/css">

body {
 background-image: url("../../Assets/images/cubes.png");
}

.container-lg {

 border: thin #00c851 solid;
 box-shadow: #00c851 1px 1px 5px 1px;
 margin-top: 50px;
 background-color: #bae0b8;

}

.jumbotron {
 margin-top: 32px;
 border: thin #00c851 solid;
 box-shadow: #00c851 1px 1px 5px 1px;
 background-image: url("../../Assets/images/cubes.png");
}

.card {
 margin: 15px;
 border: thin #00c851 solid;
 box-shadow: #00c851 1px 1px 5px 1px;
 background-color: #bae0b8;      
}

.card-title {
 text-align: center;
} 

.nameBlock {
  text-align: center;
  margin-left: 80px;
  margin-right: 11px;
 }
 
</style>

<body>
  <div class="container-lg col-md-8 offset-md-2">
  <div class="jumbotron col-md-12 offset-md-0">
    <div class = "nameBlock">
      <h1 class="display-4">The Team!</h1>
    </div>
  <br>
  <br>      
  <hr class="my-4">      
    <div class="row justify-content-lg-center ">
        ${profiles.map(function (item) 
          {
            return item;
          }).join('')}
    </div>
  </div>
  </div>
</body>
</html>
`
}

module.exports = mainHTML;