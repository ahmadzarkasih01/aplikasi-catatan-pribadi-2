import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailpageAction from '../components/DetailpageAction';
import { deleteNote, getNote } from '../utils/local-data';
import DetailpageTitle from '../components/DetailpageTitle';
import DetailpageCreatedAt from '../components/DetailpageCreatedAt';
import DetailpageBody from '../components/DetailpageBody';
import { updateNote } from '../utils/local-data';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveToggleHandler = this.onArchiveToggleHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ note: getNote(this.props.id) });
    }
  }

  onDeleteHandler(id) {
    deleteNote(id);
    console.log(`Catatan dengan ID ${id} telah dihapus.`);

    this.props.navigate('/');
  }

  onArchiveToggleHandler() {
    this.setState(
      (prevState) => {
        const updatedNote = { ...prevState.note, archived: !prevState.note.archived };
        updateNote(updatedNote);
      },
      () => {
        this.props.navigate('/');
      }
    );
  }

  render() {
    const { note } = this.state;

    if (!note) {
      return <p>Catatan tidak ditemukan!</p>;
    }

    return (
      <section className="detail-page">
        {/* Teruskan data ke komponen anak */}
        <DetailpageTitle title={note.title} />
        <DetailpageCreatedAt createdAt={note.createdAt} />
        <DetailpageBody body={note.body} />
        <DetailpageAction id={note.id} archived={note.archived} onDelete={this.onDeleteHandler} onArchiveToggle={this.onArchiveToggleHandler} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};


export default DetailPageWrapper;
