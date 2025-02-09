import React from 'react';
import AddnewpageInputTitle from './AddnewpageInputTitle';
import AddnewpageInputBody from './AddnewpageInputBody';
import PropTypes from 'prop-types';

class AddnewpageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;
    this.setState({ title: newTitle }, () => {
      this.props.onNoteChange(this.state);
    });
  }

  onBodyChangeEventHandler(newBody) {
    this.setState({ body: newBody }, () => {
      this.props.onNoteChange(this.state);
    });
  }

  render() {
    return (
      <div className="add-new-page__input">
        <AddnewpageInputTitle
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <AddnewpageInputBody
          body={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
      </div>
    );
  }
}

AddnewpageInput.propTypes = {
  onNoteChange: PropTypes.func.isRequired
};

export default AddnewpageInput;