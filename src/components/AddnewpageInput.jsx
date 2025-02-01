import React from "react";
import AddnewpageInputTitle from "./AddnewpageInputTitle";
import AddnewpageInputBody from "./AddnewpageInputBody";

class AddnewpageInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
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

  onBodyChangeEventHandler(event) {
    const newBody = event.target.innerText; // Gunakan innerText, bukan innerHTML
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
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
      </div>
    );
  }
}

export default AddnewpageInput;