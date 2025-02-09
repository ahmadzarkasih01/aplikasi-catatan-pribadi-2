import React from 'react';
import DeleteBtn from './DeleteBtn';
import ArchiveButton from './ArchiveButton';
import PropTypes from 'prop-types';

function DetailpageAction({ id, archived, onDelete = () => {}, onArchiveToggle }) {
  if (!id) {
    console.warn('DetailpageAction: ID tidak diberikan, tombol hapus mungkin tidak berfungsi.');
  }

  return (
    <div className="detail-page__action">
      <ArchiveButton id={id} archived={archived} onArchiveToggle={onArchiveToggle} />
      <DeleteBtn id={id} onDelete={onDelete} />
    </div>
  );
}

DetailpageAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onArchiveToggle: PropTypes.func.isRequired
};

export default DetailpageAction;
