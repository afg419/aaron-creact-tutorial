var Skill = React.createClass({
  handleDelete(){
    var id = this.props.skill.id;
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'DELETE',
      success: () => {
        this.props.removeFromDOM(id);
      }
    });
  },

  render(){
    return(
      <div>
        <h3>{this.props.skill.name}</h3>
        <p><strong>Level:</strong> {this.props.skill.level}</p>
        <p>{this.props.skill.details}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
})
