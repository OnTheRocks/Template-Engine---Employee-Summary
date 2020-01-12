function CreateManagerHTML (data)
{ 
  //console.log("dataWithinFunction: " + JSON.stringify(data));
  //console.log("templateWithinFunction: " + `${[data.name]}`);
  return `<div class = "col">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h2>${[data.name]}</h2>
        <h3><i class="fas fa-mug-hot"></i> Manager</h3>
      </div>
      <ul class="list-group">
        <li class="list-group-item text-left"><b>ID:</b> ${[data.id]}</li>
        <li class="list-group-item text-left"><b>Email:</b> ${[data.email]}</li>
        <li class="list-group-item text-left"><b>Office ID:</b> ${[data.officeNumber]}</li>
      </ul>
    </div>
  </div>
  <!-- manager -->
`}

module.exports = CreateManagerHTML;