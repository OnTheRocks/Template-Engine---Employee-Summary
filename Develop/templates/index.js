function createMainHTML (profiles)
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

.jumbotron img {
 float: left;
 width: 250px;
 height: 250px;
 border-radius: 50%;
 object-fit: cover;
 margin-top: -80px;
 border: 4px solid black;
 box-shadow: rgba(0, 0, 0, .5) 5px 1px 20px 4px;
 /* text-align: center; */
}

.container {
 width: 100%;
 text-align: left;
 padding: 20px 0 0 0;
}

.link {
 display: inline-block;
 margin: 5px 10px 0px 10px;
}

.card {
 margin: 15px;
 border: thin #00c851 solid;
 box-shadow: #00c851 1px 1px 5px 1px;
 background-color: #bae0b8;      
}

.nameBlock {
 text-align: center;
}

.card-title {
 text-align: center;
} 

a, a:hover {
 text-decoration: none;
 color: inherit;
}

.nameBlock {
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

module.exports = createMainHTML;