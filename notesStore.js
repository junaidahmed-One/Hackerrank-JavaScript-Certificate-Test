const notes = {
  states: {
    active: [],
    completed: [],
    others: [],
  },
};

class NotesStore {
  addNote(state, name) {
    if (name === null) {
      throw new Error("Name cannot be empty");
    } else if (state === "active") {
      notes.states.active.push(name);
    } else if (state === "completed") {
      notes.states.completed.push(name);
    } else if (state === "others") {
      notes.states.completed.push(name);
    } else if (state !== "active" || state !== "completed") {
      throw new Error(`Invalid state ${state}`);
    }
  }

  getNotes(state) {
    if (state === "active") {
      return notes.states.active;
    } else if (state === "completed") {
      return notes.states.completed;
    } else if (state === "others") {
      return notes.states.others;
    } else if (state !== "active" || state !== "completed") {
      throw new Error(`Invalid state ${state}`);
    }
  }
}

const obj = new NotesStore();

obj.addNote("active", "DrinkTea");
obj.addNote("active", "DrinkCoffe");
obj.addNote("completed", "Study");
console.log(obj.getNotes("active"));
console.log(obj.getNotes("completed"));
