var Body = React.createClass({
  getInitialState(){
    return {skills: []};
  },

  componentDidMount(){
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  handleSubmit(skill){
    var newState = [skill].concat(this.state.skills);
    this.setState({ skills: newState })
  },

  removeFromDOM(id){
    var newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });

   this.setState({ skills: newSkills });
  },

  render(){
    return(
      <div>
        <h1>Body</h1>
        <NewSkill handleSubmit={this.handleSubmit}/>
        <AllSkills skills={this.state.skills} removeFromDOM={this.removeFromDOM}/>
      </div>
    )
  }
})
