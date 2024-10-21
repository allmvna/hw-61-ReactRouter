import React, { useEffect, useState } from "react";

interface Props {
  id: string;
  title: string;
}

const Notebook = () => {
  const [notes, setNotes] = useState<Props[]>(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [newTitle, setNewTitle] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim() === "") return;

    const newNote = {
      id: String(new Date().getTime()),
      title: newTitle,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setNewTitle("");
  };

  const deleteNote = (id: string): void => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const updateNote = (id: string, newTitle: string): void => {
    if (newTitle.trim() === "") {
      alert("Запись не может быть пустой!");
      return;
    }

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: newTitle } : note,
      ),
    );
  };

  return (
    <>
      <h4>Блокнот</h4>
      <div className="container">
        <form className="mt-3 d-flex" onSubmit={addNote}>
          <input
            value={newTitle}
            type="text"
            placeholder="Напиши что-нибудь"
            className="form-control me-2"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </form>
        <h5 className="mt-4">Записи:</h5>
        <hr />
        <div>
          {notes.length === 0 ? (
            <p>Нет записей</p>
          ) : (
            notes.map((note) => (
              <div key={note.id} className="d-flex align-items-center mb-2">
                <input
                  type="text"
                  value={note.title}
                  className="form-control me-2"
                  onChange={(e) => updateNote(note.id, e.target.value)}
                  onBlur={() => updateNote(note.id, note.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateNote(note.id, note.title);
                    }
                  }}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => deleteNote(note.id)}
                >
                  Удалить
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Notebook;
