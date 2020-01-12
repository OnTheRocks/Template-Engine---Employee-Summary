function createEngineerCard (data)
{ return `<div class = "col">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h2>${[data.name]}</h2>
        <h3><i class="fas fa-glasses"></i> Engineer</h3>
      </div>
      <ul class="list-group">
        <li class="list-group-item text-left"><b>ID:</b> ${[data.id]}</li>
        <li class="list-group-item text-left"><b>Email:</b> ${[data.email]}</li>
        <li class="list-group-item text-left"><b>GitHub ID:</b> ${[data.github]}</li>
      </ul>
    </div>
  </div>
  <!-- engineer -->
`}

module.exports = createEngineerCard;