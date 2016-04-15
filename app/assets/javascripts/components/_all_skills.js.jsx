var AllSkills = React.createClass({
    render(){
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <Skill skill={skill} removeFromDOM={this.props.removeFromDOM} editInDOM={this.props.editInDOM}/>
        </div>
      );
    });

    return(
     <div>
       {skills}
     </div>
   );
  }
});
