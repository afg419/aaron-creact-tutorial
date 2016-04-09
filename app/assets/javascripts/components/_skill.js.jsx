var Skill = React.createClass({
  getInitialState(){
    return {editable: false};
  },

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

  revealEdit(){
    this.setState({editable: !this.state.editable});
    // console.log("all wired up for edit")
    // console.log(this.props.editInDOM(3))
    // var id = this.props.skill.id;

  },

  submitEdit(){
    var id = this.props.skill.id;
    var name = this.refs.name.value;
    var details = this.refs.details.value;
    var skill = {id: id, name: name, details: details}
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'PUT',
      data: { skill: skill },
      success: () => {
        console.log('you did it');
        this.props.editInDOM(skill);
      }
    });
  },

  render(){
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.skill.name} />
                               : <h3>{this.props.skill.name}</h3>

    var details = this.state.editable ? <textarea type='text' ref='details' defaultValue={this.props.skill.details}></textarea>
                                  : <p>{this.props.skill.details}</p>

    var editButtonText = this.state.editable ? "Never mind!" : "Edit"
    var submitEditButton = this.state.editable ? <button onClick={this.submitEdit}>Submit Edits</button> : ""
    return(
      <div>
        {name}
        <p><strong>Level:</strong> {this.props.skill.level}</p>
        {details}
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.revealEdit}>{editButtonText}</button>
        {submitEditButton}
      </div>
    )
  }
})
