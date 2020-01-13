function InternCard (data)
{ return ` <div class="card card-title" style="width: 20rem;">
  <div class="card-title card-body">
    <h2>${[data.name]}</h2>
    <h3><i class="fas fa-graduation-cap"></i> Intern</h3>
  </div>
    <ul class="list-group">
      <li class="list-group-item text-left"><b>ID:</b> ${[data.id]}</li>
      <li class="list-group-item text-left"><b>Email:</b> ${[data.email]}</li>
      <li class="list-group-item text-left"><b>School:</b> ${[data.school]}</li>
    </ul>
  </div>
`}

module.exports = InternCard;