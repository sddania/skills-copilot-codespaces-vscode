function skillsMember() {
  var member = this;
  this.skills = ['JavaScript', 'Node.js', 'React'];
  this.addSkill = function(skill) {
    member.skills.push(skill);
  };
}