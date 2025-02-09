import React from 'react';
import PropTypes from 'prop-types';

class AddnewpageAction extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote();
  }

  render() {
    return (
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Simpan"
          onClick={this.onSubmitEventHandler}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
          </svg>
        </button>
      </div>
    );
  }
}

AddnewpageAction.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default AddnewpageAction;