import React, { useState } from "react";
import AddnewpageInput from "../components/AddnewpageInput";
import AddnewpageAction from "../components/AddnewpageAction";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: "", body: "" });

  // Handler untuk menyimpan catatan
  const onAddNoteHandler = () => {
    if (note.title.trim() === "" || note.body.trim() === "") {
      alert("Judul dan isi catatan tidak boleh kosong!");
      return;
    }
    addNote(note); // Simpan catatan
    navigate("/"); // Navigasi ke halaman utama
  };

  // Handler untuk mengupdate state note
  const onNoteChangeHandler = (newNote) => {
    setNote(newNote);
  };

  return (
    <section className="add-new-page">
      <AddnewpageInput onNoteChange={onNoteChangeHandler} />
      <AddnewpageAction addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;